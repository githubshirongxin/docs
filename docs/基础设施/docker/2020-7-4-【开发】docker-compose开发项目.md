---
layout: post
title: 【docker-compose开发】docker-compose 打包部署各种语言开发环境（持续更新中）
---

运维组用docker-compose为开源应用提供部署的脚本。
开发组可以一毽部署开发调试环境或测试环境。
这对开发组是不是很大的贡献呢。

# 首先docker-compose部署vue前端应用

先介绍介绍vue开发吧。

## Vscode开发vue 
这个blog文章很好，我实际操作一下
https://juejin.im/post/5e9c38856fb9a03c917fe509


我的该笔记的工作目录。surface：C:\work\prj\vue\firstVue

1. nodejs安装：`Download the Windows Installer directly from the nodejs.org web site.`
2. 安装cnpm: `npm install -g cnpm --registry=http://registry.npm.taobao.org`
3. 安装vue-cil：`npm install -g vue-cli` 
4. 创建一个空项目：`vue init webpack firstVue` 
5. 要安装依赖包，
   +  `首先cd到项目文件夹（firstVue文件夹）`
   + 然后运行命令 `cnpm install` ，等待安装。
   + 会在我们的项目目录firstVue文件夹中多出一个node_modules文件夹，这里边就是我们项目需要的依赖包资源
6. 运行项目 `npm run dev` ,运行的就是package.json中scrips:{"dev":"node build/dev-server.js"}的简写
7. localhost:8080
8. vscode 安装
9. 增加element UI
    +  `首先cd到项目文件夹（firstVue文件夹）`
    +  `cnpm i element-ui -S`
10. 开发main.js
11. cnpm install
12. npm run dev
13. 修改 App.vue
 ```
     <router-view>的下一行追加
     <el-button type="primary">主要按钮</el-button>
     <script> export default {
       name:'app',
       data() {
          reurn {
            num1:1
          };
       },
       methods: {
         handleChange(value) {
            console.log(value);
         }
       }
     }
   ```
14. 访问 http://localhost:8080不用刷新能看到效果。
15. 用Dockerfile打包镜像

C:\work\prj\vue\firstVue


## Docker 发布vue应用

