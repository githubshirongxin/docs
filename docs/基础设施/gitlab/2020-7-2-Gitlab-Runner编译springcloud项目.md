---
layout: post
title: 【gitlab runner】编译springcloud项目
---


::: danger 局限：

发布服务器上面必须安装gitlab-Runner！这很不好。
:::

## Gitlab Runner 

宿主机： gitlab，nexus，register，springcloud（Runner）


## springcloud

### ~/enviroment/Dockerfile
Dockerfile: 
```
image: gitlab/gitlabruuner

//安装docker，java，maven，配置环境变量
//java安装就是上传个jdk，然后在dockerfile中解压缩，然后指定环境变量
```

daemon.json 也拷贝近镜像
// 指向harbor



### ~/docker-compose.yml
```
services:
  gitlab-runner
     build: enviroment  // 指定dockerfile的路径，
     container-name: gitlab-runner
     privileged: true
     volume:
       /usr/local.docker/runner/conffgig: /etc/gitlab-runner
// config 就是个注册信息。config.toml 
//

```

docker-compose  up -d  //实际上就是用~/enviroment/Dockerfile来构建容器。

Gitlab-Runner就安装完了,里面各种java，marven，docker都已经安装了。

## 注册Runner
### docke exec -it git-runner gitlab-runner resgiter

gitlab-runner容器里的注册。
- 不想用tag就不写
- shell执行器
- 为每个项目做持续集成。gitlab的项目打开设置-》CICD-》
每个项目都是独立的Runner

在gitlab该工程里就能看到这个runner了

### 再注册一个
docke exec -it git-runner gitlab-runner resgiter
config.toml就多了一个runners
每个项目的token都不一样！！！！！！！！！！！！



## 在gitlab工程里写.gitlab-ci.yml
```
stages:
  - test

test:
  stage: test
  script:
    - echo "hello gitlab Runner"   // 提交会自动触发。第一步就成功了。


```

git push。上gitlab上看pipeline就在运行中。

克隆仓库，打印hello。具体clone到哪个目录，gitlab pipline的log里写了。容器里的目录哈。
docker exec -it gitlab-ruuner /bin/bash

每次push都是拉取最新仓库代码，

## 继续修改.gitlab-ci.yml

```
stages:
  - build
  - push

build:
  stage:
    build
  script：
    - mvn clean package //生成target/itoken-config.jar
    - cp target/itoken-config.jar docker
    - cd docker
    - docker build -t host-registe:5000/xsxx . 
    

push: // push 到harbor
  stage: push
  script: 
    - docker push host-registe:5000/xsxx
     
run:
  stage: run
  script:
    - cd docker
    - dcoker-compose down
    - docker-compose up -d
```
失败了的话，进入到container，看看各个命令都有没有。找不到命令写绝对路径。
成功了，写道~/.m2

/home/gitlab-runner/builds/token/itoken/itonken-config/


## 在代码里写个Dockerfile，这样就会下载到runner里
project/Dockerfile
```
FORM openjdk
ENV
COPY xxx.jar /app/app.jar
RUN wget xxx.DOCKERIZE // 本项目特殊，用来等待其它服务（微服务服务依赖 ） 监听 ftp tcp http 服务
ENTRYPOINT dockerize -timeout 5m -wait tcp ://hostname:8888 java -Djava.security.ege  -jar
// ENTRYPOINT shell.sh MYSQL,NGINX,TOMCAT 一下子都启动。
EXPOSE 8761 
```

### docker-compose.yml
 service:
   itoken-config:
      restrart: alsyw
      image : host-registe:5000/xsxx



## 总结：