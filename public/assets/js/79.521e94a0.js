(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{557:function(s,e,t){"use strict";t.r(e);var r=t(55),a=Object(r.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_8-增加评论功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-增加评论功能"}},[s._v("#")]),s._v(" 8. 增加评论功能")]),s._v(" "),t("p",[s._v("https://www.bilibili.com/video/BV1vb411m7NY?p=10")]),s._v(" "),t("ul",[t("li",[s._v("bing.com搜索vssue，")]),s._v(" "),t("li",[s._v("进入指南→开始使用→ "),t("a",{attrs:{href:"https://vssue.js.org/zh/guide/supported-platforms.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("支持的代码托管平台 - 创建 OAuth App"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("→指南： "),t("a",{attrs:{href:"https://vssue.js.org/zh/guide/github.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("创建 GitHub OAuth App"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("→前往 "),t("a",{attrs:{href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer"}},[s._v("Settings - Developer Settings - OAuth Apps"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("创建一个OAth Apps\n"),t("img",{attrs:{src:"/docs/images/2020-07-22-16-57-54.png",alt:""}})]),s._v(" "),t("li",[s._v("输入你的应用程序的地址\n"),t("img",{attrs:{src:"/docs/images/2020-07-22-16-58-45.png",alt:""}})])]),s._v(" "),t("p",[s._v("我的启动地址：http://localhost:8080/vuepress\n但是这里我写的仍旧是http://localhost:8080不带vuepress。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("回到开始使用→ "),t("a",{attrs:{href:"https://vssue.js.org/zh/guide/supported-platforms.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("支持的代码托管平台 - 创建 OAuth App"),t("OutboundLink")],1),s._v(" Github GraphQL API V4")])]),s._v(" "),t("li",[t("p",[s._v("Vssue指南→静态网站工具→VuePress→"),t("a",{attrs:{href:"https://vssue.js.org/zh/guide/vuepress.html#vuepress-%E6%8F%92%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vuepress插件"),t("OutboundLink")],1)]),s._v(" "),t("ul",[t("li",[s._v("通过 NPM 安装 @vssue/vuepress-plugin-vssue 和你需要使用的 API 包 :"),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 在package.json同级目录执行\nnpm install @vssue/vuepress-plugin-vssue\nnpm install @vssue/api-github-v4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[s._v("使用插件：\n修改.vuepress/config.js")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" // .vuepress/config.js\n  module.exports = {\n   plugins: {\n     '@vssue/vuepress-plugin-vssue': {\n       // 注意：这里要改成github-v4！\n       platform: 'github-v4',\n\n       // 其他的 Vssue 配置，这里要修改！\n       owner: 'githubshirongxin',\n       repo: 'vuepress',\n       clientId: '3f5f201b0a21b905dc07',\n       clientSecret: 'd73a450665aa3cc68ef461c8b1678db1919a5a03',\n     },\n   },\n };\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("owner,repo:\n"),t("img",{attrs:{src:"/docs/images/2020-07-22-17-09-00.png",alt:""}}),s._v("\nclientID,clientSecret:\n"),t("img",{attrs:{src:"/docs/images/2020-07-22-17-09-33.png",alt:""}})])])]),s._v(" "),t("h3",{attrs:{id:"具体某个单页个别增加评论功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体某个单页个别增加评论功能"}},[s._v("#")]),s._v(" 具体某个单页个别增加评论功能")]),s._v(" "),t("p",[s._v("在上面的设置下，md文件末尾增加'<Vssue />'")]),s._v(" "),t("ul",[t("li",[s._v("能出现评论框")]),s._v(" "),t("li",[s._v("需要点创建评论才行")]),s._v(" "),t("li",[s._v("评论后，内容出现在github库的issue里。issue就是评论，评论就是issue。")])]),s._v(" "),t("h3",{attrs:{id:"改进成-自动创建评论-评论前不用点创建了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改进成-自动创建评论-评论前不用点创建了"}},[s._v("#")]),s._v(" 改进成‘自动创建评论’,评论前不用点创建了")]),s._v(" "),t("p",[s._v("Vssue导航栏选【"),t("a",{attrs:{href:"https://vssue.js.org/zh/options/",target:"_blank",rel:"noopener noreferrer"}},[s._v("配置"),t("OutboundLink")],1),s._v("】点‘autoCreateIssue’\nconfig.js里增加"),t("code",[s._v("autoCreateIssue: true")]),s._v(" "),t("img",{attrs:{src:"/docs/images/2020-07-22-17-18-48.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"所有页面都加上评论功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#所有页面都加上评论功能"}},[s._v("#")]),s._v(" 所有页面都加上评论功能")]),s._v(" "),t("p",[t("img",{attrs:{src:"/docs/images/2020-07-22-17-20-57.png",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"vuepress导航栏选-主题-→-主题的继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress导航栏选-主题-→-主题的继承"}},[s._v("#")]),s._v(" vuepress导航栏选“主题”→“主题的继承”")]),s._v(" "),t("p",[s._v("在.vuepress下创建theme")]),s._v(" "),t("ul",[t("li",[s._v("创建theme/index.js"),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" module.exports = {\n  extend: '@vuepress/theme-default'\n }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[s._v("下面又创建layouts，把vuepress源码中的Layout.vue拷贝过来准备修改。\n"),t("a",{attrs:{href:"https://github.com/githubshirongxin/vuepress",target:"_blank",rel:"noopener noreferrer"}},[s._v("源码地址"),t("OutboundLink")],1),s._v("在package/@vuepress/theme-default/\n"),t("ul",[t("li",[s._v("layouts/Layout.vue 考进来准备加入<Vssue />")]),s._v(" "),t("li",[s._v("util/index.js 原封不到考进来")])])]),s._v(" "),t("li",[s._v("修改layouts/Layout.vue增加<Vssue />标签\n"),t("img",{attrs:{src:"/docs/images/2020-07-22-17-25-46.png",alt:""}})])]),s._v(" "),t("h3",{attrs:{id:"最后修改auth的网址为gitlab网址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最后修改auth的网址为gitlab网址"}},[s._v("#")]),s._v(" 最后修改Auth的网址为gitlab网址")]),s._v(" "),t("h4",{attrs:{id:"修改oauth-里的url为github-pages的url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改oauth-里的url为github-pages的url"}},[s._v("#")]),s._v(" 修改OAuth 里的url为github pages的url")]),s._v(" "),t("p",[s._v("github→用户→settings→Developers settings→"),t("a",{attrs:{href:"https://github.com/settings/apps",target:"_blank",rel:"noopener noreferrer"}},[s._v("OAuth app"),t("OutboundLink")],1),s._v("\nurl改一下，clientid和clientsecret不会变。\n"),t("img",{attrs:{src:"/docs/images/2020-07-22-17-38-16.png",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"进入到githubshirongxin-vuepress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进入到githubshirongxin-vuepress"}},[s._v("#")]),s._v(" 进入到"),t("a",{attrs:{href:"https://github.com/githubshirongxin/vuepress",target:"_blank",rel:"noopener noreferrer"}},[s._v("githubshirongxin/vuepress"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("img",{attrs:{src:"/docs/images/2020-07-22-17-43-26.png",alt:""}}),s._v("\n项目settings→GitHubPages → https://githubshirongxin.github.io/vuepress/\n"),t("img",{attrs:{src:"/docs/images/2020-07-22-17-44-11.png",alt:""}}),s._v("\n进入后发现都已经又评论了。")])])}),[],!1,null,null,null);e.default=a.exports}}]);