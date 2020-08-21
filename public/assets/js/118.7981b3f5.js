(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{603:function(s,n,a){"use strict";a.r(n);var e=a(59),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("这恐怕是最重要的插件了。\nvuepress原本不支持自动生成侧边栏，文件名导航。\n自动生成的都是文件内容里标题的侧边栏导航。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/features/plugin-options.html#title%EF%BC%88%E6%A0%87%E9%A2%98%EF%BC%89",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-plugin-auto-sidebar"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"安装（installation）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装（installation）"}},[s._v("#")]),s._v(" 安装（Installation）")]),s._v(" "),a("p",[a("code",[s._v("npm i vuepress-plugin-auto-sidebar -D")])]),s._v(" "),a("h2",{attrs:{id:"使用（usage）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用（usage）"}},[s._v("#")]),s._v(" 使用（Usage）")]),s._v(" "),a("p",[s._v("最简单的使用，无需配置 themeConfig：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// **/.vuepress/config.js\nconst headConf = require(\"./config/headConf.js\");\nconst pluginsConf = require(\"./config/pluginsConf\");\n// const nav = require(\"./nav\");\n\nmodule.exports = {\n  base: \"/docs/\",\n  title: 'shirx blog',\n  description: '思想persistent',\n  head: headConf,\n  markdown: {\n    lineNumbers: false // 代码块显示行号\n  },\n  plugins: pluginsConf,\n  themeConfig: {\n    lastUpdated: '更新时间',\n    logo: '/logo.png',\n   // nav: nav,\n    /* 方案1：侧边栏只显示三组中的一组链接 */\n    // sidebar: sidebarConf, //使用了vuepress plugin auto sidebar就不用这些了\n  }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("执行编译 "),a("code",[s._v("npm run build")]),s._v(" ,会生成.vuepress/nav.js\n然后修改config.js把nav相关两处注释打开。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// **/.vuepress/config.js\nconst headConf = require(\"./config/headConf.js\");\nconst pluginsConf = require(\"./config/pluginsConf\");\nconst nav = require(\"./nav\");\n\nmodule.exports = {\n  base: \"/docs/\",\n  title: 'shirx blog',\n  description: '思想persistent',\n  head: headConf,\n  markdown: {\n    lineNumbers: false // 代码块显示行号\n  },\n  plugins: pluginsConf,\n  themeConfig: {\n    lastUpdated: '更新时间',\n    logo: '/logo.png',\n    nav: nav,\n    /* 方案1：侧边栏只显示三组中的一组链接 */\n    // sidebar: sidebarConf, //使用了vuepress plugin auto sidebar就不用这些了\n  }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("再编译"),a("code",[s._v("npm run build")])]),s._v(" "),a("p",[a("font",{attrs:{color:"red"}},[s._v("注意：生成导航需要编译两次，还得改config.js")])],1),s._v(" "),a("h2",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),a("p",[s._v("在设计时，希望能够更专心于写好你的博客或笔记，无论之后增删改文件都不再需要关心插件的配置问题，所以将一些配置置于文件内。")]),s._v(" "),a("p",[s._v("进一步了解 Front Matter。")]),s._v(" "),a("h2",{attrs:{id:"精准排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#精准排序"}},[s._v("#")]),s._v(" 精准排序")]),s._v(" "),a("p",[s._v("更精准的排序需要在文件中添加 autoPrev 或 autoNext 并指定同目录下的文件名，需要注意的是，错误的文件名会导致侧边栏不显示该文件。")]),s._v(" "),a("p",[s._v("如将当前页面排序到 插件的可选项 后面：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("---\nautoPrev: plugin-options\n---\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("除了精准排序，还有内置的排序规则。")]),s._v(" "),a("h3",{attrs:{id:"多个分组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多个分组"}},[s._v("#")]),s._v(" 多个分组")]),s._v(" "),a("p",[s._v("希望像 vuepress 官网那样支持多个分组，需要在文件内添加分组标识 autoGroup：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("---\nautoGroup-1: 分组名称\n# autoGroup+10: 分组名称\n---\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("其中 autoGroup 为固定格式，不可更改。- 和 + 二者选其一，- 代表在默认分组的下方，数字越大越往下；+ 代表在默认分组的上方，数字越大越往上。")]),s._v(" "),a("p",[s._v("配置示例：\n![]((https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/assets/group-config-effect.png)")])])}),[],!1,null,null,null);n.default=t.exports}}]);