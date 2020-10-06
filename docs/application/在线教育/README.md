---
layout: post
title: CCBJB在线教育V1.0总结
---

# 在线教育总结 V1.0

- 前端：https://gitlab.ccbjb.com.cn/ec7mongrp/trainsubgrp/educateweb
- 后端：https://gitlab.ccbjb.com.cn/ec7mongrp/trainsubgrp/educateapp
- 视频维护机器：https://gitlab.ccbjb.com.cn/ec7mongrp/trainsubgrp/js
- DB：https://gitlab.ccbjb.com.cn/ec7mongrp/trainsubgrp/mysql


## 1 架构
前后端分离。angular+springboot+mysql
前端、后端、数据库、视频文件服务器、视频维护机器。
- 前端（192.168.3.138），就是简单的angular
- 后端（192.168.3.138），启动8080端口，监听前端的URL请求，也监听视频维护机器的URL请求。
- DB（192.168.3.138）.
- 视频文件服务器（192.168.3.139），是一台nginx服务，仅仅用来生成视频链接。
- 视频维护机器（192.168.3.104），启动了nodejs的守护进程，监视文件系统变化并发送给后端。

## 2 功能
 - 前端：
   - 查询所有课程
   - 看视频
 - 后端：
   - 自动更新视频链接（在DB）
 - 视频维护机器
   - 视频录入，更改，删除，都会发送给后端变化的数据，实时反应到DB
   - 为了防止上面功能暂时故障，做了一次性生成所有视频链接数据并发送给后端，一次行反应到DB的功能。

## 3 技术特点：
 - 开发语言上：
   - angular常规开发。并没有特别之处。
   - springboot常规开发，也没有特别之处。
   - 视频维护机器上跑的nodejs，是nodejs的文件系统监控chokidar
 - 运维上特点主要有两点：
   1. gitlab-ci上自动编译，自动发布。隐藏了发布服务器以及中间私有仓库的用户名密码等信息，用环境变量存储在gitlab中。
   2. 前端，后端使用了docker镜像技术，发布到私有镜像服务器（docker.ccbjb.com.cn)，服务器来下载。
   3. DB，使用了docker技术，一键生成DB库表以及内容。   

## 4 总结：
   该项目目前的技术并没有可圈可点之处。只是运维方式上尝试了先进的技术。

#  5 Release Note：
- 1.0版 2020-10-04 实现基本查询功能，动态更新视频链接。
