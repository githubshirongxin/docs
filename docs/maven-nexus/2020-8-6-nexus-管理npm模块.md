---
layout: post
title: 【nexus-npm仓库配置使用】
---


## 1. 在192.168.3.124的nexue上定义三个npm库。
参考官方文档：https://help.sonatype.com/repomanager2/node-packaged-modules-and-npm-registries
并增加REALM，增加npm Bearer Token Realm, Docker Bearer Token Realm,Conan Bearer Token Realm

::: warning
 必须增加npm Bearer Token Realm,否则会提示
npm ERR! code E401
npm ERR! Unable to authenticate, need: BASIC realm="Sonatype Nexus Repository Manager"
:::


## 2. 在192.168.3.122上安装nodejs测试用
https://www.cnblogs.com/Tanwheey/p/11984547.html

下载最新的linux版本二进制
https://nodejs.org/en/download/

```bash
scp node-v12.18.3-linux-x64.tar.xz root@192.168.3.122:
mkdir -p /usr/local/lib/nodejs
tar -xJvf node-v12.18.3-linux-x64.tar.xz -C /usr/local/lib/nodejs 
vi /etc/profile
## 追加一行
export PATH=/usr/local/lib/nodejs/node-v12.18.3-linux-x64/bin:$PATH
```

```bash
source /etc/profile
node -v
npm version
npx -v
```

## 3 . 在192.168.3.122上配置npm
### 3.1 首先设置一下拉取用的库为代理库或group库
```bash
进入安装时用户的主目录：
cd /root/
ls -al  //能够看到.npmrc隐藏文件
vi /root/.npmrc
# 增加一行 这不是必须的，默认npm install的时候会从这里下载，publish的时候得在命令行指定npm-internal库。
registry = http://192.168.3.124:8081/repository/npm-group/
```

::: warning
.npmrc 的修改不是必须的，仅仅是为了方便。
因为完全可以在命令行指定registry。
npm install xxx 之前应为了解现在用的是什么库，因为
:::

::: danger
如果不是npm-group或npm-proxy，npm install xxx会报错
所以拉取之前请确认库包括proxy库
:::


### 3.2 测试拉取
#### 测试拉取 1】 ： 在192.168.3.122上 npm install

// 这样的设置会覆盖.npmrc设置
`npm config set registry http://192.168.3.124:8081/repository/npm-group/`

//不确定的话可以执行get看看
`npm config get registry`

npm install vue ,成功安装到122.并且repository上也有了（安装之前是空的）。
```bash
[root@centos122 npm]# npm install vue
npm notice created a lockfile as package-lock.json. You should commit this file. + vue@2.6.11
added 1 package from 1 contributor in 15.962s
```
![](/docs/images/2020-08-06-13-19-13.png)


#### 【测试拉取 2】：加上 --loglevel info

明显能够看到是从npm-group库中下载的。
同时，私服也缓存了该包。
以后别人再下载就快了。

```bash
# npm --loglevel info install grunt
npm http fetch GET 200 http://192.168.3.124:8081/repository/npm-group/cache-base/
-/cache-base-1.0.1.tgz 326ms                                                     
...
npm info lifecycle nopt@3.0.6~postinstall: nopt@3.0.6
npm info ok
[root@centos122 npm]#
```

---

## 4.  Publishing npm Packages 

### 4.1 两种发布方法
方案1：命令行指定发布位置为“npm内部库”！
`npm publish --registry http://192.168.3.124:8081/repository/npm-internal/`

//不确定的话可以执行get看看
`npm config get registry`

方案2：修改package.json
"publishConfig" : {
    "registry" : "http://192.168.3.124:8081/repository/npm-internal/"
},

##### 创建一个测试项目
```
mkdir z-tools
cd z-tools
npm init
```
// vi index.js
```
!function(){
  console.log(`这是引入的包入口`)
}()
```

// 修改package.json 增加一行，注意发布到**npm内部库！**
```
"publishConfig": {
    "registry": "http://192.168.3.124:8081/repository/npm-internal/"
  },
```


### 4.2 需要配置认证信息

#### 首先，加密用户名密码对
Linux：
`echo -n 'admin:admin123' | openssl base64`

得到结果
```
-----BEGIN CERTIFICATE-----
YWRtaW46YWRtaW4xMjM=
-----END CERTIFICATE----- 
```
##### added to the .npmrc file:
vim /root/.npmrc

