---
layout: post
title: mvn package,mvn install ,mvn deploy的区别
---
# 理解maven命令package、install、deploy的联系与区别


我们在用maven构建java项目时，最常用的打包命令有mvn package、mvn install、deploy，这三个命令都可完成打jar包或war（当然也可以是其它形式的包）的功能，但这三个命令还是有区别的。下面通过分别执行这三个命令的输出结果，来分析各自所执行的maven的生命周期。

## mvn clean package

![这里写图片描述](https://img-blog.csdn.net/20180515155839690?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW9qaWFudGluZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)![这里写图片描述](https://img-blog.csdn.net/20180515155852762?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW9qaWFudGluZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

## mvn clean install

![这里写图片描述](https://img-blog.csdn.net/20180515155917549?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW9qaWFudGluZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)![这里写图片描述](https://img-blog.csdn.net/20180515155928251?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW9qaWFudGluZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

## mvn clean deploy（忽略最后的BUILD FAILURE）

![这里写图片描述](https://img-blog.csdn.net/20180515160000710?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW9qaWFudGluZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)![这里写图片描述](https://img-blog.csdn.net/20180515160009425?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW9qaWFudGluZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

通过三个命令的输出我们可以看出三者的区别在于包函的maven生命的阶段和执行目标\(goal\)不同。在我的上一篇文章https://blog.csdn.net/zhaojianting/article/details/80321488　中介绍了maven的生命周期和各种插件，不明白的请参考此博文。maven生命周期（lifecycle）由各个阶段组成，每个阶段由maven的插件plugin来执行完成。生命周期（lifecycle）主要包括clean、resources、complie、install、pacakge、testResources、testCompile、deploy等，其中带test开头的都是用业编译测试代码或运行单元测试用例的。

仔细查看上面的输出结果截图，可以发现，

* **mvn clean package依次执行了clean、resources、compile、testResources、testCompile、test、jar\(打包\)等７个阶段。**
* **mvn clean install依次执行了clean、resources、compile、testResources、testCompile、test、jar\(打包\)、install等8个阶段。**
* **mvn clean deploy依次执行了clean、resources、compile、testResources、testCompile、test、jar\(打包\)、install、deploy等９个阶段。**

由上面的分析可知主要区别如下，

* **package命令完成了项目编译、单元测试、打包功能，但没有把打好的可执行jar包（war包或其它形式的包）布署到本地maven仓库和远程maven私服仓库**
* **install命令完成了项目编译、单元测试、打包功能，同时把打好的可执行jar包（war包或其它形式的包）布署到本地maven仓库，但没有布署到远程maven私服仓库**
* **deploy命令完成了项目编译、单元测试、打包功能，同时把打好的可执行jar包（war包或其它形式的包）布署到本地maven仓库和远程maven私服仓库**