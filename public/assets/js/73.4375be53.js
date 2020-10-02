(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{557:function(s,a,n){"use strict";n.r(a);var e=n(59),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"修改gitlab配置，本地gitlab部署gitlab-pages服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改gitlab配置，本地gitlab部署gitlab-pages服务"}},[s._v("#")]),s._v(" 修改gitlab配置，本地gitlab部署gitlab pages服务")]),s._v(" "),n("p",[s._v("3.111 上因为我是docker安装gitlab")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("< pages_external_url \"https://gitlab.ccbjb.com.cn\"\n< gitlab_pages['enable'] = true\n< gitlab_pages['inplace_chroot'] = true\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("我为了配置起作用\n把docker容器删掉，然后重新启动服务")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker ps \ndocker stop c16e87838ef2 && docker rm c16e87838ef2\ndocker-compose up -d\n//查看启动情况\ndocker ps \ndocker logs -f c16e87838ef2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"gitlab-runner-安装配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-runner-安装配置"}},[s._v("#")]),s._v(" gitlab runner 安装配置")]),s._v(" "),n("p",[s._v("3.112作为gitlab runner的机器。使用docker方式来安装gitlab runner。")]),s._v(" "),n("h3",{attrs:{id:"_3-112上新建-root-enviroment-dockerfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-112上新建-root-enviroment-dockerfile"}},[s._v("#")]),s._v(" 3.112上新建/root/enviroment/Dockerfile")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('FROM gitlab/gitlab-runner:latest\nMAINTAINER shirx <shirx@ccbjb.com.cn>\n\n# 安装yarn （可选，只有执行器为shell时才有点用）\nRUN apt-get update\nRUN apt install -y curl\nRUN apt-get update && apt-get install -y gnupg2\nRUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -\nRUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.\nRUN apt-get update\nRUN apt install -y yarn\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("ul",[n("li",[s._v("不安装也无所谓，因为大多数都是用docker当作执行器，最常用")]),s._v(" "),n("li",[s._v("本地环境yarn，npm等等只有shell执行器的时候才有用，不方便")])]),s._v(" "),n("h3",{attrs:{id:"root下创建docker-compose-yml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#root下创建docker-compose-yml"}},[s._v("#")]),s._v(" /root下创建docker-compose.yml")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@centos112 ~]# cat docker-compose.yml\nversion: '3.1'\nservices:\n  gitlab-runner:\n    build: enviroment # 调用该目录下的Dockerfile文件\n    restart: always\n    container_name: gitlab_runner\n    privileged: true\n    volumes:\n      - /usr/local/docker/runner/config:/etc/gitlab-runner\n      - /var/run/docker.sock:/var/run/docker.sock\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"准备好config-toml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备好config-toml"}},[s._v("#")]),s._v(" 准备好config.toml")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[root@centos112 ~]# cat /usr/local/docker/runner/config/config.toml\nconcurrent = 1\ncheck_interval = 0\n\n[session_server]\n  session_timeout = 1800\n\n[[runners]]\n  name = "3.112 runner for docs"\n  url = "https://gitlab.ccbjb.com.cn"\n  token = "N1Bf5i3fkh_5nYTrVbDD"\n  executor = "shell"\n  [runners.custom_build_dir]\n  [runners.cache]\n    [runners.cache.s3]\n    [runners.cache.gcs]\n[root@centos112 ~]#\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("这里的runners是跑了一次生成的，不创建这个文件，就跑步过去。")]),s._v(" "),n("h3",{attrs:{id:"启动gitlab-runner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动gitlab-runner"}},[s._v("#")]),s._v(" 启动gitlab-runner")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker-compose up -d\ndocker-compose up --build -d\n// 查看一下启动日志\ndocker ps\ndocker logs -f 容器ID或Name\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"尝试1：新建一个项目plain-html项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#尝试1：新建一个项目plain-html项目"}},[s._v("#")]),s._v(" 尝试1：新建一个项目plain html项目")]),s._v(" "),n("p",[s._v("create from template，选Pages/plain text.\n自动带.gitlib-ci.yml\n自动带public/index.html")]),s._v(" "),n("h3",{attrs:{id:"register"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#register"}},[s._v("#")]),s._v(" register")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker exec -it gitlab_runner gitlab-runner register\ndocker exec -it gitlab_runner gitlab-runner start\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("然后去gitlab上去看。已经绿了。")]),s._v(" "),n("h3",{attrs:{id:"修改public-index-html"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改public-index-html"}},[s._v("#")]),s._v(" 修改public/index.html")]),s._v(" "),n("p",[s._v("pipeline 自动编译\npages：弹出链接")]),s._v(" "),n("p",[s._v("修改一下windows的system32/driver/etc/hosts\ngitlab ip 弹出的那个新域名\n"),n("code",[s._v("192.168.3.111 shirongxin.gitlab.ccbjb.com.cn")])]),s._v(" "),n("h2",{attrs:{id:"访问pages链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#访问pages链接"}},[s._v("#")]),s._v(" 访问pages链接")]),s._v(" "),n("p",[s._v("可以看到页面了。")]),s._v(" "),n("h2",{attrs:{id:"尝试2：原来的vuepress项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#尝试2：原来的vuepress项目"}},[s._v("#")]),s._v(" 尝试2：原来的vuepress项目")]),s._v(" "),n("h3",{attrs:{id:"写-gitlab-ci-yml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写-gitlab-ci-yml"}},[s._v("#")]),s._v(" 写.gitlab-ci.yml")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("stages:\n  - build\n\npages build job:\n  stage: build\n  cache:\n    paths:\n    - node_modules/\n\n  script:\n   - npm ci\n   - npm run build\n\n  artifacts:\n    paths:\n    - docs/.vuepress/dist\n\n  only:\n  - master\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("参考：https://docs.gitlab.com/ee/user/project/pages/getting_started/pages_from_scratch.html")]),s._v(" "),n("h3",{attrs:{id:"注册runner与gitlag工程联系上"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注册runner与gitlag工程联系上"}},[s._v("#")]),s._v(" 注册Runner与Gitlag工程联系上")]),s._v(" "),n("p",[n("code",[s._v("docker exec -it gitlab_runner gitlab-runner register")]),s._v("\n输入gitlab项目中CICD里的Runner的url，token\nTags直接回车\n执行器这里可以选shell。但是最好选docker，然后指定docker镜像\n一般：")]),s._v(" "),n("ul",[n("li",[s._v("vuepress等需要node：latest")]),s._v(" "),n("li",[s._v("php")]),s._v(" "),n("li",[s._v("ruby")]),s._v(" "),n("li",[s._v("java")]),s._v(" "),n("li",[s._v("等")])]),s._v(" "),n("p",[n("code",[s._v("docker exec -it gitlab_runner gitlab-runner start")]),s._v("\n有时候网页上Runner为灰色未连接状态，才需要执行一下这个。")]),s._v(" "),n("h3",{attrs:{id:"修改vuepress-md文件，并push"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改vuepress-md文件，并push"}},[s._v("#")]),s._v(" 修改vuepress md文件，并push")]),s._v(" "),n("p",[s._v("能看到 pipline编译md文件为html文件")]),s._v(" "),n("h4",{attrs:{id:"github"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[s._v("#")]),s._v(" github")]),s._v(" "),n("p",[s._v("这里最后更新到F:\\temp\\docs.vuepress\\dist\n不过这是github的pages的目录。\ngitlab不认，需要更新到与.gitlab-ci.yml同级的public/下才行")]),s._v(" "),n("h4",{attrs:{id:"gitlab"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gitlab"}},[s._v("#")]),s._v(" gitlab")]),s._v(" "),n("p",[s._v("gitlab的时候需要修改")]),s._v(" "),n("ul",[n("li",[s._v('.gitlab-ci.yml把job名修改成"pages:"（其他job名网页上一概无法生成blog链接）\n这样写的一定要用Docker 执行器来注册。')])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("image: node:latest\n\npages:\n  cache:\n    paths:\n    - node_modules/\n\n  script:\n   - yarn install\n   - yarn run build \n \n  artifacts:\n    paths:\n    - public\n  only:\n  - master\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("ul",[n("li",[s._v('docs/.vuepress/config.js，需要修改dest: "public" ,必须为public，否则gitlab不认')])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('const headConf = require("./config/headConf.js");\nconst pluginsConf = require("./config/pluginsConf");\nconst nav = require("./nav");\nmodule.exports = {\n  base: "/docs/",\n  title: \'blog\',\n  dest: "public",\n  description: \'思想persistent\',\n  head: headConf,\n  markdown: {\n    lineNumbers: false // 代码块显示行号\n  },\n  plugins: pluginsConf,\n  themeConfig: {\n    lastUpdated: \'更新时间\',\n    logo: \'/logo.png\',\n    nav: nav,\n    searchMaxSuggestions: 10\n    /* 方案1：侧边栏只显示三组中的一组链接 */\n    // sidebar: sidebarConf, //使用了vuepress plugin auto sidebar就不用这些了\n  }\n}\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("hr"),s._v(" "),n("h1",{attrs:{id:"其他参考内容（可以不看）："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他参考内容（可以不看）："}},[s._v("#")]),s._v(" 其他参考内容（可以不看）：")]),s._v(" "),n("h2",{attrs:{id:"rpm版-gitlab-install"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rpm版-gitlab-install"}},[s._v("#")]),s._v(" rpm版 gitlab install")]),s._v(" "),n("p",[s._v("1.添加gitlab镜像\n访问\nhttps://packages.gitlab.com/gitlab/gitlab-ce/packages/ol/7/gitlab-ce-13.1.5-ce.0.el7.x86_64.rpm")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("curl -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | sudo bash\nsudo yum install gitlab-ce-13.1.5-ce.0.el7.x86_64\n\nvim  /etc/gitlab/gitlab.rb\ngitlab-ctl reconfigure\ngitlab-ctl restart\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("查看与rpm包相关的文件和其他信息   rpm -qa | grep 包名\n查询包是否被安装，命令：rpm -q 包名\n删除软件包，命令：rpm -e 包名\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"docker版gitlab-runner-install"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker版gitlab-runner-install"}},[s._v("#")]),s._v(" docker版gitlab runner install")]),s._v(" "),n("p",[s._v("其实完全可以这么从容地安装Runner。写docker-compose主要是为了更新的时候方便点。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker run -d --name gitlab_runner --restart always \\\n     -v /srv/gitlab-runner/config:/etc/gitlab-runner \\\n     -v /var/run/docker.sock:/var/run/docker.sock \\\n     gitlab/gitlab-runner:latest\n\ndocker exec -it gitlab_runner gitlab-runner register\ndocker exec -it gitlab_runner gitlab-runner start\ndocker restart gitlab_runner\ndocker exec -it gitlab_runner gitlab-runner unregister \n\n## 进入容器看看\ndocker exec -it gitlab_runner /bin/sh\ncd /home/gitlab-runner/builds/N1Bf5i3f/0/shirongxin\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h1",{attrs:{id:"删掉所有容器，删掉指定镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删掉所有容器，删掉指定镜像"}},[s._v("#")]),s._v(" 删掉所有容器，删掉指定镜像")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker stop $(docker ps -q) && docker rm $(docker ps -aq) \ndocker rmi -f root_gitlab-runner\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);