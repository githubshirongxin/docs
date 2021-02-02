---
layout: post
title: 用CAS原理加JWT自己实现的SSO实现方案，基于token的会话管理
---

https://zhuanlan.zhihu.com/p/70371906

有基于session的，基于cookie的，基于token的。

我觉得讲得非常好。

关键点，就是sessionId是，每次都加密出一摸一样的。根据用户名，密码和密钥。加密出一个一样的sessionID。
这样能实现跨浏览器登陆后，获得之前存储的session对象。



