---
layout: post
title: 2020-10-10-【gitlab-ci实践】在线教育angular+springboot自动化编译部署
---

参考：基础知识：[【gitla-ci发布实践】SpringBoot的编译部署（基础篇）](./2020-09-15-【gitlab-ci实践】springboot的编译部署.md)

## 项目简介
在线教育是前后端分离的项目，
- 前端angular，https://gitlab.ccbjb.com.cn/ec7mongrp/trainsubgrp/educateweb
- 后端springboot，https://gitlab.ccbjb.com.cn/ec7mongrp/trainsubgrp/educateapp
- DB为mysql。https://gitlab.ccbjb.com.cn/ec7mongrp/trainsubgrp/mysql
- 视频服务器：nginx提供了视频链接。
- 视频录入机器：视频链接实时更新功能的客户端。https://gitlab.ccbjb.com.cn/ec7mongrp/trainsubgrp/js

### 公司内部的简单项目。所以服务器地址：
|       | runner | dev分支  | master分支 |
|-------|--------|--------|----------|
| web   | 3\.121 | 3\.123 | 3\.138   |
| app   | 3\.133 | 3\.123 | 3\.138   |
| DB    | \-     | 3\.123 | 3\.138   |
| 视频服务器 | \-     | 3\.139 | 3\.139   |
| 视频操作机 | \-     | 3.139      | 3\.104   |

::: tip
 App只允许3.104或3.139作为视频操作机。
:::

## 分支：
- dev分支：平时在dev分支上开发。既是开发环境又是测试环境。
- master分支：保护分支。平时不在上面开发。只允许dev分支merge到master。是生产环境。


### 1.dev分支
#### 1.1 dev分支-前端工程：

angular.json 在build和serve下增加“dev”的描述
```json{60-66,99-102}
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "cjb-educate": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/cjb-educate",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "aot": true,
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "extractCss": true,
              "namedChunks": false,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true,
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "2mb",
                  "maximumError": "5mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "6kb",
                  "maximumError": "10kb"
                }
              ]
            },
            "dev": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.dev.ts"
                }
              ],
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "extractCss": true,
              "namedChunks": false,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true,
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "2mb",
                  "maximumError": "5mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "6kb",
                  "maximumError": "10kb"
                }
              ]
            }
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "cjb-educate:build"
          },
          "configurations": {
            "production": {
              "browserTarget": "cjb-educate:build:production"
            },
            "dev": {
              "browserTarget": "cjb-educate:build:dev"
            }
          }
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "cjb-educate:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "src/test.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.spec.json",
            "karmaConfig": "karma.conf.js",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": [
              "tsconfig.app.json",
              "tsconfig.spec.json",
              "e2e/tsconfig.json"
            ],
            "exclude": [
              "**/node_modules/**"
            ]
          }
        },
        "e2e": {
          "builder": "@angular-devkit/build-angular:protractor",
          "options": {
            "protractorConfig": "e2e/protractor.conf.js",
            "devServerTarget": "cjb-educate:serve"
          },
          "configurations": {
            "production": {
              "devServerTarget": "cjb-educate:serve:production"
            }
          }
        }
      }
    }
  },
  "defaultProject": "cjb-educate",
  "cli": {
    "analytics": false
  }
}
```

