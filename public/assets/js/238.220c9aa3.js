(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{717:function(s,t,a){"use strict";a.r(t);var e=a(59),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"spring-boot创建项目后，pom-xml出现web-xml-is-missing-and-is-set-to-true解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot创建项目后，pom-xml出现web-xml-is-missing-and-is-set-to-true解决方案"}},[s._v("#")]),s._v(" Spring-boot创建项目后，pom.xml出现web.xml is missing and is set to true解决方案")]),s._v(" "),a("p",[s._v("这个问题的原因是maven看到我们项目的类型是war，在pom.xml中有这段代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<packaging>war</packaging>  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"原因："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原因："}},[s._v("#")]),s._v(" 原因：")]),s._v(" "),a("p",[s._v("因为创建的是web工程，从提示信息可以看到。也就是"),a("strong",[s._v("缺少了web.xml文件，<failOnMissingWebXml>"),a("strong",[s._v("被设置成")]),s._v("true")]),s._v("了。这是一个Maven错误，在最近的web应用开发中web.xml文件已经变得可有可无了。不过Maven还没有跟上这一变化")]),s._v(" "),a("h2",{attrs:{id:"方法1：我们只要在pom-xml文件中手动添加如下配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法1：我们只要在pom-xml文件中手动添加如下配置"}},[s._v("#")]),s._v(" 方法1：我们只要在"),a("strong",[s._v("pom.xml")]),s._v("文件中手动添加如下配置:")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("maven"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("groupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("maven"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("war"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("artifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.6")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("failOnMissingWebXml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("failOnMissingWebXml"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("configuration"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("build"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("这样做的好处是我们不必在项目生中成一个无用的web.xml文件。在更新版本的maven中已经不存在web.xml文件缺失的问题，我们只需要处理<failOnMissingWebXml>被设置成tue的问题即可。也就是在pom.xml中添加如下配置即可。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" <configuration>      \n <failOnMissingWebXml>false</failOnMissingWebXml>\n </configuration>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"方法2-另外一种解决方法：就是生成web-xml文件，"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法2-另外一种解决方法：就是生成web-xml文件，"}},[s._v("#")]),s._v(" 方法2 另外一种解决方法：就是生成web.xml文件，")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190418101000170.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1dKRFgyMDM2,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"在项目浏览器中右键单击deloyment-descriptor，选择生成部署描述符存根：generate-deployment-descriptor-stub。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在项目浏览器中右键单击deloyment-descriptor，选择生成部署描述符存根：generate-deployment-descriptor-stub。"}},[s._v("#")]),s._v(" 在项目浏览器中右键单击Deloyment Descriptor，选择生成部署描述符存根：Generate  Deployment Descriptor Stub。")]),s._v(" "),a("p",[s._v("操作后会在项目的"),a("strong",[s._v("src/main/webapp/WEB-INF")]),s._v("目录下生成web.xml文件。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190418101305271.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1dKRFgyMDM2,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"如果加入web-xml文件后还是提示报错，请接着使用下面的方法："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果加入web-xml文件后还是提示报错，请接着使用下面的方法："}},[s._v("#")]),s._v(" 如果加入web.xml文件后还是提示报错，请接着使用下面的方法：")]),s._v(" "),a("h5",{attrs:{id:"第一步：右击项目-properties-deployment-assembly-add-folder-src-main-webapp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一步：右击项目-properties-deployment-assembly-add-folder-src-main-webapp"}},[s._v("#")]),s._v(" 第一步：右击项目-Properties->Deployment Assembly>add->Folder->src->main->webapp")]),s._v(" "),a("h5",{attrs:{id:"第二步：在eclipse顶部菜单，打开project-clean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二步：在eclipse顶部菜单，打开project-clean"}},[s._v("#")]),s._v(" 第二步：在eclipse顶部菜单，打开project->clean:")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190418102200361.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1dKRFgyMDM2,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("p",[s._v("经过以上步骤，问题解决。")])])}),[],!1,null,null,null);t.default=r.exports}}]);