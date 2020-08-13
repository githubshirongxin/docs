---
layout: post
title: 【harbor问题： push retrying】 一直retrying
---

## 背景
harbor 3.120 nginx+NFS+redis+posgress+keepalive
harbor node 3.108 ，3.109 harbor

## 问题： 
### 【现象】
```bash
root@centos125:~# docker login -u admin harbor.ccbjb.com.cn
Password:
WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
root@centos125:~#
root@centos125:~#
root@centos125:~# docker push harbor.ccbjb.com.cn/redis:v1
The push refers to repository [harbor.ccbjb.com.cn/redis]
1bd654b55bb4: Retrying in 3 seconds
1b80269d908f: Retrying in 3 seconds
57094a432b39: Retrying in 3 seconds
ab0653e928a7: Retrying in 3 seconds
09b6608896c0: Retrying in 3 seconds
d0f104dc0a1f: Waiting
received unexpected HTTP status: 500 Internal Server Error
```

## 【解决】：因为没有写harbor上的项目
![](/docs/images/2020-08-13-10-34-07.png)

harbor是按照项目，项目下面放镜像。所以必须得加上项目名。

```bash
root@centos125:~# docker pull harbor.ccbjb.com.cn/library/maven
Using default tag: latest
latest: Pulling from library/maven
bce8f778fef0: Pull complete
2778faef3420: Pull complete
945a8b67ac57: Pull complete
396112e35f08: Pull complete
7f0cb4eada14: Pull complete
1549e7083eda: Pull complete
Digest: sha256:23801edad8cd013544bfd8c0ed698182c172b9dba66bc5a42054a65f5da9c6ca
Status: Downloaded newer image for harbor.ccbjb.com.cn/library/maven:latest
harbor.ccbjb.com.cn/library/maven:latest
root@centos125:~# docker images
REPOSITORY                          TAG                 IMAGE ID            CREATED             SIZE
docker.ccbjb.com.cn/redis           latest              1319b1eaa0b7        7 days ago          104MB
harbor.ccbjb.com.cn/library/maven   latest              e85864b4079a        2 weeks ago         522MB
docker.ccbjb.com.cn/alpine          latest              a24bb4013296        2 months ago        5.57MB
alpine                              latest              a24bb4013296        2 months ago        5.57MB
root@centos125:~#
root@centos125:~#
root@centos125:~#
root@centos125:~#
root@centos125:~# docker tag alpine:latest harbor.ccbjb.com.cn/library/alpine
root@centos125:~# docker push harbor.ccbjb.com.cn/library/alpine
The push refers to repository [harbor.ccbjb.com.cn/library/alpine]
50644c29ef5a: Pushed
latest: digest: sha256:a15790640a6690aa1730c38cf0a440e2aa44aaca9b0e8931a9f2b0d7cc90fd65 size: 528
root@centos125:~#
```