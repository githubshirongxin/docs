(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{561:function(s,t,a){"use strict";a.r(t);var n=a(55),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://travis-ci.com/github/githubshirongxin/docs",target:"_blank",rel:"noopener noreferrer"}},[s._v("自动部署vuepress/docs"),a("OutboundLink")],1),s._v("\n可以看到编译结果。")]),s._v(" "),a("p",[s._v("部署→Github→"),a("a",{attrs:{href:"https://www.vuepress.cn/guide/deploy.html#github-pages",target:"_blank",rel:"noopener noreferrer"}},[s._v("TravisCI"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("在项目的根目录创建一个名为 .travis.yml 的文件；")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("language: node_js\nnode_js:\n  - lts/*\ninstall:\n  - npm ci # npm ci\nscript:\n  - npm run build # npm run docs:build\ndeploy:\n  provider: pages\n  skip_cleanup: true\n  local_dir: docs/.vuepress/dist\n  github_token: $GITHUB_TOKEN # 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable\n  keep_history: true\n  on:\n    branch: master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("https://travis-ci.com/\ngithub用户登陆\n会显示github所有工程，在docs后点击【Trigger abuild】\n注意不是vuepress库，因为vuepress只有dist没有编译需要的源代码。")]),s._v(" "),a("p",[s._v("github生成GitHubTOKEN，一个用户只有一个。\n"),a("img",{attrs:{src:"/docs/images/2020-07-23-11-04-50.png",alt:""}}),s._v(" "),a("img",{attrs:{src:"/docs/images/2020-07-23-11-06-19.png",alt:""}})]),s._v(" "),a("p",[s._v("把这个变量定义在travis-ci网站\n"),a("img",{attrs:{src:"/docs/images/2020-07-23-11-06-51.png",alt:""}})]),s._v(" "),a("p",[s._v("随便改改某个md")]),s._v(" "),a("p",[s._v("别忘了把.gitignore的私密信息注释，也push到github。\n例如.gitignore\nsecret.js")]),s._v(" "),a("p",[s._v("否则Travis-ci编译不成功")]),s._v(" "),a("h3",{attrs:{id:"修改某md后git-push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改某md后git-push"}},[s._v("#")]),s._v(" 修改某md后git push")]),s._v(" "),a("h3",{attrs:{id:"去travis-ci网页上查看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#去travis-ci网页上查看"}},[s._v("#")]),s._v(" 去Travis-ci网页上查看")]),s._v(" "),a("p",[s._v("Current\nhttps://travis-ci.com/github/githubshirongxin/docs\n"),a("img",{attrs:{src:"/docs/images/2020-07-23-11-20-29.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"github-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-pages"}},[s._v("#")]),s._v(" Github pages")]),s._v(" "),a("p",[a("img",{attrs:{src:"/docs/images/2020-07-23-11-21-08.png",alt:""}}),s._v("\nYour site is published at https://githubshirongxin.github.io/docs/")]),s._v(" "),a("p",[s._v("网页也都反映了md的修改。")]),s._v(" "),a("h3",{attrs:{id:"我还真是不明白"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我还真是不明白"}},[s._v("#")]),s._v(" 我还真是不明白")]),s._v(" "),a("p",[s._v("docs这样的目录统统传上去之后，travis-ci怎么编译的。\n如果这样就可以的化，就不需要两个库了。\n一个docs库：/project\n一个vuepress库：/dist")])])}),[],!1,null,null,null);t.default=r.exports}}]);