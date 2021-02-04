---
layout: post
title: Eclipse的 Dynamic Web Project打包之后在 Web Modules里找不到的解决办法
---

工程右键 属性，把版本改成3.1 . tomcat9不支持4.0
![](/docs/images/2021-02-04-11-54-42.png)

然后在module里就能看到了
![](/docs/images/2021-02-04-11-55-26.png)


如果不让改3.1，那就[参考 解决Cannot change version of project facet Dynamic web module to 2.5](https://blog.csdn.net/steveguoshao/article/details/38414145)这篇文章，
一步步修改配置文件。最终可以改成3.1.

注意，文章里面的java版本-》 我们需要1.8. 文章里面的2.5 -》 3.1


