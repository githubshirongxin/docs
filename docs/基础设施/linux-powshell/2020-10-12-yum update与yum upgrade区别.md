---
layout: post
title: yum update 与 yum upgrade区别
---

1、作用

都是bai系统升级命名。

2、升级内容

yum -y update：升级所有包du同zhi时也升级软件和系dao统内核；

yum -y upgrade：只升级所有包，不升级软件和系统内核。

3、使用范围
yum -y update：需要更新内核；

yum -y upgrade：更新系统时，软件和内核保持原样。