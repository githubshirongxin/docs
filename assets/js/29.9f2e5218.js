(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{503:function(s,t,a){"use strict";a.r(t);var e=a(55),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("gitlab来做CICD时，出现的问题。在这里做个整理。\n方便日后查找。")]),s._v(" "),a("h2",{attrs:{id:"【问题】【已解决】：我的gitlab-runner问题，成功注册，但是就一直pending"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【问题】【已解决】：我的gitlab-runner问题，成功注册，但是就一直pending"}},[s._v("#")]),s._v(" 【问题】【已解决】：我的gitlab runner问题，成功注册，但是就一直pending")]),s._v(" "),a("h4",{attrs:{id:"【现象】："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【现象】："}},[s._v("#")]),s._v(" 【现象】：")]),s._v(" "),a("p",[s._v("gitlab-runner")]),s._v(" "),a("blockquote",[a("p",[s._v("WARNING: Checking for jobs... failed                runner=gYEgXsvL status=couldn't execute POST against https://gitlab.ccbjb.com.cn/api/v4/jobs/request: Post https://gitlab.ccbjb.com.cn/api/v4/jobs/request: read tcp 172.20.0.3:42366->192.168.3.111:443: read: connection reset by peer")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@centos111 ~]# docker exec -it root_gitlab-runner_1 /bin/bash\n\nbash-5.0# gitlab-runner status\nRuntime platform                                    arch=amd64 os=linux pid=28 revision=6fbc7474 version=13.1.1\ngitlab-runner: Service is not running.\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("bash-5.0# gitlab-runner run\nRuntime platform                                    arch=amd64 os=linux pid=33 revision=6fbc7474 version=13.1.1\nStarting multi-runner from /etc/gitlab-runner/config.toml...  builds=0\nRunning in system-mode.\n\nConfiguration loaded                                builds=0\nlisten_address not defined, metrics & debug endpoints disabled  builds=0\n[session_server].listen_address not defined, session endpoints disabled  builds=0\n")])])]),a("h4",{attrs:{id:"【原因】-问题在与-git-ci-yml中tags没有指定！"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【原因】-问题在与-git-ci-yml中tags没有指定！"}},[s._v("#")]),s._v(" 【原因】 问题在与.git-ci.yml中tags没有指定！**")]),s._v(" "),a("p",[s._v("所以runner成功注册但状态一直是“pending”，然后超时，failed\n见：https://blog.csdn.net/qingchuwudi/article/details/103089075")]),s._v(" "),a("h4",{attrs:{id:"【解决】：-gitlab-ci-yml中增加tags：与runner的tags对应上。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【解决】：-gitlab-ci-yml中增加tags：与runner的tags对应上。"}},[s._v("#")]),s._v(" 【解决】：** .gitlab-ci.yml中增加tags：与runner的tags对应上。")]),s._v(" "),a("h2",{attrs:{id:"【问题】【没办法解决】-docker-compose方式安装gitlab，安装在sambada挂载盘上面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【问题】【没办法解决】-docker-compose方式安装gitlab，安装在sambada挂载盘上面"}},[s._v("#")]),s._v(" 【问题】【没办法解决】 docker-compose方式安装gitlab，安装在sambada挂载盘上面")]),s._v(" "),a("p",[s._v("/srv是192.168.3.122的挂载盘，挂载192.168.100.11/shi目录。\n"),a("code",[s._v("docker-compose up -d")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("alpine: Pulling from gitlab/gitlab-runner\n21c83c524219: Pull complete\n4de95b93bf1d: Pull complete\n651e812d526b: Pull complete\n1e95a28388dc: Pull complete\neb618f17f262: Pull complete\ne3d8175fc390: Pull complete\n3fbd3623c394: Pull complete\nf88b016862ab: Pull complete\nDigest: sha256:b46c3c1f8a46e14cc54c480684f67e7b73e94f21e1d8eb9fd9d2a436b405ccbf\nStatus: Downloaded newer image "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" gitlab/gitlab-runner:alpine\nCreating gitlab "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". error\n\nERROR: "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" gitlab  Cannot start "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" gitlab: error "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" creating "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/srv/gitlab/logs'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" /srv/gitlab/logs: permission denied\n\nERROR: "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" gitlab  Cannot start "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" gitlab: error "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" creating "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/srv/gitlab/logs'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" /srv/gitlab/logs: permission denied\nERROR: Encountered errors "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" bringing up the project.\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#[root@centos122 ~]# ll /srv")]),s._v("\n总用量 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\ndrwxrwxrwx. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1032")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("users")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":59 data\ndrwxrwxrwx. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1032")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("users")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("月  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":00 gitlab\n")])])]),a("h4",{attrs:{id:"【无法解决】：sambda挂载盘就是不支持gitlab安装。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【无法解决】：sambda挂载盘就是不支持gitlab安装。"}},[s._v("#")]),s._v(" 【无法解决】：sambda挂载盘就是不支持gitlab安装。")])])}),[],!1,null,null,null);t.default=n.exports}}]);