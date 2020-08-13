---
layout: post
title: 【hyperV-centos扩容】
---

## Step1. hyperV上扩容

1. 虚拟机关机。右键删除所有检查点（不会丢失数据放心），等待合并100%。
2. 右键设置→硬盘驱动器→编译→扩展→输入扩展后的容量→确定。
3. 虚拟机开机。

## Step2. 进入虚拟机命令行

1. 首先虚拟机设置中扩展磁盘容量，需要删除检查点才能修改，然后启动后  fdisk -l 能看到总磁盘容量已经变大，只是没有分区和挂载；

2. 查看自己磁盘的编号，可以用 lsblk  我的是 sda，然后：

![](https://img-blog.csdnimg.cn/20200617185344188.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L25pbmc1MjE1MTM=,size_16,color_FFFFFF,t_70)

3. 重启万后执行 ：
```bash
pvcreate /dev/sda3 

vgextend centos /dev/sda3

#这里的大小一定小于等于你扩展的大小，我这里扩展15G,写了14.99
lvresize -L +14.99G /dev/mapper/centos-root    

xfs_growfs /dev/mapper/centos-root
```

完成

每一步都是什么意思，我也不太能解释清，搜了大半天，只做记录。