---
layout: post
title: java环境maven环境安装配置
---

## 1. 安装java
略

## 2. 安装maven

### 2.1 安装maven
略
### 2.2 maven与Eclipse整合
参考：https://www.eclipse.org/m2e/



## 3. 生成maven项目

### 有两个方案，
- 3.1 【不好】使用eclipse生成maven项目。
  因为pom.xml里面几乎没有什么内容，需要自己一点点写。

- 3.2 【好】使用mvn 命令生成maven项目。
  因为pom.xml里面包含了很多默认内容。不用自己一点点写，更省劲。
```
mvn -B archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4
```
  - 1.4好使，我的maven3.6.2，java1.8。
  - 不过生成的jdk版本是1.7需要手工该成1.8

### 为什么生成而不是手动一个目录一个目录创建
有些规则必须遵守。例如必须有main包和test包。src目录和pom.xml必须同级。
所以避免弄错，干脆生成吧。

## 4. 设置公司代理库

### 4.1 拷贝.m2目录到工程根目录与pom.xml同级
需要改的只有username和password，三处。改成你自己的nexus代理的用户名和密码
默认用户名就是邮件@前面的字符串。密码就是公司默认密码。
请记得登陆后修改密码。

.m2/setting.xml （密码用xxx了）
```xml
<settings>
	<servers>
		<server>
			<id>nexus</id>
			<username>shirx</username>
			<password>xxx</password>
		</server>
		<server>
			<id>nexus-release</id>
			<username>shirx</username>
			<password>xxx</password>
		</server>
		<server>
			<id>nexus-snapshot</id>
			<username>shirx</username>
			<password>xxx</password>
		</server>
	</servers>
	<mirrors>
		<mirror>
			<id>nexus</id>
			<mirrorOf>*</mirrorOf>
			<name>Nexus myself</name>
			<url>http://nexus.ccbjb.com.cn/repository/maven-central/</url>
		</mirror>
	</mirrors>
	<profiles>
		<profile>
			<id>mycof</id>
			<repositories>
				<!-- 私有库地址 -->
				<repository>
					<id>nexus</id>
					<url>http://nexus.ccbjb.com.cn/repository/maven-central/</url>
					<releases>
						<enabled>true</enabled>
					</releases>
					<snapshots>
						<enabled>true</enabled>
					</snapshots>
				</repository>
			</repositories>
			<pluginRepositories>
				<!--插件库地址 -->
				<pluginRepository>
					<id>nexus</id>
					<url>http://nexus.ccbjb.com.cn/repository/maven-central/</url>
					<releases>
						<enabled>true</enabled>
					</releases>
					<snapshots>
						<enabled>true</enabled>
					</snapshots>
				</pluginRepository>
			</pluginRepositories>
		</profile>
	</profiles>
	<!--激活profile -->
	<activeProfiles>
		<activeProfile>mycof</activeProfile>
	</activeProfiles>
</settings>
```
### 4.2 pom.xml 修改两处
- 1.7 → 1.8
- 拷贝 【add by  srx begin】 ~ 【add by  srx end】

