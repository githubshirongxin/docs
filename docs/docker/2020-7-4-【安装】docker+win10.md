---
layout: post
title: 【安装】docker+win10
---

安装一路next

配置。
参考：https://blog.csdn.net/u013948858/article/details/80811986?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param


1.docker info看一下当前的
![](https://img-blog.csdn.net/201806261101125?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTM5NDg4NTg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

2.通过win10任务栏的docker gui界面来操作修改

![](https://img-blog.csdn.net/20180626105630486?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTM5NDg4NTg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

选择settings进入操作界面，先勾选“advanced”，然后添加红框标注的一行（注意：路径是你想改变的路径）
![](https://img-blog.csdn.net/2018062610590236?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTM5NDg4NTg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

填写完了，直接点击“apply”按钮，docker service会自动restarting。然后在看一下docker info

![](https://img-blog.csdn.net/20180626110300444?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTM5NDg4NTg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

不管是通过gui还是命令行，都是通过修改daemon.json来修改对应的参数配置：

1.Linux上配置文件的默认位置是 /etc/docker/daemon.json

2.Windows上配置文件的默认位置是 %programdata%\docker\config\daemon.json

win10上你想看到这个programdata目录需要勾选显示隐藏文件，就在C盘下，具体的参数及注意的参数细节可根据需求看一下官网文档【https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file】
