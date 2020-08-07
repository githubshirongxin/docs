(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{514:function(a,t,s){"use strict";s.r(t);var e=s(55),i=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("作者：HanlyJiang\n链接：https://www.jianshu.com/p/4111534b339f")]),a._v(" "),s("h2",{attrs:{id:"建立认证目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立认证目录"}},[a._v("#")]),a._v(" 建立认证目录")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo mkdir -p /etc/gitlab/ssl\nsudo chmod 700 /etc/gitlab/ssl\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"建立证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立证书"}},[a._v("#")]),a._v(" 建立证书")]),a._v(" "),s("h3",{attrs:{id:"建立自签名证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立自签名证书"}},[a._v("#")]),a._v(" 建立自签名证书")]),a._v(" "),s("h4",{attrs:{id:"_1-创建-private-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建-private-key"}},[a._v("#")]),a._v(" 1. 创建 Private Key")]),a._v(" "),s("p",[s("code",[a._v("sudo openssl genrsa -des3 -out /etc/gitlab/ssl/gitlab.domain.com.key 2048")])]),a._v(" "),s("p",[a._v("记住输入的密码（Pass phrase）")]),a._v(" "),s("h4",{attrs:{id:"_2-生成-certificate-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-生成-certificate-request"}},[a._v("#")]),a._v(" 2. 生成 Certificate Request")]),a._v(" "),s("p",[s("code",[a._v("sudo openssl req -new -key /etc/gitlab/ssl/gitlab.domain.com.key -out /etc/gitlab/ssl/gitlab.domain.com.csr")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Enter Country Name US\nEnter State or Province Full Name\nEnter City Name\nEnter Organization Name\nEnter Company Name\nEnter Organizational Unit Name\nEnter server hostname i.e. URL gitlab.domain.com\nEnter Admin Email Address\nSkip Challenge Password (Hit Enter)\nSkip Optional Company Name (Hit Enter)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("h4",{attrs:{id:"注-第一步和第二部可以合并成一条命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注-第一步和第二部可以合并成一条命令"}},[a._v("#")]),a._v(" 注: 第一步和第二部可以合并成一条命令")]),a._v(" "),s("p",[s("code",[a._v("openssl req -nodes -newkey rsa:2048 -keyout gitlab.domain.com.key -out gitlab.domain.com.csr")])]),a._v(" "),s("h4",{attrs:{id:"_3-移除private-key-中的密码短语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-移除private-key-中的密码短语"}},[a._v("#")]),a._v(" 3. 移除Private Key 中的密码短语")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo cp -v /etc/gitlab/ssl/gitlab.domain.com.{key,original}\nsudo openssl rsa -in /etc/gitlab/ssl/gitlab.domain.com.original -out /etc/gitlab/ssl/gitlab.domain.com.key\nsudo rm -v /etc/gitlab/ssl/gitlab.domain.com.original\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h4",{attrs:{id:"_4-创建证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建证书"}},[a._v("#")]),a._v(" 4. 创建证书")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo openssl x509 -req -days 1460 -in /etc/gitlab/ssl/gitlab.domain.com.csr -signkey /etc/gitlab/ssl/gitlab.domain.com.key -out /etc/gitlab/ssl/gitlab.domain.com.crt\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"_5-移除证书请求文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-移除证书请求文件"}},[a._v("#")]),a._v(" 5. 移除证书请求文件")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo rm -v /etc/gitlab/ssl/gitlab.domain.com.csr    \n// 设置文件权限\nsudo chmod 600 /etc/gitlab/ssl/gitlab.domain.com.*\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h4",{attrs:{id:"gitlab-配置更改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-配置更改"}},[a._v("#")]),a._v(" gitlab 配置更改")]),a._v(" "),s("p",[s("code",[a._v("sudo vim /etc/gitlab/gitlab.rb")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("external_url 'https://gitlab.domain.com'\n可选配置：\ngitlab 网站https：\nnginx['redirect_http_to_https'] = true\ngitlab ci 网站https：\nci_nginx['redirect_http_to_https'] = true\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h4",{attrs:{id:"复制证书到gitlab目录："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复制证书到gitlab目录："}},[a._v("#")]),a._v(" 复制证书到gitlab目录：")]),a._v(" "),s("p",[s("code",[a._v("sudo cp /etc/gitlab/ssl/etc/gitlab/ssl/gitlab.domain.com.crt /etc/gitlab/trusted-certs/")])]),a._v(" "),s("h4",{attrs:{id:"gitlab重新配置-更新："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitlab重新配置-更新："}},[a._v("#")]),a._v(" gitlab重新配置+更新：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo gitlab-ctl reconfigure\nsudo gitlab-ctl restart\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h4",{attrs:{id:"z-注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#z-注意事项"}},[a._v("#")]),a._v(" Z. 注意事项")]),a._v(" "),s("h6",{attrs:{id:"z1-gitlab如何找到对应的证书？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#z1-gitlab如何找到对应的证书？"}},[a._v("#")]),a._v(" Z1. gitlab如何找到对应的证书？")]),a._v(" "),s("p",[a._v("/etc/gitlab/gitlab.rb 配置的external_url 如果是https://gitlab.domain.com 那么gitlab会自动去找/etc/gitlab/ssl/ 目录中的gitlab.domain.com.crt 和gitlab.domain.com.key 文件，所以如果需要更换external_url，可以采取如下办法：")]),a._v(" "),s("p",[a._v("将原先的crt和key文件改名为新的external_url 对应的域名\n直接通过配置指定证书和key文件的路径\nnginx['ssl_certificate'] = \"/etc/gitlab/ssl/gitlab.domain.com.crt\"\n　　\nnginx['ssl_certificate_key'] = \"/etc/gitlab/ssl/gitlab.domain.com.key\"\n别忘了reconfigure")])])}),[],!1,null,null,null);t.default=i.exports}}]);