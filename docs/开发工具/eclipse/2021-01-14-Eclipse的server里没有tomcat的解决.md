---
layout: post
titile: Eclipse想运行dynamic web prjojet，Run as server，但server里没有tomcat选项
---

## 下面操作能解决 server里有apache的tomcat列表最高版本8.
Help → Eclipse marketplace → 搜索下面
安装JST Server Adapters和JST Server Adapters Extensions

![](/docs/images/2021-01-14-09-40-47.png)

## 问题仍旧没有解决，因为我的tomcat版本是9，列表里没有！

而且8.5，eclipse也不支持。

- 官网上8.0下载链接被删除！
```
三个月后（即2018年9月30日之后）

8.0. x 下载链接将被删除
最新的 8.0.x 版本将从镜像系统中删除
svn 中的 8.0.x 分支将从移动到/tomcat/tc8.0.x/tomcat/archive/tc8.0.x
指向 8.0.x 文档的链接将从tomcat.apache.org
请注意，所有 8.0.x 版本始终从存档中可用。

预计最终的 8.0.x 版本将于 2018 年 6 月 30 日前不久发布。
```

结论：还是别用tomcat了。