---
layout: post
title: eclipse的maven工程增加新的包的操作注意点
---

## 背景
一边开发java，引用了新的类，需要引入包。还没有引入，处于不识别该类的编译错误中。

## 操作
错误操作 `mvn install` ，虽然下载了包，但会报编译错误。

正确操作：工程-》右键 maven -》 Update project 选择force 。。。 -》 这样，下载包，但是不编译。
Eclipse该java类里引用新类的这一行，就不报错了。自动CTRL+SHIFT+O，能自动import进java。