gitlab-ci.yml 注意build使用了`ng build --configuration=${CI_COMMIT_REF_NAME}`
当dev分支的时候，就是`ng build --configuration=dev`
```yml{43,66}
variables:
  CLI_VERSION: 10.1.3

before_script:
  - cd ./educate-system
  - source .${CI_COMMIT_REF_NAME}.env

# this is testing for git ignore file cicd

#image: sonarsource/sonar-scanner-cli:latest

stages:
  - build
  - build-docker
  - test
  - deploy

#sonarqube-check:
# stage: test
#
# when: manual
#
# script:
#   - chmod 755 sonar.sh
#
#   - ./sonar.sh
#
# allow_failure: false
#
# only:
#   - master

build:
  image: docker.ccbjb.com.cn/trion/ng-cli
  stage: build
  # when: manual
  script:
   # - npm install node-sass --unsafe-perms
   # - npm install copy-webpack-plugin@4.5.2 --save-dev
   # - npm install
    - npm ci
   # - ng build
    - ng build --configuration=${CI_COMMIT_REF_NAME}
  artifacts:
    paths:
      - educate-system/dist/

build-docker:
  image: docker.ccbjb.com.cn/docker:19.03.12
  services:
    - name: docker:19.03.12-dind
      command: ["--insecure-registry=docker.ccbjb.com.cn"]
    #- name: docker.ccbjb.com.cn/mysql
  stage: build-docker
  before_script:
    - pwd
    - ls -a
    - cd ./educate-system
    - echo "${CI_COMMIT_REF_NAME}"
    - cat .${CI_COMMIT_REF_NAME}.env
    - source .${CI_COMMIT_REF_NAME}.env

  script:
    - docker info
    - echo $DOCKER_PASSWORD | docker login -u$DOCKER_USER docker.ccbjb.com.cn  --password-stdin
    - docker build --build-arg SPRING_ACTIVE_PROFILE=$SPRING_ACTIVE_PROFILE -t $DOCKER_REPO .
    - docker push $DOCKER_REPO

# login into another server docker pull and run image to Container.
deploy:
  image: docker.ccbjb.com.cn/ubuntu:latest
  stage: deploy
  before_script:
    - cd ./educate-system
    - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )'
    - eval $(ssh-agent -s)
    - ssh-add <(echo "$SSH_PRIVATE_KEY")
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
    - echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config
    - source .${CI_COMMIT_REF_NAME}.env
  script:
    - ssh root@$SERVER_IP "docker login -u $DOCKER_USER -p $DOCKER_PASSWORD docker.ccbjb.com.cn; docker stop $APP_NAME; docker system prune -a -f; docker pull $DOCKER_REPO; docker container run -d --name $APP_NAME -p $PORT:8080 -e SPRING_PROFILES_ACTIVE=$SPRING_ACTIVE_PROFILE $DOCKER_REPO; docker logout"

```

Dockerfile
```dockerfile
FROM trion/nginx-angular
COPY dist/cjb-educate/ /usr/share/nginx/html/
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
```

.dev.env 承接gitlab环境变量的值。
```properties
export SPRING_ACTIVE_PROFILE='dev'
export DOCKER_REPO='docker.ccbjb.com.cn/library/educateweb:dev1.1'
export APP_NAME='educateweb_dev'
export PORT='80'
export SERVER_IP="$DEV_WEB_SERVER_IP"
export SERVER_SSH_KEY="$SSH_PRIVATE_KEY"
```

![](/docs/images/2020-10-10-16-19-24.png)

::: warning
- environment里传递变量还挺困难。
- 不行就得写死固定值。
:::

##### environments/
###### 创建environment.dev.ts，用作测试环境
```ts
export const environment = {
  baseUrl:'http://192.168.3.123:8080',
  production: true
};
```
###### 创建environment.prod.ts，用作生产环境
```ts
export const environment = {
  baseUrl:'http://192.168.3.138:8080',
  production: true
};
```
###### 既存environment.ts ,用来本地测试
```ts
export const environment = {
  baseUrl:'http://localhost:8080',
  production: false
};
```

todo.service.ts中使用了环境变量
```ts
import { environment } from 'src/environments/environment'

@Injectable()
export class TodoService {
  public flg: boolean = environment.production;

  private searchUrl = environment.baseUrl + '/search';
  private allListhUrl = environment.baseUrl + '/getAllList';
  todos: Todo[] = []; // 任务列表
```

#### 1.2 dev分支 giltab web前端
![](/docs/images/2020-10-10-17-34-58.png)

![](/docs/images/2020-10-10-17-35-23.png)
使用了192.168.3.121上的Runner。

gitlab pipeline
![](/docs/images/2020-10-10-17-36-04.png)


#### 1.3 dev后端工程

.dev.env
```properties
export SPRING_ACTIVE_PROFILE='dev'
export DOCKER_REPO='docker.ccbjb.com.cn/library/educateapp:dev1.1'
export APP_NAME='educateapp_dev'
export PORT='8080'
export SERVER_IP="$DEV_APP_SERVER_IP"
export SERVER_SSH_KEY="$SSH_PRIVATE_KEY"
export DB_SERVER_IP="$DEV_DB_SERVER_IP"
export DB_SERVER_POINT="$DEV_DB_SERVER_POINT"
export DB_USER="$DEV_DB_USER"
export DB_PASSWORD="$DEV_DB_PASSWORD"
```

