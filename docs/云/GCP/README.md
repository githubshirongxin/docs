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
```

## 设置SDK
https://cloud.google.com/sdk/docs/initializing
https://cloud.google.com/sdk/docs/proxy-settings

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
gsutil cp OBJECT_LOCATION gs://DESTINATION_BUCKET_NAME/
```
