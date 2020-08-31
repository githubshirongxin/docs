---
layout: post
title: 【k8s基本理解】nodePort、LoadBalance、ExternalName（未完）
---
https://blog.csdn.net/weixin_45792518/article/details/106960163

## LB:云上K8s常用。其实和nodePort是一种方式，区别在于LB比nodePort多了一步，
就是可以调用云提供商去创建LB来向节点导流。
问：不是云提供商，就只有k8s环境，LB能用吗？
预回答：不在云上能创建是可定的。创建过。LB是k8s创建的？

## ExternalName：集群DNS返回一个外部域名的CNAME，该域名是运行在集群外部的服务，通过返回别名的方式来提供服务。