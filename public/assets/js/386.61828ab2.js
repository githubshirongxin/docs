(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{869:function(t,s,a){"use strict";a.r(s);var r=a(59),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("mirror表示的是两个Repository之间的关系。")]),t._v(" "),a("p",[t._v("参考：https://my.oschina.net/sunchp/blog/100634")]),t._v(" "),a("h2",{attrs:{id:"_1-repository（仓库）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-repository（仓库）"}},[t._v("#")]),t._v(" 1 Repository（仓库）")]),t._v(" "),a("h3",{attrs:{id:"_1-1-maven仓库主要有2种："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-maven仓库主要有2种："}},[t._v("#")]),t._v(" 1.1 Maven仓库主要有2种：")]),t._v(" "),a("p",[t._v("remote repository：相当于公共的仓库，大家都能访问到，一般可以用URL的形式访问")]),t._v(" "),a("p",[t._v("local repository：存放在本地磁盘的一个文件夹，例如，windows上默认是C:\\Users\\｛用户名｝.m2\\repository目录")]),t._v(" "),a("h3",{attrs:{id:"_1-2-remote-repository主要有3种："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-remote-repository主要有3种："}},[t._v("#")]),t._v(" 1.2 Remote Repository主要有3种：")]),t._v(" "),a("p",[t._v("中央仓库：http://repo1.maven.org/maven2/")]),t._v(" "),a("p",[t._v("私服：内网自建的maven repository，其URL是一个内部网址")]),t._v(" "),a("p",[t._v("其他公共仓库：其他可以互联网公共访问maven repository，例如 jboss repository等")]),t._v(" "),a("p",[t._v("repository里存放的都是各种jar包和maven插件。当向仓库请求插件或依赖的时候，会先检查local repository，如果local repository有则直接返回，否则会向remote repository请求，并缓存到local repository。也可以把做的东西放到本地仓库，仅供本地使用；或上传到远程仓库，供大家使用。")]),t._v(" "),a("p",[t._v("https://my.oschina.net/sunchp/blog/3114228")]),t._v(" "),a("h2",{attrs:{id:"_2-mirror"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mirror"}},[t._v("#")]),t._v(" 2 Mirror")]),t._v(" "),a("p",[t._v("mirror相当于一个拦截器，它会拦截maven对remote repository的相关请求，把请求里的remote repository地址，重定向到mirror里配置的地址。")]),t._v(" "),a("h3",{attrs:{id:"_2-1-没有配置mirror："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-没有配置mirror："}},[t._v("#")]),t._v(" 2.1 没有配置mirror：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://static.oschina.net/uploads/space/2015/0918/235929_jlaz_820500.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_2-2-配置mirror："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-配置mirror："}},[t._v("#")]),t._v(" 2.2 配置mirror：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://static.oschina.net/uploads/space/2015/0919/000002_d74u_820500.png",alt:""}})]),t._v(" "),a("p",[t._v("此时，B Repository被称为A Repository的镜像。")]),t._v(" "),a("p",[t._v("如果仓库X可以提供仓库Y存储的所有内容，那么就可以认为X是Y的一个镜像。换句话说，任何一个可以从仓库Y获得的构件，都胡够从它的镜像中获取。")]),t._v(" "),a("h3",{attrs:{id:"_2-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3"}},[t._v("#")]),t._v(" 2.3 "),a("mirrorOf")],1),t._v(" "),a("p",[a("code",[t._v("<mirrorOf></mirrorOf>")]),t._v("标签里面放置的是要被镜像的Repository ID。为了满足一些复杂的需求，Maven还支持更高级的镜像配置：")]),t._v(" "),a("p",[a("code",[t._v("<mirrorOf>*</mirrorOf>")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("        匹配所有远程仓库。 \n")])])]),a("p",[a("code",[t._v("<mirrorOf>repo1,repo2</mirrorOf>")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("        匹配仓库repo1和repo2，使用逗号分隔多个远程仓库。 \n")])])]),a("p",[a("code",[t._v("<mirrorOf>*,!repo1</miiroOf>")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("        匹配所有远程仓库，repo1除外，使用感叹号将仓库从匹配中排除。 \n")])])]),a("h2",{attrs:{id:"_3-repository与mirror"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-repository与mirror"}},[t._v("#")]),t._v(" 3 Repository与Mirror")]),t._v(" "),a("h3",{attrs:{id:"_3-1-定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-定义"}},[t._v("#")]),t._v(" 3.1 定义")]),t._v(" "),a("p",[t._v("其实，mirror表示的是两个Repository之间的关系，在maven配置文件（setting.xml)里配置了"),a("code",[t._v("<mirrors><mirror>..........</mirror></mirrors>")]),t._v("，即定义了两个Repository之间的镜像关系。")]),t._v(" "),a("h3",{attrs:{id:"_3-2-目的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-目的"}},[t._v("#")]),t._v(" 3.2 目的")]),t._v(" "),a("p",[t._v("配置两个Repository之间的镜像关系，一般是出于访问速度和下载速度考虑。")]),t._v(" "),a("p",[t._v("例如， 有一个项目，需要在公司和住所都编码，并在项目pom.xml配置了A Maven库。在公司，是电信网络，访问A库很快，所以maven管理依赖和插件都从A库下载；在住所，是网通网络，访问A库很慢，但是访问B库很快。这时，在住所的setting.xml里，只要配置一下"),a("code",[t._v("<mirrors><mirror>....</mirror></mirrors>")]),t._v("，让B库成为A库的mirror，即可不用更改项目pom.xml里对于A库的相关配置。")]),t._v(" "),a("p",[t._v("如果该镜像仓库需要认证，则配置setting.xml中的"),a("code",[t._v("<server></server>")]),t._v("即可。")]),t._v(" "),a("h3",{attrs:{id:"_3-3-注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-注意"}},[t._v("#")]),t._v(" 3.3  注意")]),t._v(" "),a("p",[t._v("需要注意的是，由于镜像仓库完全屏蔽了被镜像仓库，当镜像仓库不稳定或者停止服务的时候，Maven仍将无法访问被镜像仓库，因而将无法下载构件。")]),t._v(" "),a("h2",{attrs:{id:"_4-私服"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-私服"}},[t._v("#")]),t._v(" 4 私服")]),t._v(" "),a("p",[t._v("私服是一种特殊的远程Maven仓库，它是架设在局域网内的仓库服务，私服一般被配置为互联网远程仓库的镜像，供局域网内的Maven用户使用。")]),t._v(" "),a("p",[t._v("当Maven需要下载构件的时候，先向私服请求，如果私服上不存在该构件，则从外部的远程仓库下载，同时缓存在私服之上，然后为Maven下载请求提供下载服务，另外，对于自定义或第三方的jar可以从本地上传到私服，供局域网内其他maven用户使用。")]),t._v(" "),a("p",[t._v("优点主要有：")]),t._v(" "),a("p",[t._v("节省外网宽带")]),t._v(" "),a("p",[t._v("加速Maven构建")]),t._v(" "),a("p",[t._v("部署第三方构件")]),t._v(" "),a("p",[t._v("提高稳定性、增强控制：原因是外网不稳定")]),t._v(" "),a("p",[t._v("降低中央仓库的负荷：原因是中央仓库访问量太大")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://static.oschina.net/uploads/space/2015/0919/004451_1mVB_820500.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"举个例子，"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举个例子，"}},[t._v("#")]),t._v(" 举个例子，")]),t._v(" "),a("h4",{attrs:{id:"maven的conf-setting-xml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven的conf-setting-xml"}},[t._v("#")]),t._v(" maven的conf/setting.xml")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirrors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--国内阿里云提供的镜像，非常不错--\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirror")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--This sends everything else to /public --\x3e")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("aliyun_nexus"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--对所有仓库使用该镜像,除了一个名为maven_nexus_201的仓库除外--\x3e")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--这个名为maven_nexus_201的仓库可以在javamaven项目中配置一个repository--\x3e")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirrorOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("*,!maven_nexus_201"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirrorOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("http://maven.aliyun.com/nexus/content/groups/public/"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirror")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirrors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h4",{attrs:{id:"maven项目下的pom-xml配置一个远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven项目下的pom-xml配置一个远程仓库"}},[t._v("#")]),t._v(" maven项目下的pom.xml配置一个远程仓库")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("repositories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 192.168.0.201远程仓库 --\x3e")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("maven_nexus_201"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("maven_nexus_201"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("layout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("default"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("layout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("http://192.168.0.201:8081/nexus/content/groups/public/"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("snapshots")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n              "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("snapshots")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("repositories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h4",{attrs:{id:"maven项目下的pom-xml引入依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven项目下的pom-xml引入依赖"}},[t._v("#")]),t._v(" maven项目下的pom.xml引入依赖")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.alipay"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("sdk-java"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("20170615110434"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h4",{attrs:{id:"总结："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结："}},[t._v("#")]),t._v(" 总结：")]),t._v(" "),a("h5",{attrs:{id:"_1，拦截所有之后，-repository-没有意义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1，拦截所有之后，-repository-没有意义"}},[t._v("#")]),t._v(" 1，拦截所有之后，"),a("code",[t._v("<repository>")]),t._v("没有意义")]),t._v(" "),a("p",[t._v("如果mirror拦截了所有库请求（"),a("code",[t._v("<mirrorOf>*</mirrorOf>")]),t._v("），都指向了A。\n那么如论哪里的"),a("code",[t._v("<repository>")]),t._v("的定义都没有意义了。\n因为，无论你在pom还是setting，定义了多少"),a("code",[t._v("<repository>")]),t._v("B，C,D都没有用,\n最后还是被拦截后走A。")]),t._v(" "),a("h5",{attrs:{id:"_2-拦截剩下的，可以在-repository-定义。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-拦截剩下的，可以在-repository-定义。"}},[t._v("#")]),t._v(" 2. 拦截剩下的，可以在"),a("code",[t._v("<repository>")]),t._v("定义。")]),t._v(" "),a("p",[t._v("例如，上面【maven_nexus_201】这个库。就是"),a("code",[t._v("<mirror>")]),t._v("拦截的漏网之鱼。\n定义了就有意义。")])])}),[],!1,null,null,null);s.default=n.exports}}]);