---
layout: post
title: 【vuepress】（十三）markdown中使用view
---

没成功，先算了吧。不熟悉vue。

github上搜索[countUp.js](https://github.com/inorganik/countUp.js)

[demo](https://inorganik.github.io/countUp.js/)

npm i countup.js

vuepress指南→[在markdown中使用vue](https://www.vuepress.cn/guide/using-vue.html)

## vuepress特殊语法

```
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::
```

代码块中的行高亮
输入

``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
除了单行以外，你也可指定多行，行数区间，或是两者都指定。

行数区间: 例如 {5-8}, {3-10}, {10-17}
多个单行: 例如 {4,7,9}
行数区间与多个单行: 例如 {4,7-13,16,23-27,40}
