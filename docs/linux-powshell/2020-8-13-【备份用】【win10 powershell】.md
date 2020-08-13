---
layout: post
title: 【win10 powershell】【linux定期执行】
---

写powershell，定期执行。放到3.102win10上。

### 准备
##### linux服务器
mount -t cifs -o username=用户,password=密码 //192.168.100.11/shi/restore /data_cjb

##### 3.102
下载SSH-Sessions放到C:\Program Files\WindowsPowerShell\Modules
![](/docs/images/2020-08-13-18-22-37.png)

### 电脑右键管理→新建基本任务→选择bat文件
执行时间可以随时修改。

![](/docs/images/2020-08-13-15-57-26.png)

启动程序：
![](/docs/images/2020-08-13-15-58-52.png)

### 这个bat调用powershell
```powershell
powershell.exe -ExecutionPolicy RemoteSigned   -file "C:\Users\Administrator\daily_chk.ps1"
```

### daily_chk.ps1 （未完待续。。。）
```powershell
    ################################################################机能概要： 自动备份检查Harbor_ha，gitlab服务器的文件，并删除3天前的邮件   
    #  初期设定
    $today=Get-Date
    $pathDate=$($today.AddDays(-1)).ToString('yyyyMMdd')
    $befor3days=$($today.AddDays(-3)).ToString('yyyyMMdd')
    $nasPath="\\Nas服务器ip\shi\restore"
    $profilePath="\\Nas服务器ip\shi\"
    $nodeList=New-Object -TypeName System.Collections.ArrayList
    
    import-module SSH-sessions

    #  Nas服务器备份路径准备
    Function NasPathClear(){
       # 连接Nas服务器
       net use \\Nas服务器ip\shi "密码" /user:"用户"
       # 取得备份文件夹一览
       $filePath = Get-ChildItem -name $nasPath
       # 创建备份文件夹
       $backPath = $nasPath + "\" + $pathDate
       if (Test-Path $backPath){
       }else{
            cd $nasPath
            mkdir $pathDate
       }
       # 删除3天前备份的文件
        foreach ( $delPath in $filePath){
            if ( $delPath -ge $befor3days){
            }else{
                echo "删除备份的文件夹：Remove-Item -path $nasPath\$delPath"
                Remove-Item -path $nasPath\$delPath -force -recurse 
            }
       }
       echo "NAS服务器操作完毕，备份文件夹准备OK！"
    }

    # 从Param文件中读取连接备份用的相关信息
    Function GetItem(){
    # ParamFile取得
    $content = Get-content -Path "$profilePath\data1.csv"

    $tarPath=""
    $space=" "
    $arr1 = $content[1].split(",")
    $oldNodeName = $arr1[0]
    $srcPath = $arr1[5]
    $tarPath=$srcPath + $space

        for($i=2;$i -le $content.length;$i++){
            if ([String]::IsNullOrEmpty($content[$i])){
                MakeTarFile $oldArr[1] $oldArr[0] $oldArr[2] $oldArr[3] $oldArr[4] $tarPath
                $tarPath = $srcPath + $space
                continue
            }
            $arr = $content[$i].split(",")
            $newNodeName = $arr[0]
            $srcPath = $arr[5]
            if ($newNodeName -ne $oldNodeName){
                MakeTarFile $oldArr[1] $oldArr[0] $oldArr[2] $oldArr[3] $oldArr[4] $tarPath
                $tarPath = $srcPath + $space
            }
            Else{
                $tarPath = $tarPath + $srcPath + $space
            }
            $oldNodeName = $newNodeName
            $oldArr = $content[$i].split(",")
        }
    }

        # 连接Linux服务器，备份文件
    Function MakeTarFile($nodeIp,$nodeName,$user,$password,$port,$srcPath){

    #连接Linux
    echo "连接服务器命令：New-SshSession -ComputerName $nodeIp -Username $user -Password $password -Port $port"
    echo "连接服务器名称：$nodeName"
    $nodeList.Add($nodeName)
    # tar文件名
    $tarName = $nodeName + "_" + $pathDate + ".tar.gz"
    New-SshSession -ComputerName $nodeIp -Username $user -Password $password -Port $port

    Invoke-SSHCommand -InvokeOnAll  -Command "cd /root"
    Invoke-SSHCommand -InvokeOnAll  -Command "tar -zcf $tarName $srcPath"
    Invoke-SSHCommand -InvokeOnAll  -Command "cp $tarName /data_cjb/$pathDate"
    Invoke-SSHCommand -InvokeOnAll  -Command "rm -f  $tarName"
    Remove-SshSession $nodeIp
    }

    NasPathClear
    GetItem
```

### /Nas服务器/共享目录/data1.csv
存放要备份的内容。
可以随时修改。
![](/docs/images/2020-08-13-16-04-17.png)


### 测试
运行bat即可

---

## linux简易定期本机备份（还不成熟，仅供参考。）

只备份固定目录，而且是本机

```bash
[root@centos122 /]# cat srv_daily_tar.sh
#在/etc/crontab文件最后添加定时任务
#[0 18 * * * root /srv_daily_tar.sh]设定

day=`date +%Y%m%d`

tar -cvf /gitlab_bak/srv_$day.tar srv/ >/dev/null

del_day=`date -d '6 day ago' +%Y%m%d`

rm -rf /gitlab_bak/srv_$del_day.tar



[root@centos122 /]# cat /etc/crontab
SHELL=/bin/bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin
MAILTO=root

# For details see man 4 crontabs

# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name  command to be executed
0 18 * * * root /srv_daily_tar.sh
[root@centos122 /]#
[root@centos122 gitlab_bak]# ll
总用量 84
-rw-r--r--. 1 root root 10240 7月  18 18:00 srv_20200718.tar
-rw-r--r--. 1 root root 10240 7月  19 18:00 srv_20200719.tar
-rw-r--r--. 1 root root 10240 7月  20 18:00 srv_20200720.tar
-rw-r--r--  1 root root 10240 7月  27 18:00 srv_20200727.tar
-rw-r--r--  1 root root 10240 7月  28 18:00 srv_20200728.tar
-rw-r--r--  1 root root 10240 7月  29 18:00 srv_20200729.tar
-rw-r--r--  1 root root 10240 7月  30 18:00 srv_20200730.tar
[root@centos122 gitlab_bak]#
```