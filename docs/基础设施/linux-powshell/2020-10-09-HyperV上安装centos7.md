---
layout: post
title: HyperV上安装Centos7
---
# hyperv上centos7安装，与宿主机互联，外网连通，与宿主机共享目录

[![](https://upload.jianshu.io/users/upload_avatars/18287449/cbf0dc9a-3085-4a19-8f67-7f52558c252c?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp)](/u/2658ac80d1c1)

[史荣新](/u/2658ac80d1c1)关注

2020.06.02 16:03:20字数 837阅读 7

**hyperv上安装centos7**

步骤要点：  
1，首先新建一个虚拟交换机bridge。交换机选择外部网络。我只有一块网卡，下拉列表里就会弹出来这块。

![](//upload-images.jianshu.io/upload_images/18287449-83cb254ecda86f50.png?imageMogr2/auto-orient/strip|imageView2/2/w/725/format/webp)

新的虚拟交换机建立之后，下图的原来的连接“以太网”就失效了。新的状态是：宿主机和虚拟机都通过“vEthernet（bridge）”连接互联网和（宿主机与虚拟机）互联。所以，**宿主机的IP要在“vEthernet（bridge）”里面重新设置好**（跟原”以太网“的设置一样就行）！！！

![](//upload-images.jianshu.io/upload_images/18287449-38c49b2597641937.png?imageMogr2/auto-orient/strip|imageView2/2/w/515/format/webp)

2，安装centos，点右侧导航栏-》新建-》虚拟机-》名称无所谓，位置无所谓，代数（选一代，因为cent7就不支持二代），内存无所谓。网络先不用选。（装完centos之后在第6步，外面设置成bridge）。  
3，安装的过程中，弹出GUI界面，可以设置IP地址。注意点有那么几个，  
**3.1 注意点：给虚拟机分配一个实际的IP，和宿主机一个网段！！  
3.2 注意点：一定先配置完IP，然后再启动以太网。这块错了就死活连不了外网也连不了宿主机。**  
别的无所谓。安装完毕后，宿主机和虚拟机就能互相ping通，宿主机和虚拟机都能访问外网。

可见还没有安装完centos7，从宿主机上就已经可以ping通虚拟机了。

* * *

【设置宿主机和虚拟机文件夹共享】

主要思路是，在window上设置共享目录。然后在linux上mount上这个共享目录。linux上mount之前先下载一个软件smbclient（注意只需要下载这个客户端即可不用下载服务端），window上不用下载（本身就带）。  
参考：https://www.cnblogs.com/atuotuo/p/7251540.html

关键点：win10现在已经自动更新的SMB2.0，而centos7里默认就支持SMB1.0.所以在centos上执行mount命令会失败。解决办法：把windows的SMB改回1.0，这样centos7上执行mount就会成功。

步骤如下：

1，win10宿主机上，控制面板-》程序-》穷或关闭Windows功能-》SMB1.0/CIFS文件共享支持

2，在window上创建一个共享目录：D盘C盘都行，sharewithvm目录。

3，centos新建一个目录，作为挂载点 mkdir /sharewithvm

4，然后在centos上执行mount命令：  
**  
##这步千万别出错，出错了，下面mount命令会出13错误（提示没有权限，实际上是这个没安装好）**  
#yum \-y install samba samba-client

\## 挂在共享目录

#mount \-t cifs \-o username=用户名,password=密码 //192.168.3.102/sharewithvm /sharewithvm

这样宿主机D：/sharewithvm与虚拟机/sharewithvm就挂载上了。  
  
_**另外还有几个命令了解一下就行，不用执行**_。  
想删除挂就执行下面的命令  
#umount /mnt/MyShare

\## 列出所有的共享目录（仅仅用于查看有多少共享目录可用）  
#smbclient \-L 10.203.105.145 \-U administrator\%xxx

\## 访问共享目录 （一般不这么用，直接在windows上操作岂不更方便）  
#smbclient //10.203.105.145/ReleasePackage \-U administrator\%xxx
