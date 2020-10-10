(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{493:function(a,e,n){"use strict";n.r(e);var t=n(59),s=Object(t.a)({},(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"npm与node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm与node"}},[a._v("#")]),a._v(" npm与node")]),a._v(" "),n("p",[a._v("npm和node是绑定在一起的可执行文件。\n但npm作者和node作者并不是一个。\n当初npm写完代码之后，想和jqurey联合，但是jquery作者没看上。\nnode作者正缺少包管理工具，于是和npm一拍即合。node火了以后，npm就内嵌到node中了。")]),a._v(" "),n("p",[a._v("如今想单独安装npm已经不可能了，单并不表示npm就需要node。npm是个独立的软件。\n从使用上看npm也没有和node有太大关系，它仍旧做的是包管理。")]),a._v(" "),n("h2",{attrs:{id:"node与javasript"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node与javasript"}},[a._v("#")]),a._v(" node与javasript")]),a._v(" "),n("p",[a._v("node是后台框架。他是javascript，以前固定思维：js就是前台。现在不是了，借助谷歌的\njsV8引擎，可以高性能地解析js做后端应用，什么router，后台逻辑，启动http服务，写处理逻辑，连接数据库，它都能做。这就让以前的前端程序员很快地掌握后端，就可以做全栈了。")]),a._v(" "),n("h3",{attrs:{id:"问题1：node做的后端有没有局限性？使用场景是什么？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题1：node做的后端有没有局限性？使用场景是什么？"}},[a._v("#")]),a._v(" 问题1：node做的后端有没有局限性？使用场景是什么？")]),a._v(" "),n("p",[a._v("node处理复杂业务和大数据存储不擅长。")]),a._v(" "),n("h3",{attrs:{id:"问题2：基于node框架应该都是后端框架了吧，有哪些流行的框架？业界真正使用的。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题2：基于node框架应该都是后端框架了吧，有哪些流行的框架？业界真正使用的。"}},[a._v("#")]),a._v(" 问题2：基于node框架应该都是后端框架了吧，有哪些流行的框架？业界真正使用的。")]),a._v(" "),n("h3",{attrs:{id:"问题3：如果node框架都是后台框架，那么前台框架用什么？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题3：如果node框架都是后台框架，那么前台框架用什么？"}},[a._v("#")]),a._v(" 问题3：如果node框架都是后台框架，那么前台框架用什么？")]),a._v(" "),n("h2",{attrs:{id:"nodejs的调用方式看node是后台还是前台"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodejs的调用方式看node是后台还是前台"}},[a._v("#")]),a._v(" nodejs的调用方式看node是后台还是前台")]),a._v(" "),n("p",[a._v("node用js文件，模块化调用，分别开发。然后用node xxx.js运行。\n非常像java的方式。java xxx.jar\n能启动http，能操作fs，能buffer、stream、router后台的功能几乎都可以做。")]),a._v(" "),n("h2",{attrs:{id:"node的后端有什么优势"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node的后端有什么优势"}},[a._v("#")]),a._v(" node的后端有什么优势")]),a._v(" "),n("p",[a._v("非阻塞式io，让node可以变成高性能处理而不依赖内存。\n使用更少的服务器处理更高的并发。\n但它适合上传下载都不是很大数据的场合，why？\n只适合少量数据，大量并发的场合。")]),a._v(" "),n("h2",{attrs:{id:"webpack与node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack与node"}},[a._v("#")]),a._v(" webpack与node")]),a._v(" "),n("p",[a._v("webpack与node没有关系\nwebpack的组织方式使用了npm而已。\n而npm和node绑定安装了而已，就是node名气大了，npm成了node的附庸，实际上大家只想用npm不想用node。")]),a._v(" "),n("h2",{attrs:{id:"webpack与npm功能有什么不同"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack与npm功能有什么不同"}},[a._v("#")]),a._v(" webpack与npm功能有什么不同")]),a._v(" "),n("p",[a._v("npm解决的是js依赖包关系，和maven、gradle解决的是java的依赖关系，自动下载。\nwebpack解决的是把scss和es6，vue等编译成浏览器认识的css，html，js。还有写扩展功能plugin实现的。")]),a._v(" "),n("h2",{attrs:{id:"webpack与npm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack与npm"}},[a._v("#")]),a._v(" webpack与npm")]),a._v(" "),n("h3",{attrs:{id:"webpack是npm生态中的一环。npm的库里有webpack这样的模块。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack是npm生态中的一环。npm的库里有webpack这样的模块。"}},[a._v("#")]),a._v(" webpack是npm生态中的一环。npm的库里有webpack这样的模块。")]),a._v(" "),n("p",[n("code",[a._v("npm install D webpack")]),a._v("本地安装之后，会在当前目录下的node_modules/下面安装webpack")]),a._v(" "),n("h3",{attrs:{id:"完全可以单独运行webpack，它也不是非得需要配置文件才行。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#完全可以单独运行webpack，它也不是非得需要配置文件才行。"}},[a._v("#")]),a._v(" 完全可以单独运行"),n("code",[a._v("webpack")]),a._v("，它也不是非得需要配置文件才行。")]),a._v(" "),n("p",[a._v("把配置的内容写到命令行里一样可以。配置文件就是为了方便。\nwebpack的配置文件也不是npm install之后就自动创建好，而是需要自己创建，自己一行行写。\n这和"),n("code",[a._v("npm init -y")]),a._v("就创建package.json不同。")]),a._v(" "),n("h3",{attrs:{id:"npm-script可以调用webpack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-script可以调用webpack"}},[a._v("#")]),a._v(" npm script可以调用webpack")]),a._v(" "),n("p",[a._v("当然npm的script也就是package.json中"),n("script")])])}),[],!1,null,null,null);e.default=s.exports}}]);