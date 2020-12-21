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


```
[root@centos140 test-system]# docker pull docker.ccbjb.com.cn/nginx
Using default tag: latest
latest: Pulling from nginx
852e50cd189d: Pull complete
a29b129f4109: Pull complete
b3ddf1fa5595: Pull complete
c5df295936d3: Pull complete
232bf38931fc: Pull complete
Digest: sha256:c3a1592d2b6d275bef4087573355827b200b00ffc2d9849890a4f3aa2128c4ae
Status: Downloaded newer image for docker.ccbjb.com.cn/nginx:latest
docker.ccbjb.com.cn/nginx:latest
```
