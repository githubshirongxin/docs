(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{512:function(t,_,v){"use strict";v.r(_);var a=v(59),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"_1-nfs系统是什么？有哪些产品？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-nfs系统是什么？有哪些产品？"}},[t._v("#")]),t._v(" 1. NFS系统是什么？有哪些产品？")]),t._v(" "),v("p",[t._v("NFS（Network File System）即网络文件系统，它允许网络中的计算机之间通过TCP/IP网络共享资源。在NFS的应用中，本地NFS的客户端应用可以透明地读写位于远端NFS服务器上的文件，就像访问本地文件一样")]),t._v(" "),v("p",[t._v("目前流行的分布式文件系统有许多，如MooseFS、FastDFS、GlusterFS、Ceph、MogileFS等，常见的分布式存储对比如下：")]),t._v(" "),v("ul",[v("li",[t._v("FastDFS：一个开源的轻量级分布式文件系统，是纯C语言开发的。它对文件进行管理，功能包括：文件存储、文件同步、文件访问（文件上传、文件下载）等，解决了大容量存储和负载均衡的问题。特别适合以文件为载体的在线服务，如相册网站、视频网站等等。FastDFS 针对大量"),v("strong",[t._v("小文件存储有优势")]),t._v("。")]),t._v(" "),v("li",[t._v("GlusterFS：主要应用在集群系统中，具有很好的可扩展性。软件的结构设计良好，易于扩展和配置，通过各个模块的灵活搭配以得到针对性的解决方案。GlusterFS"),v("strong",[t._v("适合大文件")]),t._v("，小文件性能相对较差。")]),t._v(" "),v("li",[t._v("MooseFS：比较接近GoogleFS的c++实现，通过fuse支持了标准的posix，支持FUSE，相对比较轻量级，对master服务器有单点依赖，用perl编写，算是通用的文件系统，可惜社区不是太活跃，性能相对其他几个来说较差，国内用的人比较多。")]),t._v(" "),v("li",[t._v("Ceph：C++编写，性能很高，支持Fuse，并且"),v("strong",[t._v("没有单点故障")]),t._v("依赖；Ceph 是一种全新的存储方法，对应于 Swift 对象存储。在对象存储中，应用程序不会写入文件系统，而是使用存储中的直接 API 访问写入存储。因此，应用程序能够绕过操作系统的功能和限制。在openstack社区比较火，做虚机块存储用的很多！")]),t._v(" "),v("li",[t._v("GoogleFS：性能十分好，可扩展性强，可靠性强。用于"),v("strong",[t._v("大型的、分布式的、对大数据")]),t._v("进行访问的应用。运用在廉价的硬件上。")])]),t._v(" "),v("h2",{attrs:{id:"_2-分布式存储能解决单点故障吗？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-分布式存储能解决单点故障吗？"}},[t._v("#")]),t._v(" 2.分布式存储能解决单点故障吗？")]),t._v(" "),v("p",[t._v("能，至少ceph没有单点故障\n另外，ClusterFS每个节点都是自己管理所有节点信息。应该也没有单点故障，但显然，节点多了，它的效率就下降了。")]),t._v(" "),v("h2",{attrs:{id:"_3-linux-nfs系统（自带安装包）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-linux-nfs系统（自带安装包）"}},[t._v("#")]),t._v(" 3. linux NFS系统（自带安装包）")]),t._v(" "),v("p",[t._v("这是个工具。能安装。在不同硬件下，不同操作系统之间，文件共享。\n他是RPC服务器。不负责传输，传输交给RPC。所以不论客户端还是服务端，都必须启动RPC服务。\n事实上任何一台计算机都可以是NFS服务器或NFS客户机，甚至同时为NFS 服务器和NFS客户机。\n当用户想使用远程文件时只要用“mount”命令就可把远程文件系统挂接在自己的文件系统之下，使远程的文件与使用本地计算机上的文件一样。\n"),v("font",{attrs:{color:"red"}},[t._v("用户需要自己mount,不就是创建一个共享目录吗！操作的是同一份数据，数据没有冗余")])],1),t._v(" "),v("p",[t._v("启动NFS服务器，只需要nfs-utils和rpcbind。安装时一个命令即可"),v("code",[t._v("yum install -y nfs-utils")])]),t._v(" "),v("ul",[v("li",[t._v("nfs-uitls就是NFS服务器")]),t._v(" "),v("li",[t._v("rpcbind就是RPC服务器")])]),t._v(" "),v("p",[t._v("https://www.jianshu.com/p/f85c4371a43d\n这篇文章的介绍还是不错的。")]),t._v(" "),v("h4",{attrs:{id:"结论："}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结论："}},[t._v("#")]),t._v(" 结论：")]),t._v(" "),v("p",[t._v("linux NFS 系统 等于 windows共享目录。 文件只有一份。意义不大")]),t._v(" "),v("h2",{attrs:{id:"_4-ceph安装困难吗？据说有很多坑"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-ceph安装困难吗？据说有很多坑"}},[t._v("#")]),t._v(" 4. Ceph安装困难吗？据说有很多坑")]),t._v(" "),v("h2",{attrs:{id:"_5-有人说raid比分布式存储更好的解决可用性。你认为呢？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-有人说raid比分布式存储更好的解决可用性。你认为呢？"}},[t._v("#")]),t._v(" 5. 有人说raid比分布式存储更好的解决可用性。你认为呢？")]),t._v(" "),v("p",[t._v("参考：https://zhuanlan.zhihu.com/p/108636766")]),t._v(" "),v("h4",{attrs:{id:"_5-1-raid-磁盘冗余阵列，有多种使用方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-raid-磁盘冗余阵列，有多种使用方式"}},[t._v("#")]),t._v(" 5.1 raid 磁盘冗余阵列，有多种使用方式")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("raid方式")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("优点")]),t._v(" "),v("th",[t._v("缺点")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Raid0 方式")]),t._v(" "),v("td",[t._v("一个文件拆分成多块，没别写入多个磁盘。")]),t._v(" "),v("td",[t._v("写的速度变快了")]),t._v(" "),v("td",[t._v("一个磁盘坏了，数据无法恢复")])]),t._v(" "),v("tr",[v("td",[t._v("Raid1 方式")]),t._v(" "),v("td",[t._v("一个文件，每个磁盘写入相同内容。")]),t._v(" "),v("td",[t._v("冗余备份，可用性强")]),t._v(" "),v("td",[t._v("速度慢了")])]),t._v(" "),v("tr",[v("td",[t._v("Raid10 方式")]),t._v(" "),v("td",[t._v("N块磁盘中一半磁盘与另一半备份。每半分中的磁盘都是Raid0高并发写入")]),t._v(" "),v("td",[t._v("读速和备份兼得")]),t._v(" "),v("td",[t._v("用来备份的磁盘太多，浪费")])]),t._v(" "),v("tr",[v("td",[t._v("Raid3 方式")]),t._v(" "),v("td",[t._v("N块磁盘一块当校验，其它当存储，哪块坏了都能从其它磁盘找回来")]),t._v(" "),v("td",[t._v("读速和备份兼得")]),t._v(" "),v("td",[t._v("校验盘坏了，就完了，没人用")])]),t._v(" "),v("tr",[v("td",[t._v("Raid5 方式")]),t._v(" "),v("td",[t._v("N块每块都是校验兼存储")]),t._v(" "),v("td",[t._v("每块负载一样")]),t._v(" "),v("td",[t._v("应用广泛")])]),t._v(" "),v("tr",[v("td",[t._v("Raid6 方式")]),t._v(" "),v("td",[t._v("N块每块都是校验兼存储，提高了算法")]),t._v(" "),v("td",[t._v("每块负载一样，允许两块同时坏")]),t._v(" "),v("td",[t._v("应用广泛，比Raid5好")])])])]),t._v(" "),v("h4",{attrs:{id:"_5-2-问题是：单机的磁盘阵列所在机器断电，断网线了呢？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-问题是：单机的磁盘阵列所在机器断电，断网线了呢？"}},[t._v("#")]),t._v(" 5.2 问题是：单机的磁盘阵列所在机器断电，断网线了呢？")]),t._v(" "),v("p",[t._v("→ 服务就不可用了。但是公司内部应该还好，一会就维修好了。大型商用仅仅磁盘阵列还不够。")]),t._v(" "),v("h4",{attrs:{id:"_5-3-分布式存储"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-分布式存储"}},[t._v("#")]),t._v(" 5.3 分布式存储")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("方式")]),t._v(" "),v("th",[t._v("优点")]),t._v(" "),v("th",[t._v("缺点")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("raid")]),t._v(" "),v("td",[t._v("* RAID卡比较便宜，成本低"),v("br"),v("br"),t._v("* 技术成熟，实施方便"),v("br"),v("br"),t._v("* 运维方便"),v("br"),v("br"),t._v("* 本地传输，速度快，不存在小文件的问题")]),t._v(" "),v("td",[t._v("* 扩展性差，RAID在系统看来，就是磁盘，并不是以接口提供，没法儿做很好的扩展，比如要坐文件杀毒功能，RAID几乎无法支持"),v("br"),v("br"),t._v(" * 扩容难，空间不够用了，必须停机扩容，而这对有7*24要求的单位，几乎是硬伤")])]),t._v(" "),v("tr",[v("td",[t._v("分布式存储")]),t._v(" "),v("td",[t._v("* 扩展方便，可以通过软件层，添加需要的功能"),v("br"),v("br"),t._v("* 容错性强，对于no-share架构的分布式系统，任何一个节点的crash都不会影响其它节点的工作"),v("br"),v("br"),t._v("* 扩展方便，对于大部分分布式系统，都可以在线扩容")]),t._v(" "),v("td",[t._v("* 速度比本地硬盘慢，特别是存储大量小文件的时候，速度巨慢"),v("br"),v("br"),t._v("* 实施麻烦，需要专业的计算机工程师协助部署")])])])]),t._v(" "),v("p",[v("img",{attrs:{src:"/docs/images/2020-07-08-12-26-37.png",alt:""}})]),t._v(" "),v("h4",{attrs:{id:"_5-4-最后扪心一问：公司内部需要高可用系统的话，用什么方案？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-最后扪心一问：公司内部需要高可用系统的话，用什么方案？"}},[t._v("#")]),t._v(" 5.4 最后扪心一问：公司内部需要高可用系统的话，用什么方案？")]),t._v(" "),v("h2",{attrs:{id:"_6-主流分布式系统的详细对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-主流分布式系统的详细对比"}},[t._v("#")]),t._v(" 6. 主流分布式系统的详细对比")]),t._v(" "),v("p",[t._v("https://mlog.club/article/22138\n这文章写的老好了。看它！\n介绍了ceph，GFS，Swift，HDFS，GFS")]),t._v(" "),v("h2",{attrs:{id:"_7-我要的是-高可用系统-而不仅仅是-存储高可用系统-！"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-我要的是-高可用系统-而不仅仅是-存储高可用系统-！"}},[t._v("#")]),t._v(" 7. 我要的是“高可用系统”而不仅仅是“存储高可用系统”！")]),t._v(" "),v("h3",{attrs:{id:"_7-1-问题来了，-高可用系统-和-存储高可用系统-什么区别？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-问题来了，-高可用系统-和-存储高可用系统-什么区别？"}},[t._v("#")]),t._v(" 7.1 问题来了，“高可用系统”和“存储高可用系统”什么区别？")]),t._v(" "),v("p",[t._v("→ 存储高可用就是不丢失.")]),t._v(" "),v("hr"),t._v(" "),v("h6",{attrs:{id:"q-mkdir-p-什么意思？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#q-mkdir-p-什么意思？"}},[t._v("#")]),t._v(" [Q] mkdir -p 什么意思？")]),t._v(" "),v("p",[t._v("→ 递归创建目录，即使上级目录不存在，会按目录层级自动创建目录")]),t._v(" "),v("h6",{attrs:{id:"【q】rpc协议，rpc程序？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#【q】rpc协议，rpc程序？"}},[t._v("#")]),t._v(" 【Q】RPC协议，RPC程序？")]),t._v(" "),v("p",[t._v("→ RPC远程过程调用（Remote Procedure Call).")]),t._v(" "),v("h6",{attrs:{id:"q-为什么我的nfs不能输入用户名密码-任何人都能mount-不太安全啊"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#q-为什么我的nfs不能输入用户名密码-任何人都能mount-不太安全啊"}},[t._v("#")]),t._v(" [Q] 为什么我的NFS不能输入用户名密码,任何人都能mount.不太安全啊.")]),t._v(" "),v("h6",{attrs:{id:"q-ssh-copy-id"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#q-ssh-copy-id"}},[t._v("#")]),t._v(" [Q] ssh-copy-id ?")]),t._v(" "),v("p",[t._v("→ ssh-copy-id命令可以把本地主机的公钥复制到远程主机的authorized_keys文件上")]),t._v(" "),v("h6",{attrs:{id:"q-所有机器之间免密登陆"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#q-所有机器之间免密登陆"}},[t._v("#")]),t._v(" [Q] 所有机器之间免密登陆")]),t._v(" "),v("p",[t._v("https://blog.csdn.net/snail_bing/article/details/81772982?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-6.compare&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-6.compare\n所有机器之间,ssh 免密登陆\n简单地说,每台机器都"),v("code",[t._v("ssh-keygen -t rsa")]),t._v(",每天机器都执行"),v("code",[t._v("ssh-copy-id 其它机器ip")]),t._v(" 就是把自己的公钥,拷贝到所有其它机器上.\n这样就能免密登陆了.")]),t._v(" "),v("p",[t._v("1000台机器还不得累死.")]),t._v(" "),v("h6",{attrs:{id:"q-客户端访问一台服务器免密登陆"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#q-客户端访问一台服务器免密登陆"}},[t._v("#")]),t._v(" [Q] 客户端访问一台服务器免密登陆")]),t._v(" "),v("p",[t._v("客户端:\nssh-keygen\nssh-copy-id -i ~/.ssh/id_rsa.pub root@服务器Ip\noK,可以免密登陆服务器了.")])])}),[],!1,null,null,null);_.default=r.exports}}]);