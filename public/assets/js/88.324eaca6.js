(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{570:function(t,e,a){"use strict";a.r(e);var n=a(59),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("https://about.gitlab.com/install/ce-or-ee/")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("其实应该安装EE。")])]),t._v(" "),a("li",[a("p",[t._v("应该安装centos7版本，速度最快。docker版本还是差点。")])])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("如果您有兴趣使用GitLab，即使您不确定是否会订阅"),a("a",{attrs:{href:"https://about.gitlab.com/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitLab Enterprise Edition"),a("OutboundLink")],1),t._v("许可证 ，我们也建议您 "),a("a",{attrs:{href:"https://about.gitlab.com/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载并安装"),a("OutboundLink")],1),a("a",{attrs:{href:"https://about.gitlab.com/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitLab Enterprise Edition"),a("OutboundLink")],1),t._v("。您仍然可以使用GitLab社区版的所有功能，而无需许可证或注册。")]),t._v(" "),a("h2",{attrs:{id:"许可模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#许可模式"}},[t._v("#")]),t._v(" 许可模式")]),t._v(" "),a("p",[t._v("GitLab建立在开放核心模型上。这意味着有两种版本的GitLab：社区版和企业版。")]),t._v(" "),a("p",[t._v("GitLab社区版是开源的，具有MIT Expat许可证。GitLab企业版建立在Community Edition的基础上：它使用相同的"),a("em",[t._v("核心")]),t._v("，但在此基础上增加了其他功能。这是在专有许可下的。")]),t._v(" "),a("p",[t._v("对于两个版本：GitLab中的所有javascript代码都是开源的。GitLab编写的所有javascript代码都在相同的MIT许可下。")]),t._v(" "),a("h2",{attrs:{id:"为什么要使用企业版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用企业版"}},[t._v("#")]),t._v(" 为什么要使用企业版")]),t._v(" "),a("p",[t._v("为了能够使用GitLab企业版功能，您需要订阅才能获得许可证。如果您使用的是未经许可的企业版，则仅使用MIT许可的功能。")]),t._v(" "),a("p",[t._v("这意味着，如果您没有许可证就安装了GitLab企业版，则不会发现与典型的Community Edition实例有所不同，但是您还有其他优点：")]),t._v(" "),a("ol",[a("li",[t._v("如果您想随时试用Enterprise Edition功能，则无需设置新实例或升级现有实例即可执行此操作。您只需在GitLab中启用试用版即可。如果您对Enterprise Edition功能不满意，则在试用期结束后，您的实例将自动恢复为仅Community Edition功能。")]),t._v(" "),a("li",[t._v("要从Community Edition升级到Enterprise Edition，您必须确保使用相同版本，并按照特定步骤进行操作，而这通常需要停机。使用企业版，只需单击即可在社区版功能和完整版企业版功能之间进行切换。")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://about.gitlab.com/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装GitLab企业版"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"为什么使用社区版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用社区版"}},[t._v("#")]),t._v(" 为什么使用社区版")]),t._v(" "),a("p",[t._v("如果您只想下载开源软件Community Edition是最佳选择。此发行版不包含专有代码。在功能上，它将与没有许可证的企业版相同。")]),t._v(" "),a("p",[t._v("请注意，将来如果您决定迁移到企业版，则需要进行升级，并且可能需要停机。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://about.gitlab.com/install/?version=ce",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装GitLab社区版"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("https://about.gitlab.com/install/")]),t._v(" "),a("h1",{attrs:{id:"安装自我管理的gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装自我管理的gitlab"}},[t._v("#")]),t._v(" 安装自我管理的GitLab")]),t._v(" "),a("p",[t._v("我们强烈建议选择官方的Linux软件包安装，因为它安装速度更快，升级更容易，并且它具有增强其他方法所没有的可靠性的功能。我们也强烈 "),a("a",{attrs:{href:"https://docs.gitlab.com/ee/install/requirements.html#memory",target:"_blank",rel:"noopener noreferrer"}},[t._v("建议至少有4GB的RAM"),a("OutboundLink")],1),t._v(" 运行GitLab。")]),t._v(" "),a("h2",{attrs:{id:"试用gitlab-ultimate-30天！"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#试用gitlab-ultimate-30天！"}},[t._v("#")]),t._v(" 试用GitLab Ultimate 30天！")]),t._v(" "),a("h4",{attrs:{id:"_1-install-and-configure-the-necessary-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-and-configure-the-necessary-dependencies"}},[t._v("#")]),t._v(" 1. Install and configure the necessary dependencies")]),t._v(" "),a("p",[t._v("On CentOS 7 (and RedHat/Oracle/Scientific Linux 7), the commands below will also open HTTP, HTTPS and SSH access in the system firewall.")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo yum install -y curl policycoreutils-python openssh-server\nsudo systemctl enable sshd\nsudo systemctl start sshd\nsudo firewall-cmd --permanent --add-service=http\nsudo firewall-cmd --permanent --add-service=https\nsudo systemctl reload firewalld\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("Next, install Postfix to send notification emails. If you want to use another solution to send emails please skip this step and "),a("a",{attrs:{href:"https://docs.gitlab.com/omnibus/settings/smtp.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("configure an external SMTP server"),a("OutboundLink")],1),t._v(" after GitLab has been installed.")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo yum install postfix\nsudo systemctl enable postfix\nsudo systemctl start postfix\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("During Postfix installation a configuration screen may appear. Select 'Internet Site' and press enter. Use your server's external DNS for 'mail name' and press enter. If additional screens appear, continue to press enter to accept the defaults.")]),t._v(" "),a("h4",{attrs:{id:"_2-add-the-gitlab-package-repository-and-install-the-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-add-the-gitlab-package-repository-and-install-the-package"}},[t._v("#")]),t._v(" 2. Add the GitLab package repository and install the package")]),t._v(" "),a("p",[t._v("Add the GitLab package repository.")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Next, install the GitLab package. Change "),a("code",[t._v("https://gitlab.example.com")]),t._v(" to the URL at which you want to access your GitLab instance. Installation will automatically configure and start GitLab at that URL.")]),t._v(" "),a("p",[t._v("For "),a("code",[t._v("https://")]),t._v(" URLs GitLab will automatically "),a("a",{attrs:{href:"https://docs.gitlab.com/omnibus/settings/ssl.html#lets-encrypthttpsletsencryptorg-integration",target:"_blank",rel:"noopener noreferrer"}},[t._v("request a certificate with Let's Encrypt"),a("OutboundLink")],1),t._v(", which requires inbound HTTP access and a valid hostname. You can also "),a("a",{attrs:{href:"https://docs.gitlab.com/omnibus/settings/nginx.html#manually-configuring-https",target:"_blank",rel:"noopener noreferrer"}},[t._v("use your own certificate"),a("OutboundLink")],1),t._v(" or just use http://.")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('sudo EXTERNAL_URL="https://gitlab.example.com" yum install -y gitlab-ee\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"_3-browse-to-the-hostname-and-login"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-browse-to-the-hostname-and-login"}},[t._v("#")]),t._v(" 3. Browse to the hostname and login")]),t._v(" "),a("p",[t._v("On your first visit, you'll be redirected to a password reset screen. Provide the password for the initial administrator account and you will be redirected back to the login screen. Use the default account's username "),a("code",[t._v("root")]),t._v(" to login.")]),t._v(" "),a("p",[t._v("See our "),a("a",{attrs:{href:"https://docs.gitlab.com/omnibus/README.html#installation-and-configuration-using-omnibus-package",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation for detailed instructions on installing and configuration"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"_4-set-up-your-communication-preferences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-set-up-your-communication-preferences"}},[t._v("#")]),t._v(" 4. Set up your communication preferences")]),t._v(" "),a("p",[t._v("Visit our "),a("a",{attrs:{href:"https://about.gitlab.com/company/preference-center/",target:"_blank",rel:"noopener noreferrer"}},[t._v("email subscription preference center"),a("OutboundLink")],1),t._v(" to let us know when to communicate with you. We have an explicit email opt-in policy so you have complete control over what and how often we send you emails.")]),t._v(" "),a("p",[t._v("Twice a month, we send out the GitLab news you need to know, including new features, integrations, docs, and behind the scenes stories from our dev teams. For critical security updates related to bugs and system performance, sign up for our dedicated security newsletter.")]),t._v(" "),a("p",[a("strong",[t._v("Important note:")]),t._v(" If you do not opt-in to the security newsletter, you will not receive security alerts.")]),t._v(" "),a("h4",{attrs:{id:"_5-configure-sign-up-restrictions-and-sign-in-preferences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-configure-sign-up-restrictions-and-sign-in-preferences"}},[t._v("#")]),t._v(" 5. Configure sign-up restrictions and sign-in preferences.")]),t._v(" "),a("p",[t._v("After completing your installation, consider the "),a("a",{attrs:{href:"https://docs.gitlab.com/ee/security/README.html#securing-your-gitlab-installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("recommended practices to secure your GitLab instance"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=s.exports}}]);