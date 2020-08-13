---
layout: post
title: 【nexus-docker仓库配置使用】nexus作为docker镜像的私服 http方式。
---

## 一，ssl方式参考这篇文章
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


## 二，非ssl方式：

安装nexus的文章请看maven/【nexus】 nexus服务器搭建
基本思路就是创建在nexus上创建repository，类型选择hosted，docker（Hosted）
补充说明一下，我自己的nexus管理docker大概也是这么搭建的。只不过我的group端口用了8082
https://segmentfault.com/a/1190000015629878


![](/docs/images/2020-08-05-21-24-21.png)

- docker-hub(proxy)
remote storage: https://registry-1.docker.io
http://192.168.3.124:8081/repository/docker-hub/
http和https没有指定端口
blob store= docker-hub（自己创建的blob） 

- docker-private（Hosted）
  指定http端口 8082
  blob store = docker-private（自己创建的blob）

- docker-public（group）
  指定http端口 8083
  members： docker-hub和docker-private

## 【push实验】push 8082 失败 显示“已经有layer了”，push 8083 成功。
  
```bash

[root@centos3 ~]# cat /etc/docker/daemon.json
{
 "insecure-registries": ["harbor.ccbjb.com.cn","192.168.3.124:8082","192.168.3.124:8083"]
}
[root@centos3 ~]#
[root@centos3 ~]# systemctl daemon-reload && systemctl restart docker.service
[root@centos3 ~]# docker login 192.168.3.124:8083
Username: admin
Password:
Login Succeeded
[root@centos3 ~]# docker login 192.168.3.124:8082
Username: admin
Password:
Login Succeeded

[root@centos3 ~]# docker tag nexus.ccbjb.com.cn:8082/maven 192.168.3.124:8082/maven:latest
[root@centos3 ~]# docker push 192.168.3.124:8082/maven:latest
The push refers to a repository [192.168.3.124:8082/maven]
bdbf23b95f23: Layer already exists
39f101bd8163: Layer already exists
110d6f7f8f5a: Layer already exists
6d68b3b2b634: Layer already exists
10d514aca949: Layer already exists
d7d3f0b240dc: Layer already exists
error parsing HTTP 404 response body: unexpected end of JSON input: ""
[root@centos3 ~]#
[root@centos3 ~]# docker tag nexus.ccbjb.com.cn:8082/maven 192.168.3.124:8083/maven:latest
[root@centos3 ~]# docker push  192.168.3.124:8083/maven:latest
The push refers to a repository [192.168.3.124:8083/maven]
bdbf23b95f23: Layer already exists
39f101bd8163: Layer already exists
110d6f7f8f5a: Layer already exists
6d68b3b2b634: Layer already exists
10d514aca949: Layer already exists
d7d3f0b240dc: Layer already exists
latest: digest: sha256:23801edad8cd013544bfd8c0ed698182c172b9dba66bc5a42054a65f5da9c6ca size: 1579

[root@centos3 ~]# docker tag 192.168.3.108/edusite/node 192.168.3.124:8083/node
[root@centos3 ~]# docker push 192.168.3.124:8083/node
The push refers to a repository [192.168.3.124:8083/node]
0ddfc92678f1: Pushed
937b32faacbc: Pushed
f81e2504e954: Pushed
bc17cd405095: Pushed
ee854067fbbd: Pushed
740ffea5d5c3: Pushed
eac9ead92b24: Pushed
23bca356262f: Pushed
8354d5896557: Pushed
latest: digest: sha256:d64072a554283e64e1bfeb1bb457b7b293b6cd5bb61504afaa3bdd5da2a7bc4b size: 2215
[root@centos3 ~]#

```


## 【pull实验】pull from docker-private（Hosted）如果私服上没有，也没有自动下载呀
```bash
[root@centos123 ~]# docker login 192.168.3.124:8083
Username: admin
Password:
WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
[root@centos123 ~]# docker pull 192.168.3.124:8083/node
Using default tag: latest
Error response from daemon: manifest for 192.168.3.124:8083/node:latest not found: manifest unknown: manifest unknown
[root@centos123 ~]#
```

## 【pull实验】pull from docker-group（group） ，没有就自动下载
```bash
[root@centos123 ~]# docker login 192.168.3.124:8082
Username: admin
Password:
WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
[root@centos123 ~]# docker pull 192.168.3.124:8082/node
Using default tag: latest
latest: Pulling from node
7e6d8ed60355: Pull complete
43421f771d04: Pull complete
c36327c39ae4: Pull complete
22b0be3e8a61: Pull complete
6b168feb1bb0: Pull complete
0a127f2eabe9: Pull complete
b8ebb87902bd: Pull complete
74fcd4404a16: Pull complete
e8efbeec3186: Pull complete
Digest: sha256:8f367919218e11900dbaea0c399ed33367c43a27e05e54d6d14961aa903cabc6
Status: Downloaded newer image for 192.168.3.124:8082/node:latest
192.168.3.124:8082/node:latest
[root@centos123 ~]#
```
![](/docs/images/2020-08-05-21-46-59.png)


