---
layout: post
title: 【nexus】开启nexus的https服务。制作泛域名证书
---

https://blog.csdn.net/u011607971/article/details/86700855

## 制作泛域名证书 

https://github.com/Fishdrowned/ssl

clone 到192.168.3.107

```
[root@centos3 ssl]# cd ssl
[root@centos3 ssl]# ls
ca.cnf  docs  flush.sh  gen.cert.sh  gen.root.sh  LICENSE  README.md
[root@centos3 ssl]# ./gen.cert.sh nexus.ccbjb.com.cn
Removing dir out
Creating output structure
Done
Generating a 2048 bit RSA private key
....+++
...+++
writing new private key to 'out/root.key.pem'
-----
Generating RSA private key, 2048 bit long modulus
......................+++
..+++
e is 65537 (0x10001)
Using configuration from ./ca.cnf
Check that the request matches the signature
Signature ok
The Subject's Distinguished Name is as follows
countryName           :PRINTABLE:'CN'
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