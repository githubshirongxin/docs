---
layout: post
title: 【maven】 查找某个jar在中央库中是否存在 search.maven.org
---

https://search.maven.org/

## 查找技巧： g:group , a:artifact
![](/docs/images/2020-08-05-16-55-52.png)


## 提供了使用代码
有时候不按照这个使用说明去使用的话还真容易出错。
例如hibernate，如果不加<type>pom</type>的话，就会出错。
![](/docs/images/2020-08-05-17-02-40.png)

