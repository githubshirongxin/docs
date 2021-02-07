---
layout: post
title: Eclipse新建springboot项目application.properties中文乱码问题的解决
---

# Eclipse新建SpringBoot项目，application.properties配置中文乱码


# 场景

![](images/%E4%B9%B1%E7%A0%81%E4%B8%AD%E6%96%87.jpg)![](https://img-blog.csdnimg.cn/2019030723265755.jpg)

# 解决

windows--preference-contnet Type--Java Properties File

将其编码格式修改为UTF-8,点击update,

同理将Spring Properties File也修改为UTF-8

修改前：

![](https://img-blog.csdnimg.cn/2019030723270160.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0JBREFPX0xJVU1BTkdfUUlaSEk=,size_16,color_FFFFFF,t_70)

 

修改后：

![](images/%E4%BF%AE%E6%94%B9%E5%90%8Esoring.jpg)![](https://img-blog.csdnimg.cn/2019030723270873.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0JBREFPX0xJVU1BTkdfUUlaSEk=,size_16,color_FFFFFF,t_70)

点击update--Apply and Close

![](images/%E4%BF%AE%E6%94%B9%E5%90%8E%E5%90%96%E5%90%96.jpg)![](https://img-blog.csdnimg.cn/20190307232711920.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0JBREFPX0xJVU1BTkdfUUlaSEk=,size_16,color_FFFFFF,t_70)


## 如果已经建好了的项目，想修改。
右键application.properties 修改编码为utf-8