::: danger
 registry 后的url必须以/结束，否则会截掉最后的npm-internal
:::

```bash
registry=http://192.168.3.124:8081/repository/npm-internal/
//192.168.3.124:8081/repository/:_authToken=NpmToken.0f6396e0-605e-3820-8656-2f62e1c4526b
//192.168.3.124:8081/repository/npm-group/:_authToken=NpmToken.0f6396e0-605e-3820-8656-2f62e1c4526b
init.author.name=shirx
init.author.email=shirx@ccbjb.com.cn
init.author.url=https://shirongxin.gitlab.io/docs
email=shirx@ccbjb.com.cn
always-auth=true
_auth="YWRtaW46YWRtaW4xMjM="
```
##### publish

// 后面 registry指定与否并不重要
`npm publish --registry http://192.168.3.124:8081/repository/npm-internal/`

npm --registry的使用方法。
参考：https://docs.npmjs.com/misc/registry#i-dont-want-my-package-published-in-the-official-registry-its-private


::: tip
`npm publish` 就可以，因为在~/.npmrc中已经指定了registery
:::

//报错
```
npm ERR! code E401
npm ERR! Unable to authenticate,
 need: BASIC realm="Sonatype Nexus Repository Manager"

18 http fetch PUT 401 
http://192.168.3.124:8081/repository/npm-internal/srxztool
```

参考：https://stackoverflow.com/questions/57279087/authentication-error-on-publishing-to-private-npm-repository-on-nexus

::: warning
检查：必须增加npm Bearer Token Realm,否则会提示
npm ERR! code E401
npm ERR! Unable to authenticate, need: BASIC realm="Sonatype Nexus Repository Manager"
:::

### Q: 去掉项目package.json中的register信息，去掉.npmrc的register和auth信息。仅仅靠命令npm adduser，npm publish可以吗？
A: 可以。
清空.npmrc ,去掉package.json中register的信息。

```bash
[root@centos122 z-tool]# npm config get registry
http://192.168.3.124:8081/repository/npm-internal/

[root@centos122 z-tool]# npm login
Username: admin
Password:
Email: (this IS public) shirx@ccbjb.com.cn
Logged in as admin on http://192.168.3.124:8081/repository/npm-internal/.

[root@centos122 z-tool]# npm publish
npm notice
npm notice �  srxztool@1.0.0
npm notice === Tarball Contents ===
npm notice 393B package.json.bak
npm notice 59B  index.js
npm notice 298B package.json
npm notice === Tarball Details ===
npm notice name:          srxztool
npm notice version:       1.0.0
npm notice package size:  480 B
npm notice unpacked size: 750 B
npm notice shasum:        bc5dc7fb2596a6dae2320d9b84f005da898e5b9d
npm notice integrity:     sha512-OHlaBEIsh5o7U[...]gLLQ0iR9xSV4Q==
npm notice total files:   3
npm notice
+ srxztool@1.0.0
[root@centos122 z-tool]#
```
可见，完全不必配置.npmrc，以及package.json.

### Q: npm adduser 或 npm login 之后才可以npm publish吗
A:
```bash
[root@centos122 z-tool]# npm login
Username: admin
Password:
Email: (this IS public) shirx@ccbjb.com.cn
Logged in as admin on http://192.168.3.124:8081/repository/npm-internal/.
[root@centos122 z-tool]# npm whoami
admin
[root@centos122 z-tool]#

[root@centos122 z-tool]# npm logout
[root@centos122 z-tool]# npm whoami
npm ERR! code ENEEDAUTH
npm ERR! need auth This command requires you to be logged in.
npm ERR! need auth You need to authorize this machine using `npm adduser`

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2020-08-07T03_32_42_269Z-debug.log


[root@centos122 z-tool]# npm config get registry
http://192.168.3.124:8081/repository/npm-internal/
[root@centos122 z-tool]# npm publish
npm notice
npm notice �  srxztool@1.0.0
npm notice === Tarball Contents ===
npm notice 393B package.json.bak
npm notice 59B  index.js
npm notice 298B package.json
npm notice === Tarball Details ===
npm notice name:          srxztool
npm notice version:       1.0.0
npm notice package size:  480 B
npm notice unpacked size: 750 B
npm notice shasum:        bc5dc7fb2596a6dae2320d9b84f005da898e5b9d
npm notice integrity:     sha512-OHlaBEIsh5o7U[...]gLLQ0iR9xSV4Q==
npm notice total files:   3
npm notice
npm ERR! code E401
npm ERR! Unable to authenticate, need: BASIC realm="Sonatype Nexus Repository Manager"

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2020-08-07T03_34_23_369Z-debug.log
[root@centos122 z-tool]#
```

