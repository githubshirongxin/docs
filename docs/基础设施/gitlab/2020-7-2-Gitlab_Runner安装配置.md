---
layout: post
title: 【GitlabRunner安装配置】
---

192.168.3.112

## 1, install runner 
参考：https://docs.gitlab.com/runner/install/linux-repository.html

```
 curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.rpm.sh | sudo bash

 sudo yum install gitlab-runner
```
## 2, regist runner
 参考：https://docs.gitlab.com/runner/register/index.html

 运行以下命令：
`sudo gitlab-runner register`

#### 输入您的GitLab实例URL：
```
Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com )
https://gitlab.ccbjb.com.cn
```

#### 输入您获得的令牌来注册Runner：
从这里获得https://gitlab.ccbjb.com.cn/admin/runners admin→overview → Runners 
![](/docs/images/2020-07-24-11-24-51.png)

```
Please enter the gitlab-ci token for this runner
BJsTUJfbWqCW-XgdoJb8
```

#### 输入Runner的描述，稍后可以在GitLab的UI中进行更改：
```
Please enter the gitlab-ci description for this runner
[centos112]: build my gitlab pages to html js css to show pages
```

#### 输入与Runner关联的标签，稍后可以在GitLab的UI中进行更改：
```
Please enter the gitlab-ci tags for this runner (comma separated):
deploy
```

#### 输入Runner执行者：
```
Please enter the executor: ssh, docker+machine, docker-ssh+machine, kubernetes, docker, parallels, virtualbox, docker-ssh, shell:
shell
```
#### 整个的过程：
```
[root@centos112 ~]# sudo gitlab-runner register
Runtime platform                                    arch=amd64 os=linux pid=9158 revision=efa30e33 version=13.2.1
Running in system-mode.

Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com/):
https://gitlab.ccbjb.com.cn
Please enter the gitlab-ci token for this runner:
BJsTUJfbWqCW-XgdoJb8
Please enter the gitlab-ci description for this runner:
[centos112]: build my gitlab pages to html js css to show pages
Please enter the gitlab-ci tags for this runner (comma separated):
deploy
Registering runner... succeeded                     runner=BJsTUJfb
Please enter the executor: docker-ssh, parallels, shell, ssh, custom, docker, virtualbox, docker+machine, docker-ssh+machine, kubernetes:
shell
Runner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded!
[root@centos112 ~]#
```

## 启动gitlab-runner

```
[root@centos112 ~]# gitlab-runner start
Runtime platform arch=amd64 os=linux pid=9174 revision=efa30e33 version=13.2.1
```

