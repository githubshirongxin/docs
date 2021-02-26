(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{796:function(s,a,t){"use strict";t.r(a);var n=t(59),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("strong",[s._v("本文主要将gitlab-runner的配置的修改（因为使用了docker私有仓库）")])]),s._v(" "),t("h3",{attrs:{id:"背景说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景说明"}},[s._v("#")]),s._v(" 背景说明")]),s._v(" "),t("p",[s._v("因为，nexus私库做了一些改进。")]),s._v(" "),t("ol",[t("li",[s._v("nexus web页面仍旧是用http://nexus.ccbjb.com.cn")]),s._v(" "),t("li",[s._v("nexus docker仓库使用nginx动态代理了")])]),s._v(" "),t("p",[s._v("所以，gitlab-runner作为nexus私有docker仓库的使用者，也必须做一些改动。\n（gitlab-runner 3.112）")]),s._v(" "),t("h4",{attrs:{id:"改动一：docker镜像使用本地镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改动一：docker镜像使用本地镜像"}},[s._v("#")]),s._v(" 改动一：docker镜像使用本地镜像")]),s._v(" "),t("ol",[t("li",[s._v("Dockerfile 镜像使用私库镜像")]),s._v(" "),t("li",[s._v("必须执行docker login到私库。")]),s._v(" "),t("li",[s._v("必须把根证书拷贝到镜像里（或者把宿主的根证书挂载过来）")])]),s._v(" "),t("h4",{attrs:{id:"改动二：yarn-install-使用本地npm包。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改动二：yarn-install-使用本地npm包。"}},[s._v("#")]),s._v(" 改动二：yarn install 使用本地npm包。")]),s._v(" "),t("ol",[t("li",[s._v("/root/.npmrc写入认证信息然后挂载到容器上。")]),s._v(" "),t("li",[s._v("/root/.npmrc指定本地npm-group库")])]),s._v(" "),t("h2",{attrs:{id:"具体改动配置："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体改动配置："}},[s._v("#")]),s._v(" 具体改动配置：")]),s._v(" "),t("h3",{attrs:{id:"改动一："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改动一："}},[s._v("#")]),s._v(" 改动一：")]),s._v(" "),t("h5",{attrs:{id:"root-environment-dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#root-environment-dockerfile"}},[s._v("#")]),s._v(" /root/environment/Dockerfile")]),s._v(" "),t("p",[s._v("/root/environment/root.crt\n从宿主机 /etc/docker/certs.d/docker.ccbjb.com.cn/root.crt拷贝而来")]),s._v(" "),t("p",[s._v("Dockerfile")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("FROM docker.ccbjb.com.cn/gitlab/gitlab-runner:latest "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 改动1")]),s._v("\nMAINTAINER shirongxin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("shirx@ccbjb.com.cn"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改软件源")]),s._v("\nRUN "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/apt/sources.list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/apt/sources.list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/apt/sources.list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/apt/sources.list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update -y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" clean\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 Docker")]),s._v("\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" apt-transport-https ca-certificates "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" software-properties-common "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" apt-key "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    add-apt-repository "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu '),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release -cs"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' stable"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update -y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y docker-ce\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /etc/docker/certs.d/docker.ccbjb.com.cn  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 改动2")]),s._v("\nCOPY root.crt  /etc/docker/certs.d/docker.ccbjb.com.cn/root.crt "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 改动2")]),s._v("\n\nRUN docker login -u admin -p admin123 docker.ccbjb.com.cn "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 改动3 , 这样写死当然不好。生产环境应该使用环境变量。实验环境就无所谓了")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 Docker Compose（这边的链接会失效的，所以还需要自己到docker-compose 确认）")]),s._v("\nWORKDIR /usr/local/bin\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://get.daocloud.io/docker/compose/releases/download/1.26.1/docker-compose-'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -s"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -m"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v('"')]),s._v(" -o /usr/local/bin/docker-compose\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 java")]),s._v("\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/java\nWORKDIR /usr/local/java\nCOPY openjdk-8u41-b04-linux-x64-14_jan_2020.tar.gz /usr/local/java\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf openjdk-8u41-b04-linux-x64-14_jan_2020.tar.gz\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 Maven")]),s._v("\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/maven\nWORKDIR /usr/local/maven\nCOPY apache-maven-3.6.3-bin.tar.gz /usr/local/maven\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf apache-maven-3.6.3-bin.tar.gz\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 准备一份maven 配置好的文件，这里参考 nexus 配置")]),s._v("\nCOPY settings.xml /usr/local/maven/apache-maven-3.6.3/conf/settings.xml\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置环境变量")]),s._v("\nENV JAVA_HOME /usr/local/java/java-se-8u41-ri\nENV MAVEN_HOME /usr/local/maven/apache-maven-3.6.3\nENV "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAVEN_HOME")]),s._v("/bin\n\nWORKDIR /\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br")])]),t("h5",{attrs:{id:"root-docker-compose-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#root-docker-compose-yml"}},[s._v("#")]),s._v(" /root/docker-compose.yml")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("version: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),s._v("\nservices:\n  gitlab-runner:\n    build: enviroment\n    restart: always\n    container_name: gitlab_runner\n    privileged: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    volumes:\n      - /usr/local/docker/runner/config:/etc/gitlab-runner\n      - /var/run/docker.sock:/var/run/docker.sock\n      - /etc/docker/daemon.json /etc/docker/daemon.json\n      - /etc/docker/certs.d/docker.ccbjb.com.cn/root.crt /etc/docker/certs.d/docker.ccbjb.com.cn/root.crt "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 改动。其实镜像里已经拷贝了一份。这两处只要有一处即可。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"改动二："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改动二："}},[s._v("#")]),s._v(" 改动二：")]),s._v(" "),t("h5",{attrs:{id:"修改宿主机-root-npmrc然后挂载到容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改宿主机-root-npmrc然后挂载到容器"}},[s._v("#")]),s._v(" 修改宿主机/root/.npmrc然后挂载到容器")]),s._v(" "),t("p",[s._v("宿主机：没有安装nodejs，硬创建一个文件\nvi /root/.npmrc")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos112 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat .npmrc")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("registry")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://nexus.ccbjb.com.cn/repository/npm-group/\ninit.author.name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("shirx\ninit.author.email"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("shirx@ccbjb.com.cn\ninit.author.url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://shirongxin.gitlab.io/docs\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("email")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("shirx@ccbjb.com.cn\nalways-auth"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("_auth")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"YWRtaW46YWRtaW4xMjM="')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("这是admin，admin123生成的认证。\n实验环境就这么写没问题。生产环境就得换了。")]),s._v(" "),t("h5",{attrs:{id:"docker-compose-yaml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yaml"}},[s._v("#")]),s._v(" docker-compose.yaml")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos112 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat docker-compose.yml")]),s._v("\nversion: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),s._v("\nservices:\n  gitlab-runner:\n    build: enviroment\n    restart: always\n    container_name: gitlab_runner\n    privileged: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    volumes:\n      - /usr/local/docker/runner/config:/etc/gitlab-runner\n      - /var/run/docker.sock:/var/run/docker.sock\n      - /etc/docker/daemon.json /etc/docker/daemon.json\n      - /etc/docker/certs.d/docker.ccbjb.com.cn/root.crt /etc/docker/certs.d/docker.ccbjb.com.cn/root.crt\n      - /root/.npmrc /root/.npmrc "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加了一行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos112 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h5",{attrs:{id:"重启服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启服务"}},[s._v("#")]),s._v(" 重启服务")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos112 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose down")]),s._v("\nStopping gitlab_runner "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nRemoving gitlab_runner "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nRemoving network root_default\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos112 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose up -d")]),s._v("\nCreating network "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root_default"')]),s._v(" with the default driver\nCreating gitlab_runner "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos112 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos112 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose down")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose up -d ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("注意得等一会")]),s._v(" "),t("p",[s._v("gitlab-ci实例需要等一会才会发现runner启动了。\nHealthcheck时间间隔。大概2分钟。")])]),s._v(" "),t("p",[s._v("一会就能push 代码\n让gitlab实例跑runner上的编译了。")]),s._v(" "),t("h2",{attrs:{id:"总结："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结："}},[s._v("#")]),s._v(" 总结：")]),s._v(" "),t("p",[s._v("没什么改善。奇怪。\n速度和原来差不多。反而慢了几秒。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/docs/images/2020-08-14-11-24-47.png",alt:""}})])])}),[],!1,null,null,null);a.default=e.exports}}]);