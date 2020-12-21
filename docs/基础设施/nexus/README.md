---
layout: post
title: 【maven基础】
---

## 资源：
- 查看npm包 https://developer.aliyun.com/mirror/NPM?from=tnpm
- 查看maven包 https://search.maven.org/

- 快速地通读全文，用不了2个小时。整体都理解了之后再memo。
https://maven.apache.org/guides/getting-started/index.html



- maven有很多插件，有时间可以试试
https://maven.apache.org/plugins/index.html

- pom
https://maven.apache.org/guides/introduction/introduction-to-the-pom.html


- 配置plugins
https://maven.apache.org/guides/mini/guide-configuring-plugins.html

- 库
https://maven.apache.org/guides/introduction/introduction-to-repositories.html

- 指向自定义库
https://maven.apache.org/guides/mini/guide-mirror-settings.html


## 一，最常用的maven功能

### 常用命令
```
// 1，编译所有代码
mvn compile

// 2，编译测试代码，并运行测试用例
mvn test

// 仅仅编译测试代码
mvn test-compile 

// 3，生成jar或war
mvn package

// 4，把生成的jar安装到自己的本地库（${user.home}/.m2/repository ）, 编译→测试→打包到本地库
mvn install

// 生成一个maven风格的站点，描述你的项目，自动生成内容
mvn site

// 删除构建的target目录的内容
mvn clean 

// 生成项目依赖树
mvn dependency:tree
```


https://maven.apache.org/run-maven/index.html
//不仅build而且还check所有的整合测试是否成功。
`mvn verify`

// 先删除然后编译且检查
`mvn clean verify`


### 查看java版本
// 下面定义java版本是1.5
```
<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-compiler-plugin</artifactId>
      <version>3.3</version>
      <configuration>
        <source>1.5</source> 
        <target>1.5</target>
      </configuration>
    </plugin>
  </plugins>
</build>
```

## 二，资源文件
// 将资源放到main的resource下，就会打包到jar里
// 将资源放到test的resource下，在单元测试中，使用代码可以访问到这些资源，例如都属性文件。
```
my-app
|-- pom.xml
`-- src
    |-- main
    |   |-- java
    |   |   `-- com
    |   |       `-- mycompany
    |   |           `-- app
    |   |               `-- App.java
    |   `-- resources
    |       `-- META-INF
    |           |-- application.properties
    `-- test
        |-- java
        |   `-- com
        |       `-- mycompany
        |           `-- app
        |               `-- AppTest.java
        `-- resources
            `-- test.properties
```

## 资源文件中引用其他属性的方法
当然可以直接定义，但是也可以引用其他地方定义好的【属性-值】
验证方式：target/下的application.properties查看对应的值。

### 1. 使用pom.xml或setting.xml设置的变量值
//资源文件中能够使用${property name} 
// 这些property 可能设置在setting.xml , pom.xml ，甚至环境变量
// 但是
// 有个前提。就是pom.xml中必须设置filter = true
// 否则，这些属性传递不到属性文件。
```
   <build>
        <resources>
            <resource>
                <directory>src/main/resources</directory>
                <filtering>true</filtering>
            </resource>
        </resources>
```

### 2. 引用外部文件（非resources）设置变量值
// 要引用外部文件
// 必须在pom中引用它
src/main/filters/filter.properties:
```
# filter.properties
my.filter.value=hello!
```
pom.xml
```
 <build>
    <filters>
      <filter>src/main/filters/filter.properties</filter>
    </filters>
    <resources>
      <resource>
        <directory>src/main/resources</directory>
        <filtering>true</filtering>
      </resource>
    </resources>
  </build>
</project>
```

application.properties
```
# application.properties
application.name=${project.name}
application.version=${project.version}
message=${my.filter.value}
```
然后执行 `mvn process-resources`
在target/src/main/resource/application.properties中查看

### 3. pom.xml properties中设置变量值
当然，也可以在pom.xml中引用这个filter.properties中的变量
```
<build>
    <resources>
      <resource>
        <directory>src/main/resources</directory>
        <filtering>true</filtering>
      </resource>
    </resources>
  </build>
 
  <properties>
    <my.filter.value>hello srx!</my.filter.value>
  </properties>
</project>
```
这个变量值的设置会优先filter.properties中对变量值的设置。
然后执行 `mvn process-resources`,target/下的application.properties中的该值，会变成hello srx!而不是hello

### 4. 从命令行获得变量值
application.properties
```
# application.properties
java.version=${java.version}
command.line.prop=${command.line.prop}
```
`mvn process-resources "-Dcommand.line.prop=hello again"`


## 三，如何在远程存储库中部署我的jar

要将jar部署到外部存储库，必须在pom.xml中配置存储库url，
并在settings.xml中配置用于连接到存储库的认证信息。
**pom.xml**
```
 <distributionManagement>
    <repository>
      <id>mycompany-repository</id>
      <name>MyCompany Repository</name>
      <url>scp://repository.mycompany.com/repository/maven2</url>
    </repository>
  </distributionManagement>
</project>
```

**setting.xml**
```
<settings>
 <servers>
    <server>
      <id>mycompany-repository</id>
      <username>jvanzyl</username>
      <!-- Default value is ~/.ssh/id_dsa -->
      <privateKey>/path/to/identity</privateKey> (default is ~/.ssh/id_dsa)
      <passphrase>my_key_passphrase</passphrase>
    </server>
  </servers>
...
</settings>
```
Care should be taken if using passwords in settings.xml. 
For more information, see [Password Encryption](https://maven.apache.org/guides/mini/guide-encryption.html).

