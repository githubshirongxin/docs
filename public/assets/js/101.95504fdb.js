(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{585:function(s,n,e){"use strict";e.r(n);var a=e(59),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("注意：一定要本地安装，否则有些功能实现不了。\n"),e("code",[s._v("npm install -D vuepress")])]),s._v(" "),e("p",[s._v("个人blog，准备放在公司本地gitlab上，当项目文档使用。\n不知道能不能当作公司知识库，估计只适合当项目级别文档。\n本文档是手顺书。用这个文档可以操作。")]),s._v(" "),e("h2",{attrs:{id:"_1-vuepress安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-vuepress安装"}},[s._v("#")]),s._v(" 1. vuepress安装")]),s._v(" "),e("p",[s._v("https://www.bilibili.com/video/BV1vb411m7NY?p=2")]),s._v(" "),e("h3",{attrs:{id:"创建最基本的vuepress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建最基本的vuepress"}},[s._v("#")]),s._v(" 创建最基本的vuepress")]),s._v(" "),e("p",[s._v("新建一个目录project\n进入project\n把vuepress安装成本地依赖\n"),e("code",[s._v("npm install -D vuepress")]),s._v(" "),e("code",[s._v("npm init -y")]),s._v(" "),e("code",[s._v("mkdir docs")]),s._v(" "),e("code",[s._v("git init")]),s._v("\n修改package.json")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n  "scripts": {\n    "dev": "vuepress dev docs",\n    "build": "vuepress build docs"\n  }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("启动\n"),e("code",[s._v("npm run dev")])]),s._v(" "),e("h3",{attrs:{id:"为了更方便管理创建docs-config-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为了更方便管理创建docs-config-js"}},[s._v("#")]),s._v(" 为了更方便管理创建docs/config.js")]),s._v(" "),e("p",[s._v("docs/.vuepress/config.js")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("module.exports = {\n    base: \"/vuepress\",\n    title: 'shirx blog',\n    description: '我的个人网站',\n    head: [ // 注入到当前页面的 HTML <head> 中的标签 favicon.io\n      ['link',{ rel: 'icon',href: '/favicon.ico'}],\n      ['meta', { name: 'name', content: 'shirongxin' }],\n      ['meta', { name: 'keywords', content: 'java,cobol,分布式存储' }], // 增加一个自定义的 favicon(网页标签的图标)\n\n    ],\n    markdown: {\n      lineNumbers: false // 代码块显示行号\n    },\n};\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);