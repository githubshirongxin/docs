---
layout: post
title: 【maven】nexus使用ssl之后，工程mvn deploy出错“unable to find valid certification path to requested target”
---

nexus使用了ssl证书，https访问了。原来是http。
于是工程deploy时出现了该错误“unable to find valid certification path to requested target”。

```
sun.security.validator.ValidatorException: PKIX path building failed: 
sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
```


