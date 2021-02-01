---
layout: post
title: sso跨域写sys1,sys2的cookie出错。net::ERR_CERT_AUTHORITY_INVALID
---

## 现象
https://www.ca.com/login的提交。js出错。net::ERR_CERT_AUTHORITY_INVALID
![](/docs/images/2021-02-01-16-04-06.png)


## 分析：
提前输入https://www.sys1.com:8443/，https://www.sys2.com:8444/并点击高级，继续浏览。
再执行。https://www.ca.com/login的提交。
发现就没有问题了。并写cookie都成功写入了。

![](/docs/images/2021-02-01-16-06-38.png)


## 结论：
浏览器需要安装sys1,sys2的证书。
否则无法写入cookie。

- 扩展：得找另外一种实现SSO方式才好。