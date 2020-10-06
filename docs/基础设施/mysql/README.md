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



# 远程怎么也连接不上mysql
centos7 Failed to start iptables.service: Unit not found 防火墙

处理：
`firewall-cmd --zone=public --add-port=3306/tcp --permanent `


参考：下面文章

在CentOS 7或RHEL 7或Fedora中防火墙由firewalld来管理

添加（--permanent永久生效，没有此参数重启后失效）
firewall-cmd --zone=public --add-port=80/tcp --permanent 

 
firewall-cmd --zone=public --add-port=1000-2000/tcp --permanent
重新载入

1
firewall-cmd --reload
查看

1
firewall-cmd --zone=public --query-port=80/tcp
删除

1
firewall-cmd --zone=public --remove-port=80/tcp --permanent
开启防火墙

1
systemctl start firewalld.service
关闭防火墙

1
systemctl stop firewalld.service
查看运行状态

1
firewall-cmd --state //running 表示运行

