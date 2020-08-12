---
layout: post
title: 【nexus3-nginx-docker仓库】
---

nexus3+nginx+代理docker仓库


## 思路：
参考：https://www.cnblogs.com/sanduzxcvbnm/p/13099635.html
- docker仓库的host仓库、group仓库这两个端口用一个域名来代理。
- 根据docker cli的method来判断是否是docker pull还是docker push。pull重定向到group仓库，push重定向到host仓库。
- nexus web 用另一个域名来代理8081端口。

## 结论：
- root.ca拷贝到客户端的docker目录后，就不需要设置/etc/docker/daemon.json里设置insecure-retistry了。

## 引申：
- harbor.ccbjb.com.cn的根证书也需要同样拷贝到/etc/docker/certs.d/harobor.ccbjb.com.cn中。这样就不用写insecre-registry了。
 docker就可以用了。

可能还可以改进一下：根据客户端使用的代理工具是docker重定向到8081，代理工具是chrome，再判断method是pull 重定向到group，push重定向的host
不过上面已经非常好了。

我是在192.168.3.124上ngixn ,nexus搭建的
在192.168.3.125上做的测试。
