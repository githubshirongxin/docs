(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{595:function(s,n,a){"use strict";a.r(n);var e=a(59),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("参考文档：https://help.sonatype.com/repomanager3")]),s._v(" "),a("h2",{attrs:{id:"_1、要使用nexus服务需要安装jdk和maven"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、要使用nexus服务需要安装jdk和maven"}},[s._v("#")]),s._v(" 1、要使用nexus服务需要安装jdk和maven")]),s._v(" "),a("p",[s._v("1.1、jdk下载地址：https://www.oracle.com/technetwork/java/javase/downloads/index.html")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("rpm -ivh jdk-8u221-linux-x64.rpm\n\nvim /etc/profile\nexport JAVA_HOME=/usr/java/jdk1.8.0_221-amd64\nexport PATH=$JAVA_HOME/bin:$PATH\nexport CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar \n\nsource /etc/profile\n\njava -version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"_1-2、maven下载地址：https-maven-apache-org-download-cgi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、maven下载地址：https-maven-apache-org-download-cgi"}},[s._v("#")]),s._v(" 1.2、maven下载地址：https://maven.apache.org/download.cgi")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("tar -zxvf apache-maven-3.6.1-bin.tar.gz\n\nvim /etc/profile\nexport PATH=$PATH:/usr/local/maven/bin\n\nsource /etc/profile\n\nmvn -v\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_2、安装nexus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装nexus"}},[s._v("#")]),s._v(" 2、安装nexus")]),s._v(" "),a("p",[s._v("下载地址：https://www.sonatype.com/nexus-repository-oss，点击首页大广告图，跳转后填写邮箱，点击，download，网页跳转后，选择 nexus repository manager oss 3.x - unix，下载最新安装包。")]),s._v(" "),a("p",[s._v("或者打开网址：https://my.sonatype.com/ 在 Latest Releases 标签下， 下载最新nexus repository安装包")]),s._v(" "),a("p",[s._v("参考：https://www.cnblogs.com/yangshaoxiang/p/8807657.html")]),s._v(" "),a("h3",{attrs:{id:"iptables允许8081或者干脆关闭防火墙！！"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iptables允许8081或者干脆关闭防火墙！！"}},[s._v("#")]),s._v(" iptables允许8081或者干脆关闭防火墙！！")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo systemctl stop firewalld\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#防火墙开启8081端口，该端口是nexus的默认端口(在/usr/local/nexus/etc/nexus-default.properties文件中)\nvi  /etc/sysconfig/iptables\n\n# 在打开的文件中加入如下内容\n-A INPUT -p tcp -m state --state NEW -m tcp --dport 8081 -j ACCEPT\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[s._v("#")]),s._v(" 修改配置")]),s._v(" "),a("p",[s._v("#该文件在bin目录下和启动程序nexus同级")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("nexus.rc\nrun_as_user=root")])]),s._v(" "),a("li",[a("p",[s._v("nexus-default.properties\n修改host=192.168.3.124\n端口不变")])])]),s._v(" "),a("h3",{attrs:{id:"启动nexus，start不好使得用run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动nexus，start不好使得用run"}},[s._v("#")]),s._v(" 启动nexus，start不好使得用run")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#启动 ps 我安装时第一次启动使用./nexus start 访问不到web页面，使用run命令可以，之后使用start也可以了\n./nexus run &\n\n#启动成功会有如下信息\nWARNING: ************************************************************\nWARNING: Detected execution as "root" user.  This is NOT recommended!\nWARNING: ************************************************************\nStarting nexus\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"http访问时的用户名和密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http访问时的用户名和密码"}},[s._v("#")]),s._v(" http访问时的用户名和密码")]),s._v(" "),a("p",[s._v("用户名admin，初始密码保存在nexus安装目录下的sonatype-work的admin.password文件中。\n第一次访问是需要修改密码")]),s._v(" "),a("p",[s._v("修改成admin，admin123")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"_3-使用nexus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用nexus"}},[s._v("#")]),s._v(" 3. 使用nexus")]),s._v(" "),a("h3",{attrs:{id:"_3-1-修改maven的setting-xml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-修改maven的setting-xml"}},[s._v("#")]),s._v(" 3.1 修改maven的setting.xml")]),s._v(" "),a("p",[s._v("修改客户机：maven下的setting.xml")]),s._v(" "),a("ul",[a("li",[s._v("$MAVEN_HOME/conf/setting.xml或.m2/setting.xml\n我修改的是$MAVEN_HOME/conf/setting.xml")])]),s._v(" "),a("p",[s._v("C:\\Program Files (x86)\\apache-maven-3.6.3\\conf")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("      <server>\n        <id>nexus</id>\n        <username>admin</username>\n        <password>admin123</password>\n      </server>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("然后修改工程的pom.xml文件\nF:\\work\\maven test\\my-app\\pom.xml")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<distributionManagement>\n    <repository>\n      <id>nexus</id>\n      <name>Nexus Release Repository</name>\n      <url>http://192.168.3.124:8081/repository/maven-snapshots/</url>\n    </repository>\n    <snapshotRepository>\n      <id>nexus</id>\n      <name>Nexus Snapshot Repository</name>\n      <url>http://192.168.3.124:8081/repository/maven-snapshots/</url>\n    </snapshotRepository>\n  </distributionManagement>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("然后在工程里命令行执行"),a("br"),s._v(" "),a("code",[s._v("mvn clean compile package deploy")])]),s._v(" "),a("p",[s._v("执行后，去nexus网页查看。")]),s._v(" "),a("h2",{attrs:{id:"centos7配置nexus开机自启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos7配置nexus开机自启动"}},[s._v("#")]),s._v(" CentOS7配置nexus开机自启动")]),s._v(" "),a("ol",[a("li",[s._v("新建nexus启动脚本#\n进入/etc/init.d目录，新建脚本文件nexus")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@linux_maven etc]# cd /etc/init.d/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("新建脚本文件nexus\n[root@linux_maven init.d]# vim nexus")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#!/bin/bash\n#chkconfig:2345 20 90\n#description:nexus\n#processname:nexus\n \nexport JAVA_HOME=/root/apps/jdk1.8/\n \ncase $1 in\n        start) su root /usr/local/nexus3.21/bin/nexus start;;\n        stop) su root /usr/local/nexus3.21/bin/nexus stop;;\n        status) su root /usr/local/nexus3.21/bin/nexus status;;\n        restart) su root /usr/local/nexus3.21/bin/nexus restart;;\n        dump) su root /usr/local/nexus3.21/bin/nexus dump;;\n        console) su root /usr/local/nexus3.21/bin/nexus console;;\n        *) echo "Usage: nexus {start|stop|run|run-redirect|status|restart|force-reload}"\nesac\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("设置脚本权限#")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[root@linux_maven init.d]# chmod +x /etc/init.d/nexus \n使用service命令使用nexus#\nCopy \n[root@linux_maven init.d]# service nexus status\nWARNING: ************************************************************\nWARNING: Detected execution as "root" user.  This is NOT recommended!\nWARNING: ************************************************************\nnexus is running.\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("添加到开机启动#")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@linux_maven init.d]# chkconfig nexus on\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("查看nexus开机启动#")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@linux_maven ~]# chkconfig --list nexus\n \nNote: This output shows SysV services only and does not include native\n      systemd services. SysV configuration data might be overridden by native\n      systemd configuration.\n \n      If you want to list systemd services use 'systemctl list-unit-files'.\n      To see services enabled on particular target use\n      'systemctl list-dependencies [target]'.\n \nnexus           0:off   1:off   2:on    3:on    4:on    5:on    6:off\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("设置防火墙#")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 进入防火墙设置文件目录\n[root@linux_maven init.d]# cd /etc/firewalld/zones/\n// 使用vim, 修改防火墙配置文件\n[root@linux_maven zones]# vim public.xml\n添加以下放开端口内容, 其它不变\n  <rule family="ipv4">\n  \x3c!-- 开放8081端口给任意ip  --\x3e\n　　<port protocol="tcp" port="8081"/>\n　　<accept/>\n  </rule>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1176089/202004/1176089-20200408055215908-1985164690.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"最后引申一下，安装按nexus之后，pom及setting的各种配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后引申一下，安装按nexus之后，pom及setting的各种配置"}},[s._v("#")]),s._v(" 最后引申一下，安装按nexus之后，pom及setting的各种配置")]),s._v(" "),a("p",[s._v("参考：https://blog.csdn.net/cwh056056/category_5915341.html")])])}),[],!1,null,null,null);n.default=t.exports}}]);