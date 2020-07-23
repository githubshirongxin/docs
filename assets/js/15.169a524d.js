(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{489:function(e,o,v){"use strict";v.r(o);var l=v(55),r=Object(l.a)({},(function(){var e=this,o=e.$createElement,v=e._self._c||o;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[e._v("运维组用docker-compose为开源应用提供部署的脚本。\n开发组可以一毽部署开发调试环境或测试环境。\n这对开发组是不是很大的贡献呢。")]),e._v(" "),v("h2",{attrs:{id:"首先docker-compose部署vue前端应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#首先docker-compose部署vue前端应用"}},[e._v("#")]),e._v(" 首先docker-compose部署vue前端应用")]),e._v(" "),v("p",[e._v("先介绍介绍vue开发吧。")]),e._v(" "),v("h2",{attrs:{id:"vscode开发vue"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vscode开发vue"}},[e._v("#")]),e._v(" Vscode开发vue")]),e._v(" "),v("p",[e._v("这个blog文章很好，我实际操作一下\nhttps://juejin.im/post/5e9c38856fb9a03c917fe509")]),e._v(" "),v("p",[e._v("我的该笔记的工作目录。surface：C:\\work\\prj\\vue\\firstVue")]),e._v(" "),v("ol",[v("li",[e._v("nodejs安装："),v("code",[e._v("Download the Windows Installer directly from the nodejs.org web site.")])]),e._v(" "),v("li",[e._v("安装cnpm: "),v("code",[e._v("npm install -g cnpm --registry=http://registry.npm.taobao.org")])]),e._v(" "),v("li",[e._v("安装vue-cil："),v("code",[e._v("npm install -g vue-cli")])]),e._v(" "),v("li",[e._v("创建一个空项目："),v("code",[e._v("vue init webpack firstVue")])]),e._v(" "),v("li",[e._v("要安装依赖包，\n"),v("ul",[v("li",[v("code",[e._v("首先cd到项目文件夹（firstVue文件夹）")])]),e._v(" "),v("li",[e._v("然后运行命令 "),v("code",[e._v("cnpm install")]),e._v(" ，等待安装。")]),e._v(" "),v("li",[e._v("会在我们的项目目录firstVue文件夹中多出一个node_modules文件夹，这里边就是我们项目需要的依赖包资源")])])]),e._v(" "),v("li",[e._v("运行项目 "),v("code",[e._v("npm run dev")]),e._v(' ,运行的就是package.json中scrips:{"dev":"node build/dev-server.js"}的简写')]),e._v(" "),v("li",[e._v("localhost:8080")]),e._v(" "),v("li",[e._v("vscode 安装")]),e._v(" "),v("li",[e._v("增加element UI\n"),v("ul",[v("li",[v("code",[e._v("首先cd到项目文件夹（firstVue文件夹）")])]),e._v(" "),v("li",[v("code",[e._v("cnpm i element-ui -S")])])])]),e._v(" "),v("li",[e._v("开发main.js")]),e._v(" "),v("li",[e._v("cnpm install")]),e._v(" "),v("li",[e._v("npm run dev")]),e._v(" "),v("li",[e._v("修改 App.vue")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("    <router-view>的下一行追加\n    <el-button type=\"primary\">主要按钮</el-button>\n    <script> export default {\n      name:'app',\n      data() {\n         reurn {\n           num1:1\n         };\n      },\n      methods: {\n        handleChange(value) {\n           console.log(value);\n        }\n      }\n    }\n")])])]),v("ol",{attrs:{start:"14"}},[v("li",[e._v("访问 http://localhost:8080不用刷新能看到效果。")]),e._v(" "),v("li",[e._v("用Dockerfile打包镜像")])]),e._v(" "),v("p",[e._v("C:\\work\\prj\\vue\\firstVue")]),e._v(" "),v("h2",{attrs:{id:"docker-发布vue应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker-发布vue应用"}},[e._v("#")]),e._v(" Docker 发布vue应用")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://blog.csdn.net/tornyLin/article/details/81479511?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker部署Vue.js应用"),v("OutboundLink")],1)]),e._v(" "),v("p",[e._v("思路：nginx 发布vue  .https://github.com/rzhaolin/Docker-Vuejs")]),e._v(" "),v("ol",[v("li",[e._v("工程根目录下，先"),v("code",[e._v("node build/build.js")]),e._v(" 生成 "),v("code",[e._v("/dist")])]),e._v(" "),v("li",[e._v("工程根目录下，创建Dockefile，创建nginx.conf\n"),v("img",{attrs:{src:"/docs/images/2020-07-07-11-31-09.png",alt:""}})]),e._v(" "),v("li",[e._v("工程根目录下，Dockefile 仅仅拷贝了nginx.conf和/dist到镜像里")]),e._v(" "),v("li",[e._v("工程根目录下，"),v("code",[e._v("docker build .")]),e._v(" 生成镜像")]),e._v(" "),v("li",[e._v("方便管理，给镜像打tag，"),v("code",[e._v("docker tag ffdf55e238d4 vuejs-demo:v1.0.0")])]),e._v(" "),v("li",[e._v("生成容器："),v("code",[e._v("docker run --name=helloword -p 8080:1233 -d vuejs-demo:1.0.0")])]),e._v(" "),v("li",[e._v("发布完成，访问 http://localhost:8080")])]),e._v(" "),v("p",[e._v("在上面研究的过程中，有一些不理解的地方，都做了记录。\n以后查询起来方便些。")]),e._v(" "),v("h3",{attrs:{id:"fqa"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fqa"}},[e._v("#")]),e._v(" FQA")]),e._v(" "),v("ul",[v("li",[e._v("【Q1】【DOckerfile系列】Dockerfile多From 指令存在的意义")]),e._v(" "),v("li",[e._v("【A】\n"),v("ol",[v("li",[e._v("https://blog.csdn.net/Michaelwubo/article/details/91872076")]),e._v(" "),v("li",[e._v("共享层，节约空间，以最后的FROM为准，前面的FROM会被抛弃。")]),e._v(" "),v("li",[e._v("多阶构建（多FROM）的意义，就是最后一个FROM能从前面的FROM拷贝来中间结果直接用。")]),e._v(" "),v("li",[e._v("使用场景：编译环境和运行环境分离。因为带有编译的环境非常大，镜像就很大。\n而运行不需要这么大的基础镜像。只需要有个运行时环境就行。（Go运行时都不需要运行时）")])])])]),e._v(" "),v("hr"),e._v(" "),v("ul",[v("li",[e._v("【Q2】【DOckerfile系列】Dockerfile中 COPY --from的含义，与ADD的不同")]),e._v(" "),v("li",[e._v("【A】\nhttps://www.cnblogs.com/sparkdev/p/9573248.html\n"),v("ol",[v("li",[e._v("用于多阶构建时，从前面拷贝 --from=0 ，或者 --from=前面镜像的命名abc（前面： FROM XXX as abc）")]),e._v(" "),v("li",[e._v("还可以直接从已经存在的镜像中直接拷贝！（不用非得前置阶段中拷贝）\n"),v("code",[e._v("COPY --from=quay.io/coreos/etcd:v3.3.9 /usr/local/bin/etcd /usr/local/bin/")])])])])]),e._v(" "),v("hr"),e._v(" "),v("ul",[v("li",[e._v("【Q3】【Dockefile发布】发布vue应用，使用什么镜像当作基础镜像？")]),e._v(" "),v("li",[e._v("【A】\n"),v("ol",[v("li",[e._v("https://juejin.im/post/5ddcfae85188256eac43e707")]),e._v(" "),v("li",[e._v("多阶发布，编译和运行分离。既然是发布，那么编译就是中间产物。")]),e._v(" "),v("li",[e._v("一个Dockerfile，先FROM node:latest 编译好，再FROM nginx 把前置阶段的中间产物拷贝进来（COPY --from=build /app/dist /app）")]),e._v(" "),v("li",[v("img",{attrs:{src:"/docs/images/2020-07-07-13-39-18.png",alt:""}})])])])]),e._v(" "),v("hr"),e._v(" "),v("ul",[v("li",[e._v("【Q4】【Dockefile发布】如何发布springboot的应用呢？")]),e._v(" "),v("li",[e._v("【A】\n"),v("ol",[v("li",[e._v("编译在本地Docker外，编译出.jar文件")]),e._v(" "),v("li",[e._v("Dockerfile 镜像 FROM java:8\n2.1 /tmp(springboot默认是内嵌tomcat的工作目录，里面有jar)将jar拷贝到镜像\n2.2 指定入口，运行java "),v("code",[e._v('ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]')])]),e._v(" "),v("li",[e._v("docker build -t  .")]),e._v(" "),v("li",[e._v("docker run -d -p 80:80 hellworld\nDockerfile:"),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('# 基础镜像使用java ,也可以使用openjdk:8\nFROM java:8\n# 作者\nMAINTAINER eangulee <eangulee@gmail.com>\n# VOLUME 指定了临时文件目录为/tmp。\n# 其效果是在主机 /var/lib/docker 目录下创建了一个临时文件，并链接到容器的/tmp\nVOLUME /tmp \n# 将jar包添加到容器中并更名为app.jar\nADD demo-0.0.1-SNAPSHOT.jar app.jar \n# 运行jar包,touch 就是为了更新app.jar的时间戳，有时静态文本需要更新时间才显示\nRUN bash -c \'touch /app.jar\'\nENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]\n')])])])])]),e._v(" "),v("blockquote",[v("p",[e._v("[残课题]：数据库和redis怎么办？")])])])]),e._v(" "),v("hr"),e._v(" "),v("ul",[v("li",[e._v("【Q5】 【Dockefile发布】springboot+mysql用docker部署")]),e._v(" "),v("li",[e._v("【A】")]),e._v(" "),v("li",[v("strong",[e._v("方案1：两个独立的容器（个人认为不好）")]),e._v(" "),v("ol",[v("li",[e._v("springboot程序里配置文件写url:jdbc:mysql://localhost:3306?eriz?useUnicode")]),e._v(" "),v("li",[e._v("mysql作为一个容器启动"),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("docker volume create mysql_data 创建数据挂载点\ndocker run --name mysql -p 3306:3306 -v mysql_data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7\ndocker exec -it mysql bash  进入容器 /bin/bash\nmysql -uroot -p123456\nmysql授权：GRANT ALL PRIVILEGES ON *.* TO 'root'@'%'WITH GRANT OPTION;\n刷新：FLUSH PRIVILEGES;\n接下来使用navicat连接docker容器中的mysql,导入项目数据\n")])])])]),e._v(" "),v("li",[e._v("springboot本地编译出jar，然后用java:8启动容器")]),e._v(" "),v("li",[v("code",[e._v("docker run -it --net=host --name erizboot -p 8181:8181 erizboot")])])])])]),e._v(" "),v("hr"),e._v(" "),v("ul",[v("li",[v("strong",[e._v("方案2")]),e._v("：（"),v("strong",[e._v("--link，将两个容器相连")]),e._v("）（个人人比较好）\nhttps://zhuanlan.zhihu.com/p/102802904\n1. spring 项目yml文件：\n"),v("code",[e._v("server: port: 8080 spring: datasource: # MySQL 配置 driver-class-name: com.mysql.cj.jdbc.Driver url: jdbc:mysql://127.0.0.1:3306/db?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai username: root password: 11111")]),e._v("\n注意：mysql的ip是127.0.0.1. 一会得该成mysql容器名。\n1. 运行mysql容器。略。同方案1\n2. 运行springboot ，"),v("code",[e._v("docker run -d --name yourproject --link mysql:mysql -p 8080:8080 yourproject")]),e._v("\n3. 修改springboot的，配置文件"),v("code",[e._v("url: jdbc:mysql://mysql:3306/db?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai")]),e._v("\n4. 打包镜像springboot，运行springboot镜像。"),v("strong",[e._v("打包方式参考Q4")])])]),e._v(" "),v("hr"),e._v(" "),v("ul",[v("li",[e._v("【Q6】 【shell系列】"),v("code",[e._v('sh -c "touch /app.jar"')]),e._v(" 这是什么意思？")]),e._v(" "),v("li",[e._v("【A】\n"),v("ol",[v("li",[e._v("就是执行引号里的字符串当作sh命令来执行")])])])]),e._v(" "),v("hr"),e._v(" "),v("ul",[v("li",[e._v("【Q7】【docker-compose系列】 "),v("strong",[e._v("docker-compose")]),e._v(" 部署vue+springboot+mysql")]),e._v(" "),v("li",[e._v("【A】\n"),v("strong",[e._v("blog")]),e._v("：https://www.cnblogs.com/zhengqing/p/11865364.html\n"),v("strong",[e._v("源代码")]),e._v("：https://github.com/zhengqingya/xiao-xiao-su\n用docker-compose至少更专业，更方便些。\n很多技巧和使用Dockerfile是一样的。\n思路：\n"),v("ol",[v("li",[e._v("springboot和web分别有各自的Dockefile，可以不叫Dockerfile，在docker-compose.yml中指定该文件即可。")]),e._v(" "),v("li",[e._v("前端一个目录。后端一个目录。docker配置文件一个目录。")]),e._v(" "),v("li",[e._v("前端Dockerfile，多阶构建 node + nginx")]),e._v(" "),v("li",[e._v("后端springboot, 单阶构建 java:8")]),e._v(" "),v("li",[e._v("docker-compose中前后端为两个service，前端依赖于后端")]),e._v(" "),v("li",[e._v("后端映射volume，以便查看后端日志。")]),e._v(" "),v("li",[e._v("后端运行启动spring "),v("code",[e._v("mvn clean spring-boot:run -Dspring-boot.run.profiles=dev '-Dmaven.test.skip=true'")])]),e._v(" "),v("li",[e._v("通过docker-compose分别启动了前端和后端容器之后呢？\n【残留课题】：mysql没有说明如何启动！半拉柯基！！！！！！")])])])]),e._v(" "),v("hr"),e._v(" "),v("ul",[v("li",[e._v("【Q8】 springboot项目启动后为什么是后端接口：http://www.zhengqing520.com:9101/swagger-ui.html#？")]),e._v(" "),v("li",[e._v("【A】")])]),e._v(" "),v("hr"),e._v(" "),v("ul",[v("li",[e._v("【Q9】 【docker-compose系列】docker-compose springboot mysql redis web应用部署")]),e._v(" "),v("li",[e._v("【A】")])]),e._v(" "),v("hr"),e._v(" "),v("ul",[v("li",[e._v("【Q10】 docker-compose只能在本机发布，不能发不成多服务器。所以，docker-compose多用来开发测试比较多吧。")]),e._v(" "),v("li",[e._v("【A】（单台服务器，多个docker服务）用来快速验证原型！\n"),v("ul",[v("li",[e._v("运维组：针对springboot开发和测试。生成工程库。")]),e._v(" "),v("li",[e._v("开发组：使用脚本一键部署（在本地），不用安装多种环境。尽量裸机（至少有java，node）开发，裸机测试。")]),e._v(" "),v("li",[e._v("开发组：开发一段时间代码后，给运维组")]),e._v(" "),v("li",[e._v("运维组：把docker-compose以及jar拷贝到测试服务器。运行docker-compose。在单服务器部署")]),e._v(" "),v("li",[e._v("测试组：针对单服务器环境测试")])])])]),e._v(" "),v("hr"),e._v(" "),v("ul",[v("li",[v("p",[e._v("【Q11】 docker-compose能够单机发布多个副本。")])]),e._v(" "),v("li",[v("p",[e._v("【A】\nhttps://www.cnblogs.com/JulianHuang/p/12568814.html\n利用docker-compose 启动nginx监听宿主80，转发给8080，然后利用docker内嵌dns\nnginx会转发给三个web应用")]),e._v(" "),v("p",[e._v("总之，"),v("font",{attrs:{color:"red"}},[e._v("docker-compose用于简单的单机验证，单机开发，从gitlab下载代码后快速在本机单机运行，模仿出多个服务器。总之，单机运行。")])],1)])]),e._v(" "),v("hr"),e._v(" "),v("ul",[v("li",[e._v("【Q12】 用ceph搭建Harbor")]),e._v(" "),v("li",[e._v("未着手")])])])}),[],!1,null,null,null);o.default=r.exports}}]);