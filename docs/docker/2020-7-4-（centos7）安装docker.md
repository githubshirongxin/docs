---
layout: post
title: 【docker安装】Centos7安装最新版本docker
---

**使用YUM安装 Docker CE**

```bash
sudo yum install -y yum-utils  device-mapper-persistent-data  lvm2  
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install docker-ce docker-ce-cli containerd.io

```

**安装最新版本的Docker CE和containerd**

**查看 Docker 版本号**
`$ docker version`

**启动 Docker**
```bash
service docker start
或
systemctl start docker
systemctl enable docker
```

**显示 Docker 状态**
`service docker status`

**停止 Docker**
`service docker stop`