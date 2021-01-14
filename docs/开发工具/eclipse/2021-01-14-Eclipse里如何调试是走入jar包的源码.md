---
layout: post
title: Eclipse调试时如何走到jar包的源码
---

1. 先去下载源代码
google 搜索，得到一个jar包。例如，shiro的源代码
```
F:/work/shiro/shiro-core-1.3.2-sources.jar
```

2. 选择jar包，右键，属性,选择java source Attachment选择刚才的源代码
![](/docs/images/2021-01-14-16-25-12.png)
![](/docs/images/2021-01-14-16-24-53.png)

3. 这样调试（debug）的时候，就能走到这个shiro的源代码了。


## 举个例子，调试到这个画面

![](/docs/images/2021-01-14-17-44-44.png)
我们搜索`mybatis 3.1.1 source download`
得到
```
[Maven Repository: mybatis-3.1.1source.jar 链接。](http://www.java2s.com/Code/Jar/m/Downloadmybatis311sourcesjar.htm)
```
