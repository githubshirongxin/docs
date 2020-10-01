---
layout : post
title: 【docker-compose安装】centos7 安装docker-compose 
---

centos7上安装docker-compose，很简单。做个memo，其他不做也无所谓，网上资料多得很。
不容易错。

## 官方文档：慢
https://docs.docker.com/compose/install/

一共就这么三步。大概三分钟.注意一下版本。1.26.1，可以换成最新版本。自己替换一下。
`sudo curl -L "https://github.com/docker/compose/releases/download/1.26.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`

```
curl -L https://get.daocloud.io/docker/compose/releases/download/1.26.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

[root@centos108 ~]# sudo curl -L "https://github.com/docker/compose/releases/download/1.26.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   638  100   638    0     0    301      0  0:00:02  0:00:02 --:--:--   301
100 11.6M  100 11.6M    0     0   112k      0  0:01:46  0:01:46 --:--:--  142k


[root@centos108 ~]# chmod +x /usr/local/bin/docker-compose

[root@centos108 ~]# ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

[root@centos108 ~]# docker-compose --version
docker-compose version 1.26.1, build f216ddbf
```

 
## 国内镜像安装 docker-compose ，速度快
### 1.按照官网操作

`sudo curl -L "https://github.com/docker/compose/releases/download/1.26.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`

太慢了，慢的人头疼。

### 2.找到一个参考文章 https://blog.csdn.net/huiyanghu/article/details/82253886，用下面的地址，秒速

`curl -L https://get.daocloud.io/docker/compose/releases/download/1.26.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose`

秒速下载，然后修改文件的执行权限

`chmod +x /usr/local/bin/docker-compose`

确认是否安装成功

