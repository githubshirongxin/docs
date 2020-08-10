---
layout: post
title: docker相关
---

https://blog.csdn.net/goflyfreely/article/details/53149894



首先，删除所有停止的容器
sudo docker container prune

然后，清除坏的<none>:<none>镜像
docker rmi $(docker images -f "dangling=true" -q)