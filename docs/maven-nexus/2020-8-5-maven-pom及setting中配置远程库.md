---
layout: post
title: 【maven基础】pom中 repositories，pluginrepositories 和setting中profile：repositoreis,pluginrepositories以及mirror的关系。
---
pom中 `<repositories> <pluginrepositories>` 和
setting中profile `<repositoreis> <pluginrepositories>`以及`<mirror>`的关系。

参考：https://www.cnblogs.com/tinyj/p/9803081.html

## pom中配置远程库

```xml
<project>
...
  <repositories>
    <repository>
      <id>maven-net-cn</id>
      <name>Maven China Mirror</name>
      <url>http://maven.net.cn/content/groups/public/</url>
      <releases>
        <enabled>true</enabled>
      </releases>
      <snapshots>
        <enabled>false</enabled>
      </snapshots>
    </repository>
  </repositories>
  <pluginRepositories>
    <pluginRepository>
      <id>maven-net-cn</id>
      <name>Maven China Mirror</name>
      <url>http://maven.net.cn/content/groups/public/</url>
      <releases>
        <enabled>true</enabled>
      </releases>
      <snapshots>
        <enabled>false</enabled>
      </snapshots>    
    </pluginRepository>
  </pluginRepositories>
...
</project>
```

## 在settings.xml中配置远程仓库
我们知道了如何在POM中配置远程仓库，但考虑这样的情况：在一个公司内部，同时进行这3个项目，
而且以后随着这几个项目的结束，越来越多的项目会开始；同时，公司内部建立一个Maven仓库。
我们统一为所有这些项目配置该仓库，于是不得不为每个项目提供同样的配置。问题出现了，这是重复 ！
其实我们可以做到只配置一次，在哪里配置呢？就是settings.xml。
不过事情没有那么简单，不是简单的将POM中的<repositories>及<pluginRepositories>元素复制到settings.xml中就可以，
setting.xml不直接支持 这两个元素。但我们还是有一个并不复杂的解决方案，就是利用profile，如下：

```xml
<settings>
  ...
  <profiles>
    <profile>
      <id>dev</id>
      <!-- repositories and pluginRepositories here-->
    </profile>
  </profiles>
  <activeProfiles>
    <activeProfile>dev</activeProfile>
  </activeProfiles>
  ...
</settings>
```
这里我们定义一个id为dev的profile，将所有repositories以及pluginRepositories元素放到这个profile中，
然后，使用<activeProfiles>元素自动激活该profile。这样，你就不用再为每个POM重复配置仓库。
使用profile为settings.xml添加仓库提供了一种用户全局范围的仓库配置。


## setting.xml中使用镜像

#### 1. 用来覆盖某个库的url，例如这个就是覆盖central库

如果你的地理位置附近有一个速度更快的central镜像，或者你想覆盖central仓库配置，
或者你想为所有POM使用唯一的一个远程仓库（这个远程仓库代理的所有必要的其它仓库），
你可以使用settings.xml中的mirror配置。
以下的mirror配置用maven.NET.cn覆盖了Maven自带的central：

```xml
<settings>
...
  <mirrors>
    <mirror>
      <id>maven-net-cn</id>
      <name>Maven China Mirror</name>
      <url>http://maven.net.cn/content/groups/public/</url>
      <mirrorOf>central</mirrorOf>
    </mirror>
  </mirrors>
...
</settings>
```

这里唯一需要解释的是<mirrorOf>，这里我们配置central的镜像，

#### 2. 我们也可以配置一个所有仓库的镜像，以保证该镜像是Maven唯一使用的仓库：就是覆盖了所有库。

```xml
  <mirrors>
    <mirror>
      <id>nexus</id>
      <mirrorOf>*</mirrorOf>
      <name>Nexus Mirror</name>
      <url>http://xx.xx/nexus/content/groups/public</url>
    </mirror>
  </mirrors>

<settings>
...
  <mirrors>
    <mirror>
      <id>my-org-repo</id>
      <name>Repository in My Orgnization</name>
      <url>http://192.168.1.100/maven2</url>
      <mirrorOf>*</mirrorOf>
    </mirror>
  </mirrors>
...
</settings>
```


