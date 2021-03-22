---
layout: post
title: MYSQL的ibtmp1文件太大怎么处理
---



## ibtmp1太大，导致空间100%
![](/docs/images/2021-03-22-17-58-06.png)
![](/docs/images/2021-03-22-17-57-37.png)

## 解决：
[首页](https://www.chinaz.com) > [问答](https://www.chinaz.com/ask/) > [关键词](//www.chinaz.com/tags/) > [mysql最新资讯](//www.chinaz.com/tags/mysql.shtml) > 正文

# MYSQL的ibtmp1文件太大怎么处理

2020-07-14 14:46 · 稿源：数据库干货铺

<!-- _cz_{"place":"new_article_meta_right","id": "setMetaMedia"} -->

<!-- _cz_{"place":"new_article_pcontent_top","id": "setPtopMedia"} -->

![互联网，大数据](https://upload.chinaz.com/picmap/202006151540006659_8.jpg "互联网，大数据 (图片来源图虫：已授站长之家使用)")

**1.  啥情况呀**

测试环境机器磁盘空间不足的告警打破了下午的沉寂，一群人开始忙活着删数据。但是，不久前刚清理了一波数据，测试环境在没做压测的情况下不至于短短一个月不到就涨了200G数据，于是，我悄悄的进入数据目录下，发现一个不寻常的点，[ibtmp1](//www.chinaz.com/tags/ibtmp1.shtml) 文件有192G

1.   ll \-hibtmp1 
2.  \-rw\-r\-----1[mysql](//www.chinaz.com/tags/mysql.shtml) mysql 192GAug1216：20 ibtmp1

**2.   怎么处理**

**2.1  简单说明**

ibtmp1 是非压缩的innodb临时表的独立表空间，通过innodb\_temp\_data\_file\_path参数指定文件的路径，文件名和大小，默认配置为ibtmp1：12M：autoextend，也就是说在支持大文件的系统这个文件大小是可以无限增长的。

**2.2  解决办法**
生产环境linux suse11.4, 根目录/ 下大小：50G, ibtmp1大小：31G, 磁盘空间爆满100%告警。

ibtmp1文件说明

ibtmp1是非压缩的innodb临时表的独立表空间,通过innodb_temp_data_file_path参数指定文件的路径，文件名和大小，默认配置为ibtmp1:12M:autoextend，也就是说在支持大文件的系统这个文件大小是可以无限增长的。

解决办法

1、修改my.cnf配置文件：

innodb_temp_data_file_path = ibtmp1:12M:autoextend:max:5G

2、设置innodb_fast_shutdown参数

SET GLOBAL innodb_fast_shutdown = 0;  #InnoDB does a slow shutdown, a full purge and a change buffer merge before shutting down

3、关闭mysql服务

4、删除ibtmp1文件(重启自动删除)

5、启动mysql服务

注意：为了避免以后再出现类似的情况，一定要在限制临时表空间的最大值，如innodb_temp_data_file_path = ibtmp1:12M:autoextend:max:5G
————————————————
版权声明：本文为CSDN博主「weixin_39851974」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_39851974/article/details/113429098

