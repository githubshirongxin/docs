---
layout: post
title: SSOServer一些错误对策
---

## 启动SSOServer出错：
```
严重: 异常将上下文初始化事件发送到类的侦听器实例.[org.springframework.web.context.ContextLoaderListener]
org.springframework.beans.factory.CannotLoadBeanClassException: Cannot find class [demo.sso.server.Config] 
for bean with name 'demo.sso.server.Config#0' defined in class path resource [spring-ctx.xml]; nested exception is java.lang.ClassNotFoundException: demo.sso.server.Config
	at org.springframework.beans.factory.support.AbstractBeanFactory.resolveBeanClass(AbstractBeanFactory.java:1542)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.determineTargetType(AbstractAutowireCapableBeanFactory.java:693)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.predictBeanType(AbstractAutowireCapableBeanFactory.java:663)


Caused by: java.lang.ClassNotFoundException: demo.sso.server.Config
```

目标目录中classes都是空的。
![](/docs/images/2021-01-29-14-55-25.png)





- 删除D:tomcat下的 vtpdeploy下的目录。 
- server
  - remove module
  - start



## login.jsp 向业务系统发送cookie_set/请求之后，设置cookie。查看chrome有如下问题。cookie sys1.com设置失败。
```
Indicate whether a cookie is intended to be set in a cross-site context by specifying its SameSite attribute
Because a cookie’s SameSite attribute was not set or is invalid, it defaults to SameSite=Lax, which prevents the cookie from being set in a cross-site context. This behavior protects user data from accidentally leaking to third parties and cross-site request forgery.
Resolve this issue by updating the attributes of the cookie:
Specify SameSite=None and Secure if the cookie is intended to be set in cross-site contexts. Note that only cookies sent over HTTPS may use the Secure attribute.
Specify SameSite=Strict or SameSite=Lax if the cookie should not be set by cross-site requests.
1 Cookie
Name	域 & 路径
VT	www.sys1.com/
1 请求
cookie_set?vt=45332f98f0864272a303426ed1691fdf

```
- 解决：
  - login.jsp 设置  SameSite=None
  - 设置https

- 课题：
  - 如果仅仅要求认证中心是https还行，要是要求业务系统也必须是https，那就有点过分了。


## server上的VT过期时
```
java.io.IOException: Server returned HTTP response code: 500 for URL: http://www.sys1.com:8081/notice/timeout?vt=8dea574142224a4da5fc3441c197df1a&tokenTimeout=120
	at sun.net.www.protocol.http.HttpURLConnection.getInputStream0(HttpURLConnection.java:1900)
	at sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1498)
	at demo.sso.server.model.ClientSystem.httpAccess(ClientSystem.java:134)
	at demo.sso.server.model.ClientSystem.noticeTimeout(ClientSystem.java:112)
	at demo.sso.server.TokenManager$1.run(TokenManager.java:42)
	at java.util.TimerThread.mainLoop(Timer.java:555)
	at java.util.TimerThread.run(Timer.java:505)
```
- 原因： 好像没有经过SSOFilter，如果经过SSOFilter，会有/notice处理。
