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


## 两篇文章：
ESXI上在扩容Centos7：https://www.itwordsweb.com/linux_doc/disk_ex.html

Esxi 虚拟机 Centos 磁盘空间扩展/扩容
首先查看当前磁盘状态

```shell
[root@dev-of-iotex-52 ~]# df -h
Filesystem               Size  Used Avail Use% Mounted on
/dev/mapper/centos-root   27G   27G   20K 100% /
devtmpfs                 3.9G     0  3.9G   0% /dev
tmpfs                    3.9G     0  3.9G   0% /dev/shm
tmpfs                    3.9G  417M  3.5G  11% /run
tmpfs                    3.9G     0  3.9G   0% /sys/fs/cgroup
/dev/sda1               1014M  321M  694M  32% /boot
tmpfs                    783M     0  783M   0% /run/user/0
overlay                   27G   27G   20K 100% /var/lib/docker/overlay2/3778278709a9450bd2a5d54e986b80df70d6adf070b1e4dc9b35ec619c60cb39/merged
shm                       64M     0   64M   0% /var/lib/docker/containers/90c688b28aa1c7fd65c01b5192fa2ff845966b6bed13b3701ba9790603de81fc/mounts/shm
```

确定原有磁盘格式是 lvm
![](/docs/images/2021-04-09-10-58-02.png)

到 esxi 管理页面修改磁盘大小

![](/docs/images/2021-04-09-10-58-10.png)
重启一下虚拟机
![](/docs/images/2021-04-09-10-58-17.png)


查看一下是否有把磁盘容量扩展上去
![](/docs/images/2021-04-09-10-58-24.png)

给新增加的磁盘做分区

```shell
[root@dev-of-iotex-52 ~]# fdisk /dev/sda
Welcome to fdisk (util-linux 2.23.2).
 
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.
 
Command (m for help): n
Partition type:
   p   primary (2 primary, 0 extended, 2 free)
   e   extended
Select (default p): p
Partition number (3,4, default 3): 
First sector (62914560-125829119, default 62914560): 
Using default value 62914560
Last sector, +sectors or +size{K,M,G} (62914560-125829119, default 125829119): 
Using default value 125829119
Partition 3 of type Linux and of size 30 GiB is set
 
Command (m for help): t
Partition number (1-3, default 3): 3
Hex code (type L to list all codes): 8e
Changed type of partition 'Linux' to 'Linux LVM'
 
Command (m for help): w
The partition table has been altered!
 
Calling ioctl() to re-read partition table.
 
WARNING: Re-reading the partition table failed with error 16: Device or resource busy.
The kernel still uses the old table. The new table will be used at
the next reboot or after you run partprobe(8) or kpartx(8)
Syncing disks.
```

查看分区情况
```shell
[root@dev-of-iotex-52 ~]# fdisk -l
 
Disk /dev/sda: 64.4 GB, 64424509440 bytes, 125829120 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk label type: dos
Disk identifier: 0x000b15b6
 
   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *        2048     2099199     1048576   83  Linux
/dev/sda2         2099200    62914559    30407680   8e  Linux LVM
/dev/sda3        62914560   125829119    31457280   8e  Linux LVM
 
Disk /dev/mapper/centos-root: 29.0 GB, 28982640640 bytes, 56606720 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
 
Disk /dev/mapper/centos-swap: 2147 MB, 2147483648 bytes, 4194304 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

刷新一下磁盘状况，新建逻辑卷 LV

```shell
[root@dev-of-iotex-52 ~]# partprobe
[root@dev-of-iotex-52 ~]# pvcreate /dev/sda3
  Physical volume "/dev/sda3" successfully created.
```


查看卷组 VG 状况并扩容
```shell
[root@dev-of-iotex-52 ~]# vgdisplay
  --- Volume group ---
  VG Name               centos
  System ID             
  Format                lvm2
  Metadata Areas        1
  Metadata Sequence No  3
  VG Access             read/write
  VG Status             resizable
  MAX LV                0
  Cur LV                2
  Open LV               2
  Max PV                0
  Cur PV                1
  Act PV                1
  VG Size               <29.00 GiB
  PE Size               4.00 MiB
  Total PE              7423
  Alloc PE / Size       7422 / 28.99 GiB
  Free  PE / Size       1 / 4.00 MiB
  VG UUID               oFvSXN-U517-Q8i5-KaxD-sWqO-CBuC-r7p0Kh
 
[root@dev-of-iotex-52 ~]# vgextend centos /dev/sda3
  Volume group "centos" successfully extended
