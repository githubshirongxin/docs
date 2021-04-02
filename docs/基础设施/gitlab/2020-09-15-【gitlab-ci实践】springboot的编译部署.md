---
laytout: post
title: 【gitla-ci发布实践】SpringBoot的编译部署
---

# gitlab-ci发布实践之Springboot部署

首先从SpringBoot官网上自动生成一个[Demo](https://start.spring.io/)
https://start.spring.io/
![](/docs/images/2020-09-25-09-19-22.png)

然后，本地安装java11，使用Eclipse编辑该工程。
![](/docs/images/2020-09-25-09-34-14.png)
上传该工程到本地gitlab：[gitlabci-springboot](https://gitlab.ccbjb.com.cn/shirongxin/gitlabci-springboot)

编辑修改pom.xml,使用本地nexus maven仓库
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.3.3.RELEASE</version>
		<relativePath /> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.example</groupId>
	<artifactId>demo</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>demo</name>
	<description>Demo project for Spring Boot</description>

	<properties>
		<java.version>11</java.version>
	</properties>


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

	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
			<exclusions>
				<exclusion>
					<groupId>org.junit.vintage</groupId>
					<artifactId>junit-vintage-engine</artifactId>
				</exclusion>
			</exclusions>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>

</project>
```

里面增加了一段：
```xml
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
```

编写.m2/settings.xml
![](/docs/images/2020-09-25-09-46-02.png)

把里面shirx，123.com修改成你自己的用户名和密码。
公司所有人都有。
```xml
<settings>
	<servers>
		<server>
			<id>nexus</id>
			<username>shirx</username>
			<password>123.com</password>
		</server>
		<server>
			<id>nexus-release</id>
			<username>shirx</username>
			<password>123.com</password>
		</server>
		<server>
			<id>nexus-snapshot</id>
			<username>shirx</username>
			<password>123.com</password>
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


编写Dockerfile放到最外层，和pom.xml同级
```dockerfile
FROM docker.ccbjb.com.cn/maven:3.6.3-jdk-11-slim AS MAVEN_BUILD
ARG SPRING_ACTIVE_PROFILE
COPY pom.xml /build/
COPY src /build/src/
COPY .m2 /build/.m2/
WORKDIR /build
RUN mvn -s .m2/settings.xml --batch-mode clean install -Dspring.profiles.active=$SPRING_ACTIVE_PROFILE && mvn -s .m2/settings.xml --batch-mode package -B -e -Dspring.profiles.active=$SPRING_ACTIVE_PROFILE
RUN ls  /build/target/
FROM docker.ccbjb.com.cn/openjdk:11-slim
#FROM openjdk:8-alpine FOR JAVA 8
WORKDIR /app
COPY --from=MAVEN_BUILD /build/target/*.jar /app/appdemo.jar
ENTRYPOINT ["java", "-jar", "appdemo.jar"]
```

编写.gitlab-ci.yml
```yml
services:
  - name: docker:19.03.12-dind
    command: ["--insecure-registry=docker.ccbjb.com.cn"]
  
stages:
  - build
  - deploy
  
variables:
  MAVEN_CLI_OPTS: "-s .m2/settings.xml --batch-mode"
  DOCKER_TLS_CERTDIR: "/certs"

build:
  stage: build
  before_script:
    - source .${CI_COMMIT_REF_NAME}.env
  script:
    - docker info
    - echo $DOCKER_PASSWORD | docker login -u$DOCKER_USER docker.ccbjb.com.cn  --password-stdin
    - docker build --build-arg SPRING_ACTIVE_PROFILE=$SPRING_ACTIVE_PROFILE -t $DOCKER_REPO .
    - docker push $DOCKER_REPO 

# login into another server，docker pull and run image to Container.
deploy:
  image: docker.ccbjb.com.cn/ubuntu:latest
  stage: deploy
  before_script:
    - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y && apt-get install -qq sshpass)'
    - eval $(ssh-agent -s)
    - ssh-add <(echo "$SSH_PRIVATE_KEY")
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
    - echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config
    - source .${CI_COMMIT_REF_NAME}.env
  script:
    - ssh root@$SERVER_IP "docker login -u $DOCKER_USER -p $DOCKER_PASSWORD docker.ccbjb.com.cn; docker stop $APP_NAME; docker system prune -a -f; docker pull $DOCKER_REPO; docker container run -d --name $APP_NAME -p $PORT:8080 -e SPRING_PROFILES_ACTIVE=$SPRING_ACTIVE_PROFILE $DOCKER_REPO; docker logout"
  
```

编写master分支才需要的env文件，放到工程最外层。.master.env
```properties
export SPRING_ACTIVE_PROFILE='prod'
export DOCKER_REPO='docker.ccbjb.com.cn/library/demo_app:prod'
export APP_NAME='demo_app_prod'
export PORT='8080'
export SERVER_IP='192.168.3.123'
export SERVER_SSH_KEY="$SSH_PRIVATE_KEY"
```

如此，则工程里的所有文件都配置完毕。

## 现在开始配置gitlab

先配置gitlab上runner。
为这个工程，注册一个runner的执行器为docker:19.03.12
docker.ccbjb.com.cn/docker:19.03.12也可以。
::: danger 验证：
据说docker:19.03.12从私有仓库下载会出现异常！需要验证。
答：验证了。没问题。参考：该issue。[docker执行器如果指定为私库docker.ccbjb.cm.cn/docker:19.03.12会出错吗？](https://gitlab.ccbjb.com.cn/shirongxin/gitlabci-springboot/-/issues/16)
:::
3.121上
/usr/local/docker/runner/config/config.toml
![](/docs/images/2020-09-25-11-17-21.png)
可见使用了86Hie_e2 执行器。
```toml
[[runners]]
  name = "121 docker runner, docker:19.03.12"
  url = "https://gitlab.ccbjb.com.cn/"
  token = "86Hie_e2TTp4FUrx-PF7"
  executor = "docker"
  [runners.cache]
    [runners.cache.s3]
    [runners.cache.gcs]
  [runners.docker]
    tls_verify = false
    image = "docker:19.03.12"
    privileged = true
    disable_entrypoint_overwrite = false
    oom_kill_disable = false
    disable_cache = false
    volumes = ["/certs/client", "/cache"]
    shm_size = 0
  ```

`image = "docker:19.03.12"` 修改成`image = "docker.ccbjb.com.cn/docker:19.03.12"`

```bash
cd /root/gitlab-runner/
docker-compose down
docker-compose up -d
```

然后，配置变量
![](/docs/images/2020-09-25-10-06-20.png)
DOCKER_AUTH_CONFIG
[DOCKER_AUTH_CONFIG到底有没有用，有啥用？](https://gitlab.ccbjb.com.cn/shirongxin/gitlabci-springboot/-/issues/15)

Runner上已经登陆了docker.ccbjb.com.cn
.docker/config.json里面已经有了两个docker仓库的登陆信息。
```
[root@centos121 ~]#cd .docker
[root@centos121 .docker]#ls
config.json  docker.ccbjb.com.cn  harbor.ccbjb.com.cn  nexus.ccbjb.com.cn
[root@centos121 .docker]#cat config.json
        "auths": {
                "docker.ccbjb.com.cn": {
                        "auth": "YWRtaW46YWRtaW4xMjM="
                },
                "harbor.ccbjb.com.cn": {
                        "auth": "YWRtaW46MTIzNC5jb01u"
                }
        },
        "HttpHeaders": {
                "User-Agent": "Docker-Client/19.03.12 (linux)"
        }
}[root@centos121 .docker]#
```

- docker.ccbjb.com.cn的用户名和密码。
DOCKER_USER, 你自己的。CJB公司的用户名就是你的邮件@前面的字母。
DOCKER_PASSWORD

- 拷贝docker.ccbjb.com.cn的root.crt到目标发布服务器上
进入目标服务器的下列目录`/etc/docker/certs.d/docker.ccbjb.com.cn/root.crt `
然后把root.crt 拷贝到改目录。
root.crt在3.138（某个已经发布的目标服务器）。以后挂载网站上。供大家使用。

## 手动执行
在3.121（Runner）上手动执行

`ssh-keygen -t rsa -f ~/.ssh/id_rsa -C "shirx@ccbjb.com.cn"`  ，不输入密码（一路回车）
3.121上的私钥id_rsa 设置成gitlabUI的变量SSH_PRIVATE_KEY

`ssh-copy-id -i ~/.ssh/id_rsa.pub 192.168.3.123`
// 192.168.3.123 为发布的目标服务器

测试一下免密登陆是否ok
`ssh 192.168.3.123` 可以直接登陆成功。用户名和密码都不用写。


## 提交代码触发Pipeline

就可以自动编译了部署了。
![](/docs/images/2020-09-25-14-20-57.png)

# TroubleShooting:

::: warning 重要
[终于好用了。](https://gitlab.ccbjb.com.cn/shirongxin/gitlabci-springboot/-/issues/14)

[docker执行器如果指定为私库docker.ccbjb.cm.cn/docker:19.03.12会出错吗？](https://gitlab.ccbjb.com.cn/shirongxin/gitlabci-springboot/-/issues/16)

[DOCKER_AUTH_CONFIG到底有没有用，有啥用？](https://gitlab.ccbjb.com.cn/shirongxin/gitlabci-springboot/-/issues/15)

[TroubleShooting](https://gitlab.ccbjb.com.cn/shirongxin/gitlabci-springboot/-/issues?scope=all&utf8=%E2%9C%93&state=all)

[ssh-key](https://blog.csdn.net/aabbcc456aa/article/details/18981279)

[github上一套非常好的ssh远程发布的gitlab-ci模板（ssh-template）](https://gitlab.com/gitlab-cd/ssh-template)

[这是sshkeyRunner免密登陆服务器的时候产生的错误。](https://gitlab.com/gitlab-examples/ssh-private-key/-/issues/1#note_48526556)

:::


--- 

# 其他参考资料：
```
ssh-keygen -t rsa -f ~/.ssh/id_rsa -C "shoufeng"
echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config
```
`ssh-copy-id -i ~/.ssh/id_rsa.pub remote-host`

[webhook 是啥？](https://www.cnblogs.com/zhihuifan10/p/11114816.html)

[nodejs的自动化编译和deploy（还挺靠谱）](https://blog.csdn.net/java060515/article/details/84065083?utm_medium=distribute.pc_relevant.none-task-blog-title-2&spm=1001.2101.3001.4242)


## 1 使用GitlabRunner充当发布用的服务器。比较容易，但是丑陋。
::: warning
 Runner和部署服务器是一台。整体思路就不推荐这么做。
:::
- https://blog.csdn.net/qq_27520051/article/details/80552220
  - 代码从gitlab pull下来就完成了发布。

- https://www.jianshu.com/p/b1e098cdb46b
  - 在gitlab-runner上git pull代码，并编译。


- https://blog.csdn.net/junmoxi/article/details/82762413
  - gitlab-ci.yml全是echo，没有一句真的。但是告诉你思路应该是Runner上执行shell。
  - 就这还需要把Runner服务器上生成公钥，放到gitlab上。就是为了git pull到runner上。

- https://www.cnblogs.com/hongsusu/p/10142428.html
  - gitlabrunner上git pull代码（为了能pull还得把gitlabrunner的key放到gitlab的某个用户的SSH key里。）
  - 【疑问】git pull了代码就完成部署了吗？


- https://segmentfault.com/a/1190000015692830
  - 就是npm publish然后把用户名，密码都写道脚本里，发布到npm仓库（私有或公有），就发布完了。
  - 这明显只适合npm包的开发工作。

### 1.2 gitlab-ci Docker化部署
#### 1.2.1  使用docker镜像库。build就是上传镜像，deploy就是拉取镜像并生成容器
- https://www.jianshu.com/p/dc603463ef55
  - build就是在RUnner上编译，并上传docker镜像库
  - deploy就是在Runner上拉取镜像并生成了容器，使用docker-compose或不使用（直接docker run）
#### 1.2.2 没使用docker镜像仓库。build就是打包成镜像。deploy就是在runner上生成镜像。
- https://www.jianshu.com/p/c398509f8861
  - 根本不用docker镜像仓库。就是在runner上直接打包成镜像。然后删除正在运行的容器。docker run生成容器。
- https://www.cnblogs.com/luffyxin/p/12800889.html
  - 同上。Runner上build阶段build镜像，deploy生成容器。
  - 不是很好的方案
::: warning
 Runner和部署服务器是一台。整体思路就不推荐这么做。
:::
---
## 2 部署服务器和Runner是不同的机器。这是比较正常

### 2.1 非docker化部署
- https://segmentfault.com/a/1190000020622168
  - 这是一篇比较完整的gitlab-ci发布到服务器的配置。runner上编译。编译后的东西拷贝到服务器。服务器不是Runner
  - 把Runner上生成的公钥拷贝到另一台服务器的~/.ssh/authorized_keys文件中。
  - 【常识】gitlab-ci的头部，可以写一些设置npm代理仓库。不知道能不能登陆仓库。
  - ssh到另一台服务器，采用了不验证服务器公钥的方式。见下面链接。
  - https://blog.csdn.net/aabbcc456aa/article/details/18981279
    - 【不用公钥验证的自动】不检查远端主机的公钥。

### 2.2 docker化部署，三个分支分别部署到三个不同的服务器。相当靠谱。
- https://blog.csdn.net/fly910905/article/details/106425489/
   - 这里面的maven:3.6.3-jdk-11-slim既有maven又有java。
   - 这篇文章值得参考。
- https://www.kubernetes.org.cn/7522.html（和上面是一篇文章。）
   - 相当成熟的方案。runner和部署服务器分开。并且三个分支部署到三个不同的服务器。相当靠谱。
   - 同样。build就是编译工程。
   - build imag就是制作镜像并上传docker私有仓库。 
   - deploy就是到对应的服务器上下载镜像。并停止掉旧的容器，生成新的容器。
   ::: tip 
   这是相当靠谱的方案！思路就应该是这个思路。
   :::
---
## 3. 服务器与RUnner是否是一台。不明！！
- https://segmentfault.com/a/1190000021092024?utm_source=tag-newest
  - 就是npm run deploy , 这就算发布了？疑问！


---


## ssh-keyscan 介绍
相关命令：ssh,sshd,ssh-keygen
ssh-keyscan命令是一个收集大量主机公钥的使用工具。 

常用参数:

-4：强制使用IPv4地址； 
-6：强制使用IPv6地址； 
-f：从指定文件中读取“地址列表/名字列表”； 
-p：指定连接远程主机的端口； 
-T：指定连接尝试的超时时间； 
-t：指定要创建的密钥类型； 
-v：信息模式，打印调试信息。
最后更新 2014-08-21 17:55:47
合作编辑者如下：张映有误，我来改正
(0)正确
(0)收藏
(0)
例1
```bash
[root@localhost test1]# ssh-keyscan 192.168.10.203   #查看连接203服务器的公钥
# 192.168.10.203 SSH-2.0-OpenSSH_5.3
192.168.10.203 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAqd3IqcRVwNhp2fSLwh5nHxrkyW4sTOmu6adt6ITjEP7bpSVw/bQucLaojLSUwMiOjjcdr5vJnuc3AGYyfulMJ86QsTAyw4TCtv5ECJD80vNrxh30KDNf6nGlj6ynDmTU0cCFltv2gJVQVOSNuPfR41F786Q+zLblp+8jzYbZA+0ite+qrr56ODRYRedw6hYo/+FWNAPVi+prefH0X8t7RnZ17044Jq2Vzs4p1lI9gL3Leook+r93Kg6FSmIQGOEbFiEMim7xHY+t+K5kfpuxfSskuq0qUZaI6gB4Fab131UibLvr6QDIerkDUOZ2OAZpxnreAqM0qcMKp03HO+6TKw==
```
