---
layout: post
title: 【谷歌云】
---

谷歌云入门：



linux上下载谷歌SDK
https://cloud.google.com/sdk/docs/authorizing
SDK里面有gsutil，可以用来操作云上资源。


## 下载SDK
https://cloud.google.com/sdk/docs/quickstart-redhat-centos

```shell
# Update YUM with Cloud SDK repo information:
sudo tee -a /etc/yum.repos.d/google-cloud-sdk.repo << EOM
[google-cloud-sdk]
name=Google Cloud SDK
baseurl=https://packages.cloud.google.com/yum/repos/cloud-sdk-el7-x86_64
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg
       https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg
EOM

# The indentation for the 2nd line of gpgkey is important.

# Install the Cloud SDK
sudo yum install google-cloud-sdk
```


## 初始化SDK
```shell
gcloud init
或者
gcloud init --skip-diagnostics
```

## 设置SDK
https://cloud.google.com/sdk/docs/initializing
https://cloud.google.com/sdk/docs/proxy-settings


## 代理设置
代理不配置的话，gsutil cp 被长城防火墙防住。
```shell
gcloud config set proxy/type http
gcloud config set proxy/address 192.168.3.102
gcloud config set proxy/port 1080
```

## 授权
https://cloud.google.com/sdk/docs/authorizing
如需授权 Cloud SDK 工具访问 Google Cloud，您可以使用用户帐号或服务帐号。
```shell
gcloud auth login
```

## 上传对象
https://cloud.google.com/storage/docs/uploading-objects#gsutil

![](/docs/images/2020-12-18-15-19-37.png)

```shell
[root@centos109 ~]# gsutil cp ./client.csr gs://cjb_test
Copying file://./client.csr [Content-Type=application/octet-stream]...
- [1 files][  1.5 KiB/  1.5 KiB]
Operation completed over 1 objects/1.5 KiB.
[root@centos109 ~]#
```

![](/docs/images/2020-12-18-16-12-15.png)
