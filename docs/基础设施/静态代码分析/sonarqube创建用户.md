---
layout: post
title: 【sonarqube创建用户和项目，项目中如何使用sonarqube分析】
---

## 创建用户
web登录上之后，使用admin登录。别使用gitlab用户登录。
- 进入 权限-》用户
![](/docs/images/2021-12-21-17-40-08.png)
创建好之后，马上就能登录。

## 用户ｌｏｇｉｎ之后可以创建新的项目

创建项目
![](/docs/images/2021-12-21-17-41-42.png)

![](/docs/images/2021-12-21-17-41-56.png)


## 使用sonarqube
### 为项目创建令牌
![](/docs/images/2021-12-21-17-43-05.png)
![](/docs/images/2021-12-21-17-43-17.png)
点击继续
![](/docs/images/2021-12-21-17-43-30.png)
![](/docs/images/2021-12-21-17-43-40.png)
选择java和gradle
![](/docs/images/2021-12-21-17-44-01.png)

```
plugins {
  id "org.sonarqube" version "2.7"
}
```
执行下列命令,windows的话直接执行换成gradle
```
./gradlew sonarqube  -Dsonar.projectKey=srxCodingRulePractise  -Dsonar.host.url=http://192.168.3.131:9000   -Dsonar.login=3271351fca4c82740c95a91fb28e3f01c80e2bba
```
然后登录到sonarqube上，点开自己的项目，查看检查结果。