Dockerfile
```dockerfile
#FROM docker.ccbjb.com.cn/maven:3.6.3-jdk-11-slim AS MAVEN_BUILD
FROM docker.ccbjb.com.cn/maven:3.5.2-jdk-8-alpine AS MAVEN_BUILD
ARG SPRING_ACTIVE_PROFILE
COPY pom.xml /build/
COPY src /build/src/
COPY .m2 /build/.m2/
WORKDIR /build
RUN mvn -s .m2/settings.xml --batch-mode clean install -Dspring.profiles.active=$SPRING_ACTIVE_PROFILE 
#-DDB_SERVER_IP=$DB_SERVER_IP -DDB_SERVER_POINT=$DB_SERVER_POINT -DDB_USER=$DB_USER -DDB_PASSWORD=$DB_PASSWORD 
#&& mvn -s .m2/settings.xml --batch-mode package -B -e -Dspring.profiles.active=$SPRING_ACTIVE_PROFILE
RUN ls  /build/target/
#FROM docker.ccbjb.com.cn/openjdk:11-slim
FROM docker.ccbjb.com.cn/openjdk:8-alpine
WORKDIR /app
COPY --from=MAVEN_BUILD /build/target/*-exec.jar /app/educateapp.jar
ENTRYPOINT ["java", "-jar", "educateapp.jar"]
```

.gitlab-ci.yml
```yml
stages:
  - build
  - deploy
  
#variables:
#  MAVEN_CLI_OPTS: "-s .m2/settings.xml --batch-mode"
#  DOCKER_TLS_CERTDIR: "/certs"

build:
  image: docker.ccbjb.com.cn/docker:19.03.12
  services:
    - name: docker:19.03.12-dind
      command: ["--insecure-registry=docker.ccbjb.com.cn"]
    - name: docker.ccbjb.com.cn/mysql
  stage: build
  before_script:
    - pwd
    - ls -a
    - cd ./cjb_educate
    - source .${CI_COMMIT_REF_NAME}.env
  script:
    - docker info
    - echo $DOCKER_PASSWORD | docker login -u$DOCKER_USER docker.ccbjb.com.cn  --password-stdin
    - docker build --build-arg SPRING_ACTIVE_PROFILE=$SPRING_ACTIVE_PROFILE -t $DOCKER_REPO .
    - docker push $DOCKER_REPO 
  tags:
    - "133"
    
# login into another server，docker pull and run image to Container.
deploy:
  image: docker.ccbjb.com.cn/ubuntu:latest
  stage: deploy
  before_script:
    - cd ./cjb_educate
    - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )'
    - eval $(ssh-agent -s)
    - ssh-add <(echo "$SSH_PRIVATE_KEY")
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
    - echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config
    - source .${CI_COMMIT_REF_NAME}.env
  script:
    - echo ${DB_SERVER_IP} ${DB_SERVER_POINT} ${DB_USER}  ${DB_PASSWORD} 
    - ssh root@$SERVER_IP "docker login -u $DOCKER_USER -p $DOCKER_PASSWORD docker.ccbjb.com.cn; docker stop $APP_NAME; docker system prune -a -f; docker pull $DOCKER_REPO; docker container run -d --name $APP_NAME -p $PORT:8080 -e SPRING_PROFILES_ACTIVE=$SPRING_ACTIVE_PROFILE -e DB_SERVER_IP=${DB_SERVER_IP} -e DB_SERVER_POINT=${DB_SERVER_POINT} -e DB_USER=${DB_USER} -e DB_PASSWORD=${DB_PASSWORD}  $DOCKER_REPO; docker logout"
  tags:
    - "133"
```

