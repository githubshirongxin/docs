(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{414:function(t,s,e){"use strict";e.r(s);var i=e(42),a=Object(i.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_4-和github关联"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-和github关联"}},[t._v("#")]),t._v(" 4. 和github关联")]),t._v(" "),e("p",[t._v("指南→部署→"),e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"新建-project-deploy-sh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建-project-deploy-sh"}},[t._v("#")]),t._v(" 新建 project/deploy.sh")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#!/usr/bin/env sh\n\n# 确保脚本抛出遇到的错误\nset -e\n\n# 生成静态文件\nnpm run build\n\n# 进入生成的文件夹\ncd docs/.vuepress/dist\ngit init\ngit add -A\ngit commit -m 'deploy'\n\ngit push -f git@github.com:githubshirongxin/vuepress.git master:gh-pages\ncd -\n\n# 如果发布到 https://<USERNAME>.github.io\n# git push -u origin master\n\n# 如果发布到 https://<USERNAME>.github.io/<REPO>\n# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages\n")])])]),e("h4",{attrs:{id:"问题：这样dist-都发布到vuepress库，但是其他文件没有放到github管理。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题：这样dist-都发布到vuepress库，但是其他文件没有放到github管理。"}},[t._v("#")]),t._v(" 问题：这样dist/都发布到vuepress库，但是其他文件没有放到github管理。")]),t._v(" "),e("ul",[e("li",[t._v("所有内容如docs库\n在/project下"),e("code",[t._v("git init")]),t._v("创建·git目录。然后设置远程orgin\n"),e("code",[t._v("git remote add origin git@github.com:githubshirongxin/docs.git master")]),t._v("\n这样在project/下执行"),e("code",[t._v("git push")]),t._v(" 就会把所有内容都push到docs库。")])]),t._v(" "),e("p",[e("code",[t._v("git remote -v")]),t._v("\n验证一下当前目录的远端到底是谁")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("dist内容如vuepress库\n而在/project/docs/.vuepress/dist/下 "),e("code",[t._v("git init")]),t._v(" 创建了origin\n"),e("code",[t._v("git remote add origin git@github.com:githubshirongxin/vuepress.git master:b-branche")]),t._v("\n在该目录下执行"),e("code",[t._v("git push")]),t._v("就只会把/dist下的内容发布到vuepress库中。\n"),e("code",[t._v("git remote -v")]),t._v("\n验证一下当前目录的远端到底是谁")])]),t._v(" "),e("li",[e("p",[t._v("这两个目录的.git/互相并不影响，非常独立。使用的时候注意在哪个目录执行，执行的位置很关键。")])])]),t._v(" "),e("h3",{attrs:{id:"修改package-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改package-json"}},[t._v("#")]),t._v(" 修改package.json")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('"scripts": {\n    "dev": "vuepress dev docs",\n    "build": "vuepress build docs",\n    "deploy": "bash deploy.sh"\n  },\n')])])]),e("h3",{attrs:{id:"修改config-js的base"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改config-js的base"}},[t._v("#")]),t._v(" 修改config.js的base")]),t._v(" "),e("p",[t._v("base：库名\n这样访问的时候https://githubshirongxin.github.io/库名/")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('module.exports = {\n    base: "/vuepress",\n')])])]),e("p",[t._v("https://githubshirongxin.github.io/vuepress/")]),t._v(" "),e("h3",{attrs:{id:"运行deploy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行deploy"}},[t._v("#")]),t._v(" 运行deploy")]),t._v(" "),e("p",[e("code",[t._v("npm run deploy")])]),t._v(" "),e("p",[t._v("查看github的vuepress库，都是dist/的内容\n"),e("img",{attrs:{src:"/docs/images/2020-07-22-18-43-43.png",alt:""}})]),t._v(" "),e("p",[t._v("细看")]),e("head",[e("meta"),t._v("都是/vuepress/assets/css...\n"),e("img",{attrs:{src:"/docs/images/2020-07-22-18-44-18.png",alt:""}}),e("p")])])}),[],!1,null,null,null);s.default=a.exports}}]);