---
layout: post
title: 【解决】gitlab github clone慢 下载慢
---

::: tip
通过代理的方式，一步搞定，如果你有代理，那么一定是这么玩的。
:::

### 例如在3.108（虚拟机）上可以使用宿主机（3.102）的代理服务。
```bash
root@ubuntu108:~# export ALL_PROXY=socks5://192.168.3.102:1080
```

因为我有代理：
![](/docs/images/2020-09-03-13-39-36.png)


### 速度由原来的20k/s一下子提高到2M/s。
```bash
root@ubuntu108:~# git clone https://github.com/Car-eye-team/Car-eye-RTMP-server.git
正克隆到 'Car-eye-RTMP-server'...
remote: Enumerating objects: 9, done.
remote: Counting objects: 100% (9/9), done.
remote: Compressing objects: 100% (9/9), done.
remote: Total 4008 (delta 0), reused 2 (delta 0), pack-reused 3999
接收对象中: 100% (4008/4008), 31.67 MiB | 2.35 MiB/s, 完成.
处理 delta 中: 100% (1114/1114), 完成.
root@ubuntu108:~#
```