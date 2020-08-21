(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{498:function(a,s,t){"use strict";t.r(s);var r=t(59),n=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"step1-配置本地docker的根证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step1-配置本地docker的根证书"}},[a._v("#")]),a._v(" Step1 .配置本地docker的根证书")]),a._v(" "),t("p",[a._v("https://gitlab.ccbjb.com.cn/ec7mongrp/common\n下载harbor.ccbjb.com.cn证书/root.crt")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# mkdir -p /etc/docker/certs.d/harbor.ccbjb.com.cn")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("linux: 把root.crt放到"),t("code",[a._v("/etc/docker/certs.d/harbor.ccbjb.com.cn")]),a._v("\nwindows：把root.crt放到C:\\Program Files\\Docker\\Docker\\certs.d\\harbor.ccbjb.com.cn,需要自己创建目录。")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("C:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Program Files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("certs.d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("harbor.ccbjb.com.cn\nλ docker login harbor.ccbjb.com.cn\nUsername: admin\nPassword:\nLogin Succeeded\n\nC:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Program Files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("certs.d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("harbor.ccbjb.com.cn\nλ docker pull harbor.ccbjb.com.cn/library/maven\nUsing default tag: latest\nlatest: Pulling from library/maven\nbce8f778fef0: Pull complete\n2778faef3420: Pull complete\n945a8b67ac57: Pull complete\n396112e35f08: Pull complete\n7f0cb4eada14: Pull complete\n1549e7083eda: Pull complete\nDigest: sha256:23801edad8cd013544bfd8c0ed698182c172b9dba66bc5a42054a65f5da9c6ca\nStatus: Downloaded newer image "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" harbor.ccbjb.com.cn/library/maven:latest\nharbor.ccbjb.com.cn/library/maven:latest\n\nC:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Program Files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("certs.d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("harbor.ccbjb.com.cn\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("不推荐的替代方案(因为不安全)")]),a._v(" "),t("p",[a._v('在daemon.json中设置\n{\n"insecure-registries": ["harbor.ccbjb.com.cn"]\n}')])]),a._v(" "),t("h3",{attrs:{id:"step2-掌握自己的harbor私有仓库的用户名和密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step2-掌握自己的harbor私有仓库的用户名和密码"}},[a._v("#")]),a._v(" Step2. 掌握自己的harbor私有仓库的用户名和密码")]),a._v(" "),t("p",[a._v("BJB就是公司的邮箱的前面ID")]),a._v(" "),t("p",[a._v("也允许自己注册。")]),a._v(" "),t("h3",{attrs:{id:"step3-a-在命令行中使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step3-a-在命令行中使用"}},[a._v("#")]),a._v(" Step3-A. 在命令行中使用")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("记住")]),a._v(" "),t("ol",[t("li",[a._v("harbor只能下载我们自己传上去的镜像，不会自动下载私有仓库中不存在的镜像。")]),a._v(" "),t("li",[a._v("pull 和push的时候必须带上harbor.ccbjb.com.cn")]),a._v(" "),t("li",[a._v("镜像前面必须有项目名，例如library，具体是什么名字，需要在浏览器上进入harbor页面查看。")])])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker login -u 你的用户id hargbor.ccbjb.com.cn")]),a._v("\npassword:\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker pull harbor.ccbjb.com.cn/library/maven:latest")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker tag alpine:latest harbor.ccbjb.com.cn/library/maven:latest")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker push harbor.ccbjb.com.cn/library/maven:latest")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h3",{attrs:{id:"step3-b-在浏览器上使用查找镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step3-b-在浏览器上使用查找镜像"}},[a._v("#")]),a._v(" Step3-B. 在浏览器上使用查找镜像")]),a._v(" "),t("p",[a._v("https://harbor.ccbjb.com.cn\n输入你自己的用户名和密码")]),a._v(" "),t("p",[a._v("提示不安全的网站，你可以双击下载的root.crt.\n为了浏览器能够不提示“不安全，是否继续”")]),a._v(" "),t("h4",{attrs:{id:"安装根证书-可选-："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装根证书-可选-："}},[a._v("#")]),a._v(" 安装根证书(可选)：")]),a._v(" "),t("ul",[t("li",[a._v("双击根dao证书文件 弹出证du书属性的对话框，此zhi时该根证书并不受信任，我们dao需要将其加入“版受信任的根证书颁发机权构”")]),a._v(" "),t("li",[a._v("步骤二：点击“安装证书”，弹出证书导入向导")]),a._v(" "),t("li",[a._v("步骤三：点击下一步，选择证书的存储区")]),a._v(" "),t("li",[a._v("步骤四：选择“将所有的证书放入下列存储区”，然后点击下一步，选择证书存储")]),a._v(" "),t("li",[a._v("步骤五：在“选择证书存储”对话框中选择“受信任的根证书颁发机构”，点击确定，此时返回到证书导入向导页面")]),a._v(" "),t("li",[a._v("步骤六：在证书导入向导页面，证书存储变为“受信任的根证书颁发机构”，点击下一步")]),a._v(" "),t("li",[a._v("步骤七：点击“完成”，此时会弹出安全警告 步骤八：点击“是”，安装该证书。此时所有操作完成，成功将根证书加入“受信任的根证书颁发机构”。")])]),a._v(" "),t("h4",{attrs:{id:"网站上https-harbor-ccbjb-com-cn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网站上https-harbor-ccbjb-com-cn"}},[a._v("#")]),a._v(" 网站上https://harbor.ccbjb.com.cn")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("上面有检索框。\n镜像仓库也可以点击人肉搜索。\n"),t("img",{attrs:{src:"/docs/images/2020-08-13-11-24-47.png",alt:""}})])]),a._v(" "),t("li",[t("p",[a._v("项目管理\n新建项目，自己团队的项目，或公司公用的项目（project或library）\n"),t("img",{attrs:{src:"/docs/images/2020-08-13-11-38-37.png",alt:""}})])]),a._v(" "),t("li",[t("p",[a._v("项目中加入成员\n不在此项目中的成员看不到，下载不了，不能上传镜像。\n"),t("img",{attrs:{src:"/docs/images/2020-08-13-11-39-25.png",alt:""}})])])]),a._v(" "),t("h2",{attrs:{id:"最后：harbor与nexus的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最后：harbor与nexus的关系"}},[a._v("#")]),a._v(" 最后：harbor与nexus的关系")]),a._v(" "),t("h4",{attrs:{id:"【qa】既然公司已经有了nexus（docker-ccbjb-com-cn），为什么还需要harbor呢？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#【qa】既然公司已经有了nexus（docker-ccbjb-com-cn），为什么还需要harbor呢？"}},[a._v("#")]),a._v(" 【QA】既然公司已经有了nexus（docker.ccbjb.com.cn），为什么还需要harbor呢？")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("nexus的组成")]),a._v(" "),t("p",[a._v("docker命令时使用docker.ccbjb.com.cn\n浏览器上使用http://nexus.ccbjb.com.cn")])]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("harbor的组成")]),a._v(" "),t("p",[a._v("docker命令时使用harbor.ccbjb.com.cn\n浏览器上使用https://harbor.ccbjb.com.cn")])]),a._v(" "),t("p",[a._v("harbor管理内部镜像更加精细。\nnexus作为公共镜像的代理，更快速地下载镜像。")]),a._v(" "),t("p",[a._v("他们配合使用比较好。")]),a._v(" "),t("p",[a._v("上传镜像的时候，既可以上传到harbor.ccbjb.com.cn，\n也可以上传到docker.ccbjb.com.cn")]),a._v(" "),t("p",[a._v("管理上harbor更加精细")]),a._v(" "),t("p",[a._v("完。")])])}),[],!1,null,null,null);s.default=n.exports}}]);