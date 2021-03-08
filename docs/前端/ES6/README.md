---
layout: post
title: ES6
---


[ECMAScript 6 入门(阮一峰)](https://es6.ruanyifeng.com/#docs/array)

## ES6的开发和运行环境。


### 1. 在html中引入其他模块
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

### 2. app.js引入其他js，然后html引入app.js (依靠浏览器支持ES6，项目中不常用)

项目中不这样用。
- 原因：
  1. 依靠浏览器，有些浏览器不支持ES6
  2. 不能引入npm 安装的模块。
- 所以：
  经常使用Babel，见下一小节。

[视频参考：](https://www.bilibili.com/video/BV1uK411H7on?p=45)

基本的vscode开发流程与1.相同。只是不在html引入过多的模块。

- html引入app.js模块
```html
<script src="./app.js" type="module"></script>
```
![](/docs/images/2021-03-08-13-36-05.png)

- app.js 引入其他模块
```js
import * as m1 from "./m1.js";
```
![](/docs/images/2021-03-08-13-37-02.png)


## 3. babel 将Es6转为浏览器能识别的ES5，然后打包js，让html引入
[视频](https://www.bilibili.com/video/BV1uK411H7on?p=46)

#### 先转换
- Step1 , 安装babel-cli, babel-preset-env, browserify(打包工具) 一般项目用webpack。
`npm -i -g babel-cli, babel-preset-env, browserify`
- Step2 , 执行命令转换js
`babel src/js -d dist/js --presets=babel-preset-env`
#### 再打包
- Step3 , 打包
babel编译之后的js直接import是不认得，必须打包。
`npx browserify dist/jks/app.js -o dist/bundle.js`
#### 引入打包后的js
- Step4, html引入bundle.js
html
```html
    <script src="dist/bundle.js"></script>
```

## 4. npm包引入

[例如jquery包。](https://www.bilibili.com/video/BV1uK411H7on?p=47)

1. app.js
```js
import $ from 'jquery' ; // ES6导入npm包的方式。
$('body').css('background','pink');
```
2. babel 编译，browserify打包
3. html引入app.js