(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{616:function(t,a,i){"use strict";i.r(a);var s=i(59),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("p",[t._v("步骤要点：\n1，首先新建一个虚拟交换机bridge。交换机选择外部网络。我只有一块网卡，下拉列表里就会弹出来这块。")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/18287449-83cb254ecda86f50.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}}),t._v("\n新的虚拟交换机建立之后，下图的原来的连接“以太网”就失效了。新的状态是：宿主机和虚拟机都通过“vEthernet（bridge）”连接互联网和（宿主机与虚拟机）互联。所以，宿主机的IP要在“vEthernet（bridge）”里面重新设置好（跟原”以太网“的设置一样就行）！！！")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/18287449-38c49b2597641937.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}}),t._v("\n2，安装centos，点右侧导航栏-》新建-》虚拟机-》名称无所谓，位置无所谓，代数（选一代，因为cent7就不支持二代），内存无所谓。网络先不用选。（装完centos之后在第6步，外面设置成bridge）。\n3，安装的过程中，弹出GUI界面，可以设置IP地址。注意点有那么几个，\n3.1 注意点：给虚拟机分配一个实际的IP，和宿主机一个网段！！\n3.2 注意点：一定先配置完IP，然后再启动以太网。这块错了就死活连不了外网也连不了宿主机。\n别的无所谓。安装完毕后，宿主机和虚拟机就能互相ping通，宿主机和虚拟机都能访问外网。")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/18287449-d909a95f0b6e4ae2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),i("p",[i("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/18287449-d0bc50bffcf10814.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}}),t._v("\n可见还没有安装完centos7，从宿主机上就已经可以ping通虚拟机了。\n【设置宿主机和虚拟机文件夹共享】")]),t._v(" "),i("p",[t._v("主要思路是，在window上设置共享目录。然后在linux上mount上这个共享目录。linux上mount之前先下载一个软件smbclient（注意只需要下载这个客户端即可不用下载服务端），window上不用下载（本身就带）。\n参考：https://www.cnblogs.com/atuotuo/p/7251540.html")]),t._v(" "),i("p",[t._v("关键点：win10现在已经自动更新的SMB2.0，而centos7里默认就支持SMB1.0.所以在centos上执行mount命令会失败。解决办法：把windows的SMB改回1.0，这样centos7上执行mount就会成功。")]),t._v(" "),i("p",[t._v("步骤如下：")]),t._v(" "),i("p",[t._v("1，win10宿主机上，控制面板-》程序-》穷或关闭Windows功能-》SMB1.0/CIFS文件共享支持")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/18287449-c2833b2bc1f0cbac.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}}),t._v("\n2，在window上创建一个共享目录：D盘C盘都行，sharewithvm目录。")]),t._v(" "),i("p",[t._v("3，centos新建一个目录，作为挂载点 mkdir /sharewithvm")]),t._v(" "),i("p",[t._v("4，然后在centos上执行mount命令：")]),t._v(" "),i("p",[t._v("##这步千万别出错，出错了，下面mount命令会出13错误（提示没有权限，实际上是这个没安装好）\n#yum -y install samba samba-client")]),t._v(" "),i("h2",{attrs:{id:"挂在共享目录"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#挂在共享目录"}},[t._v("#")]),t._v(" 挂在共享目录")]),t._v(" "),i("p",[t._v("#mount -t cifs -o username=用户名,password=密码 //192.168.3.102/sharewithvm /sharewithvm")]),t._v(" "),i("p",[t._v("这样宿主机D：/sharewithvm与虚拟机/sharewithvm就挂载上了。")]),t._v(" "),i("p",[t._v("另外还有几个命令了解一下就行，不用执行。\n想删除挂就执行下面的命令\n#umount /mnt/MyShare")]),t._v(" "),i("h2",{attrs:{id:"列出所有的共享目录（仅仅用于查看有多少共享目录可用）"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#列出所有的共享目录（仅仅用于查看有多少共享目录可用）"}},[t._v("#")]),t._v(" 列出所有的共享目录（仅仅用于查看有多少共享目录可用）")]),t._v(" "),i("p",[t._v("#smbclient -L 10.203.105.145 -U administrator%xxx")]),t._v(" "),i("h2",{attrs:{id:"访问共享目录-（一般不这么用，直接在windows上操作岂不更方便）"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#访问共享目录-（一般不这么用，直接在windows上操作岂不更方便）"}},[t._v("#")]),t._v(" 访问共享目录 （一般不这么用，直接在windows上操作岂不更方便）")]),t._v(" "),i("p",[t._v("#smbclient //10.203.105.145/ReleasePackage -U administrator%xxx")])])}),[],!1,null,null,null);a.default=e.exports}}]);