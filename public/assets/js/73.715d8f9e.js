(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{557:function(s,n,e){"use strict";e.r(n);var r=e(59),a=Object(r.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("linux基本命令。")]),s._v(" "),e("h2",{attrs:{id:"查看dig命令属于哪个包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看dig命令属于哪个包"}},[s._v("#")]),s._v(" 查看dig命令属于哪个包")]),s._v(" "),e("p",[e("code",[s._v("yum provides dig")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Loading mirror speeds from cached hostfile\n * base: mirrors.aliyun.com\n * extras: mirrors.aliyun.com\n * updates: mirrors.aliyun.com\ndocker-ce-stable/x86_64/filelists_db                                                                    |  21 kB  00:00:00\nextras/7/x86_64/filelists_db                                                                            | 217 kB  00:00:00\nupdates/7/x86_64/filelists_db                                                                           | 1.7 MB  00:00:00\n32:bind-utils-9.11.4-16.P2.el7.x86_64 : Utilities for querying DNS name servers\n源    ：base\n匹配来源：\n文件名    ：/usr/bin/dig\n\n\n\n32:bind-utils-9.11.4-16.P2.el7_8.2.x86_64 : Utilities for querying DNS name servers\n源    ：updates\n匹配来源：\n文件名    ：/usr/bin/dig\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("h2",{attrs:{id:"发现bind-utils包里。先不管哪个版本，安装最新的。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发现bind-utils包里。先不管哪个版本，安装最新的。"}},[s._v("#")]),s._v(" 发现bind-utils包里。先不管哪个版本，安装最新的。")]),s._v(" "),e("p",[e("code",[s._v("yum install bind-utils")])]),s._v(" "),e("h2",{attrs:{id:"执行这个新安装的命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行这个新安装的命令"}},[s._v("#")]),s._v(" 执行这个新安装的命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@centos108 usr]# dig gitlab.ccbjb.com.cn +trace\n\n; <<>> DiG 9.11.4-P2-RedHat-9.11.4-16.P2.el7_8.6 <<>> gitlab.ccbjb.com.cn +trace\n;; global options: +cmd\n.                       902     IN      NS      h.root-servers.net.\n.                       902     IN      NS      b.root-servers.net.\n.                       902     IN      NS      g.root-servers.net.\n.                       902     IN      NS      i.root-servers.net.\n.                       902     IN      NS      c.root-servers.net.\n.                       902     IN      NS      d.root-servers.net.\n.                       902     IN      NS      j.root-servers.net.\n.                       902     IN      NS      a.root-servers.net.\n.                       902     IN      NS      e.root-servers.net.\n.                       902     IN      NS      k.root-servers.net.\n.                       902     IN      NS      m.root-servers.net.\n.                       902     IN      NS      f.root-servers.net.\n.                       902     IN      NS      l.root-servers.net.\n;; Received 239 bytes from 192.168.99.2#53(192.168.99.2) in 27 ms\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);