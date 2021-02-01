---
layout: post
title: Eclipse里的tomcat调试用修改ssl
---


1. 生成jks
```shell
keytool -genkey -alias www.sys2.com -keyalg RSA -keystore www.sys2.com.jks -storepass 123.com
```



2. Eclipse的Servers（自动生成的）对应工程修改Server.xml
增加
```xml
  <Connector port="443"     
      protocol="org.apache.coyote.http11.Http11NioProtocol"
            maxThreads="200"
           scheme="https" secure="true" SSLEnabled="true"
           keystoreFile="conf/www.ca.com.jks" keystorePass="123.com"
           clientAuth="false" sslProtocol="TLS"/>
``` 
![](/docs/images/2021-02-01-14-25-59.png)

3. tomcat安装目录下/conf/放入.jks文件。

4. 操作Eclipse 的Server面板
![](/docs/images/2021-02-01-14-26-45.png)


:::warning
 关键操作来了！！ publish
:::

右键publish，就会把tomcat安装目录/conf/*.jks文件拷贝到Eclipse的工作目录。
![](/docs/images/2021-02-01-14-26-57.png) 


然后可见，端口就自动增加了443端口。如果没有出现443端口，关掉下列
![](/docs/images/2021-02-01-14-36-18.png)
再重开（双击下面）就可以看到了。
![](/docs/images/2021-02-01-14-36-47.png)


5. 访问的时候http://www.ca.com/login 这样就行。


6. www.sys1.com设置的时候基本和www.ca.com一样。但是端口就不能是443了，和ca.com冲突。
需要设置成8443. 访问时 https://www.sys1.com:8443/cookie_set?vt=123




## 参考：如果Eclipse找不到jks,出现下列错误。
```
at org.apache.catalina.startup.Bootstrap.main(Bootstrap.java:472)
Caused by: java.lang.IllegalArgumentException: F:\work\eclipseworkspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\conf\www.sys1.com.jks (系统找不到指定的文件。)
```

www.sys1.com.jks应该放到哪呢？

首先放到
D:\apache-tomcat-9.0.41\conf
然后Eclipse点Republish，这样就把www.sys1.com.jsk拷贝到eclipse里的临时目录。
```
F:\work\eclipseworkspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\conf
```
![](/docs/images/2021-02-01-13-51-41.png)

Eclipse的配置是这样的。
![](/docs/images/2021-02-01-13-52-04.png)

