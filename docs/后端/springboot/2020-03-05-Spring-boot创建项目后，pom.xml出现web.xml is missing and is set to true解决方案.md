---
layout: post
title: Spring-boot创建项目后，pom.xml出现web.xml is missing and is set to true解决方案
---

# Spring-boot创建项目后，pom.xml出现web.xml is missing and is set to true解决方案


这个问题的原因是maven看到我们项目的类型是war，在pom.xml中有这段代码

```
<packaging>war</packaging>  
```

## 原因：
因为创建的是web工程，从提示信息可以看到。也就是**缺少了web.xml文件，\<failOnMissingWebXml>**被设置成**true**了。这是一个Maven错误，在最近的web应用开发中web.xml文件已经变得可有可无了。不过Maven还没有跟上这一变化

## 方法1：我们只要在**pom.xml**文件中手动添加如下配置:

```java
<build>
		<plugins>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-war-plugin</artifactId>
				<version>2.6</version>
				<configuration>
					<failOnMissingWebXml>false</failOnMissingWebXml>
				</configuration>
			</plugin>
		</plugins>
</build>
```

这样做的好处是我们不必在项目生中成一个无用的web.xml文件。在更新版本的maven中已经不存在web.xml文件缺失的问题，我们只需要处理\<failOnMissingWebXml>被设置成tue的问题即可。也就是在pom.xml中添加如下配置即可。

```
 <configuration>      
 <failOnMissingWebXml>false</failOnMissingWebXml>
 </configuration>
```

## 方法2 另外一种解决方法：就是生成web.xml文件，

![](https://img-blog.csdnimg.cn/20190418101000170.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1dKRFgyMDM2,size_16,color_FFFFFF,t_70)

### 在项目浏览器中右键单击Deloyment Descriptor，选择生成部署描述符存根：Generate  Deployment Descriptor Stub。

操作后会在项目的**src/main/webapp/WEB-INF**目录下生成web.xml文件。

![](https://img-blog.csdnimg.cn/20190418101305271.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1dKRFgyMDM2,size_16,color_FFFFFF,t_70)

### 如果加入web.xml文件后还是提示报错，请接着使用下面的方法：

##### 第一步：右击项目-Properties->Deployment Assembly>add->Folder->src->main->webapp

##### 第二步：在eclipse顶部菜单，打开project->clean:

   ![](https://img-blog.csdnimg.cn/20190418102200361.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1dKRFgyMDM2,size_16,color_FFFFFF,t_70)

经过以上步骤，问题解决。