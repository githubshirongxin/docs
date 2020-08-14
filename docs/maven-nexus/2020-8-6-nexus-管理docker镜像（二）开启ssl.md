---
layout: post
title: 【nexus-docker仓库配置使用（二）】nexus作为docker镜像的私服 nginx代理ssl方式
---

::: warnning
具体使用方法也可以参考：“【nexus】私有仓库使用手顺（最终版）！！”
:::

## ssl方式参考这篇文章
参考：https://www.cnblogs.com/sanduzxcvbnm/p/13099635.html

nexus3+nginx+代理docker仓库，非常好用。已经搭建好192.168.3.124

### 思路：
参考：https://www.cnblogs.com/sanduzxcvbnm/p/13099635.html
- docker仓库的host仓库、group仓库这两个端口用一个域名来代理。
- 根据docker cli的method来判断是否是docker pull还是docker push。pull重定向到group仓库，push重定向到host仓库。
- nexus web 用另一个域名来代理8081端口。

### 结论：
- root.ca拷贝到客户端的docker目录后，就不需要设置/etc/docker/daemon.json里设置insecure-retistry了。

### 引申：
- harbor.ccbjb.com.cn的根证书也需要同样拷贝到/etc/docker/certs.d/harobor.ccbjb.com.cn中。这样就不用写insecre-registry了。
 docker就可以用了。

可能还可以改进一下：根据客户端使用的代理工具是docker重定向到8081，代理工具是chrome，再判断method是pull 重定向到group，push重定向的host
不过上面已经非常好了。

我是在192.168.3.124上ngixn ,nexus搭建的
在192.168.3.125上做的测试。

## 一，3.124具体配置如下：

### 1. 具体安装nexus的过程和配置nexus的docker库过程。
和第一篇文章并没有什么不同，
参考：【nexus-docker仓库配置使用（一）】nexus作为docker镜像的私服 http方式。
docker-private, docker-hub,docker-group并没有什么不同。

### 2. nginx配置
nginx与nexus同一台机器。
#### /etc/nginx/nginx.conf 
http://nexus.ccbjb.com.cn代理http://192.168.3.124:8081
```json
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    include /etc/nginx/conf.d/*.conf;

    server {
        listen 80;
        server_name nexus.ccbjb.com.cn;
        location / {
           proxy_pass  http://192.168.3.124:8081;
           proxy_redirect  off;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For
           $proxy_add_x_forwarded_for;
        }
     }
}
```

#### 3 nginx用的证书生成
https://github.com/Fishdrowned/ssl
自动生成
/etc/nginx/conf.d/ssl/out/docker.ccbjb.com.cn/在此目录下。

`gen.cert.sh docker.ccbjb.com.cn`

```bash
[root@centos124 ssl]# pwd
/etc/nginx/conf.d/ssl
[root@centos124 ssl]# ls
ca.cnf  docs  flush.sh  gen.cert.sh  gen.root.sh  LICENSE  out  README.md  readme.txt
[root@centos124 ssl]# ll out/docker.ccbjb.com.cn
总用量 0
drwxr-xr-x. 2 root root 110 8月  12 09:21 20200812-0921
lrwxrwxrwx. 1 root root  46 8月  12 09:21 docker.ccbjb.com.cn.bundle.crt -> ./20200812-0921/docker.ccbjb.com.cn.bundle.crt
lrwxrwxrwx. 1 root root  39 8月  12 09:21 docker.ccbjb.com.cn.crt -> ./20200812-0921/docker.ccbjb.com.cn.crt
lrwxrwxrwx. 1 root root  15 8月  12 09:21 docker.ccbjb.com.cn.key.pem -> ../cert.key.pem
lrwxrwxrwx. 1 root root  11 8月  12 09:21 root.crt -> ../root.crt
```

#### 4 /etc/nginx/conf.d/docker.nexus.conf

ssl方式动态代理3.124的8082和8083端口。
- 8082用来下载
- 8083用来上传

