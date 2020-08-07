---
layout: post
title: vuepress手顺书
---

**一般使用者只需要再docs/目录下放置目录和.md文件即可。**

注意两点要求：

1. .md文件的前四行必须符合规定

   ```
   ---
   layout: post
   title: 【vuepress】（十五）使用徽章,图片缩放
   ---
   ```

   如果没有写全，或者：是中文的：，都会编译不通过。

2. 每个目录里，都必须有一个README.md

   注意，文件名必须是大写！

---

对于维护者来说
npm install //同下,这样所有插件就都下载下来了，否则build虽然不报错，但是没效果。
npm run build //一般用来生成nav.js（导航目录才用到）
npm run dev //本地运行localhost:8080查看

## 基本描述

### 共同操作：

#### 把该工程拷贝到某处，修改配置文件
- config.js 修改base和你的github库名一致。
- 修改manifest.json，把/vuepress/修改成和你的库名一致。
- 修改secret.js , clientID，SclientSecret修改成你的github一致。
- 在.vuepress目录下写md文件或子目录写md文件，git push


#####  先介绍一下引入图片的两种写法。
推荐这么写。设置你的vscode或typora自动生成的图片可以写成这样
`<img :src="$withBase('/images/2020-06-19-10-55-15.png')" >`  
<img :src="$withBase('/images/2020-06-19-10-55-15.png')">

这种方式,前面docs是你的库名。
`![](/docs/logo.png)`  
![](/docs/logo.png)

#### 目录多了以后，需要生成导航栏
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

---

### 单机版运行：
   ```
   npm run build 
   npm run dev
   然后访问http://localhost:8080/base
   ```
   base通常是project，看docs/.vuepress/config.js里配置的base，当与你的工程名不符时修改该base

### github公网上运行：
   - 维护travis.yml
   - 查看title: 【vuepress】（十四）使用Travis CI文章

#### 建github库
把代码git push上去

#### 运行travis-ci
把该库和travis-ci（https://travis-ci.com）绑定
登陆，激活github库，就可以自动帮你编译，你一push，它就build deploy到虚拟机
你的github page就更新了。

---

### gitlab公网上运行
   - 维护gitlab-ci.yml
   - 无需配置runner，gitlab上自带share runner，push之后自动发布


---
### gitlab本地部署（公司内部）运行
   - 维护gitlab-ci.yml
   - 需要配置runner，专门的runner服务器192.168.3.112
   - docker exec -it gitlab_runner gitlab-runner register
      - 输入该项目→设置→CICD→URL和TOKEN
      - 描述：写明时什么executor最好
      - tag 什么也不输入，直接回车
      - executor = docker
      - 镜像 = node:latest
   - docker exec -it gitlab_runner gitlab-runner start // 有时Runner变灰色时需要执行
   - push代码即可，到CICD的pipeline上看执行结果。成功后，到SETTING的PAGE上的URL查看结果。

#### 注意：有时网页上没有css
【解决】：多半时因为.vuepress/config.js的base配置的不对。

