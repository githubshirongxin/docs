(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{504:function(r,a,s){"use strict";s.r(a);var t=s(59),e=Object(t.a)({},(function(){var r=this,a=r.$createElement,s=r._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[s("p",[r._v("能够在存储高可用，服务高可用的要求下，\n发布好docker本地库+harbor\n当作公司开发的基础。")]),r._v(" "),s("h1",{attrs:{id:"docker本地库安装，harbor安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker本地库安装，harbor安装"}},[r._v("#")]),r._v(" docker本地库安装，harbor安装")]),r._v(" "),s("h2",{attrs:{id:"_1-简单的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-简单的理解"}},[r._v("#")]),r._v(" 1.简单的理解")]),r._v(" "),s("h3",{attrs:{id:"【q】docker本地仓库与harbor。本地仓库的意义，harbor的意义？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#【q】docker本地仓库与harbor。本地仓库的意义，harbor的意义？"}},[r._v("#")]),r._v(" 【Q】docker本地仓库与harbor。本地仓库的意义，harbor的意义？")]),r._v(" "),s("p",[r._v("本地仓库意义：")]),r._v(" "),s("ol",[s("li",[r._v("其它机器不开外网也能下载镜像。")]),r._v(" "),s("li",[r._v("局域网传输速度远远大于外网传输。快。")]),r._v(" "),s("li",[r._v("公司的研发成功，没必要传到github上。方便大家共享一些半成品镜像。")]),r._v(" "),s("li",[r._v("这些镜像只对公司内部人员有意义。外人也不愿意看。")])]),r._v(" "),s("h3",{attrs:{id:"【q】如果大家都有网的话，大家又不介意快慢，本地镜像库有还有什么意义？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#【q】如果大家都有网的话，大家又不介意快慢，本地镜像库有还有什么意义？"}},[r._v("#")]),r._v(" 【Q】如果大家都有网的话，大家又不介意快慢，本地镜像库有还有什么意义？")]),r._v(" "),s("p",[r._v("镜像文件的共享。")]),r._v(" "),s("h3",{attrs:{id:"【q】-使用了本地docker仓库，对大家有什么影响？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#【q】-使用了本地docker仓库，对大家有什么影响？"}},[r._v("#")]),r._v(" 【Q】 使用了本地docker仓库，对大家有什么影响？")]),r._v(" "),s("ol",[s("li",[r._v("本地镜像库就是个register镜像启动的容器。ip:port")]),r._v(" "),s("li",[r._v("其它人使用上，就是pull的时候镜像名字前面多了个 ip:port/xxx:banben")]),r._v(" "),s("li",[r._v("其他人使用上，也就是commit的时候，镜像名字前多个 ip:port/")]),r._v(" "),s("li",[r._v("用不用docker login？")]),r._v(" "),s("li",[r._v("使用docker search的时候用不用加ip：port？")]),r._v(" "),s("li",[r._v("docker tag的时候多了个ip：port")]),r._v(" "),s("li",[r._v("默认创建在/tmp/registry下。")])]),r._v(" "),s("h3",{attrs:{id:"【q】使用官方dockerhub，与使用本地仓库有什么不同？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#【q】使用官方dockerhub，与使用本地仓库有什么不同？"}},[r._v("#")]),r._v(" 【Q】使用官方DockerHub，与使用本地仓库有什么不同？")]),r._v(" "),s("ol",[s("li",[r._v("docker login")]),r._v(" "),s("li",[r._v("docker tag 本地库/镜像tag  dockerhubId/镜像tag")]),r._v(" "),s("li",[r._v("docker push dockerhubId/镜像tag")])]),r._v(" "),s("h3",{attrs:{id:"【q】-本地镜像和harbor什么关系？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#【q】-本地镜像和harbor什么关系？"}},[r._v("#")]),r._v(" 【Q】 本地镜像和harbor什么关系？")]),r._v(" "),s("ol",[s("li",[r._v("本地仓库是docker官方的registry镜像")]),r._v(" "),s("li",[r._v("harbor是vmware公司的基于registry的管理UI")]),r._v(" "),s("li",[r._v("提供了额外的功能")])]),r._v(" "),s("h3",{attrs:{id:"harbor本地库安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#harbor本地库安装"}},[r._v("#")]),r._v(" harbor本地库安装")]),r._v(" "),s("ul",[s("li",[r._v("参考：https://www.cnblogs.com/L-dongf/p/11028731.html")]),r._v(" "),s("li",[r._v("参考：https://www.cnblogs.com/kevingrace/p/6547616.html")]),r._v(" "),s("li",[r._v("这里不建议使用kubernetes来部署, 原因是镜像仓库非常重要, 尽量保证部署和维护的简洁性, 因这里直接使用compose的方式进行部署。官方提供3种部署Harbor的方式:\n"),s("ul",[s("li",[r._v("1）在线安装: 从Docker Hub下载Harbor的镜像来安装, 由于Docker Hub比较慢, 建议Docker配置好加速器。")]),r._v(" "),s("li",[r._v("2）离线安装: 这种方式应对与部署主机没联网的情况使用。需要提前下载离线安装包:   harbor-offline-installer-.tgz 到本地")]),r._v(" "),s("li",[r._v("3）OVA安装: 这个主要用vCentor环境是使用")])])])]),r._v(" "),s("p",[r._v("首先，为docker配置加速器")]),r._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v('[root@harbor-node ~]# mkdir -p /etc/docker\n[root@harbor-node ~]# cat /etc/docker/daemon.json\n{\n "registry-mirrors": ["https://v5d7kh0f.mirror.aliyuncs.com"]\n}\n')])]),r._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[r._v("1")]),s("br"),s("span",{staticClass:"line-number"},[r._v("2")]),s("br"),s("span",{staticClass:"line-number"},[r._v("3")]),s("br"),s("span",{staticClass:"line-number"},[r._v("4")]),s("br"),s("span",{staticClass:"line-number"},[r._v("5")]),s("br")])]),s("p",[r._v("然后，下载最新的online install harbor包。\nhttps://github.com/goharbor/harbor/releases上邮件复制下载地址。wget下载。")]),r._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v("wget  https://github.com/goharbor/harbor/releases/download/v2.0.1/harbor-online-installer-v2.0.1.tgz\n")])]),r._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[r._v("1")]),s("br")])]),s("p",[r._v("必须，升级docker版本。（https://www.jianshu.com/p/6e5da590aeda）否则安装不上。")]),r._v(" "),s("p",[r._v("修改 harbor.yml\n"),s("code",[r._v("vim harbor.yml")])]),r._v(" "),s("ul",[s("li",[r._v("hostname, db_password,harbor_admin_password改成自己的。")])]),r._v(" "),s("p",[r._v("然后，运行harbor安装。\n"),s("code",[r._v("./install.sh")])]),r._v(" "),s("blockquote",[s("p",[r._v("Error happened in config validation...\nERROR:root:Error: The protocol is https but attribute ssl_cert is not set")])]),r._v(" "),s("p",[r._v("针对上面错误，配置https认证 ，见下面（参考：https://www.cnblogs.com/Dev0ps/p/10566398.html）")]),r._v(" "),s("p",[r._v("因为测试使用，在192.168.3.108上。使用自签名证书:")]),r._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v("mkdir /root/ca -p\ncd /root/ca\nopenssl req  -newkey rsa:4096 -nodes -sha256 -keyout ca.key -x509 -days 365 -out ca.crt\n// 192.168.3.108是harbor安装的主机\nopenssl req  -newkey rsa:4096 -nodes -sha256 -keyout 192.168.3.108.key -out 192.168.3.108.csr\n//一路回车出现Common Name 输入IP或域名\necho subjectAltName = IP:192.168.3.108 > extfile.cnf\n\nopenssl x509 -req -days 365 -in 192.168.3.108.csr -CA ca.crt -CAkey ca.key -CAcreateserial -extfile extfile.cnf -out 192.168.3.108.crt\n")])]),r._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[r._v("1")]),s("br"),s("span",{staticClass:"line-number"},[r._v("2")]),s("br"),s("span",{staticClass:"line-number"},[r._v("3")]),s("br"),s("span",{staticClass:"line-number"},[r._v("4")]),s("br"),s("span",{staticClass:"line-number"},[r._v("5")]),s("br"),s("span",{staticClass:"line-number"},[r._v("6")]),s("br"),s("span",{staticClass:"line-number"},[r._v("7")]),s("br"),s("span",{staticClass:"line-number"},[r._v("8")]),s("br"),s("span",{staticClass:"line-number"},[r._v("9")]),s("br")])]),s("p",[r._v("上面的弄好之后，修改harbor.yml两处:")]),r._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v("  # http related config\n    http:\n      # port for http, default is 80. If https enabled, this port will redirect to https port\n      port: 80\n\n   # https related config\n    https:\n      # https port for harbor, default is 443\n      port: 443\n      # The path of cert and key files for nginx\n      certificate: /root/ca/192.168.3.108.crt\n      private_key: /root/ca/192.168.3.108.key\n")])]),r._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[r._v("1")]),s("br"),s("span",{staticClass:"line-number"},[r._v("2")]),s("br"),s("span",{staticClass:"line-number"},[r._v("3")]),s("br"),s("span",{staticClass:"line-number"},[r._v("4")]),s("br"),s("span",{staticClass:"line-number"},[r._v("5")]),s("br"),s("span",{staticClass:"line-number"},[r._v("6")]),s("br"),s("span",{staticClass:"line-number"},[r._v("7")]),s("br"),s("span",{staticClass:"line-number"},[r._v("8")]),s("br"),s("span",{staticClass:"line-number"},[r._v("9")]),s("br"),s("span",{staticClass:"line-number"},[r._v("10")]),s("br"),s("span",{staticClass:"line-number"},[r._v("11")]),s("br"),s("span",{staticClass:"line-number"},[r._v("12")]),s("br")])]),s("p",[r._v("再执行 ./install.sh\n✔ ----Harbor has been installed and started successfully.----")]),r._v(" "),s("p",[r._v("测试：https://192.168.3.108 ,用户名admin和密码查看harbor.yml\n"),s("img",{attrs:{src:"/docs/images/2020-07-07-18-16-39.png",alt:""}})]),r._v(" "),s("p",[s("font",{attrs:{color:"red"}},[r._v("【残课题】：harbor配置邮件服务器，提示错误“验证邮件服务器失败，错误: failed to ping email server”")])],1),r._v(" "),s("hr"),r._v(" "),s("h3",{attrs:{id:"如何使用harbor？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何使用harbor？"}},[r._v("#")]),r._v(" 如何使用harbor？")]),r._v(" "),s("ul",[s("li",[r._v("harbor的主机名 192.168.3.108 在harbor上创建项目edusite")]),r._v(" "),s("li",[r._v("先在其它机器上 改变tag成harbor库的，")]),r._v(" "),s("li",[s("code",[r._v("docker tag xxxx:banbenhao 192.168.3.108/edusite/xxxx:banbenhao")])])]),r._v(" "),s("h4",{attrs:{id:"问题1：-push没有权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题1：-push没有权限"}},[r._v("#")]),r._v(" 问题1： push没有权限")]),r._v(" "),s("p",[r._v("在其它机器上"),s("code",[r._v("docker push 192.168.3.108/edusite/xxxx:banbenhao")])]),r._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v("   [root@centos3 ~]# docker push 192.168.3.108/edusite/node\n   The push refers to a repository [192.168.3.108/edusite/node]\n   Get https://192.168.3.108/v1/_ping: x509: certificate signed by unknown authority\n")])]),r._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[r._v("1")]),s("br"),s("span",{staticClass:"line-number"},[r._v("2")]),s("br"),s("span",{staticClass:"line-number"},[r._v("3")]),s("br")])]),s("h4",{attrs:{id:"解决：在客户端上解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决：在客户端上解决"}},[r._v("#")]),r._v(" 解决：在客户端上解决")]),r._v(" "),s("p",[r._v("在push的客户端上，修改一个文件，然后重新启动。")]),r._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v('vim /etc/docker/daemon.json\n{ \n"insecure-registries": ["192.168.3.108"]\n}\n#systemctl restart docker\n')])]),r._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[r._v("1")]),s("br"),s("span",{staticClass:"line-number"},[r._v("2")]),s("br"),s("span",{staticClass:"line-number"},[r._v("3")]),s("br"),s("span",{staticClass:"line-number"},[r._v("4")]),s("br"),s("span",{staticClass:"line-number"},[r._v("5")]),s("br")])]),s("h4",{attrs:{id:"问题2：没权限访问库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题2：没权限访问库"}},[r._v("#")]),r._v(" 问题2：没权限访问库")]),r._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v("unauthorized: unauthorized to access repository: edusite/node, action: push: unauthorized to access repository: edusite/node, action: push\n")])]),r._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[r._v("1")]),s("br")])]),s("h4",{attrs:{id:"解决："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决："}},[r._v("#")]),r._v(" 解决：")]),r._v(" "),s("p",[r._v("harbor上，进入该项目，为该项目添加成员，shirx，maoat，mengxt\n验证：再push，成功！！！")]),r._v(" "),s("p",[r._v("其它机器上pull ，"),s("code",[r._v("docker pull 192.168.3.108/edusite/xxx:banbenhao")]),r._v("\n也成功！！")]),r._v(" "),s("p",[r._v("或者：docker login -u admin 192.168.3.108/edusite/xxx:banbenhao\n输入密码默认是Harbor12345，我自己改了")]),r._v(" "),s("h3",{attrs:{id:"【q】本地镜像服务器harbor如何配置成分布式？（防止单点故障）-※★★"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#【q】本地镜像服务器harbor如何配置成分布式？（防止单点故障）-※★★"}},[r._v("#")]),r._v(" 【Q】本地镜像服务器harbor如何配置成分布式？（防止单点故障） ※★★")]),r._v(" "),s("ol",[s("li",[r._v("https://www.cnblogs.com/liangyuntao-ts/p/11199887.html")]),r._v(" "),s("li",[r._v("双主从模式（推荐，灾难恢复简单，扩展容易），其它cephfs和k8s模式灾难恢复太苦难。")])]),r._v(" "),s("h3",{attrs:{id:"【q】harbor库的主从节点，但是数据放到一个点，dns服务器（nfs）的一个目录。主从同时挂载这个目录。我觉得不好，这样，nfs那台服务器如果硬盘坏掉，岂不变成无法恢复的单点故障了？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#【q】harbor库的主从节点，但是数据放到一个点，dns服务器（nfs）的一个目录。主从同时挂载这个目录。我觉得不好，这样，nfs那台服务器如果硬盘坏掉，岂不变成无法恢复的单点故障了？"}},[r._v("#")]),r._v(" 【Q】harbor库的主从节点，但是数据放到一个点，DNS服务器（NFS）的一个目录。主从同时挂载这个目录。我觉得不好，这样，NFS那台服务器如果硬盘坏掉，岂不变成无法恢复的单点故障了？")]),r._v(" "),s("ol",[s("li",[r._v("https://blog.csdn.net/weixin_43304804/article/details/86507467")]),r._v(" "),s("li",[r._v("写得倒是挺详细的，可惜我觉得称不上“高可用”")])])])}),[],!1,null,null,null);a.default=e.exports}}]);