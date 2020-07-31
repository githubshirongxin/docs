(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{413:function(n,e,s){"use strict";s.r(e);var a=s(42),t=Object(a.a)({},(function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[n._v("这恐怕是最重要的插件了。\nvuepress原本不支持自动生成侧边栏，文件名导航。\n自动生成的都是文件内容里标题的侧边栏导航。")]),n._v(" "),s("p",[s("a",{attrs:{href:"https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/features/plugin-options.html#title%EF%BC%88%E6%A0%87%E9%A2%98%EF%BC%89",target:"_blank",rel:"noopener noreferrer"}},[n._v("vuepress-plugin-auto-sidebar"),s("OutboundLink")],1)]),n._v(" "),s("h2",{attrs:{id:"安装（installation）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装（installation）"}},[n._v("#")]),n._v(" 安装（Installation）")]),n._v(" "),s("p",[s("code",[n._v("npm i vuepress-plugin-auto-sidebar -D")])]),n._v(" "),s("h2",{attrs:{id:"使用（usage）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用（usage）"}},[n._v("#")]),n._v(" 使用（Usage）")]),n._v(" "),s("p",[n._v("最简单的使用，无需配置 themeConfig：")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// **/.vuepress/config.js\nconst headConf = require(\"./config/headConf.js\");\nconst pluginsConf = require(\"./config/pluginsConf\");\n// const nav = require(\"./nav\");\n\nmodule.exports = {\n  base: \"/docs/\",\n  title: 'shirx blog',\n  description: '思想persistent',\n  head: headConf,\n  markdown: {\n    lineNumbers: false // 代码块显示行号\n  },\n  plugins: pluginsConf,\n  themeConfig: {\n    lastUpdated: '更新时间',\n    logo: '/logo.png',\n   // nav: nav,\n    /* 方案1：侧边栏只显示三组中的一组链接 */\n    // sidebar: sidebarConf, //使用了vuepress plugin auto sidebar就不用这些了\n  }\n}\n")])])]),s("p",[n._v("执行编译 "),s("code",[n._v("npm run build")]),n._v(" ,会生成.vuepress/nav.js\n然后修改config.js把nav相关两处注释打开。")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// **/.vuepress/config.js\nconst headConf = require(\"./config/headConf.js\");\nconst pluginsConf = require(\"./config/pluginsConf\");\nconst nav = require(\"./nav\");\n\nmodule.exports = {\n  base: \"/docs/\",\n  title: 'shirx blog',\n  description: '思想persistent',\n  head: headConf,\n  markdown: {\n    lineNumbers: false // 代码块显示行号\n  },\n  plugins: pluginsConf,\n  themeConfig: {\n    lastUpdated: '更新时间',\n    logo: '/logo.png',\n    nav: nav,\n    /* 方案1：侧边栏只显示三组中的一组链接 */\n    // sidebar: sidebarConf, //使用了vuepress plugin auto sidebar就不用这些了\n  }\n}\n")])])]),s("p",[n._v("再编译"),s("code",[n._v("npm run build")])]),n._v(" "),s("p",[s("font",{attrs:{color:"red"}},[n._v("注意：生成导航需要编译两次，还得改config.js")])],1),n._v(" "),s("h2",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[n._v("#")]),n._v(" 说明")]),n._v(" "),s("p",[n._v("在设计时，希望能够更专心于写好你的博客或笔记，无论之后增删改文件都不再需要关心插件的配置问题，所以将一些配置置于文件内。")]),n._v(" "),s("p",[n._v("进一步了解 Front Matter。")]),n._v(" "),s("h2",{attrs:{id:"精准排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#精准排序"}},[n._v("#")]),n._v(" 精准排序")]),n._v(" "),s("p",[n._v("更精准的排序需要在文件中添加 autoPrev 或 autoNext 并指定同目录下的文件名，需要注意的是，错误的文件名会导致侧边栏不显示该文件。")]),n._v(" "),s("p",[n._v("如将当前页面排序到 插件的可选项 后面：")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("---\nautoPrev: plugin-options\n---\n")])])]),s("p",[n._v("除了精准排序，还有内置的排序规则。")]),n._v(" "),s("h3",{attrs:{id:"多个分组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多个分组"}},[n._v("#")]),n._v(" 多个分组")]),n._v(" "),s("p",[n._v("希望像 vuepress 官网那样支持多个分组，需要在文件内添加分组标识 autoGroup：")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("---\nautoGroup-1: 分组名称\n# autoGroup+10: 分组名称\n---\n")])])]),s("p",[n._v("其中 autoGroup 为固定格式，不可更改。- 和 + 二者选其一，- 代表在默认分组的下方，数字越大越往下；+ 代表在默认分组的上方，数字越大越往上。")]),n._v(" "),s("p",[n._v("配置示例：\n![]((https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/assets/group-config-effect.png)")])])}),[],!1,null,null,null);e.default=t.exports}}]);