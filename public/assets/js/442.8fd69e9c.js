(window.webpackJsonp=window.webpackJsonp||[]).push([[442],{926:function(a,s,t){"use strict";t.r(s);var n=t(59),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"sonarqube-使用gitlab进行认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sonarqube-使用gitlab进行认证"}},[a._v("#")]),a._v(" Sonarqube 使用gitlab进行认证")]),a._v(" "),t("h2",{attrs:{id:"配置gitlab-oauth"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置gitlab-oauth"}},[a._v("#")]),a._v(" 配置gitlab OAuth")]),a._v(" "),t("h3",{attrs:{id:"在gitlab中admin-area-applications-new-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在gitlab中admin-area-applications-new-application"}},[a._v("#")]),a._v(" 在gitlab中Admin Area -> Applications -> New Application")]),a._v(" "),t("p",[t("img",{attrs:{src:"/docs/images/newapplication.png",alt:"New Application"}})]),a._v(" "),t("p",[a._v("Name：字面意思")]),a._v(" "),t("p",[a._v("Redirect URI：回调地址，HTTP://SONAR_ADDRES + /oauth2/callback/gitlab；如果版本不同或许可能存在差异，具体可以看官方文档。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("假设sonarqube的地址为192.168.3.116:9000,那么在这里回调地址就要写成\nhttp://192.168.3.116:9000/oauth2/callback/gitlab\n这里要写http，不要写https，之后在snarqube配置的时候要写相同的协议\t\n")])])]),t("p",[a._v("Scopes：仅启用委托认证勾选read_user，需要组同步则同时勾选api。其他选项根据需求勾选。提交后保存Application ID和Secret。（之后在sonarqube配置的时候要用到）")]),a._v(" "),t("h2",{attrs:{id:"配置sonarqube-alm-integrations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置sonarqube-alm-integrations"}},[a._v("#")]),a._v(" 配置sonarqube ALM Integrations")]),a._v(" "),t("ol",[t("li",[a._v("sonarqube地址为docker宿主机地址+9000端口，默认账号密码为admin。")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("http://192.168.3.116:9000/sessions/new\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"/docs/images/sonar_login.png",alt:"sonar_login"}})]),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[a._v("Server base URL\n首先在通用设置中配置好Server base URL，此地址必须和Gitlab Redirect URI（回调地址）的协议+主机域名（或IP）是一致的。"),t("br"),a._v("\n配置 -> 通用配置 -> 通用"),t("br"),a._v("\nServer base URL：sonarqube的公共访问地址。\t\t\t\t\n"),t("img",{attrs:{src:"/docs/images/server_base_url.png",alt:"server_base_url.png"}})])]),a._v(" "),t("li",[t("p",[a._v("配置ALM Integrations："),t("br"),a._v("\n配置 -> 通用配置 -> ALM Integrations -> Gitlab"),t("br"),a._v("\nEnabled：启用。   \t"),t("br"),a._v("\nGitLab URL：Gitlab地址。(https协议)    （https://gitlab.ccbjb.com.cn/）"),t("br"),a._v("\nApplication ID：在Gitlab applications中创建的application id。"),t("br"),a._v("\nSecret：在Gitlab applications中创建的application Secret。"),t("br"),a._v("\n其他选项根据需求勾选。"),t("br"),a._v(" "),t("img",{attrs:{src:"/docs/images/ALM_Integrations.png",alt:"ALM_Integrations.png"}}),t("br"),a._v("\n确认无误后退出账号，点击登录后则会看到使用gitlab登录。"),t("br"),a._v("\n第一次使用gitlab登录sonarqube的会弹出授权窗口，点击授权即可\n"),t("img",{attrs:{src:"/docs/images/gitlab%E6%8E%88%E6%9D%83.png",alt:"gitlab授权.png"}})])])]),a._v(" "),t("h2",{attrs:{id:"创建sonarqube-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建sonarqube-project"}},[a._v("#")]),a._v(" 创建sonarqube project")]),a._v(" "),t("h3",{attrs:{id:"语言包和语言分析规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语言包和语言分析规则"}},[a._v("#")]),a._v(" 语言包和语言分析规则")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("sonarqube安装本地化语言包，在应用市场中搜索chinese。")])]),a._v(" "),t("li",[t("p",[a._v("分析语言首先需要安装一个分析语言规则插件。"),t("br"),a._v("\n配置 -> 应用市场（marketplace）-> 搜索项目用到的主要语言并安装"),t("br"),a._v("\n基于网络原因，可能会需要一定时间。安装完如果无法启动，可能是下载的插件包不完整，可以手动下载将插件包放到sonarqube/extensions/plugins目录下重启docker容器即可。")])])]),a._v(" "),t("ul",[t("li",[a._v("分析shell,就在应用市场搜索shell")]),a._v(" "),t("li",[a._v("分析java,就在应用市场搜索java还有findbug，主要是findbug这个插件，下载比较慢。")]),a._v(" "),t("li",[a._v("其他语言可以上网搜索")])]),a._v(" "),t("h3",{attrs:{id:"创建分析项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建分析项目"}},[a._v("#")]),a._v(" 创建分析项目")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. 在sonarqube web界面中点击新建项目，输入项目标识（例如：myproject）和显示名称（例如：myproject）       \n2. 创建一个TOKEN、输入TOKEN名称（例如：myproject）后点击创建会生成TOKEN串、保存TOKEN串。如果之后要使用已有的令牌需要输入这个Token串。在修改sonar-project.properties\n文件的时候也需要，下面会介绍，注意保留。\n3. 在这一步完成后，其实sonarqube项目就已经创建好了\n")])])]),t("p",[t("img",{attrs:{src:"/docs/images/new_project.png",alt:"new_project.png"}}),t("br"),a._v(" "),t("img",{attrs:{src:"/docs/images/%E5%88%9B%E5%BB%BA%E4%BB%A4%E7%89%8C.png",alt:"创建令牌.png"}})]),a._v(" "),t("ul",[t("li",[a._v("到这里sonarqube的部分配置结束，接下来是关于gitlab的部分")])]),a._v(" "),t("hr"),a._v(" "),t("hr"),a._v(" "),t("h2",{attrs:{id:"配置gitlab-ci-接下来是关于gitlab的部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置gitlab-ci-接下来是关于gitlab的部分"}},[a._v("#")]),a._v(" 配置Gitlab-ci(接下来是关于gitlab的部分)")]),a._v(" "),t("h3",{attrs:{id:"首先需要一点git的知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首先需要一点git的知识"}},[a._v("#")]),a._v(" 首先需要一点git的知识")]),a._v(" "),t("ol",[t("li",[a._v("在本地安装一个gitbash，右键出现git bash here安装成功，如图所示\n"),t("img",{attrs:{src:"/docs/images/%E5%8F%B3%E9%94%AEgitbash.png",alt:"右键gitbash.png"}})]),a._v(" "),t("li",[a._v("在gitlab上新建一个项目之后，或者将已经存在的项目克隆到本地。具体的做法是在本地新建一个文件夹，文件夹的名字随意，右键选择git bash here，弹出命令行窗口。然后输入命令:")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git clone 链接\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("链接部分所代内容可以在gitlab中自己的项目下找到，具体位置如图所示，图片中有两种方式，如果要使用ssh方式需要进行下面的操作，http的方式不需要，但是需要gitlab的邮箱密码")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('# 生成新的SSH密钥对\n> 1. 使用命令生成密钥（密钥的位置在C:\\Users\\Administrator\\.ssh）\n> ssh-keygen -t rsa -b 2048 -C "yangtao@ccbjb.com.cn"\n> 2. Gitlab操作\n> settings→SSH Keys→添加id_rsa.pub里密钥→Add key\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[t("img",{attrs:{src:"/docs/images/clone%E5%9C%B0%E5%9D%80%E4%BD%8D%E7%BD%AE.png",alt:"clone地址位置.png"}}),t("br"),a._v(" "),t("img",{attrs:{src:"/docs/images/gitbash_clone.png",alt:"gitbash_clone.png"}}),t("br"),a._v("\n执行命令后，可以看到你的gitlab项目已经在第二步中新建好的文件夹中了，本地项目中的.git文件不要修改。")]),a._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[a._v("gitbash命令行窗口 cd 到项目目录 命令行的最右边可以看到当前所在分支 ，如图所示：\n"),t("img",{attrs:{src:"/docs/images/%E5%BD%93%E5%89%8D%E5%88%86%E6%94%AF.png",alt:"当前分支.png"}}),t("br"),a._v("\n使用下面的命令可以切换当前分支")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git checkout dev\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"/docs/images/%E5%88%87%E6%8D%A2%E5%88%86%E6%94%AF.png",alt:"切换分支.png"}}),t("br"),a._v("\n切换分支后，你在本地的项目录下看到是切换后分支（dev）的内容，而不能看到切换前分支（master）的内容，\n这样我们可以根据自己想要更新的分支进行操作。")]),a._v(" "),t("h3",{attrs:{id:"配置-gitlab-ci-yml文件和sonar-project-properties文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-gitlab-ci-yml文件和sonar-project-properties文件"}},[a._v("#")]),a._v(" 配置.gitlab-ci.yml文件和sonar-project.properties文件")]),a._v(" "),t("h4",{attrs:{id:"在本地的项目目录中添加下面两个文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在本地的项目目录中添加下面两个文件"}},[a._v("#")]),a._v(" 在本地的项目目录中添加下面两个文件")]),a._v(" "),t("ol",[t("li",[a._v("关于.gitlab-ci.yml文件（主要修改的内容是only）")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("stages:\n  - test\n\n# sonarqube check \ntest:\n  image:\n    name: docker.ccbjb.com.cn/sonarsource/sonar-scanner-cli:latest\n  stage: test\n  script:\n    - sonar-scanner\n  allow_failure: true\n  only:\n    - master\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("关于sonar-project.properties文件(这个是sonarqube的配置文件，默认项目根目录，如果要放到其他目录，执行sonar-scanner前要先cd)"),t("br"),a._v("\n这个文件要修改"),t("br"),a._v("\nsonar.projectKey="),t("br"),a._v("\nsonar.projectName="),t("br"),a._v("\nsonar.sources="),t("br"),a._v("\nsonar.host.url="),t("br"),a._v("\nsonar.login="),t("br"),a._v("\n根据实际情况修改")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# must be unique in a given SonarQube instance\nsonar.projectKey=educateApp \nsonar.projectName=educateApp\nsonar.projectVersion=1.0\n \n# 源文件在这个项目中的路径\nsonar.sources=./cjb_educate/src   \n# 编译文件(分析java代码需要)\n# sonar.java.binaries=./cjb_educate/bin/src/main\nsonar.sourceEncoding=UTF-8\n# sonarqube url\nsonar.host.url=http://192.168.3.116:9000\n# token是在sonarqube上创建项目的时候的token\nsonar.login=${token}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("在本地添加好上面的两个文件，还有自己的项目的代码之后，使用在本地的gitbash中使用git命令提交gitlab上面")])]),a._v(" "),t("ul",[t("li",[a._v("将修改的内容提交的暂存区")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  git add .\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("显示项目修改的信息")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  git status\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("引号中的内容可以写本次提交项目更新的内容，或者更新项目的人的姓名都可以")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('  git commit -m "注释"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("将项目提交到对应的分支（master,dev……）")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  git push origin 分支名 \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("代码提交之后，gitlab会自动执行.gitlab-ci.yml文件，.gitlab-ci.yml文件会加载sonar-project.properties配置文件。我们可以在gitlab的CI/CD中查看运行的过程。在sonarqube上查看代码静态分析的结果。运行情况如下图：\n"),t("img",{attrs:{src:"/docs/images/CICD%E7%BB%93%E6%9E%9C001.png",alt:"CICD结果001.png"}}),t("br"),a._v(" "),t("img",{attrs:{src:"/docs/images/CICD%E7%BB%93%E6%9E%9C002.png",alt:"CICD结果002.png"}}),t("br"),a._v(" "),t("img",{attrs:{src:"/docs/images/CICD%E7%BB%93%E6%9E%9C003.png",alt:"CICD结果003.png"}})]),a._v(" "),t("p",[a._v("以上就是gitlab-ci集成sonarqube对代码进行静态分析的全过程。")]),a._v(" "),t("h2",{attrs:{id:"补充：关于sonarqube检测到代码有质量问题，gitlab-ci自动停止执行如何设置的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充：关于sonarqube检测到代码有质量问题，gitlab-ci自动停止执行如何设置的方法"}},[a._v("#")]),a._v(" 补充：关于sonarqube检测到代码有质量问题，gitlab-ci自动停止执行如何设置的方法")]),a._v(" "),t("ol",[t("li",[a._v("首先更改你的.gitlab-ci.yml文件(只需要添加添加了-X的参数)")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("stages:\n  - test\n\n# sonarqube check \ntest:\n  image:\n    name: docker.ccbjb.com.cn/sonarsource/sonar-scanner-cli:latest\n  stage: test\n  script:\n    - sonar-scanner -X\n  allow_failure: true\n  only:\n    - master\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("其次在你的配置文件sonar-project.properties中添加两行代码")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sonar.qualitygate.wait = true\nsonar.qualitygate.timeout = 100\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[a._v("在sonarqubede网站上查看或者更改你的质量阈（一旦代码的质量超过了质量阈值设定的数值，gitlab-ci就会终止执行）\n"),t("img",{attrs:{src:"/docs/images/zhiliangfa.png",alt:"质量阈.png"}})])]),a._v(" "),t("li",[t("p",[a._v("运行CI/CD，演示结果\n"),t("img",{attrs:{src:"/docs/images/gate_status.png",alt:"gate_status.png"}})])])]),a._v(" "),t("h2",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[a._v("#")]),a._v(" 常见问题")]),a._v(" "),t("ol",[t("li",[t("p",[a._v(".gitlab-ci.yml中发现错误\n"),t("img",{attrs:{src:"/docs/images/yml%E4%B8%AD%E5%8F%91%E7%8E%B0%E9%94%99%E8%AF%AF.png",alt:"yml中发现错误.png"}}),t("br"),a._v("\n如果确认.yml没有问题还是出现异常，在gitlab页面重新把yml文件提交一次。")])]),a._v(" "),t("li",[t("p",[a._v("未定义编译文件路径\n"),t("img",{attrs:{src:"/docs/images/%E6%9C%AA%E5%AE%9A%E4%B9%89%E7%BC%96%E8%AF%91%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84.png",alt:"未定义编译文件路径.png"}})])]),a._v(" "),t("li",[t("p",[a._v("findbug插件异常\n"),t("img",{attrs:{src:"/docs/images/findbug%E6%8F%92%E4%BB%B6%E9%97%AE%E9%A2%98.png",alt:"findbug插件问题"}}),t("br"),a._v("\n问题原因\n"),t("img",{attrs:{src:"/docs/images/findbug%E6%8F%92%E4%BB%B6%E9%97%AE%E9%A2%98%E5%8E%9F%E5%9B%A0.png",alt:"findbug插件问题原因"}})])]),a._v(" "),t("li",[t("p",[a._v("sonar-scanner.properties文件位置问题\n"),t("img",{attrs:{src:"/docs/images/properties%E6%96%87%E4%BB%B6%E4%BD%8D%E7%BD%AE%E9%97%AE%E9%A2%98.png",alt:"properties文件位置问题"}})])])])])}),[],!1,null,null,null);s.default=e.exports}}]);