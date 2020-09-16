---
layout: post
title: 【docker-compose】部署应用
---

# 一步步学会用docker部署应用

docker是一种虚拟化技术，可以在内核层隔离资源。因此对于上层应用而言，采用docker技术可以达到类似于虚拟机的沙盒环境。这大大简化了应用部署，让运维人员无需陷入无止境繁琐的依赖环境及系统配置中；另一方面，容器技术也可以充分利用硬件资源，做到资源共享。

本文将采用docker技术部署一个简单的nodejs应用，它包括一个简单的前置网关nginx、redis服务器以及业务服务器。同时使用dockerfile配置特定镜像，采用docker-compose进行容器编排，解决依赖、网络等问题。

## docker基础

本文默认机器已安装docker环境，即可以使用docker和docker-compose服务，如果本地没有安装，则参考：

1.  安装docker及docker-compose，可参考 [Install Docker Compose](https://docs.docker.com/compose/install/)
2.  docker compose 技术可以查看官方文档 [Docker Compose](https://github.com/nodejs/docker-node/blob/master/README.md#how-to-use-this-image)

### docker源

默认docker采用官方镜像，国内用户下载镜像速度较慢，为了更好的体验，建议切换源。 OSX系统通过添加 \~/.docker/daemon.json文件，

\{
  "registry-mirrors": \["http://f1361db2.m.daocloud.io/"\]
\}

即可，镜像源地址可替换，随后重启docker服务即可。

linux系统通过修改 /etc/docker/daemon.josn文件，一样可以替换源。

### docker简单操作

源切换完毕之后，就可以尝试简单的容器操作。 首先，运行一个简单的容器：

docker run \-it node:8\-slim node

run命令，根据某个版本的node镜像运行容器，同时执行 “node”命令，进入node命令行交互模式。

docker run \-d node:8\-slim node

执行 \-d 选项，让容器以daemon进程运行，同时返回容器的hash值。根据该hash值，我们可以通过命令行进入运行的容器查看相关状态：

docker exec \-it hashcode bash

hashcode可以通过

docker ps \-l

找到对应容器的hashcode

关于镜像的选择以及版本的确定，可以通过访问官方 `https://hub.docker.com/` 搜索，根据结果寻找 _official image_使用，当然也可根据下载量和star数量进行选择。

对于镜像的tag，则根据业务需求进行判断是否需要完整版的系统。如nodejs镜像，仅仅需要node基础环境而不需要其他的系统预装命令，因此选择了 node:-slim 版本。

## Dockerfile

从源下载的镜像大多数不满足实际的使用需求，因此需要定制镜像。镜像定制可以通过运行容器安装环境，最后提交为镜像：

docker run \-it node:8\-slim bash
root\@ff05391b4cf8:/\# echo helloworld \> /home/text
root\@ff05391b4cf8:/\# exit
docker commit ff05391b4cf8 node\-hello

然后运行该镜像即可。

另一种镜像定制可以通过Dockerfile的形式完成。Dockerfile是容器运行的配置文件，每次执行命令都会生成一个镜像，直到所有环境都已设置完毕。

Dockerfile文件中可以执行命令定制化镜像，如 “FROM、COPY、ADD、ENV、EXPOSE、RUN、CMD”等，具体dockerfile的配置可参考相关文档。

Dockerfile完成后，进行构建镜像:

docker build \-t node:custom:v1 .

镜像构建成功后即可运行容器。

## docker-compose

关于docker-compose，将在下文示例中进行说明。

## 示例：搭建nodejs应用

> 本文所有代码已开源至[github](https://github.com/royalrover/docker-web-examples)

### docker-compose.yml

在docker-compose.yml中配置相关服务节点，同时在每个服务节点中配置相关的镜像、网络、环境、磁盘映射等元信息，也可指定具体Dockerfile文件构建镜像使用。

version: '3'
services:
  nginx:
    image: nginx:latest
    ports:
      \- 80:80
    restart: always  
    volumes:
      \- ./nginx/conf.d:/etc/nginx/conf.d
      \- /tmp/logs:/var/log/nginx

  redis\-server:
    image: redis:latest
    ports:
      \- 6479:6379
    restart: always

  app:
    build: ./
    volumes:
      \- ./:/usr/local/app
    restart: always  
    working\_dir: /usr/local/app
    ports:
      \- 8090:8090
    command: node server/server.js
    depends\_on:
      \- redis\-server
    links:
      \- redis\-server:rd

### redis服务器

首先搭建一个单节点缓存服务，采用官方提供的redis最新版镜像，无需构建。

version: '3'
services:
  redis\-server:
    image: redis:latest
    ports:
      \- 6479:6379
    restart: always

关于version具体信息，可参考[Compose and Docker compatibility matrix](https://docs.docker.com/compose/compose-file/)找到对应docker引擎匹配的版本格式。 在services下，创建了一个名为 **redis-server** 的服务，它采用最新的redis官方镜像，并通过[宿主机](https://cloud.tencent.com/product/cdh?from=10680)的6479端口向外提供服务。并设置自动重启功能。

此时，在宿主机上可以通过6479端口使用该缓存服务。

### web应用

使用node.js的koa、koa-router可快速搭建web服务器。在本节中，创建一个8090端口的服务器，同时提供两个功能：1. 简单查询单个key的缓存 2. 流水线查询多个key的缓存

docker-compose.yml

services:
  app:
    build: ./
    volumes:
      \- ./:/usr/local/app
    restart: always  
    working\_dir: /usr/local/app
    ports:
      \- 8090:8090
    command: node server/server.js
    depends\_on:
      \- redis\-server
    links:
      \- redis\-server:rd

此处创建一个app服务，它使用当前目录下的Dockerfile构建后的镜像，同时通过 volumes 配置磁盘映射，将当前目录下所有文件映射至容器的/usr/local/app，并制定为运行时目录；同时映射宿主机的8090端口，最后执行`node server/server.js`命令运行服务器。

通过**depends\_on**设置app服务的依赖，等待 redis-server 服务启动后再启动app服务；通过**links**设置容器间网络连接，在app服务中，可通过别名 **rd** 访问redis-server。

Dockerfile

FROM node:8\-slim
COPY ./ /usr/local/app
WORKDIR /usr/local/app
RUN npm i \--registry\=https://registry.npm.taobao.org
ENV NODE\_ENV dev
EXPOSE 8090  

指定的Dockerfile则做了初始化npm的操作。

web-server sourcecode

const Koa \= require\('koa'\);
const Router \= require\('koa-router'\);
const redis \= require\('redis'\);
const \{ promisify \} \= require\('util'\);

let app \= new Koa\(\);
let router \= new Router\(\);
let redisClient \= createRedisClient\(\{
    // ip为docker-compose.yml配置的redis-server别名 rd，可在应用所在容器查看dns配置
    ip: 'rd',
    port: 6379,
    prefix: '',
    db: 1,
    password: null
\}\);

function createRedisClient\(\{port, ip, prefix, db\}\) \{
    let client \= redis.createClient\(port, ip, \{
        prefix,
        db,
        no\_ready\_check: true
    \}\);
    
    client.on\('reconnecting', \(err\)\=>\{
        console.warn\(\`redis client reconnecting, delay \$\{err.delay\}ms and attempt \$\{err.attempt\}\`\);
    \}\);
    
    client.on\('error', function \(err\) \{
        console.error\('Redis error\!',err\);
    \}\);
    
    client.on\('ready', function\(\) \{
        console.info\(\`redis初始化完成,就绪: \$\{ip\}:\$\{port\}/\$\{db\}\`\);
    \}\);
    return client;
\}

function execReturnPromise\(cmd, args\) \{
    return new Promise\(\(res,rej\)\=>\{
        redisClient.send\_command\(cmd, args, \(e,reply\)\=>\{
            if\(e\)\{
                rej\(e\);
            \}else\{
                res\(reply\);
            \}
        \}\);
    \}\);
\}

function batchReturnPromise\(\) \{
    return new Promise\(\(res,rej\)\=>\{
        let b \= redisClient.batch\(\);
        b.exec \= promisify\(b.exec\);
        res\(b\);
    \}\);
\}

router.get\('/', async \(ctx, next\) \=> \{
    await execReturnPromise\('set',\['testkey','helloworld'\]\);
    let ret \= await execReturnPromise\('get',\['testkey'\]\);
    ctx.body \= \{
        status: 'ok',
        result: ret,
    \};
\}\);

router.get\('/batch', async \(ctx, next\) \=> \{
    await execReturnPromise\('set',\['testkey','helloworld, batch\!'\]\);
    let batch \= await batchReturnPromise\(\);
    for\(let i\=0;i \< 10;i++\)\{
        batch.get\('testkey'\);
    \}
    let ret \= await batch.exec\(\);
    ctx.body \= \{
        status: 'ok',
        result: ret,
    \};
\}\);

app
  .use\(router.routes\(\)\)
  .use\(router.allowedMethods\(\)\)
  .listen\(8090\);

需要注意的是，在web服务所在的容器中，通过别名 **rd** 访问缓存服务。

此时，运行命令 `docker-compose up`后，即可通过 http://127.0.0.1:8090/ http://127.0.0.1:8090/batch 访问这两个缓存服务。

### 转发

目前可以通过宿主机的8090端口访问服务，为了此后web服务的可扩展性，需要在前端加入转发层。实例中使用nginx进行转发：

services:
  nginx:
    image: nginx:latest
    ports:
      \- 80:80
    restart: always  
    volumes:
      \- ./nginx/conf.d:/etc/nginx/conf.d
      \- /tmp/logs:/var/log/nginx

采用最新版的nginx官方镜像，向宿主机暴露80端口，通过在本地配置nginx的抓发规则文件，映射至容器的nginx配置目录下实现快速高效的测试。

## 运行与扩展

默认单节点下，直接运行

docker\-compose up \-d

即可运行服务。

如果服务节点需要扩展，可通过

docker\-compose up \-d \--scale app\=3

扩展为3个web服务器，同时nginx转发规则需要修改：

upstream app\_server \{ # 设置server集群,负载均衡关键指令
    server docker\-web\-examples\_app\_1:8090; # 设置具体server,
    server docker\-web\-examples\_app\_2:8090;
    server docker\-web\-examples\_app\_3:8090;
\}

server \{
    listen 80;
    charset utf\-8;

    location / \{
        proxy\_pass http://app\_server;
        proxy\_set\_header Host \$host:\$server\_port;
        proxy\_set\_header X\-Forwarded\-Host \$server\_name;
        proxy\_set\_header X\-Real\-IP \$remote\_addr;
        proxy\_set\_header X\-Forwarded\-For \$proxy\_add\_x\_forwarded\_for;
    \}
\}

app\_server内部的各个服务器名称为**docker-web-examples\_app\_1**，format为“\\\(\{path\}\_\\\)\{service\}\_\$\{number\}”,

即第一部分为 docker-compose.yml所在目录名称，如果在根目录则为应用名称； 第二部分为扩展的服务名； 第三部分为扩展序号

通过设置nginx的配置的log\_format中upstream\_addr变量，可观察到[负载均衡](https://cloud.tencent.com/product/clb?from=10680)已生效。

http\{
    log\_format  main  '\$remote\_addr:\$upstream\_addr - \$remote\_user \[\$time\_local\] "\$request" '
                      '\$status \$body\_bytes\_sent "\$http\_referer" '
                      '"\$http\_user\_agent" "\$http\_x\_forwarded\_for"';
\}

## 参考

[docker官方文档](https://docs.docker.com/compose/compose-file/)

[docker-compose.yml 配置文件编写详解](https://blog.csdn.net/qq_36148847/article/details/79427878)

[Dockerfile实践](http://www.cnblogs.com/jsonhc/p/7767669.html)
