(window.webpackJsonp=window.webpackJsonp||[]).push([[441],{924:function(s,a,e){"use strict";e.r(a);var t=e(59),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"在ubuntu中安装docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在ubuntu中安装docker"}},[s._v("#")]),s._v(" 在Ubuntu中安装Docker")]),s._v(" "),e("h2",{attrs:{id:"_1-更新ubuntu的apt源索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-更新ubuntu的apt源索引"}},[s._v("#")]),s._v(" 1.更新ubuntu的apt源索引")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("　　sudo apt-get update\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("过程中如果出现")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("GPG 错误：http://mirrors.ustc.edu.cn/kali kali-rolling InRelease: 由于没有公钥，无法\n验证下列签名： NO_PUBKEY (XXX)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("可以执行下面的命令解决")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("apt-key adv --keyserver keyserver.ubuntu.com --recv-keys (XXX)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果报错")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("仓库 “XXXX” 不再含有 Release 文件\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("参考https://www.jianshu.com/p/5fb01cf2966e?from=singlemessage解决")]),s._v(" "),e("h2",{attrs:{id:"_2-安装包允许apt通过https使用仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装包允许apt通过https使用仓库"}},[s._v("#")]),s._v(" 2.安装包允许apt通过HTTPS使用仓库")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo apt-get install \\\n    apt-transport-https \\\n    ca-certificates \\\n    curl \\\n    software-properties-common\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"_3-添加docker官方gpg-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加docker官方gpg-key"}},[s._v("#")]),s._v(" 3.添加Docker官方GPG key")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_4-设置docker稳定版仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置docker稳定版仓库"}},[s._v("#")]),s._v(" 4.设置Docker稳定版仓库")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('sudo add-apt-repository \\\n   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n   $(lsb_release -cs) \\\n   stable"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"_5-添加仓库后，更新apt源索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-添加仓库后，更新apt源索引"}},[s._v("#")]),s._v(" 5.添加仓库后，更新apt源索引")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo apt-get update\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_6-安装最新版docker-ce（社区版）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-安装最新版docker-ce（社区版）"}},[s._v("#")]),s._v(" 6.安装最新版Docker CE（社区版）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo apt-get install docker-ce\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_7-检查docker-ce是否安装正确"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-检查docker-ce是否安装正确"}},[s._v("#")]),s._v(" 7.检查Docker CE是否安装正确")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo docker run hello-world\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果打出如下信息，安装成功\n"),e("img",{attrs:{src:"/docs/images/%E9%AA%8C%E8%AF%81%E5%AE%89%E8%A3%85%E6%88%90%E5%8A%9F.png",alt:"验证安装成功"}}),s._v("\n为了避免每次命令都输入sudo，可以设置用户权限，注意执行后须注销重新登录")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo usermod -a -G docker $USER\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("ok安装完成")])])}),[],!1,null,null,null);a.default=r.exports}}]);