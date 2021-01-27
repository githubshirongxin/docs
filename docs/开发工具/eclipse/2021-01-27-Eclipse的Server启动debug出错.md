---
layout: post
title: Eclipse的server做debug启动出错 java.net.MalformedURLException
---

## 问题
```java
java.net.MalformedURLException: no protocol: null/notice/shutdown
	at java.net.URL.<init>(URL.java:610)
	at java.net.URL.<init>(URL.java:507)
	at java.net.URL.<init>(URL.java:456)
```
![](/docs/images/2021-01-27-11-07-11.png)
![](/docs/images/2021-01-27-11-07-32.png)

## 解决：

右键-》clean，然后再debug就好了。
![](/docs/images/2021-01-27-11-14-10.png)

![](/docs/images/2021-01-27-11-14-27.png)