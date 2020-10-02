---
layout: post
title: 【mysqldocker部署，性能调优】
---

# 仅安装MySQL客户端
```bash
# 添加rpm源
[root@k8s-master ~]# rpm -ivh https://repo.mysql.com//mysql57-community-release-el7-11.noarch.rpm
[root@test1 ~]#
# 通过yum搜索
[root@test1 ~]# yum search mysql-community
[root@test1 ~]#
# 安装x64位的 mysql客户端
[root@test1 ~]# yum install mysql-community-client.x86_64 -y
```

# mysql无法远程访问
需要手动增加可以远程访问数据库的用户。

### 方法一(不推荐)、本地登入mysql，更改 "mysql" 数据库里的 "user" 表里的 "host" 项，将"localhost"改为"%"
::: warning 不推荐
:::
```
#mysql -u root -proot
mysql>use mysql;
mysql>update user set host = '%' where user = 'root';
mysql>select host, user from user;
```
### 方法二、直接授权(推荐)
::: tip 推荐
:::

　　从任何主机上使用root用户，密码：youpassword（你的root密码）连接到mysql服务器：（首先登陆Linux服务器，填写下面代码即可）
```
[root@localhost software]# mysql -u root -proot 
mysql>GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'youpassword' WITH GRANT OPTION;

mysql>FLUSH PRIVILEGES;
```
操作完后切记执行以下命令刷新权限 
```
FLUSH PRIVILEGES;
```
### 方法三：终极方法

注释bind-address = 127.0.0.1
找到mysql.cnf

把bind-address = 127.0.0.1 前面加上 #

即  #bind-address = 127.0.0.1
