---
layout: post
title: nodejs 在vscode中debug的方法。
---

https://blog.csdn.net/xiasohuai/article/details/90551380


如果在windows上运行ffmpeg的nodejs，
需要首先在window上安装ffmpeg
安装ffmpeg首先需要编译环境（我没有找到静态版）

反之，在linux上安装ffmpeg特别容易。
所以我干脆在192.168.3.122上弄好了环境和程序。

然后windows上远程ssh开发方式，访问到192.168.3.122.
试了试上面的调试方法，竟然也好用。

所以，本地没有必要有各种环境了。
vscode开发远程或者容器里的内容，和开发本地是一样的。

![](/docs/images/2020-10-13-15-47-14.png)