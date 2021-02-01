---
layout: post
title: jks转换成CRT和key
---

https://segmentfault.com/a/1190000019085780?utm_source=tag-newest



1. 拿到jks证书，和证书密码(确认没有密码的，拿刀找你们运维去，或找供应方去)
2. 先将jks 转换成p12格式，具体命令如下:
```
keytool -importkeystore -srckeystore C:\cert\server.jks -destkeystore C:\cert\server.p12 -srcstoretype jks -deststoretype pkcs12
```

输入命令后，会提示你三步骤，需要输入口令(建议输入相同的口令，就是你的jks口令，防止后续证书转换忘记密码)
- 1). 输入目标密钥库口令:
- 2).再次输入新口令:
- 3).输入源密钥库口令:
接下来就会提示你如下：
已成功导入别名 ca_root 的条目
已完成导入命令: 1 个条目成功导入, 0 个条目失败或取消
到了这一步，说明已经OK了，剩下的就是转换成crt证书和key了

3. 将p12转换成crt证书, 命令如下：
```
openssl pkcs12 -in C:\cert\server.p12 -nokeys -clcerts -out C:\cert\server.crt
```

4. 将p12生成非加密的key, 命令如下：
```
openssl pkcs12 -in C:\cert\server.p12 -nocerts -nodes -out C:\cert\server.key
```

5. 将证书配置到nginx以后，重启nginx服务器
6. 使用ssl漏洞扫描工具，检验证书链的完整性，并获取证书链(防止小程序报: fail ssl hand shake error)，推荐地址https://myssl.com/chain_download.html

7. 如果证书有漏洞，或不完整，拷贝证书链以后，将服务器上server.crt内容替换，重启nginx(或nginx -s reload)
8. 如果还不行，(比如：网页访问，依然不安全) 请清空缓存，刷新


## 练习

```
λ keytool -importkeystore -srckeystore ./www.ca.com.jks -destkeystore ./www.ca.com.p12 -srcstoretype jks -deststoretype pkcs12
正在将密钥库 ./www.ca.com.jks 导入到 ./www.ca.com.p12...
输入目标密钥库口令:
再次输入新口令:
输入源密钥库口令:
已成功导入别名 www.ca.com 的条目。
已完成导入命令: 1 个条目成功导入, 0 个条目失败或取消


λ openssl pkcs12 -in ./www.ca.com.p12 -nokeys -clcerts -out ./www.ca.com.crt
Enter Import Password:
```