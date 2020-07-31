---
layout: post
title: 【docker】 启动mysql容器
---


`docker run -d --name mysql_0617 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123.com mysql:5.7`

连接数据库，创建test db。

## 将容器中的 mysql 配置文件复制到宿主机中指定路径下，路径你可以根据需要，自行修改

`docker cp mysql_0617:/etc/mysql/mysql.conf.d D:\\works\\mysql_persistent\\mysql_0617\\config`

## 将容器中的 mysql 存储目录复制到宿主机中

`docker cp mysql_0617:/var/lib/mysql/ D:\\works\\mysql_persistent\\mysql_0617\\data\\mysql`

`docker stop  mysql_0617`

docker rm  mysql_0617

```
docker run -it --name mysql_0617 \
-p 3306:3306 \
-v D:\\works\\mysql_persistent\\mysql_0617\\config:/etc/mysql/mysql.conf.d \
-v D:\\works\\mysql_persistent\\mysql_0617\\data\\mysql:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123.com mysql:5.7
```

去掉换行

```
docker run -it --name mysql_0617 -p 3306:3306 -v D:\\works\\mysql_persistent\\mysql_0617\\config:/etc/mysql/mysql.conf.d -v D:\\works\\mysql_persistent\\mysql_0617\\data\\mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123.com mysql:5.7
```

再复制两个mysql库，映射端口不同

```
docker run -it --name mysql_0617_2 -p 3307:3306 -v D:\\works\\mysql_persistent\\mysql_0617_2\\config:/etc/mysql/mysql.conf.d -v D:\\works\\mysql_persistent\\mysql_0617_2\\data\\mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123.com mysql:5.7
```

```
docker run -it --name mysql_0617_3 -p 3308:3306 -v D:\\works\\mysql_persistent\\mysql_0617_3\\config:/etc/mysql/mysql.conf.d -v D:\\works\\mysql_persistent\\mysql_0617_3\\data\\mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123.com mysql:5.7
```


---

## Trouble Shooting
### 【问题】远程连接docker的mysql失败
### 【现象】
SQLyog连接mysql
-输入用户名密码
```
发现报错：
2059 - Authentication plugin ‘caching_sha2_password’ cannot be loaded: dlopen(…/Frameworks/caching_sha2_password.so, 2): image not found
```

### 【解决方案】：

1.进入mysql容器（当时启动mysql指定时的容器名字）

`docker exec -it mysql_0617 /bin/bash`

2.操作mysql

`mysql -u root -p`

输入你启动mysql容器时候的密码：123.com

3.修改密码
```
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123.com';  #注意这里12345必须和你的mysql的root用户密码一致！！
```

4.重新用SQLyog连接mysql

大功告成！！！