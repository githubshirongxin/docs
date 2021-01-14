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

## 再解决：
- 参考：
  - [Eclipse国内镜像源配置方法](https://www.cnblogs.com/sddai/p/9676096.html)
  - [apache tomcat 9.x not working with eclipse & Java 10.0.1](https://stackoverflow.com/questions/50085750/apache-tomcat-9-x-not-working-with-eclipse-java-10-0-1)

- 1. Install And Update 里输入这个地址。
```
http://mirrors.ustc.edu.cn/eclipse/webtools/repository/oxygen/
```
- 2. 下载更新，JST Server Adapters Extensions。之前安装过也没关系，就会更新。

解决问题了！
![](/docs/images/2021-01-14-14-48-07.png)

