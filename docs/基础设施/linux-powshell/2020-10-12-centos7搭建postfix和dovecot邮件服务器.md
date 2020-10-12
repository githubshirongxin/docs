---
layout: post
title: 【搭建邮件服务器】centos7用postfix+dovecot搭建邮件服务器。
---

参考：https://blog.51cto.com/12227558/2074095
参考：https://blog.csdn.net/weixin_42701857/article/details/105285218


# CentOS 7 下安装postfix3+dovecot2邮件服务器

最近在搭建邮件服务器时候发现centOS7 自带的postfix +dovecot 版本都很老，google找了大量的文章，终于搭建成功了，废话不多说。

## 域名如何解析
邮件服务器是公司内网使用。不允许访问外网。所以在外网环境把该安装的都装上。
然后挪到内网里配置。
域名也就没有指定。直接使用/etc/hosts 写死
```properties
mail.myt.com 192.168.2.233
```
这个域名是在postfix里使用，其他机器不用配置

## 我们开始来安装postfix3

让我们添加yum存储库  
```
\[root\@ecs-71c8 \~\]# vim /etc/yum.repos.d/gf.repo  
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200403095201880.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjcwMTg1Nw==,size_16,color_FFFFFF,t_70)

**将下面这段代码复制进去，保存并推出**

```
[gf]

name=Ghettoforge packages that won't overwrite core distro packages.

mirrorlist=http://mirrorlist.ghettoforge.org/el/7/gf/$basearch/mirrorlist

enabled=1

gpgcheck=1

gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-gf.el7

failovermethod=priority

[gf-plus]

name=Ghettoforge packages that will overwrite core distro packages.

mirrorlist=http://mirrorlist.ghettoforge.org/el/7/plus/$basearch/mirrorlist

# Please read http://ghettoforge.org/index.php/Usage *before* enabling this repository!

enabled=1

gpgcheck=1

gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-gf.el7

failovermethod=priority
```

**更新yum缓存**

```bash
[root@ecs-71c8 ~]# yum clean all

[root@ecs-71c8 ~]# yum makecache fast
```

**通过搜索postfix3包进行测试：**

```bash
[root@ecs-71c8 ~]# yum search postfix3

 Loaded plugins: fastestmirror

Loading mirror speeds from cached hostfile

======= N/S matched: postfix3 =================

postfix3.x86_64 : Postfix Mail Transport Agent

postfix3-cdb.x86_64 : CDB Database Support for Postfix

postfix3-ldap.x86_64 : LDAP Database Support for Postfix

postfix3-lmdb.x86_64 : LMDBtabase Support for Postfix

postfix3-mysql.x86_64 : MySQL Database Support for Postfix

postfix3-pcre.x86_64 : PCRE Database Support for Postfix

postfix3-perl-scripts.x86_64 : Postfix utilities written in perl

postfix3-pgsql.x86_64 : PostgreSQL Database Support for Postfix

postfix3-sqlite.x86_64 : SQLite Database Support for Postfix
```

**继续在CentOS 7上安装postfix3，添加所需的任何其他软件包：**

```bash
[root@ecs-71c8 ~]# yum -y install postfix3 postfix3-ldap postfix3-mysql postfix3-mysql
```

注意：如果这一步安装报错，请将vim /etc/yum.repos.d/gf.repo 里面的：gpgcheck=0  
**检查安装的postfix3版本：**

```bash
[root@ecs-71c8 ~]# rpm -qi postfix3
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200403100835253.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjcwMTg1Nw==,size_16,color_FFFFFF,t_70)  

## 配置 postfix3:

```bash
[root@ecs-71c8 ~]# vim /etc/postfix/main.cf

 修改内容：

# : 取消注释，设置hostname 
myhostname = mail.myt.com
# : 取消注释，设置域名 
mydomain = myt.com
# : 取消注释 
myorigin = $mydomain 
# : 默认是localhost，我们需要修改成all
inet_interfaces = all 
# : 推荐ipv4，如果支持ipv6，则可以为all 
inet_protocols = ipv4 
# : 添加 
mydestination = $myhostname, localhost.$mydomain, localhost, $mydomain 
# : 取消注释，指定内网和本地的IP地址范围 
mynetworks = 127.0.0.0/8
# : 取消注释，邮件保存目录
 home_mailbox = Maildir/ 
# : 添加 
smtpd_banner = $myhostname ESMTP 
# 添加到最后 
# 规定邮件最大尺寸为10M 
message_size_limit = 10485760 
# 规定收件箱最大容量为1G 
mailbox_size_limit = 1073741824 
# SMTP认证 
smtpd_sasl_type = dovecot 
smtpd_sasl_path = private/auth 
smtpd_sasl_auth_enable = yes
smtpd_sasl_security_options = noanonymous 
smtpd_sasl_local_domain = $myhostname 
smtpd_recipient_restrictions = permit_mynetworks,permit_auth_destination,permit_sasl_authenticated,reject 
```

## 开启postfix3服务并添加到系统自启

```bash
[root@ecs-71c8 ~]# systemctl  restart  postfix
[root@ecs-71c8 ~]# systemctl  enable  postfix
```

## 安装dovecot2

```bash
[root@ecs-71c8 ~]# vim /etc/yum.repos.d/dovecot.repo

添加下面这段代码：
[dovecot-2.3-latest]
name=Dovecot 2.3 CentOS $releasever - $basearch
baseurl=http://repo.dovecot.org/ce-2.3-latest/centos/$releasever/RPMS/$basearch
gpgkey=https://repo.dovecot.org/DOVECOT-REPO-GPG
gpgcheck=1
enabled=1
```

