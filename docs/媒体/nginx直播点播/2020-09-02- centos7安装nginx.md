---
layout: post
title: 【nginx 源码编译】centos7
---



## 1、准备工作：
```bash
　　wget  -c  nginx的rpm包链接地址

　　#如果没有wget命令可以用yum -y install wget 自行安装

　　选项-c代表断点续传，不明白什么叫断点续传的小伙伴可以百度一下

　　登录nginx官网，找到要下载的rpm包，然后复制链接地址即可。

 

　　mv  nginx-1.18.0.tar.gz  /opt/

　　#将下载的nginx源码包移动到/opt目录下
```
## 2、解压：
```bash
　　tar  xf  /opt/nginx-1.18.0.tar.gz   -C   /usr/local/src/

　　#将nginx源码包解压到/usr/local/src下，-C选项指定解压路径，可自定义

 

　　cd  /usr/local/src/nginx-1.18.0/

　　#切换到/usr/local/src/nginx-1.18.0 下

 ```

## 3、预编译：
```bash
　　./configure   --prefix=/usr/local/nginx   --user=nginx  --group=nginx  --with-http_ssl_module

　　#prefix指定解压路径，user创建用户nginx，group创建用户组nginx

　　重点：若预编译报错，仔细阅读提示，一般会提示需要下载的软件或环境，如requires XXX library 或.c或.h

　　则yum install -y  XXX-devel ，即缺什么装什么。

　　用echo  $?  检验是否编译成功，成功则输出0,输出非0数则出错
```

## 4、编译：
```bash
　　make #等价于 make  -f  Makefile
　　make  -j  N 
　　# -j 选项可以指定多少进程同时编译，N=2,4,8,16,32，不指定的话默认为1
```
 

## 5、安装：
```bash
　　make   install 
　　#选项与上面一致
```

 
## 6，设置nginx服务，让sysctmctl访问。
/etc/init.d/nginx
::: warning
 - 默认nginx编译输出路径：/usr/local/nginx
 - 变了就得改下面的shell了。最好别变。
:::
```bash
#!/bin/sh

# nginx - this script starts and stops the nginx daemin

#

# chkconfig:   - 85 15

# description:  Nginx is an HTTP(S) server, HTTP(S) reverse \

#               proxy and IMAP/POP3 proxy server

# processname: nginx

# config:      /usr/local/nginx/conf/nginx.conf

# pidfile:     /usr/local/nginx/logs/nginx.pid

# Source function library.

. /etc/rc.d/init.d/functions

# Source networking configuration.

. /etc/sysconfig/network

# Check that networking is up.

[ "$NETWORKING" = "no" ] && exit 0

nginx="/usr/local/nginx/sbin/nginx"

prog=$(basename $nginx)

NGINX_CONF_FILE="/usr/local/nginx/conf/nginx.conf"

lockfile=/var/lock/subsys/nginx

start() {

[ -x $nginx ] || exit 5

[ -f $NGINX_CONF_FILE ] || exit 6

echo -n $"Starting $prog: "

daemon $nginx -c $NGINX_CONF_FILE

retval=$?

echo

[ $retval -eq 0 ] && touch $lockfile

return $retval

}

stop() {

echo -n $"Stopping $prog: "

killproc $prog -QUIT

retval=$?

echo

[ $retval -eq 0 ] && rm -f $lockfile

return $retval

}

restart() {

configtest || return $?

stop

start

}

reload() {

configtest || return $?

echo -n $"Reloading $prog: "

killproc $nginx -HUP

RETVAL=$?

echo

}

force_reload() {

restart

}

configtest() {

$nginx -t -c $NGINX_CONF_FILE

}

rh_status() {

status $prog

}

rh_status_q() {

rh_status >/dev/null 2>&1

}

case "$1" in

start)

rh_status_q && exit 0

$1

;;

stop)

rh_status_q || exit 0

$1

;;

restart|configtest)

$1

;;

reload)

rh_status_q || exit 7

$1

;;

force-reload)

force_reload

;;

status)

rh_status

;;

condrestart|try-restart)

rh_status_q || exit 0

;;

*)

echo $"Usage: $0 {start|stop|status|restart|condrestart|try-restart|reload|force-reload|configtest}"

exit 2

esac
```


#### 然后使用配置
```bash
cd /etc/init.d

chmod 755 /etc/init.d/nginx

chkconfig --add nginx
```

#### 可以使用
```bash
service nginx start
systemctl status nginx
```