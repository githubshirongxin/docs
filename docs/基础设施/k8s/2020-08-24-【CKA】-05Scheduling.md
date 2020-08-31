---
layout: post
title: 【CKA】05-Scheduling
---
- [1. scheduler基础](#1-scheduler基础)
- [2. 为多个Pod运行多个调度。](#2-为多个pod运行多个调度)
- [3. 根据node资源大小来制定scheduler](#3-根据node资源大小来制定scheduler)
- [4. (不使用scheduler而用DaemonSet)来调度](#4-不使用scheduler而用daemonset来调度)
  - [给该节点一个标签，以表明它具有SSD：然后创建DaemonSet](#给该节点一个标签以表明它具有ssd然后创建daemonset)
  - [标记另一个节点以指定它具有SSD：](#标记另一个节点以指定它具有ssd)
  - [从节点上除去标签，然后观察DaemonSet pod终止：](#从节点上除去标签然后观察daemonset-pod终止)
  - [有用的网址](#有用的网址)
- [5。scheduler Event](#5scheduler-event)
## 1. scheduler基础
给node发任务（pod）。node不同，例如磁盘大小不同。想自己指定派发规则。
sheduler是运行在kube-system这个名字空间里的一个容器（Pod）。

- 给node加标签，以便选择一组node来运行pod。
- 在deployment中affinity：nodeAffinity设置选择node的规则。

Kubernetes中的默认调度程序尝试通过一系列步骤为您的Pod找到最佳节点。在本课程中，我们将详细介绍这些步骤，以便在将Pod放置在节点上时最大程度地了解调度程序的功能，从而最大程度地延长集群中运行的应用程序的正常运行时间。我们还将介绍如何创建具有节点关联性的部署。


将节点1标记为位于可用性区域1中：
```bash
kubectl label node chadcrowell1c.mylabserver.com availability-zone=zone1
```
将节点2标记为位于可用性区域2中：
```bash
kubectl label node chadcrowell2c.mylabserver.com availability-zone=zone2
```
将节点1标记为专用基础结构：
```bash
kubectl label node chadcrowell1c.mylabserver.com share-type=dedicated
```
将节点2标记为共享基础结构：
```bash
kubectl label node chadcrowell2c.mylabserver.com share-type=shared
```
这是用于部署的YAML，其中包括节点关联性规则：
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: pref
spec:
  selector:
    matchLabels:
      app: pref
  replicas: 5
  template:
    metadata:
      labels:
        app: pref
    spec:
      affinity:
        nodeAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 80
            preference:
              matchExpressions:
              - key: availability-zone
                operator: In
                values:
                - zone1
          - weight: 20
            preference:
              matchExpressions:
              - key: share-type
                operator: In
                values:
                - dedicated
      containers:
      - args:
        - sleep
        - "99999"
        image: busybox
        name: main
```
创建部署：
```bash
kubectl create -f pref-deployment.yaml
```
查看部署：
```bash
kubectl get deployments
```
查看哪些豆荚落在哪些节点上：
```bash
kubectl get pods -o wide
```
有用的网址  
- [将Pod分配给节点](https://kubernetes.io/docs/concepts/configuration/assign-pod-node/)  
- [Pod和节点相似性规则](https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity)


## 2. 为多个Pod运行多个调度。

![](/docs/images/2020-08-24-14-24-26.png)


- 自定义scheduler是个什么存在呢？pod，是pod。官网上有个myscheduler.yaml下来一致性就行。
- edit clusterrole system：kube-scheduler ，加入自定义scheduler。
- 在pod.yaml中可以指定scheduler。指定的是什么呢？deployment名字

在Kubernetes中，您可以同时运行多个调度程序。然后，您可以使用不同的调度程序来调度不同的Pod。例如，您可能想为调度程序设置不同的规则，以便在一个节点上运行所有pod。在本课程中，我将向您展示如何在默认的调度程序旁边部署新的调度程序，然后使用这两个调度程序来调度三个不同的Pod。

ClusterRole.yaml
```yaml
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRole
metadata:
  name: csinodes-admin
rules:
- apiGroups: ["storage.k8s.io"]
  resources: ["csinodes"]
  verbs: ["get", "watch", "list"]
```
ClusterRoleBinding.yaml
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: read-csinodes-global
subjects:
- kind: ServiceAccount
  name: my-scheduler
  namespace: kube-system
roleRef:
  kind: ClusterRole
  name: csinodes-admin
  apiGroup: rbac.authorization.k8s.io
```
Role.yaml
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: system:serviceaccount:kube-system:my-scheduler
  namespace: kube-system
rules:
- apiGroups:
  - storage.k8s.io
  resources:
  - csinodes
  verbs:
  - get
  - list
  - watch
```
RoleBinding.yaml
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-csinodes
  namespace: kube-system
subjects:
- kind: User
  name: kubernetes-admin
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role 
  name: system:serviceaccount:kube-system:my-scheduler
  apiGroup: rbac.authorization.k8s.io
```
使用编辑现有的kube-scheduler集群角色，kubectl edit clusterrole system:kube-scheduler并添加以下内容：
```yaml
- apiGroups:
  - ""
  resourceNames:
  - kube-scheduler
  - my-scheduler
  resources:
  - endpoints
  verbs:
  - delete
  - get
  - patch
  - update
- apiGroups:
  - storage.k8s.io
  resources:
  - storageclasses
  verbs:
  - watch
  - list
  - get
My-scheduler.yaml

apiVersion: v1
kind: ServiceAccount
metadata:
  name: my-scheduler
  namespace: kube-system
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: my-scheduler-as-kube-scheduler
subjects:
- kind: ServiceAccount
  name: my-scheduler
  namespace: kube-system
roleRef:
  kind: ClusterRole
  name: system:kube-scheduler
  apiGroup: rbac.authorization.k8s.io
---
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    component: scheduler
    tier: control-plane
  name: my-scheduler
  namespace: kube-system
spec:
  selector:
    matchLabels:
      component: scheduler
      tier: control-plane
  replicas: 1
  template:
    metadata:
      labels:
        component: scheduler
        tier: control-plane
        version: second
    spec:
      serviceAccountName: my-scheduler
      containers:
      - command:
        - /usr/local/bin/kube-scheduler
        - --address=0.0.0.0
        - --leader-elect=false
        - --scheduler-name=my-scheduler
        image: chadmcrowell/custom-scheduler
        livenessProbe:
          httpGet:
            path: /healthz
            port: 10251
          initialDelaySeconds: 15
        name: kube-second-scheduler
        readinessProbe:
          httpGet:
            path: /healthz
            port: 10251
        resources:
          requests:
            cpu: '0.1'
        securityContext:
          privileged: false
        volumeMounts: []
      hostNetwork: false
      hostPID: false
      volumes: []
```
运行以下部署my-scheduler：
```bash
kubectl create -f my-scheduler.yaml
```
在kube-system名称空间中查看新的调度程序：
```bash
kubectl get pods -n kube-system
```
pod1.yaml
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: no-annotation
  labels:
    name: multischeduler-example
spec:
  containers:
  - name: pod-with-no-annotation-container
    image: k8s.gcr.io/pause:2.0
```
pod2.yaml
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: annotation-default-scheduler
  labels:
    name: multischeduler-example
spec:
  schedulerName: default-scheduler
  containers:
  - name: pod-with-default-annotation-container
    image: k8s.gcr.io/pause:2.0
```
pod3.yaml
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: annotation-second-scheduler
  labels:
    name: multischeduler-example
spec:
  schedulerName: my-scheduler
  containers:
  - name: pod-with-second-annotation-container
    image: k8s.gcr.io/pause:2.0
```
在创建吊舱时查看它们：
```bash
kubectl get pods -o wide
```
有用的网址  
[配置多个调度程序](https://kubernetes.io/docs/tasks/administer-cluster/configure-multiple-schedulers/) 

## 3. 根据node资源大小来制定scheduler

- pod.yaml中可以指定死node
![](/docs/images/2020-08-24-14-50-43.png)
- pod yaml中指定resource【cpy】【memory】
![](/docs/images/2020-08-24-14-51-56.png)
- pod可能pending，那么describe pod深度查看改pod失败的原因。
- 指定node没跑起来pod，describe node查看node，寻找失败原因。
- 可以限定pod使用的cpu数和内存量。
  
为了正确共享节点的资源，您可以在Kubernetes中设置资源限制和请求。这使您可以为应用程序保留足够的CPU和内存，同时仍保持系统运行状况。在本课程中，我们将在pod YAML中创建一些请求和限制，以显示节点如何使用它。

查看节点的容量和可分配信息：
```bash
kubectl describe nodes
```
具有请求的广告连播的广告连播YAML：
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: resource-pod1
spec:
  nodeSelector:
    kubernetes.io/hostname: "chadcrowell3c.mylabserver.com"
  containers:
  - image: busybox
    command: ["dd", "if=/dev/zero", "of=/dev/null"]
    name: pod1
    resources:
      requests:
        cpu: 800m
        memory: 20Mi
```
创建请求窗格：
```bash
kubectl create -f resource-pod1.yaml
```
查看它们降落的吊舱和节点：
```bash
kubectl get pods -o wide
```
具有大量请求的Pod的YAML：
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: resource-pod2
spec:
  nodeSelector:
    kubernetes.io/hostname: "chadcrowell3c.mylabserver.com"
  containers:
  - image: busybox
    command: ["dd", "if=/dev/zero", "of=/dev/null"]
    name: pod2
    resources:
      requests:
        cpu: 1000m
        memory: 20Mi
```
创建具有1000毫秒请求的Pod：
```bash
kubectl create -f resource-pod2.yaml
```
请参阅为什么未安排有大量请求的广告连播：
```bash
kubectl describe resource-pod2
```
查看每个节点的总请求数：
```bash
kubectl describe nodes chadcrowell3c.mylabserver.com
```
删除第一个窗格，以便为请求较大的窗格腾出空间：
```bash
kubectl delete pods resource-pod1
```
观察第一个Pod终止并启动第二个Pod：
```bash
kubectl get pods -o wide -w
```
具有以下限制的广告连播的YAML：
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: limited-pod
spec:
  containers:
  - image: busybox
    command: ["dd", "if=/dev/zero", "of=/dev/null"]
    name: main
    resources:
      limits:
        cpu: 1
        memory: 20Mi
```
创建一个有限制的窗格：
```bash
kubectl create -f limited-pod.yaml
```
使用exec实用程序来使用top命令：
```bash
kubectl exec -it limited-pod top
```
有用的网址  
[配置默认的CPU请求和限制](https://kubernetes.io/docs/tasks/administer-cluster/manage-resources/cpu-default-namespace/)  
[配置默认内存请求和限制](https://kubernetes.io/docs/tasks/administer-cluster/manage-resources/memory-default-namespace/)

## 4. (不使用scheduler而用DaemonSet)来调度
![](/docs/images/2020-08-24-15-17-03.png)

+ DaemonSet 就是每个node一个pod。
+ DaemonSet 删掉一个pod，还给你自动建一个。

守护程序集不使用调度程序来部署Pod。实际上，当前我们创建的Kubernetes集群中有DaemonSet。在本课程中，我将向您展示在哪里找到它们以及如何创建自己的DaemonSet Pod，以进行部署而无需调度程序。

找到您的kubeadm集群中存在的DaemonSet容器：
```bash
kubectl get pods -n kube-system -o wide
```
删除DaemonSet窗格，看看会发生什么：
```bash
kubectl delete pods [pod_name] -n kube-system
```
### 给该节点一个标签，以表明它具有SSD：然后创建DaemonSet
```bash
kubectl label node chadcrowell3c.mylabserver.com disk=ssd
```

ssd-monitor.yaml,nodeSelector[disk=ssd].
![](/docs/images/2020-08-24-15-22-17.png)
`kubectl create -f ssd-monitor.yaml`会创建一个daemonsets.
![](/docs/images/2020-08-24-15-25-03.png)

DaemonSet的YAML：
```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: ssd-monitor
spec:
  selector:
    matchLabels:
      app: ssd-monitor
  template:
    metadata:
      labels:
        app: ssd-monitor
    spec:
      nodeSelector:
        disk: ssd
      containers:
      - name: main
        image: linuxacademycontent/ssd-monitor
```
根据YAML规范创建DaemonSet：
```bash
kubectl create -f ssd-monitor.yaml
```

因为目前只有一个node有disk=ssd标签。所以改pod只会创建在ll3node上。`kubectl get pods`


### 标记另一个节点以指定它具有SSD：
```bash
kubectl label node chadcrowell2c.mylabserver.com disk=ssd
```
查看已部署的DaemonSet pod：
因为目前有两个node有disk=ssd标签。自动在ll2上创建了pod。
所以改pod只会创建在ll2和ll3node上。
```bash
kubectl get pods -o wide
```


### 从节点上除去标签，然后观察DaemonSet pod终止：
```bash
kubectl label node chadcrowell3c.mylabserver.com disk-
```
更改节点上的标签以将其更改为旋转磁盘：
```bash
kubectl label node chadcrowell2c.mylabserver.com disk=hdd --overwrite
```

因为没有符合条件的node了。所以，pod将终止。

选择标签为您的DaemonSet选择：
```bash
kubectl get nodes chadcrowell3c.mylabserver.com --show-labels
```
### 有用的网址  
[守护程序集](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)


## 5。scheduler Event
有多种方法可以查看与调度程序有关的事件。在本课程中，我们将研究如何解决计划程序中的任何问题或仅查找更多信息。

查看调度程序窗格的名称：
```bash
kubectl get pods -n kube-system
```
获取有关您的调度程序窗格事件的信息：
```bash
kubectl describe pods [scheduler_pod_name] -n kube-system
```
查看默认名称空间中的事件：
```bash
kubectl get events
```
查看kube-system名称空间中的事件：
```bash
kubectl get events -n kube-system
```
删除默认命名空间中的所有Pod：
```bash
kubectl delete pods --all
```
实时观察事件：
```bash
kubectl get events -w
```
查看调度程序窗格中的日志：
```bash
kubectl logs [kube_scheduler_pod_name] -n kube-system
```
系统服务调度程序窗格的位置：
```bash
/var/log/kube-scheduler.log
```
有用的网址  
[验证所需的计划程序](https://kubernetes.io/docs/tasks/administer-cluster/configure-multiple-schedulers/#verifying-that-the-pods-were-scheduled-using-the-desired-schedulers)