**更新一下yum**

```bash
[root@ecs-71c8 ~]# yum makecache
[root@ecs-71c8 ~]# yum update
```

## 安装dovect2:

```bash
[root@ecs-71c8 ~]# yum install dovecot
```
::: warning
 如果安装失败，干脆删除/etc/yum.repos.d/dovecot.repo
 直接运行yum install dovecot. 
 会安装稍微低一点点的版本，仍旧好用。
:::


## 配置dovect

```bash
[root@ecs-71c8 ~]# vim /etc/dovecot/dovecot.conf 

# 26行: 如果不使用IPv6，请修改为* 
listen = *
#在主配置文件中的，设置允许登录的网段地址，也就是说我们可以在这里限制只有来自于某个网段的用户才能使用电子邮件系统。如果想允许所有人都能使用，则不用修改本参数
login_trusted_networks = 192.168.2.0/24更改内容
```

**编辑文件10-auth.conf**

```bash
[root@ecs-71c8 ~]# vim /etc/dovecot/conf.d/10-auth.conf
# : 取消注释并修改 disable_plaintext_auth = no 
# : 添加 auth_mechanisms = plain login 
```

**编辑文件10-mail.conf**

```bash
[root@ecs-71c8 ~]# vim /etc/dovecot/conf.d/10-mail.conf
# : 取消注释并添加 mail_location = maildir:~/Maildir
```

**编辑文件10-master.conf**

```bash
[root@ecs-71c8 ~]# vim /etc/dovecot/conf.d/10-master.conf
# : 取消注释并添加 # Postfix smtp验证 
unix_listener /var/spool/postfix/private/auth { 
mode = 0666 
user = postfix
group = postfix
```

**注意：如果我们没有使用ssl的话需要进行下面的操作。使用了则不需要。**

**编辑文件10-ssl.conf**

```bash
[root@ecs-71c8 ~]# vim /etc/dovecot/conf.d/10-ssl.conf 
# : 将ssl的值修改为 ssl = no
```

**启动dovecot并添加到开机自启。**

```bash
[root@ecs-71c8 ~]# systemctl restart dovecot
[root@ecs-71c8 ~]# systemctl enable dovecot
```

## 创建用户并设置密码

```bash
[root@ecs-71c8 ~]# useradd admin
[root@ecs-71c8 ~]# passwd admin
```

::: tip
- 以上邮件服务器就可以使用了。
- admin用户已经可以用outlook去连接了，就这么简单。
:::

## outlook连接

### outlook 2016

文件→账户设置→账户→电子邮件→新建→输入admin→连接→pop3→输入密码（就是centos用户的密码）
![](/docs/images/2020-10-12-17-32-47.png)
![](/docs/images/2020-10-12-17-33-34.png)

::: warning 注意！！
 - useradd创建好的用户必须修改密码才能使用。 passwd 用户名!
 - 否则连接不上。
:::

就能连上了。

### outlook 2013
文件→账户设置→账户→电子邮件→新建
用户名：admin
账号：admin@myt.com
pop3:192.168.2.233
smtp:192.168.2.233
用户：admin
密码：xxxx（就是centos用户的密码）

::: warning
倒数第二个账户不能写邮件地址，否则连不上！！
:::


## 批量创建用户，批量改密码
### batchuser.sh
```bash
#!/bin/bash
#this shell is use to bachusers 
if [ $# != 1 ];then
        echo "Usage:root/batchusers"
elif [ -f $1 ];then
        for line in `cat $1`
        do
        name=`echo $line | cut -d : -f1`
        useradd -s /bin/bash $name
        echo "123" | passwd --stdin $name
        chage -d 0 -M 90 -W 7 -I 2 $name
        echo "created user: $name"
        done
else
        echo "input file not found"
fi
```

批量创建用户，同时为所有用户设置初始密码，并且通过chage命令设置用户密码过期时间为90天。警告时间7天，过期后过期后还能使用时间为2天。

使用方法，新建脚本batchuser.sh粘贴shell脚本，保存退出。

### 新建测试文件users
粘贴以下测试用户。通过命令
```bash
#运行脚本即可批量创建用户。
sh batchuser.sh users 
```

运行结果：

```bash
Changing password for user Tarah.
passwd: all authentication tokens updated successfully.
created user: Tarah
Changing password for user Jong.
passwd: all authentication tokens updated successfully.
created user: Jong
Changing password for user Emelda.
passwd: all authentication tokens updated successfully.
created user: Emelda
Changing password for user Wilford.
passwd: all authentication tokens updated successfully.
created user: Wilford
Changing password for user Cassy.
passwd: all authentication tokens updated successfully.
created user: Cassy
Changing password for user Trent.
passwd: all authentication tokens updated successfully.
created user: Trent
```

## 批量改密码

以下两种方式均可以
```bash
echo user1:centos | chpasswd    #用户名:密码
cat passwd.txt | chpasswd    #passwd.txt文件中的格式也是：用户名:密码
```

## 批量删除用户

### deluser.sh
```bash
#!/bin/bash
#this shell is use to bachusers 
if [ $# != 1 ];then
        echo "Usage:root/delusers"
elif [ -f $1 ];then
        for line in `cat $1`
        do
        name=`echo $line | cut -d : -f1`
        useradd -s /bin/bash $name
        echo "123" | passwd --stdin $name
        chage -d 0 -M 90 -W 7 -I 2 $name
        echo "created user: $name"
        done
else
        echo "input file not found"
fi
```

```bash
sh ./deluser.sh user.txt
```