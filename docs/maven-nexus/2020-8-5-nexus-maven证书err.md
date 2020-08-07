---
layout: post
title: 【nexus】nexus使用ssl之后，工程mvn deploy出错“unable to find valid certification path to requested target”
---


nexus使用了ssl证书，https访问了。原来是http。
于是工程deploy时出现了该错误“unable to find valid certification path to requested target”。

```
mvn deploy 
...
[ERROR] Failed to execute goal org.apache.maven.plugins:
maven-deploy-plugin:2.8.2:deploy (default-deploy) on project srx-app:
 Failed to retrieve remote metadata cn.com.ccbjb.app:
srx-app:1.0-SNAPSHOT/maven-metadata.xml:
 Could not transfer metadata cn.com.ccbjb.app:srx-app:1.0-SNAPSHOT/maven-metadata.xml 
 from/to nexus-snapshot (https://nexus.ccbjb.com.cn/repository/maven-snapshots/): 
Transfer failed for https://nexus.ccbjb.com.cn/repository/maven-snapshots/cn/com/ccbjb/app/srx-app/1.0-SNAPSHOT/maven-metadata.xml:


 sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target -> [Help 1]
```

