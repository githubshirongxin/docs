---
layout: post
title: vuepress相关
autoNext: 2020-7-22-vuepress安装设置-01安装
---
有时候README提交push之后并不更新。

vscode写文档的paste image插件又得修改一下，因为这次base=docs
访问的URL：
- https://githubshirongxin.github.io/docs

## Step1, image生成目录
/docs/.vuepress/public/images/
修改paste image插件的配置
![](/docs/images/2020-07-23-18-13-52.png)

- path
`${projectRoot}/docs/.vuepress/public/images`
- base path
`${projectRoot}/docs/.vuepress/public/images`

## Step2, md中ctrl+alt+v 生成的代码

- insert pattern
`${imageSyntaxPrefix}/docs/images/${imageFilePath}${imageSyntaxSuffix}`

## 验证
```
![](/docs/images/2020-07-23-18-13-52.png)
```
在/docs/.vuepress/public/images/中生成了图片。

```
git add -A
git commit -m"test"
git push origin master
```
稍等一会，https://travis-ci.com/github/githubshirongxin/docs 编译结束之后
去https://githubshirongxin.github.io/docs查看一下图片已经反应上去了。
