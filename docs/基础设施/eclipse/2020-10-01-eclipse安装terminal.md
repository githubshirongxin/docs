---
layout: post
title: 【eclipse2020安装terminal】【eclipse设置代理，eclipse翻墙，eclipse代理，eclipse网络代理】【eclipse安装web插件，eclipse编写HTML，eclipse编写CSS，eclipse编写js】
---

eclipse最新版本2020-06默认是没有terminal。
而terminal里输入命令，例如git命令，或者自己编写的sh命令，是非常实用的。

## 安装terminal
参考：[怎么在eclipse安装terminal插件](https://jingyan.baidu.com/article/6c67b1d6b769932787bb1e20.html)

具体不写了。


### 问题是：安装经常失败，因为没有翻墙。这个问题必须解决。

## eclipse设置代理
参考：[eclipse网络代理。](https://jingyan.baidu.com/article/c1465413df9f620bfcfc4c8e.html)
设置完代理之后，下载和安装的过程非常快！！

![](/docs/images/2020-10-01-16-37-45.png)
每秒3M！！！切记，要用代理。

#### 配置 Terminal
在“首选项”->“终端”->“本地终端”配置屏幕中，可以选择${project_loc}作为初始工作目录。
![](/docs/images/2020-10-01-16-15-17.png)

::: warning
 - 如果不这么配置，每次进入的路径都不是该工程路径。
 - 这么用最方便！
:::

当然，你需要鼠标先选中一个项目，然后点打开终端按钮。否则会报错。
![](/docs/images/2020-10-01-16-19-59.png)


## 安装web插件
![](/docs/images/2020-10-01-16-36-32.png)
