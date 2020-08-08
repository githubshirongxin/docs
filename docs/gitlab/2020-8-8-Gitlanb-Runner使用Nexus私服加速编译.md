---
layout: post
title: 【gitlab-ci-runner 、nexus】加速编译
---

## 先让runner从私服上下载吧。
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

//gitlab-ci.yml

```xml
image: 192.168.3.124:8082/node:latest

pages:
  cache:
    paths:
    - node_modules/

  script:
   - yarn install
   - yarn run build 
 
  artifacts:
    paths:
    - public
  only:
  - master
```
