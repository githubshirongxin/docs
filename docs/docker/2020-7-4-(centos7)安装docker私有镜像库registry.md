---
layout: post
title: 【registry安装】centos7安装docker私有镜像库（有了Harbor就不用它了）
---

主机名角色

192.168.3.105  Docker Repository

192.168.3.102  Docker Client

1. 在两台节点分别安装docker
https://www.cnblogs.com/ilifeilong/p/11687143.html

2. 在 3.105 （ Docker Repository ) 节点下载官方提供的registry镜像
docker images

docker search registry

docker pull registry

docker images

3. 在3.105 （ Docker Repository ) 节点新建registry容器
docker run --detach --publish 5000:5000 --name registry-container --hostname registry registry

docker ps

查看当前registry镜像仓库，当前并未有任何镜像

curl -X GET http://192.168.3.105:5000/v2/_catalog

 4. 在3.106（Docker client） 节点上模拟客户端上传和下载镜像
4.1 在3.106 新建文件daemon.json（ 默认是没有的！）添加如下内容
 /etc/docker/daemon.json

{
  "registry-mirror": [    "https://registry.docker-cn.com"  ],
  "insecure-registries": [   "192.168.3.105:5000"  ]
}

4.2 在3.106 重启docker服务
systemctl stop docker

systemctl start docker

5. 在3.106  上传镜像
在3.106 为需要上传的映像文件添加新的tag
docker images

docker tag mysql:5.7 192.168.3.105:5000/mysql:5.7

docker images

REPOSITORY                            TAG                IMAGE ID            CREATED            SIZE

192.168.3.105:5000/centos/mysql  5.7            b7138378001a4hours ago4.57GB

在3.106 上传镜像至registry
docker push 192.168.3.105:5000/mysql:5.7

在3.105（在哪都行3.105，3.106或3.107都行）registry查看镜像
curl -X GET http://192.168.3.105:5000/v2/

{"repositories":["mysql"]}

curl -X GET http://192.168.3.105:5000/v2/mysql/tags/list

{"name":"mysql","tags":["5.7"]}

 6. 在3.107下载镜像

3.107上的daemon.json也得手动新建，改成如下。

（ 否则从3.105 pull的时候报错。Error response from daemon: Get https://192.168.3.105:5000/v2/: http: server gave HTTP response to HTTPS ）见到这个错误，就知道是daemon.json没有改，或者改完没有重新启动docker服务。

 /etc/docker/daemon.json

{

"registry-mirror": [    "https://registry.docker-cn.com"  ],

"insecure-registries": [   "192.168.3.105:5000"  ]

}

然后service docker restart

# docker images



# docker pull 192.168.3.105:5000/mysql:5.7

# docker images

REPOSITORY                            TAG                IMAGE ID            CREATED            SIZE

192.168.3.105:5000/mysql  5.7    b7138378001a5hours ago4.57GB

在3.107 为了方便使用，将下载下来的镜像再命名一份。
# docker tag 192.168.3.105:5000/mysql:5.7 mysql:5.7  （会多了一个镜像，原来的不会删除）

# docker images

[root@centos3 ~]# docker images

REPOSITORY                TAG                IMAGE ID            CREATED            SIZE
192.168.3.105:5000/mysql  5.7                9cfcce23593a        8 days ago          448MB
mysql                      5.7                9cfcce23593a        8 days ago          448MB

在3.107用完了觉得没必要留着了，就删掉该镜像腾出地方
# docker rmi 192.168.3.105:5000/centos/mysql:5.7

# docker images