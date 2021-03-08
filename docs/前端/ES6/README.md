---
layout: post
title: ES6
---


[ECMAScript 6 入门(阮一峰)](https://es6.ruanyifeng.com/#docs/array)

## ES6的开发和运行环境。

vscode就能开发运行es6，包括多个js模块使用都是可以的。

- 开发：
  - html 
  VScode中，开发html，Shift+！自动生成html代码。
  然后在<script>标签内部开发。
  - js
  VSCode中，开发js，被html引用。
  ```js
   hello.js // export { util}
   main.js // import {util} from 'hello.js' // import比nodejs的requre先进一些。
   user.js // export {} 
  ```

::: warning
 注意，如果html引用别的js，需要在`<script type="module">`这样写!
:::

- 运行：
Vscode中，在html页面上，右键-》Open With Live Server -》 在打开的浏览器按F12查看结果。

[尚硅谷Web前端ES6教程](https://www.bilibili.com/video/BV1uK411H7on?p=43&spm_id_from=pageDriver)
![](/docs/images/2021-03-08-13-21-46.png)
