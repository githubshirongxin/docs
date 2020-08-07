---
layout: post
title: Linux相关
---

## 常见问题：ping www.baidu.com不通

```bash
cd /etc/sysconfig/network-scripts ls -a
vi ifcfg-ensxx
修改DNS，可能写错了。
service network restart
yum install vim //因该可以了。
```