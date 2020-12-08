---
layout: post
title: 修改vscode image paste插件的配置
---

vscode写文档的paste image插件又得修改一下，因为这次base=docs 访问的URL：

https://githubshirongxin.github.io/docs

# Step1, image生成目录
/docs/.vuepress/public/images/ 修改paste image插件的配置 
- path
```
${projectRoot}/docs/.vuepress/public/images
```
![](/docs/images/2020-12-08-10-12-40.png)
- base path
```
${projectRoot}/docs/.vuepress/public/images
```

![](/docs/images/2020-12-08-10-12-10.png)

# Step2, md中ctrl+alt+v 生成的代码
- insert pattern
```
${imageSyntaxPrefix}/docs/images/${imageFilePath}${imageSyntaxSuffix}
```
![](/docs/images/2020-12-08-10-12-24.png)