---
layout: post
title: 【Win10做samba共享服务】win、linux挂载
---

## 背景
公司本地有教学视频。
本来想放到服务器的raid5上，后来发现不合适，浪费。
视频备份出一份就可以，弄两个单独的大硬盘手工备份一下，然后把其中一个放到一台机器上共享（选了win10因为usb插移动硬盘4
T方便），linux视频播放应用读取、两个视频编辑人员使用win10挂载之后写入。

## 结构

win10：192.168.3.103做samba服务，文件夹共享
linux：192.168.3.138做视频服务器，挂载3.103的目录
win10：做内容录入，股灾3.103的目录

## 1.samba服务

win10做samba服务就是文件夹共享
::: warning 注意：
共享文件夹不能分配给无密码用户，
必须有密码
:::

新建一个用户user_RW，设置密码，设置不用初次登陆修改密码，密码永久有效。已经有这种临时用户的可以直接用，但是必须有密码。
右键文件夹，共享，选择新建用户“user_RW”，设定权限为“读、写”，确定。

::: tip 改善空间
也可以再新建一个用户user_R,给linux视频服务器挂载用。
内部视频网站也是自己维护，所以一个用户就算了。
:::

## 2. windows挂载3.103
我的电脑→现在地址栏上访问“\\192.168.3.103\\共享目录名”
输入用户名user_RW，密码
然后再我的电脑→计算机→映射网络驱动器→输入“\\192.168.3.103\\共享目录名”→确定。

## 3. linux（centos7）挂载
```bash
$ yum install -y samba-client

$ smbclient -L samba服务器IP -U user_RW
Enter SAMBA\shirx's password:

$ mkdir -p /data_videos

$ mount -t cifs -o username=user,password=passwd //sambaServerIP/shareFolder /data_videos
```

重新启动后自动挂载目录
然后在/etc/fstab中添加下面这行 在/etc/fstab中添加下面这行 //192.168.3.103/共享目录 /data_videos cifs defaults,username=user_RW,password=密码

这样重新启动后，mount又自动挂载了。



