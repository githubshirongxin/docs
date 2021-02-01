---
layout: post
title: 将crt和key转换成jks证书
---

https://blog.csdn.net/russle/article/details/99694465


1. 根据server.crt和server.key生成pkcs12证书
生成过程输入的密码就是keypass
```
openssl pkcs12 -export -in server.crt -inkey server.key -out mycert.p12 -name abc -CAfile myCA.crt
这时我输入：a123456 （因此c123456就是我的keypass）， name就是别名， 我的别名是abc
```


2. 将上一步的mycert.p12证书转换为jks证书
deststorepass就是将来的storepass
```
keytool -importkeystore -v -srckeystore mycert.p12 -srcstoretype pkcs12 -srcstorepass a123456 -destkeystore Aserver.keystore -deststoretype jks -deststorepass b123456
```
我上一步中的keypass是a123456，同时设置storepass 为b123456