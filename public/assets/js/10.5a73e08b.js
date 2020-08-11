(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{421:function(s,a,n){"use strict";n.r(a);var t=n(48),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("公司的服务器上的raid硬盘给我划分了一小块用来实验。\n我怎么共享过来呢。可以NFS也可以samba。\n需要输入用户名，密码。这样来挂载。")]),s._v(" "),n("p",[s._v("公司内部很少人用的系统，能保证raid数据安全就是个弱可用的系统了。\n够用了。")]),s._v(" "),n("h1",{attrs:{id:"其实就是磁盘共享"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其实就是磁盘共享"}},[s._v("#")]),s._v(" 其实就是磁盘共享")]),s._v(" "),n("p",[s._v("Samba是在Linux系统上实现SMB（Session MessageBlock）协议的一个免费软件，以实现文件共享和打印机服务共享。\n"),n("font",{attrs:{color:"red"}},[s._v("SMB是一个协议.")])],1),s._v(" "),n("h2",{attrs:{id:"_1-服务端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-服务端"}},[s._v("#")]),s._v(" 1 服务端:")]),s._v(" "),n("p",[s._v("公司做的,我只管用.\n一会把搭建smaba服务端,写上.实验一下.")]),s._v(" "),n("p",[s._v("参考: https://www.cnblogs.com/hereboot/p/11707903.html")]),s._v(" "),n("h3",{attrs:{id:"_1-1-安装samba服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-安装samba服务"}},[s._v("#")]),s._v(" 1.1 安装samba服务")]),s._v(" "),n("p",[n("code",[s._v("yum install -y samba")])]),s._v(" "),n("h3",{attrs:{id:"_1-2-配置samba服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-配置samba服务"}},[s._v("#")]),s._v(" 1.2 配置samba服务")]),s._v(" "),n("p",[s._v("samba服务器最主要的配置文件其实只有一个，就是/etc/samba/samba.conf，这个配置文件可以分为两个部分，一个部分是全局参数，一部分是共享资源相关参数。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#1.全局部分参数设置：\n[global]\n        #与主机名相关的设置\n        workgroup = zkhouse  <==工作组名称\n        netbios name = zkserver   <==主机名称，跟hostname不是一个概念，在同一个组中，netbios name必须唯一\n        serverstring = this is a test samba server <==说明性文字，内容无关紧要\n        #与登录文件有关的设置\n        log file = /var/log/samba/log.%m   <==日志文件的存储文件名，%m代表的是client端Internet主机名，就是hostname\n        max log size = 50      <==日志文件最大的大小为50Kb\n        #与密码相关的设置\n        security = share       <==表示不需要密码，可设置的值为share、user和server\n        passdb backend = tdbsam\n        #打印机加载方式\n        load printer = no <==不加载打印机\n-----------------------------------------------------------\n# 2.共享资源设置方面：将旧的注释掉，加入新的\n#先取消[homes]、[printers]的项目，添加[temp]项目如下\n[temp]              <==共享资源名称\n        comment = Temporary file space <==简单的解释，内容无关紧要\n        path = /tmp     <==实际的共享目录\n        writable = yes    <==设置为可写入\n        browseable = yes   <==可以被所有用户浏览到资源名称，\n        guest ok = yes    <==可以让用户随意登录\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[s._v("工作模式\nsamba服务器有5种工作模式，分别为：")]),s._v(" "),n("ul",[n("li",[s._v("share，用户对samba服务器的访问不需要身份验证，允许匿名访问，用户的访问权限仅由相应用户对共享文件的访问权限决定")]),s._v(" "),n("li",[s._v("user，使用用户名和密码访问samba服务器，")]),s._v(" "),n("li",[s._v("server，使用另外一台服务器专门用来做身份验证，samba服务只提供文件和打印机共享服务")]),s._v(" "),n("li",[s._v("domain，域模式，不常用")]),s._v(" "),n("li",[s._v("ads，最新的一种工作模式，也不太常用")])]),s._v(" "),n("h3",{attrs:{id:"_1-3-添加用户并设置密码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-添加用户并设置密码"}},[s._v("#")]),s._v(" 1.3 添加用户并设置密码")]),s._v(" "),n("p",[s._v("设置账号用于登录samba服务器，同时并设置密码。具体命令：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# useradd shirx")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# smbpasswd -a shirx")]),s._v("\nNew SMB password:\nRetype new SMB password:\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"_1-4-重启samba服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-重启samba服务器"}},[s._v("#")]),s._v(" 1.4 重启Samba服务器")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("// "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/init.d/smb restart")]),s._v("\n//没有这个命令\n\n改用:\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" smb restart\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" smb status\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"_2-客户端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-客户端"}},[s._v("#")]),s._v(" 2 客户端:")]),s._v(" "),n("h3",{attrs:{id:"_2-1-客户端-linux-centos7"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-客户端-linux-centos7"}},[s._v("#")]),s._v(" 2.1 客户端 = linux(centos7)")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y samba-client\n\n$ smbclient -L samba服务器IP -U shirx\nEnter SAMBA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("shirx's password:\n\n        Sharename       Type      Comment\n        ---------       ----      -------\n        Fileserver      Disk\n        IPC$            IPC       IPC Service "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nReconnecting with SMB1 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" workgroup listing.\n\n        Server               Comment\n        ---------            -------\n\n        Workgroup            Master\n        ---------            -------\n        WORKGROUP            CJB-22-NO08\n        \n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /data_cjb\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -t cifs -o "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("username")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("用户名,password"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("密码 //samba服务器IP/shi /data_cjb\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos109 data_cjb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls /data_cjb")]),s._v("\nme108  me109  readme\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[s._v("这就能用了.")]),s._v(" "),n("h4",{attrs:{id:"追击"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#追击"}},[s._v("#")]),s._v(" 追击")]),s._v(" "),n("p",[s._v("想删除挂就执行下面的命令\n#umount /mnt/MyShare\n好像必须得加上uid，gid\n"),n("code",[s._v("sudo mount -t cifs -o username=${USER},password=${PASSWORD},uid=$(id -u),gid=$(id -g),forceuid,forcegid, //server-address/folder /mount/path/on/ubuntu")])]),s._v(" "),n("h4",{attrs:{id:"追记："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#追记："}},[s._v("#")]),s._v(" 追记：")]),s._v(" "),n("p",[s._v("客户端定期重启了。起来来之后发现如下问题，挂载目录没了。\n另外，输入用户名密码也出错。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@centos108 ~]# mount | grep cjb\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("mount不见了。")]),s._v(" "),n("p",[s._v("虽然yperV，关闭宿主机不写这个也能挂载。但是在hyperV上显式地关闭在启动3.108\n，再进到3.108上一看，mount不见了。")]),s._v(" "),n("h4",{attrs:{id:"重新启动后自动挂载目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重新启动后自动挂载目录"}},[s._v("#")]),s._v(" 重新启动后自动挂载目录")]),s._v(" "),n("p",[s._v("然后在/etc/fstab中添加下面这行\n在/etc/fstab中添加下面这行\n"),n("code",[s._v("//192.168.100.11/shi /data_cjb/ cifs defaults,username=shirx,password=password")])]),s._v(" "),n("p",[s._v("这样重新启动后，mount又自动挂载了。")]),s._v(" "),n("hr"),s._v(" "),n("h3",{attrs:{id:"_2-2-windows"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-windows"}},[s._v("#")]),s._v(" 2.2 windows")]),s._v(" "),n("p",[s._v("在Windows的运行，输入\\192.168.100.11/shi（Samba对应的IP地址）：\n这个时候会弹出登录界面，直接输入之前设置的登录账号和密码就行了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);