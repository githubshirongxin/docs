---
layout: post
title: 【gitlab-runner + nexus】加速docker和npm下载 （二）nginx代理docker库ssl
---

**本文主要将gitlab-runner的配置的修改（因为使用了docker私有仓库）**

### 背景说明
因为，nexus私库做了一些改进。
1. nexus web页面仍旧是用http://nexus.ccbjb.com.cn
2. nexus docker仓库使用nginx动态代理了
   
所以，gitlab-runner作为nexus私有docker仓库的使用者，也必须做一些改动。
（gitlab-runner 3.112）

#### 改动一：docker镜像使用本地镜像
1. Dockerfile 镜像使用私库镜像
2. 必须执行docker login到私库。
3. 必须把根证书拷贝到镜像里（或者把宿主的根证书挂载过来）


#### 改动二：yarn install 使用本地npm包。
1. /root/.npmrc写入认证信息然后挂载到容器上。
2. /root/.npmrc指定本地npm-group库

## 具体改动配置：

### 改动一：
##### /root/environment/Dockerfile

/root/environment/root.crt
从宿主机 /etc/docker/certs.d/docker.ccbjb.com.cn/root.crt拷贝而来

Dockerfile
```bash
FROM docker.ccbjb.com.cn/gitlab/gitlab-runner:latest # 改动1
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
RUN mkdir -p /etc/docker/certs.d/docker.ccbjb.com.cn  # 改动2
COPY root.crt  /etc/docker/certs.d/docker.ccbjb.com.cn/root.crt # 改动2

RUN docker login -u admin -p admin123 docker.ccbjb.com.cn # 改动3 , 这样写死当然不好。生产环境应该使用环境变量。实验环境就无所谓了

# 安装 Docker Compose（这边的链接会失效的，所以还需要自己到docker-compose 确认）
WORKDIR /usr/local/bin
RUN curl -L "https://get.daocloud.io/docker/compose/releases/download/1.26.1/docker-compose-`uname -s`-`uname -m`" -o /usr/local/bin/docker-compose
RUN chmod +x /usr/local/bin/docker-compose

# 安装 java
RUN mkdir -p /usr/local/java
WORKDIR /usr/local/java
COPY openjdk-8u41-b04-linux-x64-14_jan_2020.tar.gz /usr/local/java
RUN tar -zxvf openjdk-8u41-b04-linux-x64-14_jan_2020.tar.gz

# 安装 Maven
RUN mkdir -p /usr/local/maven
WORKDIR /usr/local/maven
COPY apache-maven-3.6.3-bin.tar.gz /usr/local/maven
RUN tar -zxvf apache-maven-3.6.3-bin.tar.gz

# 准备一份maven 配置好的文件，这里参考 nexus 配置
COPY settings.xml /usr/local/maven/apache-maven-3.6.3/conf/settings.xml
# 配置环境变量
ENV JAVA_HOME /usr/local/java/java-se-8u41-ri
ENV MAVEN_HOME /usr/local/maven/apache-maven-3.6.3
ENV PATH $PATH:$JAVA_HOME/bin:$MAVEN_HOME/bin

WORKDIR /

```

#####  /root/docker-compose.yml
```bash
version: '3.1'
services:
  gitlab-runner:
    build: enviroment
    restart: always
    container_name: gitlab_runner
    privileged: true
    volumes:
      - /usr/local/docker/runner/config:/etc/gitlab-runner
      - /var/run/docker.sock:/var/run/docker.sock
      - /etc/docker/daemon.json /etc/docker/daemon.json
      - /etc/docker/certs.d/docker.ccbjb.com.cn/root.crt /etc/docker/certs.d/docker.ccbjb.com.cn/root.crt # 改动。其实镜像里已经拷贝了一份。这两处只要有一处即可。
```

### 改动二：

##### 修改宿主机/root/.npmrc然后挂载到容器
宿主机：没有安装nodejs，硬创建一个文件
vi /root/.npmrc
```bash
[root@centos112 ~]# cat .npmrc
registry=http://nexus.ccbjb.com.cn/repository/npm-group/
init.author.name=shirx
init.author.email=shirx@ccbjb.com.cn
init.author.url=https://shirongxin.gitlab.io/docs
email=shirx@ccbjb.com.cn
always-auth=true
_auth="YWRtaW46YWRtaW4xMjM="
```
这是admin，admin123生成的认证。
实验环境就这么写没问题。生产环境就得换了。

##### docker-compose.yaml
```bash
[root@centos112 ~]# cat docker-compose.yml
version: '3.1'
services:
  gitlab-runner:
    build: enviroment
    restart: always
    container_name: gitlab_runner
    privileged: true
    volumes:
      - /usr/local/docker/runner/config:/etc/gitlab-runner
      - /var/run/docker.sock:/var/run/docker.sock
      - /etc/docker/daemon.json /etc/docker/daemon.json
      - /etc/docker/certs.d/docker.ccbjb.com.cn/root.crt /etc/docker/certs.d/docker.ccbjb.com.cn/root.crt
      - /root/.npmrc /root/.npmrc # 加了一行
[root@centos112 ~]#
```

##### 重启服务
```bash
[root@centos112 ~]# docker-compose down
Stopping gitlab_runner ... done
Removing gitlab_runner ... done
Removing network root_default
[root@centos112 ~]# docker-compose up -d
Creating network "root_default" with the default driver
Creating gitlab_runner ... done
[root@centos112 ~]#
[root@centos112 ~]#
```

## 运行

```bash
# docker-compose down
# docker-compose up -d 
```

::: tip 注意得等一会
gitlab-ci实例需要等一会才会发现runner启动了。
Healthcheck时间间隔。大概2分钟。
:::

一会就能push 代码
让gitlab实例跑runner上的编译了。


