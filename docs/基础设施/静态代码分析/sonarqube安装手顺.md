# docker 安装sonarqube
首先需要安装数据库，开源的可以用 mysql 或者postgresql 。官网上已经声明 sonarQube 7.9 版本以上不再支持 mysql 了，为了以后升级新版本不做数据库迁移，使用postgresql

## 安装前准备
因为docker默认拉取镜像很慢，非常慢，慢到爆炸，所以先配置docker从国内镜像库拉取镜像，创建/etc/docker/daemon.json文件
```
vi /etc/docker/daemon.json
```
追加如下内容
```
{
    "registry-mirrors" : [
    "https://registry.docker-cn.com",
    "https://docker.mirrors.ustc.edu.cn",
    "http://hub-mirror.c.163.com",
    "https://cr.console.aliyun.com/"
  ]
}
```
重启docker
```
service docker restart
```
ok现在拉取镜像速度就非常快了，开始安装

### 一、docker 安装 postgresql
#### 1. postgresql  
1).拉取 postgresql 镜像  
```
docker pull postgres:latest
```
2).创建网络 
```
docker network create sonarqube-tier  
```
3).创建容器并运行
```
docker run --name postgres -p 5432:5432 -e POSTGRES_USER=sonar -e POSTGRES_PASSWORD=sonar \
--net sonarqube-tier \
-e POSTGRES_DB=sonar \
--restart always \
--privileged=true \
--network-alias postgres \
-d postgres 
```

#### 2. 各个参数的含义：  
>-p 5432:5432：将容器 5432 映射到宿主机端口 5432  
-v /etc/localtime:/etc/localtime:ro：设置容器与宿主机时间一致  
-e POSTGRES_USER=sonar：设置数据库用户名  
-e POSTGRES_PASSWORD=sonar：设置数据库密码  
-e POSTGRES_DB=sonar：新建db  
-e TZ=Asia/Shanghai：设置时区  
--restart always：容器退出时总是重启  
--privileged=true：挂载主机目录Docker访问出现Permission denied的解决办法 
--network-alias mysql：给容器起个网络别名  

### 二、安装 SonarQube  
1.拉取镜像
```
docker pull sonarqube
```
#### 2.创建工作目录 
```
mkdir -p /data/sonarqube  
```
#### 3.修改系统参数  
```
echo "vm.max_map_count=262144" > /etc/sysctl.conf  
sysctl -p  
```
#### 4.运行一个test容器  
```
docker run -d --name sonartest sonarqube  
```
将容器内重要文件复制到宿主机  
```
docker cp sonartest:/opt/sonarqube/conf /data/sonarqube  
docker cp sonartest:/opt/sonarqube/data /data/sonarqube  
docker cp sonartest:/opt/sonarqube/logs /data/sonarqube  
docker cp sonartest:/opt/sonarqube/extensions /data/sonarqube  
```
然后删除此容器
```
docker stop sonartest
docker rm sonartest  
```
修改文件夹权限  
```
chmod -R 777 /data/sonarqube/  
```
#### 5.创建容器并运行  
##### 方法一
```
docker run --name sonar --link postgres -e SONARQUBE_JDBC_URL=jdbc:postgresql://postgres:5432/sonar -p 9000:9000\
 -e sonar.jdbc.password=sonar\
 -e sonar.jdbc.username=sonar\
 --restart always \
 --net sonarqube-tier \
 --privileged=true \
 --restart always \
 -v /data/sonarqube/logs:/opt/sonarqube/logs \
 -v /data/sonarqube/conf:/opt/sonarqube/conf \
 -v /data/sonarqube/data:/opt/sonarqube/data \
 -d sonarqube
```

若这种方式出现连不上数据库 postgres 的问题，可参照第二种方  
#####方法二  
1）找到 /data/sonarqube/conf/ 路径下的文件 sonar.properties，修改如下并保存 
```
# 找到如下配置去掉注释。并赋值 username，password  
sonar.jdbc.username=sonar  
sonar.jdbc.password=sonar  
```
```
# 去掉 sonar.jdbc.url 注释，配置url  
#----- PostgreSQL 9.3 or greater  
# By default the schema named "public" is used. It can be overridden with the parameter "currentSchema".  
sonar.jdbc.url=jdbc:postgresql://postgres:5432/sonar  
```
2）使用docker命令创建容器  
```
docker run -d --name sonar -p 9000:9000 \  
> --net sonarqube-tier \  
> --privileged=true \  
> --restart always \  
> -v /data/sonarqube/logs:/opt/sonarqube/logs \  
> -v /data/sonarqube/conf:/opt/sonarqube/conf \  
> -v /data/sonarqube/data:/opt/sonarqube/data \  
> -v /data/sonarqube/extensions:/opt/sonarqube/extensions\  
> sonarqube:7.4-community  
```

#### 6.浏览器输入http://ip:9000，开始初始化数据库，这个时间过程比较长，大概几分钟。初始化成功后进入登录界面，账号：admin  密码：admin

![节点](/docs/images/123.jpg)

如果没有成功可以用以下命令查看log
```
docker logs sonar
```
如果出现了
```
ERROR: bootstrap checks failed
[1]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]
```

编辑 /etc/sysctl.conf，追加以下内容：
vm.max_map_count=655360
保存后，执行：
sysctl -p

重新启动，成功。

7.可以安装中文语言包，点击Administration→Marketplace，搜索框搜索chinese第一个就是，安装即可
![节点](/docs/images/456.jpg)