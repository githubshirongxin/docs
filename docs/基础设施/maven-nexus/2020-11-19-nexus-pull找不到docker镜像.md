---
layout: post
title: nexus做docker私库，pull找不到docker镜像
---

## manifest unknown
```
[root@centos140 test-system]# docker pull docker.ccbjb.com.cn/nginx
Using default tag: latest
Error response from daemon: manifest for docker.ccbjb.com.cn/nginx:latest not found: manifest unknown: manifest unknown
[root@centos140 test-system]#
```

## 原因：
![](/docs/images/2020-11-19-16-56-12.png)

### docker index：
```
【√】Use proxy registry (specified above)
Use Docker Hub
Custom index
```
修改成
```
Use proxy registry (specified above)
【√】Use Docker Hub
Custom index
```

