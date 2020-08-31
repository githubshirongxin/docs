---
layout: post
title: 【git clone 慢】的解决
---

在网站 https://www.ipaddress.com/ 分别搜索：
github.global.ssl.fastly.net
github.com
![](/docs/images/2020-08-14-20-10-09.png)

140.82.113.4

修改hosts文件
140.82.113.4 github.com

![](/docs/images/2020-08-14-20-10-34.png)

ipconfig /flushdns

Winodws系统的做法：打开CMD，输入ipconfig /flushdns
Linux的做法：在终端输入sudo /etc/init.d/networking restart

然后试试

![](/docs/images/2020-08-14-20-12-08.png)
之前50k/s ,现在好点了。