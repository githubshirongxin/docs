---
layout: post
title: profile里PATH被修改lsvi等命令无法使用
---

在CentOS7中执行了

`PATH=/opt/:$PATH`

然后执行ls时，出现
```
ls
-bash: ls: 没有那个文件或目录
```


试了试其他命令也一样无法使用

后来执行 ：  

`export PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin`

成功！命令可以正常使用