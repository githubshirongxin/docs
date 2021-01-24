---
layout: post
title: tomcat启用ssl
---

## 1.生成证书
用tomcat/bin下的命令
![](/docs/images/2021-01-23-14-54-51.png)
![](/docs/images/2021-01-23-14-53-53.png)

输入口令，123456

就生成了证书。


## 2，使用证书
tomcat/server.xml

![](/docs/images/2021-01-23-14-56-01.png)