(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{492:function(e,s,o){"use strict";o.r(s);var a=o(55),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("centos7上安装docker-compose，很简单。做个memo，其他不做也无所谓，网上资料多得很。\n不容易错。")]),e._v(" "),o("h2",{attrs:{id:"官方文档：慢"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#官方文档：慢"}},[e._v("#")]),e._v(" 官方文档：慢")]),e._v(" "),o("p",[e._v("https://docs.docker.com/compose/install/")]),e._v(" "),o("p",[e._v("一共就这么三步。大概三分钟\n"),o("code",[e._v('sudo curl -L "https://github.com/docker/compose/releases/download/1.26.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose')])]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('[root@centos108 ~]# sudo curl -L "https://github.com/docker/compose/releases/download/1.26.1/docker-comp ose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100   638  100   638    0     0    301      0  0:00:02  0:00:02 --:--:--   301\n100 11.6M  100 11.6M    0     0   112k      0  0:01:46  0:01:46 --:--:--  142k\n\n\n[root@centos108 ~]# chmod +x /usr/local/bin/docker-compose\n\n[root@centos108 ~]# ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose\n\n[root@centos108 ~]# docker-compose --version\ndocker-compose version 1.26.1, build f216ddbf\n')])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br"),o("span",{staticClass:"line-number"},[e._v("3")]),o("br"),o("span",{staticClass:"line-number"},[e._v("4")]),o("br"),o("span",{staticClass:"line-number"},[e._v("5")]),o("br"),o("span",{staticClass:"line-number"},[e._v("6")]),o("br"),o("span",{staticClass:"line-number"},[e._v("7")]),o("br"),o("span",{staticClass:"line-number"},[e._v("8")]),o("br"),o("span",{staticClass:"line-number"},[e._v("9")]),o("br"),o("span",{staticClass:"line-number"},[e._v("10")]),o("br"),o("span",{staticClass:"line-number"},[e._v("11")]),o("br"),o("span",{staticClass:"line-number"},[e._v("12")]),o("br"),o("span",{staticClass:"line-number"},[e._v("13")]),o("br")])]),o("h2",{attrs:{id:"国内镜像安装-docker-compose-，速度快"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#国内镜像安装-docker-compose-，速度快"}},[e._v("#")]),e._v(" 国内镜像安装 docker-compose ，速度快")]),e._v(" "),o("h3",{attrs:{id:"_1-按照官网操作"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-按照官网操作"}},[e._v("#")]),e._v(" 1.按照官网操作")]),e._v(" "),o("p",[o("code",[e._v('sudo curl -L "https://github.com/docker/compose/releases/download/1.26.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose')])]),e._v(" "),o("p",[e._v("太慢了，慢的人头疼。")]),e._v(" "),o("h3",{attrs:{id:"_2-找到一个参考文章-https-blog-csdn-net-huiyanghu-article-details-82253886，用下面的地址，秒速"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-找到一个参考文章-https-blog-csdn-net-huiyanghu-article-details-82253886，用下面的地址，秒速"}},[e._v("#")]),e._v(" 2.找到一个参考文章 https://blog.csdn.net/huiyanghu/article/details/82253886，用下面的地址，秒速")]),e._v(" "),o("p",[o("code",[e._v("curl -L https://get.daocloud.io/docker/compose/releases/download/1.26.1/docker-compose-")]),e._v("uname -s"),o("code",[e._v("-")]),e._v("uname -m"),o("code",[e._v("> /usr/local/bin/docker-compose")])]),e._v(" "),o("p",[e._v("秒速下载，然后修改文件的执行权限")]),e._v(" "),o("p",[o("code",[e._v("chmod +x /usr/local/bin/docker-compose")])]),e._v(" "),o("p",[e._v("确认是否安装成功")])])}),[],!1,null,null,null);s.default=t.exports}}]);