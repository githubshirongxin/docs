---
layout: post
title: 【gitlab-ci-runner + nexus】加速docker下载 （二）nginx代理docker库ssl
---

nexus私库做了一些改进。

1. nexus web页面仍旧是用http://nexus.ccbjb.com.cn
2. nexus docker仓库使用nginx动态代理了