##### src/resource/配置环境变量
###### application-dev.properties
```properties
server.port=8080

############################################################
# mysql
############################################################
spring.datasource.url=jdbc:mysql://${DB_SERVER_IP}:${DB_SERVER_POINT}/educate
spring.datasource.username=${DB_USER}
spring.datasource.password=${DB_PASSWORD}
spring.datasource.driverClassName=com.mysql.jdbc.Driver
spring.mvc.servlet.load-on-startup=100

############################################################
# mybatis
############################################################
mybatis.typeAliasesPackage=com.example.demo.bean
mybatis.mapperLocations=classpath:mapper/*Mapper.xml

############################################################
# Others
############################################################
educate.allowIPsendJson=192.168.3.104,192.168.3.139
educate.url=http://192.168.3.139
#educate.logpath="message.log";  use log4j

############################################################
# Logging 
# https://www.jianshu.com/p/1fa12b92d5c4
############################################################
debug=false 
logging.level.root= INFO
logging.level.org.springframework.security= ERROR
logging.level.org.springframework.web= ERROR
logging.level.org.hibernate= ERROR
logging.level.org.apache.commons.dbcp2= ERROR 
logging.file =  ./logs/mylogfile.log 
# logging.pattern.console= %d{yyyy-MMM-dd HH:mm:ss.SSS} %-5level [%thread] %logger{15} - %msg%n
logging.pattern.file= %d{yyyy-MMM-dd HH:mm:ss.SSS} %-5level [%thread] %logger{15} - %msg%n
logging.pattern.console= %d{yyyy-MMM-dd HH:mm:ss.SSS} %-5level [%thread] %logger{15} - %msg%n  
```

###### application-prod.properties 和 dev一样。
```properties
server.port=8080

############################################################
# mysql
############################################################
spring.datasource.url=jdbc:mysql://${DB_SERVER_IP}:${DB_SERVER_POINT}/educate
spring.datasource.username=${DB_USER}
spring.datasource.password=${DB_PASSWORD}
spring.datasource.driverClassName=com.mysql.jdbc.Driver
spring.mvc.servlet.load-on-startup=100

############################################################
# mybatis
############################################################
mybatis.typeAliasesPackage=com.example.demo.bean
mybatis.mapperLocations=classpath:mapper/*Mapper.xml

############################################################
# Others
############################################################
educate.allowIPsendJson=192.168.3.104,192.168.3.139
educate.url=http://192.168.3.139
#educate.logpath="message.log";  use log4j

############################################################
# Logging 
# https://www.jianshu.com/p/1fa12b92d5c4
############################################################
debug=false 
logging.level.root= INFO
logging.level.org.springframework.security= ERROR
logging.level.org.springframework.web= ERROR
logging.level.org.hibernate= ERROR
logging.level.org.apache.commons.dbcp2= ERROR 
logging.file =  ./logs/mylogfile.log 
# logging.pattern.console= %d{yyyy-MMM-dd HH:mm:ss.SSS} %-5level [%thread] %logger{15} - %msg%n
logging.pattern.file= %d{yyyy-MMM-dd HH:mm:ss.SSS} %-5level [%thread] %logger{15} - %msg%n
logging.pattern.console= %d{yyyy-MMM-dd HH:mm:ss.SSS} %-5level [%thread] %logger{15} - %msg%n  
```

###### application.properties 开发用。可以写死。
```properties
server.port=8080

############################################################
# mysql
############################################################
spring.datasource.url=jdbc:mysql://192.168.3.123:3306/educate
spring.datasource.username=root
spring.datasource.password=123.com
spring.datasource.driverClassName=com.mysql.jdbc.Driver
spring.mvc.servlet.load-on-startup=100

############################################################
# mybatis
############################################################
mybatis.typeAliasesPackage=com.example.demo.bean
mybatis.mapperLocations=classpath:mapper/*Mapper.xml

############################################################
# Others
############################################################
educate.allowIPsendJson=192.168.3.104,192.168.3.139
educate.url=http://192.168.3.139
#educate.logpath="message.log";  use log4j

############################################################
# Logging 
# https://www.jianshu.com/p/1fa12b92d5c4
############################################################
debug=false 
logging.level.root= INFO
logging.level.org.springframework.security= ERROR
logging.level.org.springframework.web= ERROR
logging.level.org.hibernate= ERROR
logging.level.org.apache.commons.dbcp2= ERROR 
logging.file =  ./logs/mylogfile.log 
# logging.pattern.console= %d{yyyy-MMM-dd HH:mm:ss.SSS} %-5level [%thread] %logger{15} - %msg%n
logging.pattern.file= %d{yyyy-MMM-dd HH:mm:ss.SSS} %-5level [%thread] %logger{15} - %msg%n
logging.pattern.console= %d{yyyy-MMM-dd HH:mm:ss.SSS} %-5level [%thread] %logger{15} - %msg%n  
```

