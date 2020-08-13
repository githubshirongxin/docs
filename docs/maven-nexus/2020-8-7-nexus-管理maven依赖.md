---
layout: post
title: 【nexus-maven仓库配置使用】
---

## 新建一个maven工程
https://maven.apache.org/guides/getting-started/index.html#How_do_I_make_my_first_Maven_project

`mvn -B archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4`

F:\work\maven test\my-app

## pom.xml 指定deploy的位置
```
<?xml version="1.0" encoding="UTF-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>cn.com.ccbjb.app</groupId>
  <artifactId>srx-app</artifactId>
  <version>1.0-RELEASE</version>
  <!-- <version>1.0-SNAPSHOT</version> -->

  <name>my-app</name>
  <!-- FIXME change it to the project's website -->
  <url>http://www.example.com</url>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
  </properties>

  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.11</version>
      <scope>test</scope>
    </dependency>
    <!-- <dependency>
      <groupId>struts</groupId>
      <artifactId>struts</artifactId>
      <version>1.2.9</version>
    </dependency> -->
    <dependency>
      <groupId>org.hibernate</groupId>
      <artifactId>hibernate</artifactId>
      <version>3.6.0.Beta2</version>
      <type>pom</type>
    </dependency>
  </dependencies>

  <build>
    <pluginManagement>      <!-- lock down plugins versions to avoid using Maven defaults (may be moved to parent pom) -->
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

  <distributionManagement>
    <repository>
      <id>nexus-release</id>
      <name>Nexus Release Repository</name>
      <url>http://192.168.3.124:8081/repository/maven-releases/</url>
    </repository>
    <snapshotRepository>
      <id>nexus-snapshot</id>
      <name>Nexus Snapshot Repository</name>
      <url>http://192.168.3.124:8081/repository/maven-snapshots/</url>
    </snapshotRepository>
  </distributionManagement>
</project>

```
根据artifact的版本名字来自动决定发送到release库还是snapshot库。


## setting.xml
C:\Program Files (x86)\apache-maven-3.6.3\conf\settings.xml
```
## 维护服务器的验证信息。ID是唯一标识
      <server>
        <id>nexus</id>
        <username>admin</username>
        <password>admin123</password>
      </server>
      <server>
        <id>nexus-release</id>
        <username>admin</username>
        <password>admin123</password>
      </server>
      <server>
        <id>nexus-snapshot</id>
        <username>admin</username>
        <password>admin123</password>
      </server>
    </servers>
...

## 会覆盖所有下载库的url最后都会转到这个地址来下载
     <mirror>
        <id>nexus</id>
        <mirrorOf>*</mirrorOf>
        <name>Nexus myself</name>
        <url>http://192.168.3.124:8081/repository/maven-public/</url>
      </mirror>  
...

## 依赖库和插件库指定。
<profile>
        <id>mycof</id>
        <repositories>
          <!-- 私有库地址-->
          <repository>
            <id>nexus</id>
            <url>http://192.168.3.124:8081/repository/maven-public/</url>
            <releases>
              <enabled>true</enabled>
            </releases>
            <snapshots>
              <enabled>true</enabled>
            </snapshots>
          </repository>
        </repositories>
        <pluginRepositories>
          <!--插件库地址-->
          <pluginRepository>
            <id>nexus</id>
            <url>http://192.168.3.124:8081/repository/maven-public/</url>
            <releases>
              <enabled>true</enabled>
            </releases>
            <snapshots>
              <enabled>true</enabled>
            </snapshots>
          </pluginRepository>
        </pluginRepositories>
  </profile>

   <!--激活profile-->
  <activeProfiles>
      <activeProfile>mycof</activeProfile>
    </activeProfiles>
  </settings>
```

## 验证下载
`mvn clean && mvn compile`
会自动下载依赖，到私服上。然后到本地。

`mvn deploy`
会发布这个包到私服-private库。