--- 
## 疑问：

### [1]. pom.xml中下列有什么区别
- `<distributionManager><repositories>`
- `<repositories>`
- `<pluginRepositories>`
#### 一、repositories中的repository
表示从什么库地址可以下载项目依赖的库文件，比如：
```xml
<repositories>
  <repository>
      <id>nexus</id>
      <name>Nexus</name>
      <url>http://nexus.argan.xyz/nexus/content/groups/public/</url>
      <releases>
          <enabled>true</enabled>
          <updatePolicy>always</updatePolicy>  
          <checksumPolicy>warn</checksumPolicy>  
      </releases>
      <snapshots>
          <enabled>true</enabled>  
          <updatePolicy>always</updatePolicy>  
          <checksumPolicy>warn</checksumPolicy>  
      </snapshots>
  </repository>
</repositories>
```
##### repository中的字段说明如下：
- id，库的ID
- name，库的名称
- url，库的URL
- layout，在Maven 2/3中都是default，只有在Maven 1.x中才是legacy
- releases，库中版本为releases的构件
- snapshots，库中版本为snapshots的构件
- enabled，是否支持更新
- updatePolicy，构件更新的策略，可选值有daily, always, never, interval:X(其中的X是一个数字，表示间隔的时间，单位min)，默认为daily
- checksumPolicy，校验码异常的策略，可选值有ignore, fail, warn
- layout，在Maven 2/3中都是default，只有在Maven 1.x中才是legacy

###### 如果需要认证才能访问，则需要在settings.xml文件中添加如下内容，并且server中的id字段的值要与repository中id字段的值相同
```xml
<servers>  
    <server>  
        <id>nexus</id>  
        <username>admin</username>  
        <password>admin123</password>  
     </server> 
</servers>
```
#### 二、distributionManagement中的repository
表示的是项目打包成库文件后要上传到什么库地址，比如：
```xml
<distributionManagement>
    <repository>
        <uniqueVersion>false</uniqueVersion>
        <id>releases</id>
        <name>Corporate Repository</name>
        <url>scp://repo/maven2</url>
        <layout>default</layout>
    </repository>
    <snapshotRepository>
        <uniqueVersion>true</uniqueVersion>
        <id>snapshots</id>
        <name>Propellors Snapshots</name>
        <url>sftp://propellers.net/maven</url>
        <layout>legacy</layout>
    </snapshotRepository>
</distributionManagement>
```
与repositories中的repository不同的是，distributionManagement中分为repository和snapshotRepository，但里面的字段大致与repositories中的repository内的相同。同样，如果访问需要认证的话，也需要在settings.xml文件中设置：
```xml
<servers>  
    <server>  
        <id>releases</id>  
        <username>admin</username>  
        <password>admin123</password>  
     </server>  
    <server>  
        <id>snapshots</id>  
        <username>admin</username>  
        <password>admin123</password>  
    </server>  
</servers>
```

#### 三、pluginRepositories中的repository
pluginRepositories中的repository是以pluginRepository表示的，它表示插件从什么库地址下载。
```xml
<pluginRepositories>
  <pluginRepository>
      <id>nexus</id>
      <name>Nexus</name>
      <url>http://10.21.7.1:8081/repository/ai-public/</url>
      <releases>
          <enabled>true</enabled>
          <updatePolicy>always</updatePolicy>  
          <checksumPolicy>warn</checksumPolicy>  
      </releases>
      <snapshots>
          <enabled>true</enabled>  
          <updatePolicy>always</updatePolicy>  
          <checksumPolicy>warn</checksumPolicy>  
      </snapshots>
  </pluginRepository>
</pluginRepositories>
```

它里面的字段和用法与repositories中的repository基本一致。

---
