---
layout: post
title: 【springboot】gitlab-ci编译部署知识点
---

#  【springboot】gitlab-ci编译部署知识点

## 下列知识点：

### 发布与编译的串联
- 自动部署的实现思路。
  编译：利用Runner的docker excutor编译并push到docker私有库。
  发布：免密远程到发布机器，在发布机器上执行，docker私有仓库取镜像，并生成容器。
- 不同分支使用编译和发布的环境不同。使用不同的配置  

### 编译
- 使用nexus.ccbjb.com.cn作为私有maven仓库的使用方法。
  - pom.xml
  - .m2/settings.xml
- 使用docker.ccbjb.com.cn作为私有docker仓库的使用方法。
  - 私有仓库登陆时的证书问题。
  - gitlab-ci中使用私有仓库的认证方式:使用docker私有仓库，
     - 要么在gitlabUI中环境变量中使用DOCKER_AUTH_CONFIG，
     - 要么在Runer宿主机手动docker login docker.ccbjb.com.cn
- gitlab-ci.yml中
  -【重要】最外层image，service之间的关系。
  - job内image，service之间的关系。
  - 最外层image与job内image之间的关系。
  - services同上问。
- 【重要】docker:stable 与docker：dind之间的关系
- 【重要】docker excutor中的image与gitlab-ci.yml中image的关系

### 发布
- 如何在Runner上使用docker excutor免密登陆到服务器。
- 发布job里的image：ubuntu的私钥公钥与Runner宿主机的私钥公钥关系。
- ssh-agent存储的是Runner宿主机的私钥
- SSH_PRIVATE_KEY是gitlabUI的环境变量。
- 发布服务器上的存储的是Runner宿主机的公钥。

#### 手工预先执行
1. 在Runner宿主机上`成密钥对(不加密码)`
2. 在Runner宿主机上`ssh-copy-id 远程服务器。`
剩下的就是gitlab-ci脚本自动执行了



# 总结：
[参考issue](https://gitlab.ccbjb.com.cn/shirongxin/gitlabci-springboot/-/issues)

# 课题：
## 1. gitlab-ci.yml中使用docker.ccbjb.com.cn/docker:dind会出错。原因不详。
#### gitlab-ci.yml
```yml
services: - name: docker.ccbjb.com.cn/docker:19.03.12-dind 
```

#### error:
```
docker info ERROR: error during connect: Get https://docker:2376/v1.40/info: dial tcp: lookup docker on 192.168.99.2:53: no such host
```

## 2.  只能写一个库。
```yml
services:
  - name: docker.ccbjb.com.cn/docker:19.03.12-dind
    command: ["--insecure-registry=docker.ccbjb.com.cn"]
```