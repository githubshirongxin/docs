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

3.112 error the same.

---
参考:https://blog.csdn.net/renguiriyue/article/details/102769884


课题：为什么runner里没安装docker，却能使用docker regiser？

课题：runner调用docker时使用了什么机制？

课题：runner和gitlab-ci使用什么机制通讯，日志和状态是怎么传递给gitlab-ci的？

```bash
# 生成镜像
 docker build -t srximg . 
 docker images
# 运行容器
 docker run -d --name srxcontainer srximg:latest && docker exec -it srxcontainer /bin/bash
 docker stop srxcontainer && docker rm srxcontainer && docker rmi srximg

#清除坏的<none>:<none>镜像
docker rmi $(docker images -f "dangling=true" -q)

#删除所有停止的容器
sudo docker container prune
```


```bash
[root@centos112 enviroment]# docker build -t srximg .
Sending build context to Docker daemon  471.2MB
Step 1/8 : FROM gitlab/gitlab-runner:latest
 ---> a0153b77b0da
Step 2/8 : MAINTAINER shirongxin <shirx@ccbjb.com.cn>
 ---> Using cache
 ---> 362be8f59e24
Step 3/8 : RUN echo 'deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse' > /etc/apt/sources.list &&     echo 'deb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse' >> /etc/apt/sources.list &&     echo 'deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse' >> /etc/apt/sources.list &&     echo 'deb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse' >> /etc/apt/sources.list &&     apt-get update -y &&     apt-get clean
 ---> Using cache
 ---> d0b29c3c05ee
Step 4/8 : RUN mkdir -p /usr/local/java
 ---> Running in f6f79795f236
Removing intermediate container f6f79795f236
 ---> e76dcfbdeba9
Step 5/8 : WORKDIR /usr/local/java
 ---> Running in f6263cebe3a2
Removing intermediate container f6263cebe3a2
 ---> 2dce5a8195d3
Step 6/8 : COPY openjdk-8u41-b04-linux-x64-14_jan_2020.tar.gz /usr/local/java
 ---> b62304fa0fa3
Step 7/8 : ENV JAVA_HOME /usr/java/jdk1.8.0_261-amd64/bin/java
 ---> Running in fa0376ce9194
Removing intermediate container fa0376ce9194
 ---> acd17be40649
Step 8/8 : WORKDIR /
 ---> Running in c250388054b2
Removing intermediate container c250388054b2
 ---> 70a3aa0cad5e
Successfully built 70a3aa0cad5e
Successfully tagged srximg:latest
[root@centos112 enviroment]#
```


GitLab Runner Docker images (based on Ubuntu or Alpine Linux)，安装docker时候出错。
```bash
Creating config file /etc/apt/apt.conf.d/50unattended-upgrades with new version
Setting up python3-software-properties (0.96.20.9) ...
Setting up software-properties-common (0.96.20.9) ...
Processing triggers for libc-bin (2.27-3ubuntu1) ...
Processing triggers for sgml-base (1.26+nmu4ubuntu1) ...
Processing triggers for dbus (1.10.6-1ubuntu3.6) ...
E: gnupg, gnupg2 and gnupg1 do not seem to be installed, but one of them is required for this operation
(23) Failed writing body
The command '/bin/sh -c dpkg --configure -a &&     apt-get install -y apt-transport-https ca-certificates curl software-properties-common &&
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add - &&     add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" &&     apt-get update -y &&     apt-get install -y docker-ce' returned a non-zero code: 255
[root@centos112 enviroment]#
```


root@def6fbc9a09a:/# cd /etc
root@def6fbc9a09a:/etc# ls red*
ls: cannot access 'red*': No such file or directory
root@def6fbc9a09a:/etc# ls issue
issue
root@def6fbc9a09a:/etc# cat issue
Ubuntu 18.04.4 LTS \n \l

识别操作系统的方法：
https://blog.csdn.net/Dafei4/article/details/79589369/


