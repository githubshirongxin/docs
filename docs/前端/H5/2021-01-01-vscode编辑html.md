---
layout: post
title: vscode编辑html
---

# 使用Visual Studio Code 来编写HTML代码

[![](https://upload.jianshu.io/users/upload_avatars/14125513/3b664814-c516-4205-bdea-3bb824ba9118?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp)](/u/ada96045bda1)

[吖请叫我施小猫](/u/ada96045bda1)关注

92019.02.14 14:49:50字数 477阅读 76,657

多一技傍身总是没错的。这是我学习的记录，若有不足，希望大家不吝赐教。

## 下载、安装Visual Studio Code

> [Visual Studio Code 免费下载地址](https://visualstudio.microsoft.com/zh-hans/downloads/)

## 设置Visual Studio Code（VSCode）语言为中文

Windows系统下按快捷键：ctrl+shift+p打开命令面板，界面如下：

![](//upload-images.jianshu.io/upload_images/14125513-93d34e55cdbee174.png?imageMogr2/auto-orient/strip|imageView2/2/w/1026/format/webp)

在输入框中输入：**Configure Language   （若是中文模式下，要切换其他语言，则输入：****配置语言）。回车。**

![](//upload-images.jianshu.io/upload_images/14125513-e8b81e65e096917b.png?imageMogr2/auto-orient/strip|imageView2/2/w/1014/format/webp)

在打开的locale.json 文件中修改“locale”值为“zh-CN”。修改成功后保存，重新打开VSCode，即可完成语言修改。

![](//upload-images.jianshu.io/upload_images/14125513-27816546a76ec179.png?imageMogr2/auto-orient/strip|imageView2/2/w/779/format/webp)

具体可选择的语言列表，可参考  [Visual Studio Code Display Language \(Locale\)](https://code.visualstudio.com/docs/getstarted/locales)

### 注意：若重启后语言没有改变，可能是你没有下载适用于 VSCode 的中文（简体）语言包，链接如下：

[Chinese \(Simplified\) Language Pack for Visual Studio Code \- Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)

  

* * *

##   

## VSCode下快速开始编写html的方法

1.新建文件（Ctrl + N）

2.新建的文件Untitled-1是纯文本格式的，需改为HTML格式。

更改后可以看到，语言模式和文件标头均改变。

3.快速生成标准的html代码

（1）在第一行输入！

（2）按Tab键或者选择代码提示中的！

## 在浏览器中查看HTML页面

> Visual Studio Code默认是在VScode的控制台下查看html页面，这对于我们调试和查看效果十分不方便。所以这里我们需要安装一下扩展插件，在浏览器中查看html页面。

安装完成后，选择你要在浏览器打开的HTML页面，按快捷键Alt + B 就可以在默认浏览器下打开你写的页面了。

使用快捷键 Shift + Alt + B 可以选择其他浏览器打开。

