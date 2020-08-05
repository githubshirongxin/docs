---
layout: post
title: 【nexus-docker】nexus作为docker镜像的私服
---

安装nexus的文章请看maven/【nexus】 nexus服务器搭建
基本思路就是创建在nexus上创建repository，类型选择hosted，docker（Hosted）
然后这个

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