---
layout: post
titile: tomcat 设置ssl
---

cmder keytool中文论吗

```shell
运行命令 chcp 936
```

keytool -genkey -alias www.yourwebtest.com -keyalg RSA -keystore www.yourwebtest.com.jks -storepass yourpass

keytool -genkey -alias www.ca.com -keyalg RSA -keystore www.ca.com.jks -storepass 123.com

生成 www.ca.com.jks