gitlab Runner的系统名字
lsb_release -cs = **bionic**
https://download.docker.com/linux/ubuntu 
```
Index of linux/ubuntu/dists/
../
artful/
bionic/
cosmic/
disco/
eoan/
focal/
trusty/
xenial/
yakkety/
zesty/
```
所以使用库的时候，必须指定bionic
原来博文中的史xenial，而我下载的gitlabrunner使用的史bionic
```bash
# 修改软件源
RUN echo 'deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse' > /etc/apt/sources.list && \
    echo 'deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse' >> /etc/apt/sources.list && \
    echo 'deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse' >> /etc/apt/sources.list && \
    echo 'deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse' >> /etc/apt/sources.list && \
    apt-get update -y && \
    apt-get clean
```

// 完整Dockerfile如下，安装好docker，docker-compose，java，maven
```bash
MAINTAINER shirongxin <shirx@ccbjb.com.cn>

# 修改软件源
RUN echo 'deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse' > /etc/apt/sources.list && \
    echo 'deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse' >> /etc/apt/sources.list && \
    echo 'deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse' >> /etc/apt/sources.list && \
    echo 'deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse' >> /etc/apt/sources.list && \
    apt-get update -y && \
    apt-get clean

# 安装 Docker
RUN apt-get -y install apt-transport-https ca-certificates curl software-properties-common && \
    curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | apt-key add - && \
    add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable" && \
    apt-get update -y && \
    apt-get install -y docker-ce
#RUN apt-get update && apt-get install -y gnupg2 && \
#    dpkg --configure -a && \
#    apt-get install -y apt-transport-https ca-certificates curl software-properties-common && \
#    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -no-tty - && \
#    add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" && \
#    apt-get update -y && \
#    apt-get install -y docker-ce
COPY daemon.json /etc/docker/daemon.json

# 安装 Docker Compose（这边的链接会失效的，所以还需要自己到docker-compose 确认）
WORKDIR /usr/local/bin
#RUN wget https://raw.githubusercontent.com/topsale/resources/master/docker-compose
RUN curl -L "https://github.com/docker/compose/releases/download/1.26.1/docker-compose-$(uname  -s)-$(uname -m)" -o /usr/local/bin/docker-composeRUN chmod +x /usr/local/bin/docker-compose

# 安装 java
RUN mkdir -p /usr/local/java
WORKDIR /usr/local/java
COPY openjdk-8u41-b04-linux-x64-14_jan_2020.tar.gz /usr/local/java
RUN tar -zxvf openjdk-8u41-b04-linux-x64-14_jan_2020.tar.gz
#     rm -fr openjdk-8u41-b04-linux-x64-14_jan_2020.tar.gz

# 安装 Maven
RUN mkdir -p /usr/local/maven
WORKDIR /usr/local/maven
#RUN wget https://raw.githubusercontent.com/topsale/resources/master/maven/apache-maven-3.5.3-bin.tar.gz
#RUN wget https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.6.1/binaries/apache-maven-3.6.1-bin.tar.gz
COPY apache-maven-3.6.3-bin.tar.gz /usr/local/maven
RUN tar -zxvf apache-maven-3.6.3-bin.tar.gz
#    rm -fr apache-maven-3.6.3-bin.tar.gz
# 准备一份maven 配置好的文件，这里参考 nexus 配置
COPY settings.xml /usr/local/maven/apache-maven-3.6.3/conf/settings.xml

# 配置环境变量
ENV JAVA_HOME /usr/local/java/java-se-8u41-ri
ENV MAVEN_HOME /usr/local/maven/apache-maven-3.6.3
ENV PATH $PATH:$JAVA_HOME/bin:$MAVEN_HOME/bin

WORKDIR /
```


docker-compose up -d
docker exec -it gitlab_runner /bin/bash


