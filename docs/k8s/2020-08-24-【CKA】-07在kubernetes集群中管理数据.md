---
layout: post
title: 【CKA】07-在Kubernetes集群中管理数据
---

- [1.持久卷 kind:persistentVolume](#1持久卷-kindpersistentvolume)
- [2.卷访问模式](#2卷访问模式)
- [3. 持久卷声明](#3-持久卷声明)
- [4.存储对象](#4存储对象)
    - [一个StorageClass对象的YAML ：](#一个storageclass对象的yaml)
    - [hostPathPV 的YAML ：](#hostpathpv-的yaml)
- [5.永久存储的应用](#5永久存储的应用)

## 1.持久卷 kind:persistentVolume
在Kubernetes中，豆荚是短暂的。通过将存储直接附加到容器的文件系统，这将带来一个独特的挑战。持久卷用于在应用程序和基础存储之间创建抽象层，从而使存储更易于在Kubernetes集群中删除，移动和创建Pod时遵循Pod。
![](/docs/images/2020-08-25-13-11-45.png)

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
```
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
卷访问模式是您指定节点对持久卷的访问的方式。共有三种访问模式：ReadWriteOnce，ReadOnlyMany和ReadWriteMany。在本课中，我们将说明每种访问方式的含义以及将持久卷与Pod一起使用时要记住的两点非常重要的事情。
![](/docs/images/2020-08-25-13-25-29.png)

永久卷的YAML：
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
查看集群中的永久卷：
```bash
kubectl get pv
```
有用的网址：  
[存取模式](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes)  

## 3. 持久卷声明
持久卷声明（Persistent Volume Claims，PVC）是应用程序开发人员可以在不知道基础存储在哪里的情况下为应用程序请求存储的一种方法。然后，该声明将绑定到永久卷（PV），并且直到删除PVC才会释放该声明。在本课程中，我们将创建一个PVC，并访问持久性磁盘中的存储。

![](/docs/images/2020-08-25-13-29-55.png)
![](/docs/images/2020-08-25-13-32-42.png)
PVC的YAML：
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mongodb-pvc 
spec:
  resources:
    requests:
      storage: 1Gi
  accessModes:
  - ReadWriteOnce
  storageClassName: ""
```
创建PVC：
```bash
kubectl apply -f mongodb-pvc.yaml
```
查看集群中的PVC：
```bash
kubectl get pvc
```

查看PV以确保其绑定：
```bash
kubectl get pv
```

使用PVC的pod的YAML：
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mongodb 
spec:
  containers:
  - image: mongo
    name: mongodb
    volumeMounts:
    - name: mongodb-data
      mountPath: /data/db
    ports:
    - containerPort: 27017
      protocol: TCP
  volumes:
  - name: mongodb-data
    persistentVolumeClaim:
      claimName: mongodb-pvc
```
创建具有附加存储空间的Pod：
```bash
kubectl apply -f mongo-pvc-pod.yaml
```
进入mogodb外壳：
```bash
kubectl exec -it mongodb mongo
```

查找在先前课程中创建的JSON文档：
```bash
db.foo.find()
```
![](/docs/images/2020-08-25-13-43-49.png)


删除mongodb pod：
```bash
kubectl delete pod mongodb
```

删除mongodb-pvcPVC：
```bash
kubectl delete pvc mongodb-pvc
```

检查PV的状态：
```bash
kubectl get pv
```
![](/docs/images/2020-08-25-13-44-15.png)

PV的YAML显示其回收策略：
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
  persistentVolumeReclaimPolicy: Retain // 还有cycle,delete
  gcePersistentDisk:
    pdName: mongodb
    fsType: ext4
```

有用的网址  
[持续卷索赔](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims)  
[创建一个PersistentVolumeClaim](https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolumeclaim) 

## 4.存储对象
在Kubernetes中使用StorageClass对象配置存储的方法甚至更简单。此外，通过“使用中的存储对象保护”功能，可以保护您的存储免受数据丢失的影响，该功能可以确保使用持久卷的任何Pod只要主动装载就不会丢失该卷上的数据。我们在本节中一直使用Google Storage，但是您可以在Kubernetes中使用许多不同的卷类型。在本课程中，我们将讨论hostPath卷和空目录卷类型。

查看您的卷上的光伏保护：
```bash
kubectl describe pv mongodb-pv
```
![](/docs/images/2020-08-25-14-01-14.png)


请参阅关于您的索赔的PVC保护：
```bash
kubectl describe pvc mongodb-pvc
```
删除PVC：
```bash
kubectl delete pvc mongodb-pvc
```
看到PVC已终止，但是该卷仍然连接到了pod：
```bash
kubectl get pvc
```
![](/docs/images/2020-08-25-14-02-44.png)


即使我们刚刚删除了PVC，也请尝试访问数据：
```bash
kubectl exec -it mongodb mongo
use mystore
db.foo.find()
```


删除pod，最后删除PVC：
```bash
kubectl delete pods mongodb
```
显示PVC已删除：
```bash
kubectl get pvc
```
No Resouce found.


#### 一个StorageClass对象的YAML ：
```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast
provisioner: kubernetes.io/gce-pd
parameters:
  type: pd-ssd
```
type快速创建StorageClass ：
```bash
kubectl apply -f sc-fast.yaml
```

![](/docs/images/2020-08-25-14-25-31.png)


更改PVC以包括新StorageClass对象：
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mongodb-pvc 
spec:
  storageClassName: fast
  resources:
    requests:
      storage: 100Mi
  accessModes:
    - ReadWriteOnce
```
使用自动配置的存储创建PVC：
```bash
kubectl apply -f mongodb-pvc.yaml
```
使用新的StorageClass查看PVC：
```bash
kubectl get pvc
```
![](/docs/images/2020-08-25-14-26-06.png)

查看新配置的存储：
```bash
kubectl get pv
```

![](/docs/images/2020-08-25-14-26-19.png)


#### hostPathPV 的YAML ：
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-hostpath
spec:
  storageClassName: local-storage
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: "/mnt/data"
```

空目录卷的Pod的YAML：
::: warning
库目录卷deprecated！！
:::
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: emptydir-pod
spec:
  containers:
  - image: busybox
    name: busybox
    command: ["/bin/sh", "-c", "while true; do sleep 3600; done"]
    volumeMounts:
    - mountPath: /tmp/storage
      name: vol
  volumes:
  - name: vol
    emptyDir: {} //deprecated!!!
```


有用的网址：    
[使用对象保护](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#storage-object-in-use-protection)    
[卷数](https://kubernetes.io/docs/concepts/storage/volumes/)


## 5.永久存储的应用

在本课程中，我们将所有内容打包成一个漂亮的小蝴蝶结，并创建一个部署，使我们可以将存储与Pod一起使用。这是为了演示如何部署实际应用程序并将其用于存储数据。

storageclass-fast.yaml YAML ：
```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast
provisioner: kubernetes.io/gce-pd
parameters:
  type: pd-ssd
```

kubeserve-pvc.yaml YAML：
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: kubeserve-pvc 
spec:
  storageClassName: fast
  resources:
    requests:
      storage: 100Mi
  accessModes:
    - ReadWriteOnce
```
创建我们的StorageClass对象：
```bash
kubectl apply -f storageclass-fast.yaml
```
查看StorageClass集群中的对象：
```bash
kubectl get sc
```

![](/docs/images/2020-08-25-14-34-01.png)

创建我们的PVC：
```bash
kubectl apply -f kubeserve-pvc.yaml
```
查看在我们的集群中创建的PVC：
```bash
kubectl get pvc
```
查看我们自动配置的PV：
```bash
kubectl get pv
```
![](/docs/images/2020-08-25-14-34-14.png)




kubeserve-deployment.yaml的YAML：
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: kubeserve
spec:
  replicas: 1
  selector:
    matchLabels:
      app: kubeserve
  template:
    metadata:
      name: kubeserve
      labels:
        app: kubeserve
    spec:
      containers:
      - env:
        - name: app
          value: "1"
        image: linuxacademycontent/kubeserve:v1
        name: app
        volumeMounts:
        - mountPath: /data
          name: volume-data
      volumes:
      - name: volume-data
        persistentVolumeClaim:
          claimName: kubeserve-pvc
```
创建我们的部署并将存储附加到Pod：
```bash
kubectl apply -f kubeserve-deployment.yaml
```
检查部署状态：
```bash
kubectl rollout status deployments kubeserve
```
（显示成功）


检查是否已创建吊舱：
```bash
kubectl get pods
```
![](/docs/images/2020-08-25-14-37-32.png)


连接到我们的吊舱并在PV上创建一个文件：
```bash
kubectl exec -it [pod-name] -- touch /data/file1.txt
```
连接到我们的pod并列出目录的内容/data：
```bash
kubectl exec -it [pod-name] -- ls /data
```