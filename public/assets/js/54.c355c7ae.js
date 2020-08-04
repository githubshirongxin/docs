(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{565:function(e,t,a){"use strict";a.r(t);var s=a(55),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("以nexus配置nginx的SSL私有证书为例。")]),e._v(" "),a("h1",{attrs:{id:"签发私有证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#签发私有证书"}},[e._v("#")]),e._v(" 签发私有证书")]),e._v(" "),a("h2",{attrs:{id:"生成私钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成私钥"}},[e._v("#")]),e._v(" 生成私钥")]),e._v(" "),a("p",[e._v("正式生产环境建议使用商业证书！\n使用openssl工具生成一个RSA私钥")]),e._v(" "),a("p",[a("code",[e._v("openssl genrsa -des3 -out nexus1.key 2048")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Generating RSA private key, 2048 bit long modulus\n.......................+++\n......+++\ne is 65537 (0x10001)\nEnter pass phrase for nexus.key:                   # 输入一个至少4位的密码\nVerifying - Enter pass phrase for nexus.key:       # 重复输入密码\n复制代码删除nexus.key中的密码\n# openssl rsa -in nexus.key -out nexus.key\nEnter pass phrase for nexus.key:                 # 输入刚才创建时的密码\nwriting RSA key\n")])])]),a("h2",{attrs:{id:"去掉key的密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#去掉key的密码"}},[e._v("#")]),e._v(" 去掉key的密码")]),e._v(" "),a("p",[a("code",[e._v("openssl rsa -in nexus1.key -out nexus.key")])]),e._v(" "),a("h2",{attrs:{id:"生成csr（证书签名请求）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成csr（证书签名请求）"}},[e._v("#")]),e._v(" 生成CSR（证书签名请求）")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# openssl req -new -key nexus.key -out nexus.csr\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("You are about to be asked to enter information that will be incorporated\ninto your certificate request.\nWhat you are about to enter is what is called a Distinguished Name or a DN.\nThere are quite a few fields but you can leave some blank\nFor some fields there will be a default value,\nIf you enter '.', the field will be left blank.\n-----\nCountry Name (2 letter code) [XX]:cn             # 国家\nState or Province Name (full name) []:Sichuan    # 地区 \nLocality Name (eg, city) [Default City]:Chengdu  # 城市\nOrganization Name (eg, company) [Default Company Ltd]:akiya  # 组织\nOrganizational Unit Name (eg, section) []:akiya  # 组织单位\nCommon Name (eg, your name or your server's hostname) []:akiya    # 常用名可填自己名字或域名\nEmail Address []:a@b.com                         # 邮件地址\n\nPlease enter the following 'extra' attributes\nto be sent with your certificate request      \nA challenge password []:       # 可留空\nAn optional company name []:   # 可留空\n")])])]),a("h2",{attrs:{id:"生成自签名证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成自签名证书"}},[e._v("#")]),e._v(" 生成自签名证书")]),e._v(" "),a("p",[e._v("注意：在使用自签名的临时证书时，浏览器会提示证书的颁发机构是未知的。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("echo subjectAltName = IP:192.168.3.120 > extfile.cnf\nopenssl x509 -req -days 365 -in nexus.csr -signkey nexus.key -out nexus.crt -extfile extfile.cnf\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Signature ok\nsubject=/C=cn/ST=Sichuan/L=Chengdu/O=akiya/OU=akiya/CN=akiya/emailAddress=a@b.com\nGetting Private key\n")])])]),a("h2",{attrs:{id:"存放证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存放证书"}},[e._v("#")]),e._v(" 存放证书")]),e._v(" "),a("p",[e._v("拷贝到nginx的证书目录 cp nexus.* /etc/nginx/certs/")]),e._v(" "),a("h2",{attrs:{id:"配置证书到nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置证书到nginx"}},[e._v("#")]),e._v(" 配置证书到nginx")]),e._v(" "),a("p",[e._v("vim /etc/nginx/conf.d/nexus.conf")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server {\n    listen 2222 ssl;\n    server_name nexus.ccbjb.com.cn;\n\n    # SSL 证书\n    ssl_certificate ./certs/nexus.crt;\n    # SSL 私钥\n    ssl_certificate_key ./certs/nexus.key;\n    ssl_session_cache shared:SSL:50m;\n\n    location / {\n        proxy_set_header        Host $host:$server_port;\n        proxy_set_header        X-Real-IP $remote_addr;\n        proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header        X-Forwarded-Proto $scheme;\n        proxy_redirect          http:// https://;\n        proxy_pass              http://127.0.0.1:8082;\n        client_max_body_size       1024m;\n        client_body_buffer_size    128k;\n    }\n}\n\nserver {\n    listen 3333 ssl;\n    server_name registry.ntpstat.com;\n\n    # SSL 证书\n    ssl_certificate ./certs/nexus.crt;\n    # SSL 私钥\n    ssl_certificate_key ./certs/nexus.key;\n    ssl_session_cache shared:SSL:50m;\n\n    location / {\n        proxy_set_header        Host $host:$server_port;\n        proxy_set_header        X-Real-IP $remote_addr;\n        proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header        X-Forwarded-Proto $scheme;\n        proxy_redirect          http:// https://;\n        proxy_pass              http://127.0.0.1:8083;\n        client_max_body_size       1024m;\n        client_body_buffer_size    128k;\n    }\n}\n")])])]),a("h2",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[e._v("#")]),e._v(" 测试")]),e._v(" "),a("p",[e._v("https://nexus.ccbjb.com.cn")])])}),[],!1,null,null,null);t.default=n.exports}}]);