pom.xml
```xml{25-40}
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<groupId>cjb</groupId>
	<artifactId>educateapp</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>educateapp</name>
	<description>educateapp</description>
	<packaging>jar</packaging>

	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.1.6.RELEASE</version>
		<relativePath />
	</parent>

	<properties>
		<java-version>1.8</java-version>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
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
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter</artifactId>
		</dependency>

		<!-- 添加fastjson 支持 -->
		<dependency>
			<groupId>com.alibaba</groupId>
			<artifactId>fastjson</artifactId>
			<version>1.2.15</version>
		</dependency>

		<!-- 使用freemaker模板 -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-freemarker</artifactId>
		</dependency>

		<!--JDBC -->
		<dependency>
			<groupId>mysql</groupId>
			<artifactId>mysql-connector-java</artifactId>
			<version>5.1.6</version><!--$NO-MVN-MAN-VER$ -->
		</dependency>

		<dependency>
			<groupId>javax.servlet</groupId>
			<artifactId>javax.servlet-api</artifactId>
		</dependency>

		<dependency>
			<groupId>org.mybatis</groupId>
			<artifactId>mybatis</artifactId>
			<version>3.4.5</version>
		</dependency>

		<dependency>
			<groupId>org.mybatis</groupId>
			<artifactId>mybatis-spring</artifactId>
			<version>1.3.1</version>
		</dependency>

		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-webmvc</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-tx</artifactId>
		</dependency>

		<dependency>
			<groupId>org.apache.logging.log4j</groupId>
			<artifactId>log4j-core</artifactId>
		</dependency>

		<dependency>
			<groupId>com.alibaba</groupId>
			<artifactId>druid</artifactId>
			<version>1.1.6</version>
		</dependency>

		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-jdbc</artifactId>
		</dependency>

		<dependency>
			<groupId>org.mybatis.spring.boot</groupId>
			<artifactId>mybatis-spring-boot-starter</artifactId>
			<version>1.2.0</version>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
			<exclusions>
				<exclusion>
					<groupId>org.springframework.boot</groupId>
					<artifactId>spring-boot-starter-tomcat</artifactId>
				</exclusion>
			</exclusions>
		</dependency>

		<!-- tomcat支持 -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-tomcat</artifactId>
			<scope>provided</scope>
		</dependency>

		<dependency>
			<groupId>org.apache.tomcat.embed</groupId>
			<artifactId>tomcat-embed-jasper</artifactId>
			<scope>provided</scope>
		</dependency>

	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>

			<!-- 引入java编译器插件 -->
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-compiler-plugin</artifactId>
				<configuration>
					<source>1.8</source>
					<target>1.8</target>
				</configuration>
			</plugin>

			<!-- 资源文件拷贝插件 -->
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-resources-plugin</artifactId>
				<configuration>
					<encoding>UTF-8</encoding>
				</configuration>
			</plugin>

			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
				<dependencies>
					<dependency>
						<groupId>org.springframework</groupId>
						<artifactId>springloaded</artifactId>
						<version>1.2.3.RELEASE</version>
					</dependency>
				</dependencies>
				<executions>
					<execution>
						<goals>
							<goal>repackage</goal>
						</goals>
					</execution>

				</executions>
				<configuration>
					<classifier>exec</classifier>
				</configuration>
			</plugin>

			<plugin>
				<artifactId>maven-war-plugin</artifactId>
				<configuration>
					<failOnMissingWebXml>false</failOnMissingWebXml>
					<warName>checkroom</warName>
				</configuration>
			</plugin>

			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-surefire-plugin</artifactId>
				<configuration>
					<skip>true</skip>
				</configuration>
			</plugin>
		</plugins>
	</build>

</project>
```


.m2/settings.xml
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

#### 1.4 gitlab 后端app设置

![](/docs/images/2020-10-10-17-46-57.png)
` on 133 docker excutor docker:19.03.12 for educateApp 7dKFGzti`

