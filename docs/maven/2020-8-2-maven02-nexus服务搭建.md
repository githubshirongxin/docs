参考文档：https://help.sonatype.com/repomanager3

## 1、要使用nexus服务需要安装jdk和maven

1.1、jdk下载地址：https://www.oracle.com/technetwork/java/javase/downloads/index.html

```
rpm -ivh jdk-8u221-linux-x64.rpm

vim /etc/profile
export JAVA_HOME=/usr/java/jdk1.8.0_221-amd64
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar 

source /etc/profile

java -version
```

1.2、maven下载地址：https://maven.apache.org/download.cgi

```
tar -zxvf apache-maven-3.6.1-bin.tar.gz

vim /etc/profile
export PATH=$PATH:/usr/local/maven/bin

source /etc/profile

mvn -v
```

## 2、安装nexus

下载地址：https://www.sonatype.com/nexus-repository-oss，点击首页大广告图，跳转后填写邮箱，点击，download，网页跳转后，选择 nexus repository manager oss 3.x - unix，下载最新安装包。

或者打开网址：https://my.sonatype.com/ 在 Latest Releases 标签下， 下载最新nexus repository安装包

参考：https://www.cnblogs.com/yangshaoxiang/p/8807657.html

### iptables允许8081或者干脆关闭防火墙！！
```
sudo systemctl stop firewalld
```

```
#防火墙开启8081端口，该端口是nexus的默认端口(在/usr/local/nexus/etc/nexus-default.properties文件中)
vi  /etc/sysconfig/iptables

# 在打开的文件中加入如下内容
-A INPUT -p tcp -m state --state NEW -m tcp --dport 8081 -j ACCEPT
```

### 修改配置
#该文件在bin目录下和启动程序nexus同级
- nexus.rc
run_as_user=root

- nexus-default.properties
修改host=192.168.3.124
端口不变

### 启动nexus，start不好使得用run
```
#启动 ps 我安装时第一次启动使用./nexus start 访问不到web页面，使用run命令可以，之后使用start也可以了
./nexus run &

#启动成功会有如下信息
WARNING: ************************************************************
WARNING: Detected execution as "root" user.  This is NOT recommended!
WARNING: ************************************************************
Starting nexus
```

### http访问时的用户名和密码
用户名admin，初始密码保存在nexus安装目录下的sonatype-work的admin.password文件中。
第一次访问是需要修改密码

修改成admin，admin123


---

## 修改maven的setting.xml


