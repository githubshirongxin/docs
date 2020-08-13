---
layout: post
title: 【linux】识别centos还是debain还是ubuntu还是alpine的方法. ubuntu开启ssh
---

- 识别centos还是debain还是ubuntu还是alpine的方法
https://blog.csdn.net/Dafei4/article/details/79589369/


- ubuntu开启ssh
https://blog.csdn.net/qq_40088207/article/details/104857995


- ubuntu的sudo不输入密码
https://zhidao.baidu.com/question/647845350957409925.html

- ubuntu 19 安装docker
https://www.cnblogs.com/wt7018/p/11880666.html

```bash
# 1.卸载
sudo apt-get remove docker docker-engine docker.io containerd runc
# 2.安装Docker
sudo apt-get update
# 安装依赖包
sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
# 添加 Docker 的官方 GPG 密钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
# 验证您现在是否拥有带有指纹的密钥
sudo apt-key fingerprint 0EBFCD88
# 设置稳定版仓库
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
# 更新
$ sudo apt-get update
# 安装最新的Docker-ce 
sudo apt-get install docker-ce
# 启动
sudo systemctl enable docker
sudo systemctl start docker
```