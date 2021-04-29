---
layout: post
title: 【nexus】私有仓库使用手顺（最终版）！！
---

## 一，作为docker私有仓库使用
拉取尽量使用本地仓库，这样会加快拉取速度。
镜像不存在时，会自动下载镜像。
一般外网下载1分钟，本地仓库只需要15秒。

### 1，客户端配置
 1.1 无需修改 /etc/docker/daemon.json
 1.2 创建根证书保存目录
   - linux：`mkdir -p /etc/docker/certs.d/docker.ccbjb.com.cn`
   - windows：创建目录`C:\Program Files\Docker\Docker\certs.d\docker.ccbjb.com.cn`
     
 1.3 下载根证书复制到docker根证书目录
   -  下载common工程`git@gitlab.ccbjb.com.cn:ec7mongrp/common.git` 
   -  linux : 拷贝到`common/docker.ccbjb.com.cnRoot证书/root.crt` 到`/etc/docker/certs.d/docker.ccbjb.com.cn/`
   -  windows：拷贝到`C:\Program Files\Docker\Docker\certs.d\docker.ccbjb.com.cn\root.crt`
 1.4 检查DNS设置为`192.168.99.2` ,否则无法识别域名`docker.ccbjb.com.cn`

### 2. 客户端使用
#### 2.1 必须登陆之后才能下载。
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
#### 2.2 拉取镜像
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
#### 2.3 push镜像到私有仓库
```bash
root@centos125:~# docker tag alpine:latest docker.ccbjb.com.cn/alpine:latest
root@centos125:~# docker push docker.ccbjb.com.cn/alpine:latest
```
http://nexus.ccbjb.com.cn上可以查看该镜像
![](/docs/images/2020-08-12-16-10-34.png)

---
