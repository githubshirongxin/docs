(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{379:function(t,s,r){"use strict";r.r(s);var i=r(42),a=Object(i.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("a",{attrs:{href:"https://travis-ci.com/github/githubshirongxin/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("自动部署vuepress/docs"),r("OutboundLink")],1),t._v("\n可以看到编译结果。")]),t._v(" "),r("p",[t._v("部署→Github→"),r("a",{attrs:{href:"https://www.vuepress.cn/guide/deploy.html#github-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("TravisCI"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("在项目的根目录创建一个名为 .travis.yml 的文件；")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("language: node_js\nnode_js:\n  - lts/*\ninstall:\n  - npm ci # npm ci\nscript:\n  - npm run build # npm run docs:build\ndeploy:\n  provider: pages\n  skip_cleanup: true\n  local_dir: docs/.vuepress/dist\n  github_token: $GITHUB_TOKEN # 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable\n  keep_history: true\n  on:\n    branch: master\n")])])]),r("p",[t._v("https://travis-ci.com/\ngithub用户登陆\n会显示github所有工程，在docs后点击【Trigger abuild】\n注意不是vuepress库，因为vuepress只有dist没有编译需要的源代码。")]),t._v(" "),r("p",[t._v("github生成GitHubTOKEN，一个用户只有一个。\n"),r("img",{attrs:{src:"/docs/images/2020-07-23-11-04-50.png",alt:""}}),t._v(" "),r("img",{attrs:{src:"/docs/images/2020-07-23-11-06-19.png",alt:""}})]),t._v(" "),r("p",[t._v("把这个变量定义在travis-ci网站\n"),r("img",{attrs:{src:"/docs/images/2020-07-23-11-06-51.png",alt:""}})]),t._v(" "),r("p",[t._v("随便改改某个md")]),t._v(" "),r("p",[t._v("别忘了把.gitignore的私密信息注释，也push到github。\n例如.gitignore\nsecret.js")]),t._v(" "),r("p",[t._v("否则Travis-ci编译不成功")]),t._v(" "),r("h3",{attrs:{id:"修改某md后git-push"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#修改某md后git-push"}},[t._v("#")]),t._v(" 修改某md后git push")]),t._v(" "),r("h3",{attrs:{id:"去travis-ci网页上查看"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#去travis-ci网页上查看"}},[t._v("#")]),t._v(" 去Travis-ci网页上查看")]),t._v(" "),r("p",[t._v("Current\nhttps://travis-ci.com/github/githubshirongxin/docs\n"),r("img",{attrs:{src:"/docs/images/2020-07-23-11-20-29.png",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"github-pages"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#github-pages"}},[t._v("#")]),t._v(" Github pages")]),t._v(" "),r("p",[r("img",{attrs:{src:"/docs/images/2020-07-23-11-21-08.png",alt:""}}),t._v("\nYour site is published at https://githubshirongxin.github.io/docs/")]),t._v(" "),r("p",[t._v("网页也都反映了md的修改。")]),t._v(" "),r("h3",{attrs:{id:"我还真是不明白"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#我还真是不明白"}},[t._v("#")]),t._v(" 我还真是不明白")]),t._v(" "),r("p",[t._v("docs这样的目录统统传上去之后，travis-ci怎么编译的。\n如果这样就可以的化，就不需要两个库了。\n一个docs库：/project\n一个vuepress库：/dist")])])}),[],!1,null,null,null);s.default=a.exports}}]);