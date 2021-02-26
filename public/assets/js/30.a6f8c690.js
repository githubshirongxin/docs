(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{511:function(n,s,t){"use strict";t.r(s);var a=t(59),e=Object(a.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"_1-设置开机启动nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置开机启动nginx"}},[n._v("#")]),n._v(" 1. 设置开机启动nginx")]),n._v(" "),t("p",[n._v("https://www.cnblogs.com/hellohero55/p/12087922.html")]),n._v(" "),t("h3",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[n._v("#")])]),n._v(" "),t("p",[n._v("/usr/lib/systemd/system 目录中添加 nginx.service")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("[Unit]\nDescription=nginx - high performance web server\nDocumentation=http://nginx.org/en/docs/\nAfter=network.target remote-fs.target nss-lookup.target\n  \n[Service]\nType=forking\nPIDFile=/usr/local/nginx/logs/nginx.pid\nExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf\nExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf\nExecReload=/bin/kill -s HUP $MAINPID\nExecStop=/bin/kill -s QUIT $MAINPID\nPrivateTmp=true\n  \n[Install]\nWantedBy=multi-user.target\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br")])]),t("p",[n._v("systemctl start nginx\nsystemctl status nginx.service\nsystemctl enable nginx.service")]),n._v(" "),t("h2",{attrs:{id:"_2-设置自动mount"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-设置自动mount"}},[n._v("#")]),n._v(" 2. 设置自动mount")]),n._v(" "),t("p",[n._v("https://blog.csdn.net/wanglei9876/article/details/50629561")]),n._v(" "),t("h3",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[n._v("#")]),n._v(" 解决方案")]),n._v(" "),t("p",[n._v("要修改/etc/fstab文件。\n加一行字：\n//192.168.3.103/linuxacademyVideos /data_videos cifs defaults,username=readonly,password=89231206")]),n._v(" "),t("h2",{attrs:{id:"检查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查"}},[n._v("#")]),n._v(" 检查")]),n._v(" "),t("p",[n._v("reboot\n查看 /data_videos/下已经mount上了。\n并且systemctl status nginx 已经active状态。")])])}),[],!1,null,null,null);s.default=e.exports}}]);