## 【pull实验】私服上docker-private有镜像，从8082（group）下载，非常快地从private下来了。

```bash
[root@centos3 ~]# docker images
REPOSITORY                                           TAG                 IMAGE ID            CREATED             SIZE
docker.io/maven                                      latest              e85864b4079a        8 days ago          522 MB
docker.io/node                                       latest              37ad18cd8bd1        5 weeks ago         943 MB
harbor.ccbjb.com.cn/library/node                     latest              37ad18cd8bd1        5 weeks ago         943 MB
registry.aliyuncs.com/google_containers/kube-proxy   v1.15.3             232b5c793146        11 months ago       82.4 MB
quay.io/coreos/flannel                               v0.10.0-amd64       f0fad859c909        2 years ago         44.6 MB
harbor.ccbjb.com.cn/library/flannel                  107                 f0fad859c909        2 years ago         44.6 MB
registry.aliyuncs.com/google_containers/pause        3.1                 da86e6ba6ca1        2 years ago         742 kB
```
![](/docs/images/2020-08-06-10-43-41.png)
![](/docs/images/2020-08-06-10-43-53.png)

docker-private库里有vuejs/ci

```bash
[root@centos3 ~]# docker pull 192.168.3.124:8082/vuejs/ci
Using default tag: latest
Trying to pull repository 192.168.3.124:8082/vuejs/ci ...
latest: Pulling from 192.168.3.124:8082/vuejs/ci
7568c21980bd: Pull complete
4a9f2207c812: Pull complete
6fe350d2b140: Pull complete
d95a2fdc8b3d: Pull complete
760eb225f9e8: Pull complete
5613fb83b27a: Pull complete
53d93b41e541: Pull complete
e56596e442fa: Pull complete
d07b402308ba: Pull complete
a0c1c9f87b65: Pull complete
51bff25f4ef8: Pull complete
9555e854c71e: Pull complete
3ff38dcf2d51: Pull complete
Digest: sha256:3b766dda613fcd2dce50e4e2ba6ef9ae0e322a52ca1fff6d9e466a06e2a8a0e6
Status: Downloaded newer image for 192.168.3.124:8082/vuejs/ci:latest
[root@centos3 ~]#
```

显示从8082私服下载，也就是private+public（hub），显然是从private下载的，速度非常快。


## 总结：

- 仅仅使用http。没有SSL。docker镜像能够客户端-服务器畅通。

|   | docker-group  | docker-private |
|---|---|---|
| pull  | 没有就下载（因为里边有代理库）  | 没有就NG（里面没有代理库） |
| push  | Layer already exists（404）  | OK |



---

## 【课题】如果不指定docker pull 192.168.3.124:8082/node,而是直接docker pull node, 能让他自动从192.168.3.124：8082/node ？
```bash
客户端 /etc/docker/daemon.json
{
"registry-mirrors":["http://192.168.3.124:8082"],
"insecure-registries": ["harbor.ccbjb.com.cn","192.168.3.124:8082","192.168.3.124:8083"]
}
[root@centos123 ~]# systemctl daemon-reload && systemctl restart docker.service
[root@centos123 ~]# docker pull node
Using default tag: latest
latest: Pulling from library/node
7e6d8ed60355: Pull complete
43421f771d04: Pull complete
c36327c39ae4: Pull complete
22b0be3e8a61: Pull complete
6b168feb1bb0: Pull complete
0a127f2eabe9: Pull complete
b8ebb87902bd: Pull complete
74fcd4404a16: Pull complete
e8efbeec3186: Pull complete
Digest: sha256:8f367919218e11900dbaea0c399ed33367c43a27e05e54d6d14961aa903cabc6
Status: Downloaded newer image for node:latest
docker.io/library/node:latest
[root@centos123 ~]#

```

没好使，仍旧从docker.io下载的。而且nexus上的docker各个库中都没有这个镜像，
说明没有自动下载。

## 难道真的必须写明 ip:8082/imgesName 这样才能私服没有自动下载到私服、私服有从私服下载吗？

但是看这篇文章，是可行的。
https://blog.csdn.net/Michaelwubo/article/details/80691889
差哪了呢？


必须写明域名。