```json
[root@centos124 conf.d]# cat docker.nexus.conf
# ip地址可以换成内网ip
upstream nexus_docker_get {
    server 192.168.3.124:8082;
}

upstream nexus_docker_put {
    server 192.168.3.124:8083;
}
server {
    listen 80;
    listen 443 ssl;
    server_name docker.ccbjb.com.cn;
    access_log /var/log/nginx/docker.ccbjb.com.cn.log;
    # 证书
    ssl_certificate /etc/nginx/conf.d/ssl/out/docker.ccbjb.com.cn/docker.ccbjb.com.cn.crt; # 证书路径根据上面生成的来定
    ssl_certificate_key /etc/nginx/conf.d/ssl/out/docker.ccbjb.com.cn/docker.ccbjb.com.cn.key.pem;
    ssl_protocols TLSv1.1 TLSv1.2;
    ssl_ciphers '!aNULL:kECDH+AESGCM:ECDH+AESGCM:RSA+AESGCM:kECDH+AES:ECDH+AES:RSA+AES:';
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    # disable any limits to avoid HTTP 413 for large image uploads
    client_max_body_size 0;
    # required to avoid HTTP 411: see Issue #1486 (https://github.com/docker/docker/issues/1486)
    chunked_transfer_encoding on;
    # 设置默认使用推送代理
    set $upstream "nexus_docker_put";
    # 当请求是GET，也就是拉取镜像的时候，这里改为拉取代理，如此便解决了拉取和推送的端口统一
    if ( $request_method ~* 'GET') {
        set $upstream "nexus_docker_get";
    }
    # 只有本地仓库才支持搜索，所以将搜索请求转发到本地仓库，否则出现500报错
    if ($request_uri ~ '/search') {
        set $upstream "nexus_docker_put";
    }
    index index.html index.htm index.php;
    location / {
        proxy_pass http://$upstream;
        proxy_set_header Host $host;
        proxy_connect_timeout 3600;
        proxy_send_timeout 3600;
        proxy_read_timeout 3600;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_buffering off;
        proxy_request_buffering off;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto http;
    }
}

```
### 二，使用docker pull push.：

#### 1，客户端配置
 1.1 无需修改 /etc/docker/daemon.json
 1.2 创建根证书保存目录
   - linux：`mkdir -p /etc/docker/certs.d/docker.ccbjb.com.cn`
   - windows：创建目录`C:\Program Files\Docker\Docker\certs.d\docker.ccbjb.com.cn`
     
 1.3 下载根证书复制到docker根证书目录
   -  下载common工程`git@gitlab.ccbjb.com.cn:ec7mongrp/common.git` 
   -  linux : 拷贝到`common/docker.ccbjb.com.cnRoot证书/root.crt` 到`/etc/docker/certs.d/docker.ccbjb.com.cn/`
   -  windows：拷贝到`C:\Program Files\Docker\Docker\certs.d\docker.ccbjb.com.cn\root.crt`
 1.4 检查DNS设置为`192.168.99.2` ,否则无法识别域名`docker.ccbjb.com.cn`

#### 2. 客户端使用
##### 2.1 必须登陆之后才能下载。
私有docker仓库地址是docker.ccbjb.com.cn
用户名每个人都不同。初始密码123.com，必须登陆到nexus.ccbjb.com.cn上修改新密码。
```bash
root@centos125:~# docker login -u mengxt docker.ccbjb.com.cn
Password:
WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store
Login Succeeded
```
##### 2.2 拉取镜像
如果不确定镜像名，可以到dockerhub.com上搜索，搜到后右上角会有pull命令。
镜像名前加上docker.ccbjb.com.cn这个域名

```bash
root@centos125:~# docker pull docker.ccbjb.com.cn/redis:latest
latest: Pulling from redis
bf5952930446: Pull complete
911b8422b695: Pull complete
093b947e0ade: Pull complete
5b1d5f59e382: Pull complete
7a5f59580c0b: Pull complete
f9c63997c980: Pull complete
Digest: sha256:09c33840ec47815dc0351f1eca3befe741d7105b3e95bc8fdb9a7e4985b9e1e5
Status: Downloaded newer image for docker.ccbjb.com.cn/redis:latest
docker.ccbjb.com.cn/redis:latest
root@centos125:~# docker images
REPOSITORY                  TAG                 IMAGE ID            CREATED             SIZE
docker.ccbjb.com.cn/redis   latest              1319b1eaa0b7        7 days ago          104MB
alpine                      latest              a24bb4013296        2 months ago        5.57MB
root@centos125:~#
```
##### 2.3 push镜像到私有仓库
```bash
root@centos125:~# docker tag alpine:latest docker.ccbjb.com.cn/alpine:latest
root@centos125:~# docker push docker.ccbjb.com.cn/alpine:latest
```
http://nexus.ccbjb.com.cn上可以查看该镜像
![](/docs/images/2020-08-12-16-10-34.png)



### 三，使用浏览器

http://nexus.ccbjb.com.cn

可以看到，nginx代理后的各个库的url也变了。注意修改。
不过docker的使用，不用库的url，只用到了ip：port，没有影响。

但是npm和maven的时候就受影响了。
