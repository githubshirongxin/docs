(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{537:function(a,t,s){"use strict";s.r(t);var e=s(59),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"【springboot】gitlab-ci编译部署知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#【springboot】gitlab-ci编译部署知识点"}},[a._v("#")]),a._v(" 【springboot】gitlab-ci编译部署知识点")]),a._v(" "),s("h2",{attrs:{id:"下列知识点："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下列知识点："}},[a._v("#")]),a._v(" 下列知识点：")]),a._v(" "),s("h3",{attrs:{id:"发布与编译的串联"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布与编译的串联"}},[a._v("#")]),a._v(" 发布与编译的串联")]),a._v(" "),s("ul",[s("li",[a._v("自动部署的实现思路。\n编译：利用Runner的docker excutor编译并push到docker私有库。\n发布：免密远程到发布机器，在发布机器上执行，docker私有仓库取镜像，并生成容器。")]),a._v(" "),s("li",[a._v("不同分支使用编译和发布的环境不同。使用不同的配置")])]),a._v(" "),s("h3",{attrs:{id:"编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[a._v("#")]),a._v(" 编译")]),a._v(" "),s("ul",[s("li",[a._v("使用nexus.ccbjb.com.cn作为私有maven仓库的使用方法。\n"),s("ul",[s("li",[a._v("pom.xml")]),a._v(" "),s("li",[a._v(".m2/settings.xml")])])]),a._v(" "),s("li",[a._v("使用docker.ccbjb.com.cn作为私有docker仓库的使用方法。\n"),s("ul",[s("li",[a._v("私有仓库登陆时的证书问题。")]),a._v(" "),s("li",[a._v("gitlab-ci中使用私有仓库的认证方式:使用docker私有仓库，\n"),s("ul",[s("li",[a._v("要么在gitlabUI中环境变量中使用DOCKER_AUTH_CONFIG，")]),a._v(" "),s("li",[a._v("要么在Runer宿主机手动docker login docker.ccbjb.com.cn")])])])])]),a._v(" "),s("li",[a._v("gitlab-ci.yml中\n-【重要】最外层image，service之间的关系。\n"),s("ul",[s("li",[a._v("job内image，service之间的关系。")]),a._v(" "),s("li",[a._v("最外层image与job内image之间的关系。")]),a._v(" "),s("li",[a._v("services同上问。")])])]),a._v(" "),s("li",[a._v("【重要】docker:stable 与docker：dind之间的关系")]),a._v(" "),s("li",[a._v("【重要】docker excutor中的image与gitlab-ci.yml中image的关系")])]),a._v(" "),s("h3",{attrs:{id:"发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[a._v("#")]),a._v(" 发布")]),a._v(" "),s("ul",[s("li",[a._v("如何在Runner上使用docker excutor免密登陆到服务器。")]),a._v(" "),s("li",[a._v("发布job里的image：ubuntu的私钥公钥与Runner宿主机的私钥公钥关系。")]),a._v(" "),s("li",[a._v("ssh-agent存储的是Runner宿主机的私钥")]),a._v(" "),s("li",[a._v("SSH_PRIVATE_KEY是gitlabUI的环境变量。")]),a._v(" "),s("li",[a._v("发布服务器上的存储的是Runner宿主机的公钥。")])]),a._v(" "),s("h4",{attrs:{id:"手工预先执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手工预先执行"}},[a._v("#")]),a._v(" 手工预先执行")]),a._v(" "),s("ol",[s("li",[a._v("在Runner宿主机上"),s("code",[a._v("成密钥对(不加密码)")])]),a._v(" "),s("li",[a._v("在Runner宿主机上"),s("code",[a._v("ssh-copy-id 远程服务器。")]),a._v("\n剩下的就是gitlab-ci脚本自动执行了")])]),a._v(" "),s("h1",{attrs:{id:"总结："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结："}},[a._v("#")]),a._v(" 总结：")]),a._v(" "),s("p",[a._v("参考issue")]),a._v(" "),s("h1",{attrs:{id:"课题："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#课题："}},[a._v("#")]),a._v(" 课题：")]),a._v(" "),s("h2",{attrs:{id:"_1-gitlab-ci-yml中使用docker-ccbjb-com-cn-docker-dind会出错。原因不详。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-gitlab-ci-yml中使用docker-ccbjb-com-cn-docker-dind会出错。原因不详。"}},[a._v("#")]),a._v(" 1. gitlab-ci.yml中使用docker.ccbjb.com.cn/docker:dind会出错。原因不详。")]),a._v(" "),s("h4",{attrs:{id:"gitlab-ci-yml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-ci-yml"}},[a._v("#")]),a._v(" gitlab-ci.yml")]),a._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" docker.ccbjb.com.cn/docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("19.03.12"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dind \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error"}},[a._v("#")]),a._v(" error:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker info ERROR: error during connect: Get https://docker:2376/v1.40/info: dial tcp: lookup docker on 192.168.99.2:53: no such host\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"_2-只能写一个库。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-只能写一个库。"}},[a._v("#")]),a._v(" 2.  只能写一个库。")]),a._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" docker.ccbjb.com.cn/docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("19.03.12"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dind\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"--insecure-registry=docker.ccbjb.com.cn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);