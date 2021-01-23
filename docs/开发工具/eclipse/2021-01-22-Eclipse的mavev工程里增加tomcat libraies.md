---
layout: post
title: maven工程增加tomcat库
---

## 背景：
写了一个maven共同工程，里面读取cookie需要加载tomcat里的servlet包。
Eclipse因为已经安装了tomcat插件。建立dyanmic web project时默认带这个库。

现在不想手动拷贝jar进该工程。而是想利用tomcat库。

## 操作。

工程-》Java Build Path -》Libraries -》Add Library -》Server Runtime -》Apache Tomcat 9.0

![](/docs/images/2021-01-22-14-55-03.png)

然后，就编译通过了。