![](/docs/images/2020-10-10-17-48-45.png)

注意所有变量都要去“保护变量”选择框。保证dev分支可以使用。
![](/docs/images/2020-10-10-17-49-01.png)


![](/docs/images/2020-10-10-17-49-56.png)


### 2. master分支

#### 2.1 master前端
src/environments/environment.prod.ts与dev分支的完全相同

.master.env
```properties
export SPRING_ACTIVE_PROFILE='prod'
export DOCKER_REPO='docker.ccbjb.com.cn/library/educateweb:1.0'
export APP_NAME='educateweb_prod'
export PORT='80'
export SERVER_IP="$PROD_WEB_SERVER_IP"
export SERVER_SSH_KEY="$SSH_PRIVATE_KEY"
```

Dockfile 与dev分支完全相同
```dockerfile
FROM trion/nginx-angular
COPY dist/cjb-educate/ /usr/share/nginx/html/
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
```


.gitlab-ci.yml
```yml{43}
variables:
  CLI_VERSION: 10.1.3

before_script:
  - cd ./educate-system


# this is testing for git ignore file cicd

#image: sonarsource/sonar-scanner-cli:latest

stages:
  - build
  - build-docker
  - test
  - deploy

#sonarqube-check:
# stage: test
#
# when: manual
#
# script:
#   - chmod 755 sonar.sh
#
#   - ./sonar.sh
#
# allow_failure: false
#
# only:
#   - master

build:
  image: docker.ccbjb.com.cn/trion/ng-cli
  stage: build
  # when: manual
  script:
   # - npm install node-sass --unsafe-perms
   # - npm install copy-webpack-plugin@4.5.2 --save-dev
   # - npm install
    - npm ci
   # - ng build
    - ng build --prod --configuration=production
  artifacts:
    paths:
      - educate-system/dist/
  only:
    - master

build-docker:
  image: docker.ccbjb.com.cn/docker:19.03.12
  services:
    - name: docker:19.03.12-dind
      command: ["--insecure-registry=docker.ccbjb.com.cn"]
    #- name: docker.ccbjb.com.cn/mysql
  stage: build-docker
  before_script:
    - pwd
    - ls -a
    - cd ./educate-system
    - source .${CI_COMMIT_REF_NAME}.env
  script:
    - docker info
    - echo $DOCKER_PASSWORD | docker login -u$DOCKER_USER docker.ccbjb.com.cn  --password-stdin
    - docker build --build-arg SPRING_ACTIVE_PROFILE=$SPRING_ACTIVE_PROFILE -t $DOCKER_REPO .
    - docker push $DOCKER_REPO

# login into another server docker pull and run image to Container.
deploy:
  image: docker.ccbjb.com.cn/ubuntu:latest
  stage: deploy
  before_script:
    - cd ./educate-system
    - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )'
    - eval $(ssh-agent -s)
    - ssh-add <(echo "$SSH_PRIVATE_KEY")
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
    - echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config
    - source .${CI_COMMIT_REF_NAME}.env
  script:
    - ssh root@$SERVER_IP "docker login -u $DOCKER_USER -p $DOCKER_PASSWORD docker.ccbjb.com.cn; docker stop $APP_NAME; docker system prune -a -f; docker pull $DOCKER_REPO; docker container run -d --name $APP_NAME -p $PORT:8080 -e SPRING_PROFILES_ACTIVE=$SPRING_ACTIVE_PROFILE $DOCKER_REPO; docker logout"

```

angular.json与dev保持一致吧。

::: error 注意：
- yarn.lock ，pakcage-lock.json删掉之后，npm install之后，再ng build会出错。
- 本地编译需要`ng build --configuration production`
- 本地运行需要`ng serve --configuration production`
:::

##### 2.2 master 前端gitlab配置
gitlab上的配置与分支无关，所有分支都是相同的配置。

##### 2.3 master分支 后端
- .master.env
```properties
export SPRING_ACTIVE_PROFILE='prod'
export DOCKER_REPO='docker.ccbjb.com.cn/library/educateapp:1.0'
export APP_NAME='educateapp_prod'
export PORT='8080'
export SERVER_IP="$PROD_APP_SERVER_IP"
export SERVER_SSH_KEY="$SSH_PRIVATE_KEY"
export DB_SERVER_IP="$DEV_DB_SERVER_IP"
export DB_SERVER_POINT="$DEV_DB_SERVER_POINT"
export DB_USER="$DEV_DB_USER"
export DB_PASSWORD="$DEV_DB_PASSWORD"
```

