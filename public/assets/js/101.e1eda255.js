(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{585:function(s,a,t){"use strict";t.r(a);var n=t(59),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),t("p",[s._v("公司本地有教学视频。\n本来想放到服务器的raid5上，后来发现不合适，浪费。\n视频备份出一份就可以，弄两个单独的大硬盘手工备份一下，然后把其中一个放到一台机器上共享（选了win10因为usb插移动硬盘4\nT方便），linux视频播放应用读取、两个视频编辑人员使用win10挂载之后写入。")]),s._v(" "),t("h2",{attrs:{id:"结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结构"}},[s._v("#")]),s._v(" 结构")]),s._v(" "),t("p",[s._v("win10：192.168.3.103做samba服务，文件夹共享\nlinux：192.168.3.138做视频服务器，挂载3.103的目录\nwin10：做内容录入，股灾3.103的目录")]),s._v(" "),t("h2",{attrs:{id:"_1-samba服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-samba服务"}},[s._v("#")]),s._v(" 1.samba服务")]),s._v(" "),t("p",[s._v("win10做samba服务就是文件夹共享")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意：")]),s._v(" "),t("p",[s._v("共享文件夹不能分配给无密码用户，\n必须有密码")])]),s._v(" "),t("p",[s._v("新建一个用户user_RW，设置密码，设置不用初次登陆修改密码，密码永久有效。已经有这种临时用户的可以直接用，但是必须有密码。\n右键文件夹，共享，选择新建用户“user_RW”，设定权限为“读、写”，确定。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("改善空间")]),s._v(" "),t("p",[s._v("也可以再新建一个用户user_R,给linux视频服务器挂载用。\n内部视频网站也是自己维护，所以一个用户就算了。")])]),s._v(" "),t("h2",{attrs:{id:"_2-windows挂载3-103"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-windows挂载3-103"}},[s._v("#")]),s._v(" 2. windows挂载3.103")]),s._v(" "),t("p",[s._v("我的电脑→现在地址栏上访问“\\192.168.3.103\\共享目录名”\n输入用户名user_RW，密码\n然后再我的电脑→计算机→映射网络驱动器→输入“\\192.168.3.103\\共享目录名”→确定。")]),s._v(" "),t("h2",{attrs:{id:"_3-linux（centos7）挂载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-linux（centos7）挂载"}},[s._v("#")]),s._v(" 3. linux（centos7）挂载")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y samba-client\n\n$ smbclient -L samba服务器IP -U user_RW\nEnter SAMBA"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("shirx's password:\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /data_videos\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -t cifs -o "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("username")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("用户名,password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("密码 //samba服务器IP/共享目录名 /data_videos\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("重新启动后自动挂载目录\n然后在/etc/fstab中添加下面这行 在/etc/fstab中添加下面这行 //192.168.3.103/共享目录 /data_videos cifs defaults,username=user_RW,password=密码")]),s._v(" "),t("p",[s._v("这样重新启动后，mount又自动挂载了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);