---
layout: post
title: 自签证书的方法
---

## 方法一：（开源命令一键生成）

自签证书已经不用自己敲许多命令了。 直接用一个命令+域名就能生成所有证书。

https://github.com/Fishdrowned/ssl


::: warning
    注意必须是linux环境
:::

```shell
git clone https://github.com/Fishdrowned/ssl.git
```

```shell
[root@centos3 ssl]# cd ssl
[root@centos3 ssl]# ls
ca.cnf  docs  flush.sh  gen.cert.sh  gen.root.sh  LICENSE  README.md
[root@centos3 ssl]# ./gen.cert.sh nexus.ccbjb.com.cn
Removing dir out
Creating output structure
stateOrProvinceName   :ASN.1 12:'Guangdong'
localityName          :ASN.1 12:'Guangzhou'
organizationName      :ASN.1 12:'Fishdrowned'
organizationalUnitName:ASN.1 12:'nexus.ccbjb.com.cn'
commonName            :ASN.1 12:'*.nexus.ccbjb.com.cn'
Certificate is to be certified until Aug  5 01:54:11 2022 GMT (730 days)

Write out database with 1 new entries
Data Base Updated

Certificates are located in:
lrwxrwxrwx 1 root root 45 8月   5 09:54 /root/ssl/ssl/out/nexus.ccbjb.com.cn/nexus.ccbjb.com.cn.bundle.crt -> ./20200805-0954/nexus.ccbjb.com.cn .bundle.crt
lrwxrwxrwx 1 root root 38 8月   5 09:54 /root/ssl/ssl/out/nexus.ccbjb.com.cn/nexus.ccbjb.com.cn.crt -> ./20200805-0954/nexus.ccbjb.com.cn.crt
lrwxrwxrwx 1 root root 15 8月   5 09:54 /root/ssl/ssl/out/nexus.ccbjb.com.cn/nexus.ccbjb.com.cn.key.pem -> ../cert.key.pem
lrwxrwxrwx 1 root root 11 8月   5 09:54 /root/ssl/ssl/out/nexus.ccbjb.com.cn/root.crt -> ../root.crt
[root@centos3 ssl]#
```


## 方法二： 命令方法 ，建立证书（我基本不用）

#### 建立自签名证书
##### 1. 创建 Private Key
sudo openssl genrsa -des3 -out /etc/gitlab/ssl/gitlab.domain.com.key 2048

记住输入的密码（Pass phrase）

##### 2. 生成 Certificate Request
```
sudo openssl req -new -key /etc/gitlab/ssl/gitlab.domain.com.key -out /etc/gitlab/ssl/gitlab.domain.com.csr

Enter Country Name US
Enter State or Province Full Name
Enter City Name
Enter Organization Name
Enter Company Name
Enter Organizational Unit Name
Enter server hostname i.e. URL gitlab.domain.com
Enter Admin Email Address
Skip Challenge Password (Hit Enter)
Skip Optional Company Name (Hit Enter)
#注: 第一步和第二部可以合并成一条命令
openssl req -nodes -newkey rsa:2048 -keyout gitlab.domain.com.key -out gitlab.domain.com.csr
```


#### 3. 移除Private Key 中的密码短语
```
sudo cp -v /etc/gitlab/ssl/gitlab.domain.com.{key,original}
sudo openssl rsa -in /etc/gitlab/ssl/gitlab.domain.com.original -out /etc/gitlab/ssl/gitlab.domain.com.key
sudo rm -v /etc/gitlab/ssl/gitlab.domain.com.original
#4. 创建证书
sudo openssl x509 -req -days 1460 -in /etc/gitlab/ssl/gitlab.domain.com.csr -signkey /etc/gitlab/ssl/gitlab.domain.com.key -out /etc/gitlab/ssl/gitlab.domain.com.crt
#5. 移除证书请求文件
sudo rm -v /etc/gitlab/ssl/gitlab.domain.com.csr    
// 设置文件权限
sudo chmod 600 /etc/gitlab/ssl/gitlab.domain.com.*
#gitlab 配置更改
```