[Docker部署Vue.js应用](https://blog.csdn.net/tornyLin/article/details/81479511?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase)

思路：nginx 发布vue  .https://github.com/rzhaolin/Docker-Vuejs
1. 工程根目录下，先`node build/build.js` 生成 `/dist`
2. 工程根目录下，创建Dockefile，创建nginx.conf
      ![](/docs/images/2020-07-07-11-31-09.png)
3. 工程根目录下，Dockefile 仅仅拷贝了nginx.conf和/dist到镜像里
4. 工程根目录下，`docker build .` 生成镜像 
5. 方便管理，给镜像打tag，`docker tag ffdf55e238d4 vuejs-demo:v1.0.0`
6. 生成容器：`docker run --name=helloword -p 8080:1233 -d vuejs-demo:1.0.0`
7. 发布完成，访问 http://localhost:8080


在上面研究的过程中，有一些不理解的地方，都做了记录。
以后查询起来方便些。


### FQA
+ 【Q1】【DOckerfile系列】Dockerfile多From 指令存在的意义
+ 【A】
  1. https://blog.csdn.net/Michaelwubo/article/details/91872076
  2. 共享层，节约空间，以最后的FROM为准，前面的FROM会被抛弃。
  3. 多阶构建（多FROM）的意义，就是最后一个FROM能从前面的FROM拷贝来中间结果直接用。
  4. 使用场景：编译环境和运行环境分离。因为带有编译的环境非常大，镜像就很大。
      而运行不需要这么大的基础镜像。只需要有个运行时环境就行。（Go运行时都不需要运行时）

---
+ 【Q2】【DOckerfile系列】Dockerfile中 COPY --from的含义，与ADD的不同
+ 【A】
https://www.cnblogs.com/sparkdev/p/9573248.html
  1. 用于多阶构建时，从前面拷贝 --from=0 ，或者 --from=前面镜像的命名abc（前面： FROM XXX as abc）
  2. 还可以直接从已经存在的镜像中直接拷贝！（不用非得前置阶段中拷贝）
   `COPY --from=quay.io/coreos/etcd:v3.3.9 /usr/local/bin/etcd /usr/local/bin/`


---
+ 【Q3】【Dockefile发布】发布vue应用，使用什么镜像当作基础镜像？
+ 【A】
  1. https://juejin.im/post/5ddcfae85188256eac43e707
  2. 多阶发布，编译和运行分离。既然是发布，那么编译就是中间产物。
  3. 一个Dockerfile，先FROM node:latest 编译好，再FROM nginx 把前置阶段的中间产物拷贝进来（COPY --from=build /app/dist /app）
  4.  ![](/docs/images/2020-07-07-13-39-18.png)
  
---
+ 【Q4】【Dockefile发布】如何发布springboot的应用呢？
+ 【A】
  1. 编译在本地Docker外，编译出.jar文件
  2. Dockerfile 镜像 FROM java:8 
      2.1 /tmp(springboot默认是内嵌tomcat的工作目录，里面有jar)将jar拷贝到镜像
      2.2 指定入口，运行java `ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]`
  3. docker build -t  .
  4. docker run -d -p 80:80 hellworld
  Dockerfile: 
     ```
     # 基础镜像使用java ,也可以使用openjdk:8
     FROM java:8
     # 作者
     MAINTAINER eangulee <eangulee@gmail.com>
     # VOLUME 指定了临时文件目录为/tmp。
     # 其效果是在主机 /var/lib/docker 目录下创建了一个临时文件，并链接到容器的/tmp
     VOLUME /tmp 
     # 将jar包添加到容器中并更名为app.jar
     ADD demo-0.0.1-SNAPSHOT.jar app.jar 
     # 运行jar包,touch 就是为了更新app.jar的时间戳，有时静态文本需要更新时间才显示
     RUN bash -c 'touch /app.jar'
     ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
     ```
  > [残课题]：数据库和redis怎么办？

---
+ 【Q5】 【Dockefile发布】springboot+mysql用docker部署  
+ 【A】
+  **方案1：两个独立的容器（个人认为不好）**
     1. springboot程序里配置文件写url:jdbc:mysql://localhost:3306?eriz?useUnicode
     2. mysql作为一个容器启动
          ```
          docker volume create mysql_data 创建数据挂载点
          docker run --name mysql -p 3306:3306 -v mysql_data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7
          docker exec -it mysql bash  进入容器 /bin/bash
          mysql -uroot -p123456
          mysql授权：GRANT ALL PRIVILEGES ON *.* TO 'root'@'%'WITH GRANT OPTION;
          刷新：FLUSH PRIVILEGES;
          接下来使用navicat连接docker容器中的mysql,导入项目数据
          ```
       3. springboot本地编译出jar，然后用java:8启动容器
       4. `docker run -it --net=host --name erizboot -p 8181:8181 erizboot`

---
+ **方案2**：（**--link，将两个容器相连**）（个人人比较好） 
   https://zhuanlan.zhihu.com/p/102802904
       1. spring 项目yml文件：
         ```
         server:
           port: 8080
         spring:
           datasource:
             # MySQL 配置
             driver-class-name: com.mysql.cj.jdbc.Driver
             url: jdbc:mysql://127.0.0.1:3306/db?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai
             username: root
             password: 11111
         ```
         注意：mysql的ip是127.0.0.1. 一会得该成mysql容器名。
      1. 运行mysql容器。略。同方案1
      2. 运行springboot ，`docker run -d --name yourproject --link mysql:mysql -p 8080:8080 yourproject`
      3. 修改springboot的，配置文件`url: jdbc:mysql://mysql:3306/db?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai`
      4. 打包镜像springboot，运行springboot镜像。**打包方式参考Q4**
   
---
+ 【Q6】 【shell系列】`sh -c "touch /app.jar"` 这是什么意思？
+ 【A】
  1. 就是执行引号里的字符串当作sh命令来执行


---
+ 【Q7】【docker-compose系列】 **docker-compose** 部署vue+springboot+mysql
+ 【A】
   **blog**：https://www.cnblogs.com/zhengqing/p/11865364.html
   **源代码**：https://github.com/zhengqingya/xiao-xiao-su
   用docker-compose至少更专业，更方便些。
   很多技巧和使用Dockerfile是一样的。
   思路：
   1. springboot和web分别有各自的Dockefile，可以不叫Dockerfile，在docker-compose.yml中指定该文件即可。
   2. 前端一个目录。后端一个目录。docker配置文件一个目录。
   3. 前端Dockerfile，多阶构建 node + nginx
   4. 后端springboot, 单阶构建 java:8
   5. docker-compose中前后端为两个service，前端依赖于后端
   6. 后端映射volume，以便查看后端日志。
   7. 后端运行启动spring `mvn clean spring-boot:run -Dspring-boot.run.profiles=dev '-Dmaven.test.skip=true' `
   8. 通过docker-compose分别启动了前端和后端容器之后呢？
   【残留课题】：mysql没有说明如何启动！半拉柯基！！！！！！


---
+ 【Q8】 springboot项目启动后为什么是后端接口：http://www.zhengqing520.com:9101/swagger-ui.html#？
+ 【A】
  
---
+ 【Q9】 【docker-compose系列】docker-compose springboot mysql redis web应用部署
+ 【A】


---
+ 【Q10】 docker-compose只能在本机发布，不能发不成多服务器。所以，docker-compose多用来开发测试比较多吧。
+ 【A】（单台服务器，多个docker服务）用来快速验证原型！
   + 运维组：针对springboot开发和测试。生成工程库。
   + 开发组：使用脚本一键部署（在本地），不用安装多种环境。尽量裸机（至少有java，node）开发，裸机测试。
   + 开发组：开发一段时间代码后，给运维组
   + 运维组：把docker-compose以及jar拷贝到测试服务器。运行docker-compose。在单服务器部署
   + 测试组：针对单服务器环境测试  

---
+ 【Q11】 docker-compose能够单机发布多个副本。
+ 【A】
  https://www.cnblogs.com/JulianHuang/p/12568814.html
  利用docker-compose 启动nginx监听宿主80，转发给8080，然后利用docker内嵌dns
  nginx会转发给三个web应用

  总之，<font color=red>docker-compose用于简单的单机验证，单机开发，从gitlab下载代码后快速在本机单机运行，模仿出多个服务器。总之，单机运行。</font>


--- 
+ 【Q12】 用ceph搭建Harbor
+ 未着手

# Docker-compose部署mysql


## 文章目录

docker实践之docker-compose部署mysql  
1、安装部署docker  
2、编写docker-compose文件  
3、编写配置文件和初始化文件  
4、启动数据库  
5、检查初始化的数据  
6、验证远程连接

## docker实践之docker-compose部署mysql

前面用golang写了一个api server，但是要用到一些测试数据，又要方便给别人，想来用docker部署环境最简单了。只需要简单执行两个命令就可以搞定了。博主的环境是windows然后在windows里面部署一个centos7的虚拟机。在虚拟机里面安装部署了docker。

## 1、安装部署docker

在linux下面只需简单的一个命令：

```
yum install docker
```

其他的系统类似。

## 2、编写docker-compose文件

```bash
version: '2'
services:
    mysql:
        network_mode: "host"
        environment:
            MYSQL_ROOT_PASSWORD: "yourpassword"
            MYSQL_USER: 'test'
            MYSQL_PASS: 'yourpassword'
        image: "docker.io/mysql:latest" 
        restart: always
        volumes:
            - "./db:/var/lib/mysql"
            - "./conf/my.cnf:/etc/my.cnf"
            - "./init:/docker-entrypoint-initdb.d/"
        ports:
            - "3306:33060"
```

这里稍微解释一下，其中，network\_mode为容器的网络模式，一般自己测试用host模式就可以了。MYSQL\_ROOT\_PASSWORD为数据库的密码，也就是root用户的密码。MYSQL\_USER和MYSQL\_PASS另外一个用户名和密码。image为你拉取镜像的地址和版本，当然也可以换成自己的镜像仓库，这里使用官方的。volumes里面的参数为映射本地和docker容器里面的文件夹和目录。./db 用来存放了数据库表文件，./conf/my.cnf存放自定义的配置文件，./init存放初始化的脚本。ports 为映射主机和容器的端口。写好docker-compose.yml后把相应的文件夹建好，当然也可以换成你自己的。下面的是博主的文件夹结构。

```
root@localhost mysql # tree
.
├── conf
│   └── my.cnf
├── db
├── docker-compose.yml
└── init
    └── init.sql
```

## 3、编写配置文件和初始化文件

```
root@localhost conf # cat my.cnf 
[mysqld]
user=mysql
default-storage-engine=INNODB
character-set-server=utf8
[client]
default-character-set=utf8
[mysql]
default-character-set=utf8
```

这里的配置文件只是一个简单的举例，大家需要根据自己的配置来更改。

```
root@localhost init # cat init.sql 
use mysql;
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'yourpassword';
create database test;
use test;
create table user
(
    id int auto_increment primary key,
    username varchar(64) unique not null,
    email varchar(120) unique not null,
    password_hash varchar(128) not null,
    avatar varchar(128) not null
);
insert into user values(1, "zhangsan","test12345@qq.com","passwd","avaterpath");
insert into user values(2, "lisi","12345test@qq.com","passwd","avaterpath");
```

ALTER USER 'root'\@'\%' IDENTIFIED WITH mysql\_native\_password BY 'yourpassword';这一句比较重要，放开root登入权限，如果你要在其他的主机用root用户登入到数据库就需要写入这句话。其他的语句就是建表操作和插入数据的操作了。

## 4、启动数据库

```
root@localhost mysql # docker-compose pull

.......下载镜像过程

root@localhost mysql # docker-compose up -d

mysql_mysql_1_234be9b015e4 is up-to-date
root@localhost mysql # 
```

此处需要在存放docker-compose.yml的文件夹进行操作。

## 5、检查初始化的数据

```
root@localhost mysql # docker ps
CONTAINER ID        IMAGE                    COMMAND                  CREATED             STATUS              PORTS               NAMES
cffe8d56f222        docker.io/mysql:latest   "docker-entrypoint..."   21 minutes ago      Up 21 minutes                           mysql_mysql_1_234be9b015e4
root@localhost mysql # docker exec -it cffe8d56f222 bash
root@localhost:/# mysql -uroot -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 11
Server version: 8.0.13 MySQL Community Server - GPL

Copyright (c) 2000, 2018, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> use test;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> select * from user;
+----+----------+------------------+---------------+------------+
| id | username | email            | password_hash | avatar     |
+----+----------+------------------+---------------+------------+
|  1 | zhangsan | test12345@qq.com | passwd        | avaterpath |
|  2 | lisi     | 12345test@qq.com | passwd        | avaterpath |
+----+----------+------------------+---------------+------------+
2 rows in set (0.00 sec)
```

可以看到数据存入到数据库当中去。

## 6、验证远程连接

在windows宿主机上面也可以用Navicat连接上数据库。ip填虚拟机的ip，port填写3306，密码为docker-compose文件中的root密码。此处需要将宿主机（我是liunx虚拟机）的防火墙给关掉，要不然一直连接不上，或者你开启3306端口给外面访问也可以。

  

![](//upload-images.jianshu.io/upload_images/15063621-d5bae6ca5a75b653?imageMogr2/auto-orient/strip|imageView2/2/w/760/format/webp)