不`npm login`或`npm adduser`，绝对不让`npm publish`


### Q：不使用npm login，把认证信息写到.npmrc，可以npm publish吗？
A:
```bash
[root@centos122 npm]# cat /root/.npmrc
registry = http://192.168.3.124:8081/repository/npm-internal/
always-auth=true
_auth=YWRtaW46YWRtaW4xMjM=
[root@centos122 npm]#
[root@centos122 npm]# npm whoami
admin
[root@centos122 npm]# npm logout
[root@centos122 npm]# npm config get registry
http://192.168.3.124:8081/repository/npm-internal/
[root@centos122 npm]#
[root@centos122 z-tool]# npm publish
npm notice
npm notice �  srxztool@1.0.0
npm notice === Tarball Contents ===
npm notice 393B package.json.bak
npm notice 59B  index.js
npm notice 298B package.json
npm notice === Tarball Details ===
npm notice name:          srxztool
npm notice version:       1.0.0
npm notice package size:  480 B
npm notice unpacked size: 750 B
npm notice shasum:        bc5dc7fb2596a6dae2320d9b84f005da898e5b9d
npm notice integrity:     sha512-OHlaBEIsh5o7U[...]gLLQ0iR9xSV4Q==
npm notice total files:   3
npm notice
+ srxztool@1.0.0
[root@centos122 z-tool]#
```

::: tip
可以的，不用npm login，需要在~/.npmrc 中设置auth。
:::


### Q：npm login的邮件地址可以随便写吗？
```
[root@centos122 z-tool]# npm login
Username: mengxt
Password:
Email: (this IS public) sldfjsf@ccbjb.com.cn
Logged in as mengxt on http://192.168.3.124:8081/repository/npm-internal/.
[root@centos122 z-tool]#
```

随便写也可以登陆。


### Q：npm adduser可以增加一个不存在的用户吗？

不可以

```bash
[root@centos122 z-tool]# npm adduser
Username: maoantao
Password:
Email: (this IS public) maoat@ccbjb.com.cn
npm ERR! code E401
npm ERR! 401 Unauthorized - PUT http://192.168.3.124:8081/repository/npm-internal/-/user/org.couchdb.user:maoantao - Bad username or password

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2020-08-07T03_22_24_114Z-debug.log
[root@centos122 z-tool]#
```
不行，再试试

```bash
[root@centos122 z-tool]# npm adduser --registry="http://192.168.3.124:8081/repository/npm-internal/"
Username: maoat
Password:
Email: (this IS public) maoat@ccbjb.com.cn
npm ERR! code E401
npm ERR! 401 Unauthorized - PUT http://192.168.3.124:8081/repository/npm-internal/-/user/org.couchdb.user:maoat - Bad username or password

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2020-08-07T03_24_03_215Z-debug.log
[root@centos122 z-tool]#
```
也不行。

难道不能增加用户吗？

试试，nexus上已经存在的用户来adduser
```bash
[root@centos122 z-tool]# npm adduser
Username: mengxt
Password:
Email: (this IS public) mengxt@ccbjb.com.cn
Logged in as mengxt on http://192.168.3.124:8081/repository/npm-internal/.
[root@centos122 z-tool]#
```

::: tip
 npm adduser只能增加nexus已有的用户。那还叫什么adduser呢？和npm login没有区别了。
:::

```bash
[root@centos122 z-tool]# npm login
Username: mengxt
Password:
Email: (this IS public) mengxt@ccbjb.com.cn
Logged in as mengxt on http://192.168.3.124:8081/repository/npm-internal/.
[root@centos122 z-tool]#
```


---

### 4.4 win10上试试发布。

##### Windows：
.npmrc目录：C:\Users\用户名\.npmrc
vi C:\Users\用户名\.npmrc

windows:
in.txt:`admin:admin123`
`c:\certutil /encode in.txt out.txt`

同上，略。




