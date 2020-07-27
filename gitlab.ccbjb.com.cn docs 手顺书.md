---
layout: post
title: vuepress手顺书
---



## 基本描述

- 可以单机版使用。意义不大
- 可以当作github的pages使用，前提是必须能上网。
  这样，当作自己的个人博客非常合适。
  当作项目文档也比较合适。
- 挂在本地的gitlab的pages上。
  还没实践。

本手顺书当作挂载外网的github的pages上。

## 先安装依赖包

包里的node_module 184M ，可以运行下列两个命令自动生成。要是没有网络的话可以直接拷过去。

- yarn install或npm install

- npm run build

## 修改配置文件。
config.js 修改base和你的github库名一致。
修改manifest.json，把/vuepress/修改成和你的库名一致。
修改secret.js , clientID，SclientSecret修改成你的github一致。

## 建github库
把代码git push上去

## 运行travis-ci
把该库和travis-ci（https://travis-ci.com）绑定
登陆，激活github库，就可以自动帮你编译，你一push，它就build deploy到虚拟机
你的github page就更新了。


## 写md文件，git push
### 在.vuepress目录下写md文件或子目录

### 先介绍一下引入图片的两种写法。

推荐这么写。设置你的vscode或typora自动生成的图片可以写成这样
`<img :src="$withBase('/images/2020-06-19-10-55-15.png')" >`  
<img :src="$withBase('/images/2020-06-19-10-55-15.png')">

这种方式,前面docs是你的库名。
`![](/docs/logo.png)`  
![](/docs/logo.png)

### 目录多了以后，需要生成导航栏
把原来的.vuepress/nav.js删掉
.vuepress/config.js 注释两行
// const nav = require("./nav");
// nav: nav,

然后运行npm run build , 会生成.vuepress/nav.js
然后再把.vuepress/config.js 注释的两行打开
 const nav = require("./nav");
 nav: nav,
然后运行npm run build 

然后在根目录下 git push. Travis-ci会自动生成静态内容，网页可以访问了



## gitlab-runner docker 里没有yarn命令
curl --silent --location https://rpm.nodesource.com/setup_10.x | bash -
yum install -y nodejs
npm install -g cnpm --registry=https://registry.npm.taobao.org
npm install yarn


