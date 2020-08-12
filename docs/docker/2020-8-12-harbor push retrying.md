---
layout: post
title: 【harbor push retrying】 一直retrying
---

## 背景
harbor 3.120 nginx+NFS+redis+posgress+keepalive
harbor node 3.108 ，3.109 harbor

## 现象
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