Runner error:
```
Preparing the "docker" executor
 Using Docker executor with image 192.168.3.124:8082/node:latest ...
 Pulling docker image 192.168.3.124:8082/node:latest ...
 ERROR: Preparation failed: Error response from daemon: Get http://192.168.3.124:8082/v2/node/manifests/latest: no basic auth credentials (docker.go:131:0s)
```

难道Runner里需要先docker login 192.158.3.124:8082 ?

试试

果然，更新vuepress，自动编译了。好用了
```bash
Running with gitlab-runner 13.2.1 (efa30e33)
   on shared runner form 3.112 Unz4U-uF
Preparing the "docker" executor
 Using Docker executor with image 192.168.3.124:8082/node:latest ...
 Authenticating with credentials from /root/.docker/config.json
 Pulling docker image 192.168.3.124:8082/node:latest ...
 Using docker image sha256:002df0b34ccb8b3bcaf022b8fea4e6b5cce1bc811fbd33d38840cdc21ee5f931 for 192.168.3.124:8082/node:latest ...
Preparing environment
00:00
 Running on runner-unz4u-uf-project-11-concurrent-0 via b2fd1f150f12...
Getting source from Git repository
00:03
 Fetching changes with git depth set to 50...
 Reinitialized existing Git repository in /builds/shirongxin/docs/.git/
 Checking out 5c0d0b1e as master...
 Removing node_modules/
 Removing public/
 Skipping Git submodules setup
 ```

 试试把nexus上的node删掉，看看nexus是否能自动下载

 NEXUS上node镜像下来了。编译时间1m3s

这个基础，再次更新vuepress，看看编译时间。1m2s，也是这个时间。

纳闷了。不用本地库呢？

gitlab-ci.yml使用远程库。看看，编译时间1m10s，没差多少。

难道是应为runner走的都是nexus？

把runner


不使用runner、随便3.125上命令行测试docker pull node 1m
// 3.124上还没有node
docker pull 192.168.3.124:8082/node  1m20s
// 3.123已经有node的前提下
docker pull 192.168.3.124:8082/node  15s ， 比外网下载快多了啊。

那么，为什么runner上用不用私服差别不大呢？ 
另外，gitlab-ci.yml中使用image: 192.168.3.124:8082/node:latest开头，应该不对。正确做法应该让gitlabci对nexus无意识，旨在runner上配置。


## 阿里云镜像也不快，还不如不用。
### // 另外，不用阿里云镜像呢 , 1m5s
```bash
root@centos125:~# cat /etc/docker/daemon.json
{
 // "registry-mirrors": ["https://ji1i86y7.mirror.aliyuncs.com"],
  "insecure-registries": ["harbor.ccbjb.com.cn","192.168.3.124:8082","192.168.3.124:8083"]
}
root@centos125:~#
```
### //使用阿里云镜像呢 ,1m25s.
```bash
root@centos125:~# cat /etc/docker/daemon.json
{
  "registry-mirrors": ["https://ji1i86y7.mirror.aliyuncs.com"],
  "insecure-registries": ["harbor.ccbjb.com.cn","192.168.3.124:8082","192.168.3.124:8083"]
}
root@centos125:~#
```
### //使用192.168.3.124：8082做镜像呢？ 59s
```bash
root@centos125:~# cat /etc/docker/daemon.json
{
  "registry-mirrors": ["http://192.168.3.124:8082"],
  "insecure-registries": ["harbor.ccbjb.com.cn","192.168.3.124:8082","192.168.3.124:8083"]
}
root@centos125:~# docker pull node
```
### //使用私服上已经有node 15s
```bash
root@centos125:~# docker pull 192.168.3.124:8082/node
```


## 如何让docker pull 自动去找私服，而不用写打私服的tag呢？


### 尝试：registry-mirrors:设置成私库地址，docker pull srximg // srximg只在私库上存在
结果：找不到，出错。
分析：daemon.json里配置的registry-mirrors对“docker pull 不加私服ip”这样的命令不起作用。
结论：想让`docker pull 不加私服ip` 这样的命令主动去私服下载，别指望daemon.json.

### 



