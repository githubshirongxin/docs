---
layout: post
title: 【Gitlab Runner】 本地Gitlab服务器的shared runner 和 Group Runner的配置方法
---

这两种Runner的注册用url和token不容易找到。
做此记录

## Group Runner

新建group，然后进入到该group，然后Setting-》CICD-》Runner-》URL，token
用这个信息注册。
![](/images/2020-07-30-11-35-19.png)

## shared Runner

管理员用户-》Overview-》Runner-》Set up a shared Runner manually -》 url，token
（注意不是Settings-》CICD）
![](/images/2020-07-30-11-35-43.png)
