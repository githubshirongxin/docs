(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{556:function(t,e,a){"use strict";a.r(e);var s=a(59),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("一个是docker部署gitlab，另一个是docker-compose部署gitlab\n我尝试的是docker-compose。安装到192.168.3.111上。")]),t._v(" "),a("h2",{attrs:{id:"docker-部署gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-部署gitlab"}},[t._v("#")]),t._v(" docker 部署gitlab")]),t._v(" "),a("p",[t._v("这个视频仅仅10分钟，非常非常简洁。\n就是按照官方文档docker方式安装gitlab。\nvolumen目录定义一下就完事了。\nhttps://www.bilibili.com/video/BV1Eb411N7sJ?from=search&seid=7154314386199342873")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"docker-compose-部署gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-部署gitlab"}},[t._v("#")]),t._v(" docker compose 部署gitlab")]),t._v(" "),a("p",[t._v("https://www.bilibili.com/video/BV1NJ41137nE?from=search&seid=18101917166552153507")]),t._v(" "),a("h3",{attrs:{id:"用compose搭建gitlab单点服务器（成功了）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用compose搭建gitlab单点服务器（成功了）"}},[t._v("#")]),t._v(" 用compose搭建gitlab单点服务器（成功了）")]),t._v(" "),a("p",[t._v("参考：gitlab官网\n"),a("a",{attrs:{href:"https://docs.gitlab.com/omnibus/docker/",target:"_blank",rel:"noopener noreferrer"}},[t._v("install gitlab by docker，docker-compose，swarm"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://docs.gitlab.com/ee/install/README.html#installing-gitlab-on-kubernetes-via-the-gitlab-helm-charts",target:"_blank",rel:"noopener noreferrer"}},[t._v("k8s安装部署gitlab"),a("OutboundLink")],1),t._v("\ndocker-compose方法\nInstall GitLab using Docker Compose\nWith Docker Compose you can easily configure, install, and upgrade your Docker-based GitLab installation:")]),t._v(" "),a("ol",[a("li",[t._v("Install Docker Compose.")]),t._v(" "),a("li",[t._v("Create a docker-compose.yml file (or download an example):")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("```\nweb:\nimage: 'gitlab/gitlab-ce:latest'\nrestart: always\nhostname: '192.168.3.111' \nenvironment:\n    GITLAB_OMNIBUS_CONFIG: |\n    external_url 'https://192.168.3.111'\n    # Add any other gitlab.rb configuration here, each on its own line\nports:\n    - '80:80'\n    - '443:443'\n    - '2222:22' # 注意，一般centos7启动的时候22端口就是被占用的。所以改成2222.\nvolumes:\n    - '$GITLAB_HOME/config:/etc/gitlab'\n    - '$GITLAB_HOME/logs:/var/log/gitlab'\n    - '$GITLAB_HOME/data:/var/opt/gitlab'\n```\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Make sure you are in the same directory as docker-compose.yml and start GitLab:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("`docker-compose up -d`\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("稍等2分钟\n验证gitlab启动：https://192.168.3.111")])]),t._v(" "),a("h3",{attrs:{id:"配置邮件服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置邮件服务器"}},[t._v("#")]),t._v(" 配置邮件服务器")]),t._v(" "),a("h5",{attrs:{id:"【配置公司自己的smtp服务】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【配置公司自己的smtp服务】"}},[t._v("#")]),t._v(" 【配置公司自己的SMTP服务】")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[root@centos111 config]# docker ps\nCONTAINER ID        IMAGE                     COMMAND             CREATED             STATUS\n          PORTS                                                            NAMES\n191b986289c6        gitlab/gitlab-ce:latest   "/assets/wrapper"   About an hour ago   Up About an hour (healthy)   0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp, 0.0.0.0:2222->22/tcp   root_web_1\n\n[root@centos111 config]# pwd\n/srv/gitlab/config\n[root@centos111 config]# ls\ngitlab.rb            ssh_host_ecdsa_key      ssh_host_ed25519_key.pub  ssl\ngitlab.rb.bak        ssh_host_ecdsa_key.pub  ssh_host_rsa_key          trusted-certs\ngitlab-secrets.json  ssh_host_ed25519_key    ssh_host_rsa_key.pub\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("该目录是gitlab的数据卷，等同于进入gitlab容器修改/etc/gitlab/gitlab.rb")]),t._v(" "),a("p",[a("code",[t._v("vi gitlab.rd")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("gitlab_rails['smtp_enable'] = true\ngitlab_rails['smtp_address'] = \"服务器IP\"\ngitlab_rails['smtp_port'] = 25\ngitlab_rails['smtp_user_name'] = \"shirx@ccbjb.com.cn\"\ngitlab_rails['smtp_password'] = \"密码\"\ngitlab_rails['smtp_domain'] = \"ccbjb.com.cn\"\ngitlab_rails['smtp_authentication'] = \"login\"\ngitlab_rails['smtp_enable_starttls_auto'] = true\ngitlab_rails['smtp_tls'] = false\ngitlab_rails['gitlab_email_from'] = 'shirx@ccbjb.com.cn'\ngitlab_rails['gitlab_email_reply_to'] = 'shirx@ccbjb.com.cn'\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("进入gitlab容器，让配置生效")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("docker exec -it root_web_1 /bin/bash\n\ngitlab-ctl reconfigure\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("报错，见TroubleShooting的Bug1.解决，再次运行。OK\n进入控制台")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('gitlab-rails console  \n\n//执行发送邮件测试命令\nNotify.test_email("个人邮箱@qq.com","title","text").deliver_now\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("结果：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n=> #<Mail::Message:70335281250660, Multipart: false, Headers: <Date: Thu, 02 Jul 2020 06:33:34 +0000>, <From: GitLab <shirx@ccbjb.com.cn>>, <Reply-To: GitLab <shirx@ccbjb.com.cn>>, <To: shirx@ccbjb.com.cn>, <Message-ID: <5efd7fbee008b_1f8d3ff84ced39a4792f2@gitlab.mail>>, <Subject: title>, <Mime-Version: 1.0>, <Content-Type: text/html; charset=UTF-8>, <Content-Transfer-Encoding: 7bit>, <Auto-Submitted: auto-generated>, <X-Auto-Response-Suppress: All>>\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("邮件也在手机上真实收到了。")]),t._v(" "),a("p",[t._v("其它SMTP配置，"),a("a",{attrs:{href:"https://docs.gitlab.com/omnibus/settings/smtp.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考官方"),a("OutboundLink")],1),t._v("：")]),t._v(" "),a("h3",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" TroubleShooting:")]),t._v(" "),a("p",[t._v("#####[Bug1]")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("There was an error running gitlab-ctl reconfigure:\n\nletsencrypt_certificate[gitlab.ccbjb.com.cn] (letsencrypt::http_authorization line 5) had an error: RuntimeError: acme_certificate[staging] (/opt/gitlab/embedded/cookbooks/cache/cookbooks/letsencrypt/resources/certificate.rb line 25) had an error: RuntimeError: ruby_block[create certificate for gitlab.ccbjb.com.cn] (/opt/gitlab/embedded/cookbooks/cache/cookbooks/acme/resources/certificate.rb line 108) had an error: RuntimeError: [gitlab.ccbjb.com.cn] Validation failed, unable to request certificate\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h5",{attrs:{id:"解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" [解决]")]),t._v(" "),a("p",[t._v("原因：gitlab的bug（"),a("a",{attrs:{href:"https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/5000",target:"_blank",rel:"noopener noreferrer"}},[t._v("bug 5000 "),a("OutboundLink")],1),t._v("）\n为了使Gitlab正常工作，/etc/gitlab/gitlab.rb必须将其更改为letsencrypt['enable'] = false并重新运行 gitlab-ctl reconfigure.")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("=> #<Mail::Message:70335281250660, Multipart: false, Headers: <Date: Thu, 02 Jul 2020 06:33:34 +0000>, <From: GitLab <shirx@ccbjb.com.cn>>, <Reply-To: GitLab <shirx@ccbjb.com.cn>>, <To: shirx@ccbjb.com.cn>, <Message-ID: <5efd7fbee008b_1f8d3ff84ced39a4792f2@gitlab.mail>>, <Subject: title>, <Mime-Version: 1.0>, <Content-Type: text/html; charset=UTF-8>, <Content-Transfer-Encoding: 7bit>,\n <Auto-Submitted: auto-generated>, <X-Auto-Response-Suppress: All>>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);