- Dockerfile与dev分支相同
- .m2与dev分支相同
- pom.xml与dev分支相同
- .gitlab-ci.yml也与dev分支相同
- src/resources/appliation.properties也与dev分支相同

##### 2.4 master 后端gitlab配置
gitlab上的配置与分支无关，所有分支都是相同的配置。


### 3. mysql配置
docker-compose.yml
```yml
version: '3'
services:
  mysql:
    restart: always
    image: mysql:5.7.16
    container_name: mysql
    volumes:
      - ./mydir:/mydir
      - /usr/local/mysql/datadir:/var/lib/mysql
      - ./conf/my.cnf:/etc/my.cnf
      - ./source:/docker-entrypoint-initdb.d # .sql to be loaded
    environment:
      - "MYSQL_ROOT_PASSWORD=123.com"
      - "MYSQL_DATABASE=educate"
      - "TZ=Asia/Shanghai"
    ports:
      - 3306:3306
```

conf/my.cnf
```properties
[mysqld]
user=root
default-storage-engine=INNODB
#character-set-server=utf8
character-set-client-handshake=FALSE
character-set-server=utf8mb4
collation-server=utf8mb4_unicode_ci
init_connect='SET NAMES utf8mb4'
[client]
#default-character-set=utf8
default-character-set=utf8mb4
[mysql]
#default-character-set=utf8
default-character-set=utf8mb4
```

source/educatebak.sql
```sql
/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 5.0.81-community-nt : Database - educate
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`educate` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `educate`;

/*Table structure for table `category` */

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `category_id` int(10) NOT NULL,
  `category_name` varchar(500) NOT NULL,
  PRIMARY KEY  (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `category` */

/*Table structure for table `course_list` */

DROP TABLE IF EXISTS `course_list`;

CREATE TABLE `course_list` (
  `category_id` int(10) NOT NULL,
  `course_name` varchar(500) NOT NULL,
  `detail_id` int(10) NOT NULL,
  PRIMARY KEY  (`category_id`,`detail_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `course_list` */

/*Table structure for table `detail` */

DROP TABLE IF EXISTS `detail`;

CREATE TABLE `detail` (
  `detail_id` int(10) NOT NULL,
  `class_name` varchar(500) NOT NULL,
  `video_id` int(10) NOT NULL,
  PRIMARY KEY  (`detail_id`,`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `detail` */

/*Table structure for table `discuss` */

DROP TABLE IF EXISTS `discuss`;

CREATE TABLE `discuss` (
  `video_path_id` int(10) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `discuss_id` int(10) NOT NULL,
  PRIMARY KEY  (`video_path_id`,`discuss_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `discuss` */

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `status` int(1) NOT NULL,
  `user_name` char(100) NOT NULL,
  `password` char(100) default NULL,
  PRIMARY KEY  (`status`,`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`status`,`user_name`,`password`) values 
(0,'liming','234567'),
(1,'wangping','123456');

/*Table structure for table `video` */

DROP TABLE IF EXISTS `video`;

CREATE TABLE `video` (
  `video_id` int(10) NOT NULL,
  `video_name` varchar(200) NOT NULL,
  `video_path` varchar(500) NOT NULL,
  `video_path_id` int(10) NOT NULL,
  PRIMARY KEY  (`video_id`,`video_path_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `video` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
```

## 4. 视频操作机器上的json发送程序

临时用这么个功能方便更新DB里的链接目录。
所以没有使用gitlab-ci

### 4.1 全件手动发送

- 首先，生成全件信息。把192.168.3.103上的目录遍历出来生成json文件
`node Cjb_video_generate_jsonfile.js`
- 然后，把该文件发送给服务器(改改里面的ip指向app服务器)
`node sendAllJsonfile.js`

### 4.2 实时监控
启动前改改option.js里的服务器ip配置。
在3.104（视频操作机)上启动`node --unhandled-rejections=none Cjb_video_monitor.js` 