```

查看物理卷 PV 和逻辑卷 LV 状况并扩容逻辑卷 LV
```shell
[root@dev-of-iotex-52 ~]# pvscan
  PV /dev/sda2   VG centos          lvm2 [<29.00 GiB / 4.00 MiB free]
  PV /dev/sda3   VG centos          lvm2 [<30.00 GiB / <30.00 GiB free]
  Total: 2 [58.99 GiB] / in use: 2 [58.99 GiB] / in no VG: 0 [0   ]
[root@dev-of-iotex-52 ~]# lvdisplay
  --- Logical volume ---
  LV Path                /dev/centos/swap
  LV Name                swap
  VG Name                centos
  LV UUID                5aS1q2-DCSS-8NQH-do6D-NTI6-3242-GT5nhF
  LV Write Access        read/write
  LV Creation host, time localhost, 2018-01-16 00:38:03 +0800
  LV Status              available
  # open                 2
  LV Size                2.00 GiB
  Current LE             512
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     8192
  Block device           253:1
 
  --- Logical volume ---
  LV Path                /dev/centos/root
  LV Name                root
  VG Name                centos
  LV UUID                U3KYq5-Bd5I-iFDv-63dd-qUpJ-gN5Z-zbu1XH
  LV Write Access        read/write
  LV Creation host, time localhost, 2018-01-16 00:38:03 +0800
  LV Status              available
  # open                 1
  LV Size                26.99 GiB
  Current LE             6910
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     8192
  Block device           253:0
 
[root@dev-of-iotex-52 ~]# lvextend  /dev/centos/root  /dev/sda3
  Size of logical volume centos/root changed from 26.99 GiB (6910 extents) to <56.99 GiB (14589 extents).
  Logical volume centos/root successfully resized.
```

同步文件系统并查看扩容状况
```shell
[root@dev-of-iotex-52 ~]# xfs_growfs /dev/centos/root
meta-data=/dev/mapper/centos-root isize=512    agcount=4, agsize=1768960 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=0 spinodes=0
data     =                       bsize=4096   blocks=7075840, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0 ftype=1
log      =internal               bsize=4096   blocks=3455, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
data blocks changed from 7075840 to 14939136
[root@dev-of-iotex-52 ~]# df -h
Filesystem               Size  Used Avail Use% Mounted on
/dev/mapper/centos-root   57G   27G   30G  48% /
devtmpfs                 3.9G     0  3.9G   0% /dev
tmpfs                    3.9G     0  3.9G   0% /dev/shm
tmpfs                    3.9G  9.0M  3.9G   1% /run
tmpfs                    3.9G     0  3.9G   0% /sys/fs/cgroup
/dev/sda1               1014M  321M  694M  32% /boot
tmpfs                    783M     0  783M   0% /run/user/0
```

## 把/centos/home下的空间分配给/centos/root 

centos7 home 磁盘空间转移至root下
1.查看CentOS的系统版本（系统版本必须为7版本）
![](/docs/images/2021-04-09-10-54-56.png)

2.查看分区

df -h (centos-home和centos-root每人的名字可能不一样) 
![](/docs/images/2021-04-09-10-55-10.png)

3.备份home分区文件

 tar cvf /tmp/home.tar /home
 ![](/docs/images/2021-04-09-10-55-20.png)

4.卸载/home，如果无法卸载，先终止使用/home文件系统的进程

umount /home （卸载）
![](/docs/images/2021-04-09-10-55-33.png)

卸载时，发现/home在使用中，所以先终止。

fuser -km /home/（终止）
![](/docs/images/2021-04-09-10-55-43.png)

再次卸载，没有报错，表示成功
![](/docs/images/2021-04-09-10-55-51.png)

 5.删除/home所在的lv

lvremove /dev/mapper/centos-home
![](/docs/images/2021-04-09-10-55-59.png)

6.扩展/root所在的lv

lvextend -L +100G /dev/mapper/centos-root
![](/docs/images/2021-04-09-10-56-10.png)

 7.扩展/root文件系统

xfs_growfs /dev/mapper/centos-root

![](/docs/images/2021-04-09-10-56-18.png)

8.重新创建home lv （创建时计算好剩余的磁盘容量，建议比剩余小1G左右）

lvcreate -L 41G -n /dev/mapper/centos-home 
![](/docs/images/2021-04-09-10-56-27.png)

  9.创建文件系统

mkfs.xfs /dev/mapper/centos-home
![](/docs/images/2021-04-09-10-56-35.png)

 10.挂载home

mount /dev/mapper/centos-home
![](/docs/images/2021-04-09-10-56-45.png)


  11.home文件恢复

tar xvf /tmp/home.tar -C /home/
![](/docs/images/2021-04-09-10-56-55.png)

  12.再次使用df -h查看系统磁盘大小

  ![](/docs/images/2021-04-09-10-57-06.png)




