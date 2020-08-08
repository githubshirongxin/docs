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
![](/docs/images/2020-08-08-09-20-47.png)
```xml

Running with gitlab-runner 13.2.1 (efa30e33)
   on shared runner form 3.112 Unz4U-uF
Preparing the "docker" executor
00:11
 Using Docker executor with image 192.168.3.124:8082/node:latest ...
 Pulling docker image 192.168.3.124:8082/node:latest ...
 ERROR: Preparation failed: Error response from daemon: Get http://192.168.3.124:8082/v2/node/manifests/latest: no basic auth credentials (docker.go:131:0s)
 ```

 3.112 
 vi docker-compose.yml
增加 -v /etc/docker/daemon.json:/etc/docker/daemon.json

```bash
docker-compose down
docker-compose up -d
```

3.102
git push

