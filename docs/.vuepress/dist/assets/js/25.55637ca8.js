(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{427:function(n,a,e){"use strict";e.r(a);var s=e(44),t=Object(s.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("为了好维护，把config.js拆分一下。仅此而已。")]),n._v(" "),e("h2",{attrs:{id:"_1，head配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1，head配置文件"}},[n._v("#")]),n._v(" 1，head配置文件")]),n._v(" "),e("h3",{attrs:{id:"新建-vuepress-config目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建-vuepress-config目录"}},[n._v("#")]),n._v(" 新建.vuepress/config目录")]),n._v(" "),e("h3",{attrs:{id:"进入-vuepress-config目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进入-vuepress-config目录"}},[n._v("#")]),n._v(" 进入.vuepress/config目录")]),n._v(" "),e("h3",{attrs:{id:"新建headconf-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建headconf-js"}},[n._v("#")]),n._v(" 新建headConf.js")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("module.exports = [ // 注入到当前页面的 HTML <head> 中的标签 favicon.io\n    ['link',{ rel: 'icon',href: '/favicon.ico'}],\n    ['meta', { name: 'name', content: 'shirongxin' }],\n    ['meta', { name: 'keywords', content: 'java,cobol,分布式存储' }], // 增加一个自定义的 favicon(网页标签的图标)\n\n]\n")])])]),e("h3",{attrs:{id:"修改config-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改config-js"}},[n._v("#")]),n._v(" 修改config.js")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('// 增加引入\nconst headConf = require("./config/headConf");\n\nmodule.exports = {\n...\n// 修改head，使用引入的常量\nhead: headConf,\n...\n\n}\n\n')])])]),e("h2",{attrs:{id:"_2，plugin配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2，plugin配置文件"}},[n._v("#")]),n._v(" 2，plugin配置文件")]),n._v(" "),e("p",[n._v("类似\n"),e("img",{attrs:{src:"/docs/images/2020-07-22-20-32-44.png",alt:""}})]),n._v(" "),e("h2",{attrs:{id:"最后config-xml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最后config-xml"}},[n._v("#")]),n._v(" 最后config.xml")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('const headConf = require("./config/headConf.js");\nconst pluginsConf = require("./config/pluginsConf");\nconst navConf = require("./config/navConf.js");\nconst sidebarConf = require("./config/sidebarConf.js");\n\n\nmodule.exports = {\n    base: "/vuepress",\n    title: \'shirx blog\',\n    description: \'我的个人网站\',\n    head: headConf,\n    markdown: {\n      lineNumbers: false // 代码块显示行号\n    },\n    plugins: pluginsConf,\n    themeConfig: {\n      lastUpdated: \'更新时间\',\n      logo: \'/logo.png\',\n      nav: navConf,\n      /* 方案1：侧边栏只显示三组中的一组链接 */\n       sidebar: sidebarConf,\n    }\n}\n')])])])])}),[],!1,null,null,null);a.default=t.exports}}]);