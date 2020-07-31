(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{358:function(s,n,t){"use strict";t.r(n);var a=t(42),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("https://qizhanming.com/blog/2018/08/08/how-to-install-nfs-on-centos-7")]),s._v(" "),t("h3",{attrs:{id:"nfs-实验："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nfs-实验："}},[s._v("#")]),s._v(" NFS 实验：")]),s._v(" "),t("h4",{attrs:{id:"_1-centos7客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-centos7客户端"}},[s._v("#")]),s._v(" 1. centos7客户端")]),s._v(" "),t("h5",{attrs:{id:"实验环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实验环境"}},[s._v("#")]),s._v(" 实验环境")]),s._v(" "),t("p",[s._v("服务端：192.168.3.108（centos7）\n客户端：192.168.3.109（centos7）\n客户端：192.168.3.102 (windows 10)")]),s._v(" "),t("h5",{attrs:{id:"服务端："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端："}},[s._v("#")]),s._v(" 服务端：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo yum -y install nfs-utils\n\n设置 NFS 服务开机启动\n$ sudo systemctl enable rpcbind\n$ sudo systemctl enable nfs\n\n启动 NFS 服务\n$ sudo systemctl start rpcbind\n$ sudo systemctl start nfs\n\n防火墙需要打开 rpc-bind 和 nfs 的服务\n// 我已经关闭了防火墙。下面命令skip\n//$ sudo firewall-cmd --zone=public --permanent --add-service={rpc-bind,mountd,nfs}\n//success\n//$ sudo firewall-cmd --reload\n//success\n\n服务启动之后，我们在服务端配置一个共享目录\n$ sudo mkdir /data_nfs\n$ sudo chmod 755 /data_nfs\n根据这个目录，相应配置导出目录\n\n$ sudo vi /etc/exports\n添加如下配置\n/data_nfs/     192.168.3.0/24(rw,sync,no_root_squash,no_all_squash)\n\n$ sudo systemctl restart nfs\n\n可以检查一下本地的共享目录\n$ showmount -e localhost\nExport list for localhost:\n/data_nfs 192.168.0.0/24\n这样，服务端就配置好了，接下来配置客户端，连接服务端，使用共享目录。\n")])])]),t("h5",{attrs:{id:"客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[s._v("#")]),s._v(" 客户端")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("与服务端类似\n\n$ sudo yum -y install nfs-utils\n\n客户端配置\n\n设置 rpcbind 服务的开机启动\n$ sudo systemctl enable rpcbind\n\n启动 NFS 服务\n$ sudo systemctl start rpcbind\n\n先查服务端的共享目录\n$ showmount -e 192.168.3.108\nExport list for 192.168.3.108:\n/data_nfs 192.168.3.0/24\n\n在客户端创建目录\n$ sudo mkdir /data_nfs\n\n挂载\n$ sudo mount -t nfs 192.168.3.108:/data_nfs /data_nfs\n\n挂载之后，可以使用 mount 命令查看一下\n$ mount\n\n**测试 NFS**\n测试一下，在客户端向共享目录创建一个文件\n\n$ cd /data_nfs\n$ sudo touch a\n\n之后取 NFS 服务端 192.168.3.108 查看一下\n$ cd /data_nfs\n$ ll\ntotal 0\n-rw-r--r--. 1 root root 0 Aug  8 18:46 a\n可以看到，共享目录已经写入了。\n\n\n**客户端自动挂载**\n自动挂载很常用，客户端设置一下即可。\n\n$ sudo vi /etc/fstab\n在结尾添加类似如下配置\n#\n# /etc/fstab\n# Created by anaconda on Thu May 25 13:11:52 2017\n#\n# Accessible filesystems, by reference, are maintained under '/dev/disk'\n# See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info\n#\n/dev/mapper/cl-root     /                       xfs     defaults        0 0\nUUID=414ee961-c1cb-4715-b321-241dbe2e9a32 /boot                   xfs     defaults        0 0\n/dev/mapper/cl-home     /home                   xfs     defaults        0 0\n/dev/mapper/cl-swap     swap                    swap    defaults        0 0\n192.168.3.108:/data_nfs     /data_nfs                   nfs     defaults        0 0\n\n由于修改了 /etc/fstab，需要重新加载 systemctl。\n$ sudo systemctl daemon-reload\n\n之后查看一下\n$ mount\n")])])]),t("p",[s._v("此时已经启动好了。如果实在不放心，可以重启一下客户端的操作系统，之后再查看一下。")]),s._v(" "),t("h4",{attrs:{id:"windows客户端（win10）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows客户端（win10）"}},[s._v("#")]),s._v(" windows客户端（win10）")]),s._v(" "),t("h5",{attrs:{id:"windows-客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-客户端"}},[s._v("#")]),s._v(" Windows 客户端")]),s._v(" "),t("p",[s._v("Windows 安装 NFS 客户端，不同的 Windows 版本，安装方式不大一样，本例列举几个。")]),s._v(" "),t("h6",{attrs:{id:"_1，windows步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1，windows步骤"}},[s._v("#")]),s._v(" 1，Windows\t步骤")]),s._v(" "),t("ul",[t("li",[s._v("Windows Server 2008\tservermanagercmd.exe -install FS-NFS-Services")]),s._v(" "),t("li",[s._v("Windows 7\t程序和功能 - 启动或关闭 Widnows 功能 - NFS 服务")]),s._v(" "),t("li",[s._v("Windows Server 2012\t添加功能角色 - 添加文件打印服务 - NFS 客户端")]),s._v(" "),t("li",[s._v("Windows 10\t程序和功能 - 启动或关闭 Widnows 功能 - NFS 服务")])]),s._v(" "),t("h6",{attrs:{id:"_2，客户端安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2，客户端安装"}},[s._v("#")]),s._v(" 2，客户端安装")]),s._v(" "),t("p",[s._v("本例的 Windows 为 Windows 10\nhttps://www.jianshu.com/p/edc928e58183 参考")]),s._v(" "),t("h6",{attrs:{id:"_3，客户端配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3，客户端配置"}},[s._v("#")]),s._v(" 3，客户端配置")]),s._v(" "),t("h6",{attrs:{id:"_3-1-先去服务端确认一下（其实没必要）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-先去服务端确认一下（其实没必要）"}},[s._v("#")]),s._v(" 3.1 先去服务端确认一下（其实没必要）")]),s._v(" "),t("p",[s._v("首先要了解服务端的文件夹权限，本例服务端 /data 目录的所有者为 root，查看一下 root 用户的信息")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ sudo id root\nuid=0(root) gid=0(root) groups=0(root)\n可以看到 uid=0, gid=0，需要在 Windows 客户端上进行配置，参考 UID/GID using the registry entries\n")])])]),t("p",[s._v("注意\n本例以 root 为例，生产环境要考虑安全因素，请修改为相应的有权限的用户")]),s._v(" "),t("h6",{attrs:{id:"_3-2-回到-windows-进行配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-回到-windows-进行配置"}},[s._v("#")]),s._v(" 3.2 回到 Windows 进行配置")]),s._v(" "),t("p",[t("img",{attrs:{src:"/docs/images/2020-07-08-10-37-25.png",alt:""}})]),s._v(" "),t("p",[t("code",[s._v("C:> mount 192.168.3.108:/data_nfs X:")]),s._v("\n这样，就将 NFS 服务端的共享文件夹挂载到了本地的 X: 盘，\n"),t("img",{attrs:{src:"/docs/images/2020-07-08-10-40-35.png",alt:""}})]),s._v(" "),t("p",[s._v("也可以卸载掉这个驱动器，使用如下命令：\n"),t("code",[s._v("C:> umount X:")]),s._v(" "),t("img",{attrs:{src:"/docs/images/2020-07-08-10-41-06.png",alt:""}})]),s._v(" "),t("p",[t("font",{attrs:{color:"red"}},[s._v(" 注意：\n通过此命令操作挂载，当服务器重启时，不会自动挂载。")])],1),s._v(" "),t("h6",{attrs:{id:"_4-登录时自动挂载，进行如下步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-登录时自动挂载，进行如下步骤"}},[s._v("#")]),s._v(" 4 登录时自动挂载，进行如下步骤")]),s._v(" "),t("ul",[t("li",[s._v("点击此电脑")]),s._v(" "),t("li",[s._v("在弹出的计算机对话框中，在工具栏找到 映射网络驱动器\n"),t("img",{attrs:{src:"/docs/images/2020-07-08-10-41-57.png",alt:""}})]),s._v(" "),t("li",[s._v("驱动器地址输入 X:")]),s._v(" "),t("li",[s._v("文件夹输入 192.168.3.108:/data_nfs")]),s._v(" "),t("li",[s._v("确认 登录时重新连接 是勾选的，这个配置表示登录时自动挂载共享目录。")])]),s._v(" "),t("h6",{attrs:{id:"_5-客户端测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-客户端测试"}},[s._v("#")]),s._v(" 5. 客户端测试")]),s._v(" "),t("p",[s._v("Windows 操作都是有界面的，本例不做具体截图，可以点击进入 X 盘，创建文件夹试试，然后新建文件试试。")]),s._v(" "),t("p",[s._v("如果有问题，请确认一下服务端的文件加权限。")]),s._v(" "),t("ul",[t("li",[s._v("没有创建文件的权限。\n"),t("img",{attrs:{src:"/docs/images/2020-07-08-10-43-15.png",alt:""}})])]),s._v(" "),t("p",[s._v("→ 修改3.108上/data_nfs目录权限为 777 . 然后就可以了。\n莫名其妙！")])])}),[],!1,null,null,null);n.default=e.exports}}]);