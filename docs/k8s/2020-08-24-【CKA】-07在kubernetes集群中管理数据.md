---
layout: post
title: 【CKA】07-在Kubernetes集群中管理数据
---

- [1.持久卷](#1持久卷)
- [2.卷访问模式](#2卷访问模式)
- [3.持续的数量声明](#3持续的数量声明)
- [4.存储对象](#4存储对象)
- [5.永久存储的应用](#5永久存储的应用)

## 1.持久卷
在Kubernetes中，豆荚是短暂的。通过将存储直接附加到容器的文件系统，这将带来一个独特的挑战。持久卷用于在应用程序和基础存储之间创建抽象层，从而使存储更易于在Kubernetes集群中删除，移动和创建Pod时遵循Pod。

在Google Cloud Engine中，找到您的集群所在的区域：
```bash
gcloud container clusters list
```
使用Google Cloud，在与群集相同的区域中创建一个永久磁盘：
```bash
gcloud compute disks create --size=1GiB --zone=us-central1-a mongodb
```
将使用永久磁盘的Pod的YAML：
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mongodb 
spec:
  volumes:
  - name: mongodb-data
    gcePersistentDisk:
      pdName: mongodb
      fsType: ext4
  containers:
  - image: mongo
    name: mongodb
    volumeMounts:
    - name: mongodb-data
      mountPath: /data/db
    ports:
    - containerPort: 27017
      protocol: TCP
```
创建带有已连接并已安装磁盘的Pod：
```bash
kubectl apply -f mongodb-pod.yaml
```
查看吊舱降落在哪个节点上：
```bash
kubectl get pods -o wide
```
连接到mongodb外壳：
```bash
kubectl exec -it mongodb mongo
```
切换到外壳中的mystore数据库mongodb：
```bash
use mystore
```
创建一个JSON文档以插入数据库：
```bash
db.foo.insert({name:'foo'})
```
查看您刚创建的文档：
```bash
db.foo.find()
```
从mongodb外壳退出：
```bash
exit
``` 
删除窗格：
```bash
kubectl delete pod mongodb
```
使用相同的连接磁盘创建一个新容器：
```bash
kubectl apply -f mongodb-pod.yaml
```
检查以查看Pod落在哪个节点上：
```bash
kubectl get pods -o wide
```
排空节点（如果吊舱与以前位于同一节点上）：
```bash
kubectl drain [node_name] --ignore-daemonsets
```
将Pod放置在其他节点上之后，mongodb再次访问该Shell：
```bash
kubectl exec -it mongodb mongo
```
mystore再次访问数据库：
```bash
use mystore
```
查找之前创建的文档：
```bash
db.foo.find()
```bash
PersistentVolumeKubernetes中对象的YAML ：
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: mongodb-pv
spec:
  capacity: 
    storage: 1Gi
  accessModes:
    - ReadWriteOnce
    - ReadOnlyMany
  persistentVolumeReclaimPolicy: Retain
  gcePersistentDisk:
    pdName: mongodb
    fsType: ext4
```
创建持久卷资源：
```bash
kubectl apply -f mongodb-persistentvolume.yaml
```
查看我们的永久卷：
```bash
kubectl get persistentvolumes
```
有用的网址：  
[持久卷](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)  
[配置永久卷存储](https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/)

## 2.卷访问模式

## 3.持续的数量声明

## 4.存储对象

## 5.永久存储的应用