pom.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>srx</groupId>
  <artifactId>srx</artifactId>
  <version>srx</version>

  <name>srx</name>
  <!-- FIXME change it to the project's website -->
  <url>http://www.example.com</url>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
  </properties>

  <!-- add by  srx begin-->
	<repositories>
		<repository>
			<id>nexus</id>
			<url>http://nexus.ccbjb.com.cn/repository/maven-central/</url>
			<releases>
				<enabled>true</enabled>
			</releases>
			<snapshots>
				<enabled>true</enabled>
				<updatePolicy>always</updatePolicy>
				<checksumPolicy>fail</checksumPolicy>
			</snapshots>
		</repository>
	</repositories>
    <!-- add by  srx end-->
	
	

  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.11</version>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <pluginManagement><!-- lock down plugins versions to avoid using Maven defaults (may be moved to parent pom) -->
      <plugins>
        <!-- clean lifecycle, see https://maven.apache.org/ref/current/maven-core/lifecycles.html#clean_Lifecycle -->
        <plugin>
          <artifactId>maven-clean-plugin</artifactId>
          <version>3.1.0</version>
        </plugin>
        <!-- default lifecycle, jar packaging: see https://maven.apache.org/ref/current/maven-core/default-bindings.html#Plugin_bindings_for_jar_packaging -->
        <plugin>
          <artifactId>maven-resources-plugin</artifactId>
          <version>3.0.2</version>
        </plugin>
        <plugin>
          <artifactId>maven-compiler-plugin</artifactId>
          <version>3.8.0</version>
        </plugin>
        <plugin>
          <artifactId>maven-surefire-plugin</artifactId>
          <version>2.22.1</version>
        </plugin>
        <plugin>
          <artifactId>maven-jar-plugin</artifactId>
          <version>3.0.2</version>
        </plugin>
        <plugin>
          <artifactId>maven-install-plugin</artifactId>
          <version>2.5.2</version>
        </plugin>
        <plugin>
          <artifactId>maven-deploy-plugin</artifactId>
          <version>2.8.2</version>
        </plugin>
        <!-- site lifecycle, see https://maven.apache.org/ref/current/maven-core/lifecycles.html#site_Lifecycle -->
        <plugin>
          <artifactId>maven-site-plugin</artifactId>
          <version>3.7.1</version>
        </plugin>
        <plugin>
          <artifactId>maven-project-info-reports-plugin</artifactId>
          <version>3.0.0</version>
        </plugin>
      </plugins>
    </pluginManagement>
  </build>
</project>
```

## 5. 编译和测试
最后长这个样子：
![](/docs/images/2020-12-03-18-05-40.png)

### 5.1 在命令行执行
- 编译：在命令行执行
```
mvn -s .m2/settings.xml --batch-mode compile
```

- 在命令行执行测试用例。
```
mvn -s .m2/settings.xml --batch-mode test
```

### 5.2 在IDE上执行编译和测试

能用命令行执行就能用GUI执行，设置就行。

#### 5.2.1 用eclipse
1. 首先把这个目录导入到Eclipse。open-》exsit project-》选工程目录
2. 设置一个maven 配置。Run As -》 Run config -》 new configuration -》user setting 指定.m2里的setting.xml
![](/docs/images/2020-12-03-18-20-11.png)
  记住，文件虽然导入到eclipse但是路径仍是原来的目录。所以user setting 使用了文件系统指定，而不是workspace指定。
4. 有时java类或者pom.xml总是报错。实际并没有错。
   - 去掉project-》自动编译
    ![](/docs/images/2020-12-03-18-23-01.png)
   - maven-》update project即可。
    ![](/docs/images/2020-12-03-18-21-59.png)

##### 5.2.2 用vscode
那就是使用命令行。同5.1


## 6. gitlab CICD自动编译，自动测试
只需要增加一个.gitlab-ci.yml , 固定写法拷贝一下即可。

.gitlab-ci.yml
```yml
image: docker.ccbjb.com.cn/library/maven:latest

stages:
  - build
  - test
  - run

variables:
  MAVEN_CLI_OPTS: "-s .m2/settings.xml --batch-mode"
  GITLAB_BASE_URL: "https://gitlab.ccbjb.com.cn"
  DEP_PROJECT_ID: 21

build:
  stage: build
  script:
    - mvn $MAVEN_CLI_OPTS compile

test:
  stage: test
  script:
    - mvn $MAVEN_CLI_OPTS test

run:
  stage: run
  script:
    - mvn $MAVEN_CLI_OPTS package
    - mvn $MAVEN_CLI_OPTS exec:java -Dexec.mainClass="srx.App"
```

提交代码就可以自动编译和测试了。

![](/docs/images/2020-12-03-18-25-34.png)