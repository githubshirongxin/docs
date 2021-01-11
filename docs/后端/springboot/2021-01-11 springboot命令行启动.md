---
layout: post
title: springboot的命令行启动
---

## 方法1:直接启动springboot项目
```
mvn compile  # 编译源码
mvn spring-boot:run # 启动项目
```
若是没有加环境变量就要是  
```
E:\software\apache-maven-3.3.9\bin\mvn spring-boot:run
```
## 方法2:将项目打包为jar,再启动
```
mvn package # 将项目打包(会自动编译的),也可以使用mvn install 这个命令的打包同时会打包到我们的maven仓库中
cd target # 进入打包后的jar包的目录
java -jar xxx.jar # 启动jar包
```