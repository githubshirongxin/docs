(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{553:function(s,e,t){"use strict";t.r(e);var a=t(59),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("单机版。写个shell每天备份该机器/srv目录到公司的raid盘。先公司内部凑合用。\n存储高可用的，我现在还不知道怎么做。")]),s._v(" "),t("p",[s._v("完全基于"),t("a",{attrs:{href:"https://juejin.im/post/5b55bf1c6fb9a04fac0d13b3",target:"_blank",rel:"noopener noreferrer"}},[s._v("[Docker折腾记: (3)Docker Compose构建Gitlab,从配置(https,邮箱验证)到基本可用]"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("成功部署在192.168.3.111上，验证好用。")]),s._v(" "),t("h1",{attrs:{id:"gitlab-docker-compose-install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-docker-compose-install"}},[s._v("#")]),s._v(" gitlab docker-compose install")]),s._v(" "),t("p",[s._v("这才是我想要的gitlab docker-compose部署的方式\n配置写得非常好")]),s._v(" "),t("h2",{attrs:{id:"版本二的docker-compose-xml，基本可用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本二的docker-compose-xml，基本可用"}},[s._v("#")]),s._v(" 版本二的docker-compose.xml，基本可用")]),s._v(" "),t("p",[s._v("唯独一点：2222:22 → 22:22 .否则"),t("code",[s._v("git clone git@gitlab.ccbjb.com.cn:shirongxin/edusite.git")]),s._v(" 永远提示输入密码，输入什么也不对。具体做法下面有。")]),s._v(" "),t("h3",{attrs:{id:"修改docker-compose-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改docker-compose-yml"}},[s._v("#")]),s._v(" 修改docker-compose.yml")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("version: '3.6'\nservices:\n  gitlab:\n    container_name: gitlab\n    privileged: true\n    image: gitlab/gitlab-ce:latest\n    restart: always\n    hostname: 'gitlab.ccbjb.com.cn'\n    environment:\n      GITLAB_OMNIBUS_CONFIG: |\n        external_url 'https://gitlab.ccbjb.com.cn'\n        gitlab_rails['smtp_enable'] = true\n        gitlab_rails['smtp_address'] = \"（邮件服务器IP）.100.5\"\n        gitlab_rails['smtp_port'] = 25\n        gitlab_rails['smtp_user_name'] = \"shirx@ccbjb.com.cn\"\n        gitlab_rails['smtp_password'] = \"密码\"\n        gitlab_rails['smtp_domain'] = \"ccbjb.com.cn\"\n        gitlab_rails['smtp_authentication'] = \"login\"\n        gitlab_rails['smtp_enable_starttls_auto'] = true\n        gitlab_rails['smtp_tls'] = false\n        gitlab_rails['gitlab_email_from'] = 'shirx@ccbjb.com.cn'\n        gitlab_rails['gitlab_email_reply_to'] = 'shirx@ccbjb.com.cn'\n        nginx['enable'] = true\n        nginx['client_max_body_size'] = '250m'\n        nginx['redirect_http_to_https'] = true\n        nginx['ssl_certificate'] = \"/etc/gitlab/ssl/gitlab.ccbjb.com.cn_chain.crt\"\n        nginx['ssl_certificate_key'] = \"/etc/gitlab/ssl/gitlab.ccbjb.com.cn_key.key\"\n        nginx['ssl_ciphers'] = \"ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256\"\n        nginx['ssl_prefer_server_ciphers'] = \"on\"\n        nginx['ssl_protocols'] = \"TLSv1.1 TLSv1.2\"\n        nginx['ssl_session_cache'] = \"builtin:1000  shared:SSL:10m\"\n        nginx['listen_addresses'] = [\"0.0.0.0\"]\n        nginx['http2_enabled'] = true\n    ports:\n      - '80:80'\n      - '443:443'\n      - '22:22'\n    volumes:\n      - '/srv/gitlab/config:/etc/gitlab'\n      - '/srv/gitlab/logs:/var/log/gitlab'\n      - '/srv/gitlab/data:/var/opt/gitlab'\n  gitlab-runner:\n    image: gitlab/gitlab-runner:alpine\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("注意安装docker-compose up -d如果提示错误：")]),s._v(" "),t("ul",[t("li",[s._v("Unsupported config option for services service: 'gitlab'\n请安装1.25或1.27版本的docker-compose")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("curl -L https://github.com/docker/compose/releases/download/1.27.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose\nchmod +x /usr/local/bin/docker-compose\ndocker-compose --version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_1-重新安装的时候，因为gitlab的数据已经有一些更新了。并备份了一下数据。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-重新安装的时候，因为gitlab的数据已经有一些更新了。并备份了一下数据。"}},[s._v("#")]),s._v(" 1. 重新安装的时候，因为gitlab的数据已经有一些更新了。并备份了一下数据。")]),s._v(" "),t("p",[t("code",[s._v("tar cvf srv.tar /srv")])]),s._v(" "),t("p",[s._v("如果需要在别的机器安装，或者本3.111机器因为某种原因重新安装虚拟机了，\n需要把srv.tar备份到某处，千万不要放到一台机器上，太危险。\n另外，也需要至少每天备份一次。")]),s._v(" "),t("p",[s._v("先这么手动备份把，之后我准备把gitlab安装成主从备份模式。\n成功之后我准备安装到k8s上，多节点，数据也是多节点。这样就不怕单点失败了。")]),s._v(" "),t("h3",{attrs:{id:"_2-运行docker-compose之前，免费证书申请"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-运行docker-compose之前，免费证书申请"}},[s._v("#")]),s._v(" 2. 运行docker-compose之前，免费证书申请")]),s._v(" "),t("p",[s._v("https://freessl.org/apply?domains=gitlab.ccbjb.com.cn&product=buypass01&from=")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/2020-07-03-16-27-18.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"/images/2020-07-03-16-27-33.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"/images/2020-07-03-16-28-18.png",alt:""}})]),s._v(" "),t("ul",[t("li",[t("p",[s._v("KeyManage 选择导出的时候选择"),t("strong",[s._v("ngix方式")]),s._v("，因为gitlab的证书是配置在nginx里的。")])]),s._v(" "),t("li",[t("p",[s._v("并用DNS验证的方式验证。下载下来压缩包解压后是两个文件，\ngitlab.ccbjb.com.cn_chain.crt\ngitlab.ccbjb.com.cn_key.key")])]),s._v(" "),t("li",[t("p",[s._v("拷贝到/etc/gitlab/ssl/(容器内视角)\n或拷贝到宿主机srv/gitlab/config/ssl（宿主机视角）")])]),s._v(" "),t("li",[t("p",[s._v("修改docker-compose.yml对应的证书的部分。")])])]),s._v(" "),t("h3",{attrs:{id:"_3-把宿主机3-111的ssh端口22空出来。供容器映射用，必须这么做。很重要！！！！"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-把宿主机3-111的ssh端口22空出来。供容器映射用，必须这么做。很重要！！！！"}},[s._v("#")]),s._v(" 3. 把宿主机3.111的ssh端口22空出来。供容器映射用，必须这么做。很重要！！！！")]),s._v(" "),t("p",[s._v("参考： "),t("a",{attrs:{href:"https://blog.csdn.net/ZanShichun/article/details/78029561?utm_source=blogxgwz5",target:"_blank",rel:"noopener noreferrer"}},[s._v("Centos7如何修改ssh默认端口"),t("OutboundLink")],1)]),s._v(" "),t("h4",{attrs:{id:"_3-1-停掉firewall，停掉selinux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-停掉firewall，停掉selinux"}},[s._v("#")]),s._v(" 3.1 停掉firewall，停掉selinux")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl stop firewalld\nsystemctl disable firewalld\nsed -i 's/enforcing/disabled/' /etc/selinux/config\nsetenforce 0\nsystemctl stop NetworkManager\nsystemctl disable NetworkManager\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h4",{attrs:{id:"_3-2-增加2020为ssh端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-增加2020为ssh端口"}},[s._v("#")]),s._v(" 3.2 增加2020为ssh端口")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ vi /etc/ssh/sshd_config\n Port 22  \n Port 2020\n\n//重启sshd服务\nsystemctl restart sshd.service\n\n//验证2020为ssh\n$ ssh -p 2020 root@192.168.3.111 //成功\n\n//删除Port 22 这一行，只留下我们的Port 2020\nvim /etc/ssh/sshd_config\n\n//然后重启ssh服务\nsystemctl restart sshd.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h4",{attrs:{id:"_3-3-必须重新启动docker服务。否则执行docker-compose会报如下错误：-因为停掉firewall"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-必须重新启动docker服务。否则执行docker-compose会报如下错误：-因为停掉firewall"}},[s._v("#")]),s._v(" 3.3 必须重新启动docker服务。否则执行docker-compose会报如下错误：(因为停掉firewall)")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Error response from daemon: driver failed programming external connectivity\n on endpoint jenkins (a8ea15bf9b3dbed599d059d638f79f9dd5e875556c39bfb41e6563d3feedb81b):\n  (iptables failed: iptables --wait -t nat -A DOCKER -p tcp -d 0/0 --dport 50000 -j DNAT\n --to-destination 172.18.0.6:50000 ! -i br-031aa3930383: iptables: No chain/target/match\n by that name.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("光看这个报错: iptables: No chain/target/match by that name，就能够看出是跟iptables有关,如果再启动docker service的时候网关是关闭的，那么docker管理网络的时候就不会操作网管的配置（chain docker），然后网关重新启动了，导致docker network无法对新container进行网络配置，也就是没有网管的操作权限，做重启处理.")]),s._v(" "),t("h4",{attrs:{id:"_3-4【处理】-必须重启docker服务，这步必须做！！"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4【处理】-必须重启docker服务，这步必须做！！"}},[s._v("#")]),s._v(" 3.4【处理】: 必须重启docker服务，这步必须做！！")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("service docker restart\n或\nsystemctl restart  docker\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_4-然后，启动docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-然后，启动docker-compose"}},[s._v("#")]),s._v(" 4.然后，启动docker-compose")]),s._v(" "),t("p",[t("code",[s._v("docker-compose up -d")]),s._v("\n即可。")]),s._v(" "),t("h2",{attrs:{id:"_5-验证gitlab运行状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-验证gitlab运行状态"}},[s._v("#")]),s._v(" 5. 验证gitlab运行状态")]),s._v(" "),t("h4",{attrs:{id:"_5-1-docker-logs-看容器启动日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-docker-logs-看容器启动日志"}},[s._v("#")]),s._v(" 5.1 docker logs 看容器启动日志")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/2020-07-03-20-08-21.png",alt:""}}),s._v(" "),t("code",[s._v("docker logs -f 32de52f7ae22")]),s._v(" 查看容器日志，看到gitlab启动情况")]),s._v(" "),t("p",[s._v("现在能看到,别的都正常！")]),s._v(" "),t("p",[s._v("【残留课题】：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ERROR: Failed to load config stat /etc/gitlab-runner/config.toml: no such file or directory  builds=0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_5-2-画面正常启动，原来的内容都保留着。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-画面正常启动，原来的内容都保留着。"}},[s._v("#")]),s._v(" 5.2 画面正常启动，原来的内容都保留着。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/2020-07-03-20-20-38.png",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"_5-3-git-clone-ssh看看是否正常"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-git-clone-ssh看看是否正常"}},[s._v("#")]),s._v(" 5.3 git clone ssh看看是否正常")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("srx@DESKTOP-UQ03MQF MINGW64 /c/work/gitlab.ccbjb.com.cn\n$ git clone git@gitlab.ccbjb.com.cn:shirongxin/edusite.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[s._v("Cloning into 'edusite'...\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nIT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!\nSomeone could be eavesdropping on you right now (man-in-the-middle attack)!\nIt is also possible that a host key has just been changed.\nThe fingerprint for the ECDSA key sent by the remote host is\nSHA256:wsq50fWrV3xiqsKGem5DUWqGCglzR/WP1F3FhfBVH2A.\nPlease contact your system administrator.\nAdd correct host key in /c/Users/srx/.ssh/known_hosts to get rid of this message.\nOffending ECDSA key in /c/Users/srx/.ssh/known_hosts:12\nECDSA host key for gitlab.ccbjb.com.cn has changed and you have requested strict checking.\nHost key verification failed.\nfatal: Could not read from remote repository.\nPlease make sure you have the correct access rights\nand the repository exists.")])]),s._v(" "),t("p",[s._v("处理：把自己用户c:/users/srx/.ssh/know_hosts里删掉\ngitlab.ccbjb.com.cn这一行")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("srx@DESKTOP-UQ03MQF MINGW64 /c/work/gitlab.ccbjb.com.cn\n$ git clone git@gitlab.ccbjb.com.cn:shirongxin/edusite.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[s._v("Cloning into 'edusite'...\nThe authenticity of host 'gitlab.ccbjb.com.cn (192.168.3.111)' can't be established.\nECDSA key fingerprint is SHA256:wsq50fWrV3xiqsKGem5DUWqGCglzR/WP1F3FhfBVH2A.\nAre you sure you want to continue connecting (yes/no)? yes\nWarning: Permanently added 'gitlab.ccbjb.com.cn' (ECDSA) to the list of known hosts.\nWarning: the ECDSA host key for 'gitlab.ccbjb.com.cn' differs from the key for the IP address '192.168.3.111'\nOffending key for IP in /c/Users/srx/.ssh/known_hosts:11\nAre you sure you want to continue connecting (yes/no)? yes\nremote: Enumerating objects: 38, done.\nremote: Counting objects: 100% (38/38), done.\nremote: Compressing objects: 100% (28/28), done.\nremote: Total 38 (delta 4), reused 38 (delta 4), pack-reused 0\nReceiving objects: 100% (38/38), 4.67 KiB | 239.00 KiB/s, done.\nResolving deltas: 100% (4/4), done.")])]),s._v(" "),t("p",[s._v("ssh方式clone OK了")]),s._v(" "),t("p",[s._v("能够免密了。（公钥已经放到了gitlab的SSH-KEY）中了。")]),s._v(" "),t("h4",{attrs:{id:"_5-4-git-clone-https-验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-git-clone-https-验证"}},[s._v("#")]),s._v(" 5.4 git clone https 验证")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ git clone https://gitlab.ccbjb.com.cn/shirongxin/edusite.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("Cloning into 'edusite'...\nremote: Enumerating objects: 38, done.\nremote: Counting objects: 100% (38/38), done.\nremote: Compressing objects: 100% (28/28), done.\nremote: Total 38 (delta 4), reused 38 (delta 4), pack-reused 0\nUnpacking objects: 100% (38/38), done.")])]),s._v(" "),t("p",[s._v("成功！\n至此，就差防止gitlab单点故障问题了。")]),s._v(" "),t("h3",{attrs:{id:"_6-todo："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-todo："}},[s._v("#")]),s._v(" 6.TODO：")]),s._v(" "),t("ul",[t("li",[s._v("方案1： 主从gitlab实时备份")]),s._v(" "),t("li",[s._v("方案2： k8s运行gitlab多节点共享数据，共享数据多点同步")])])])}),[],!1,null,null,null);e.default=n.exports}}]);