---
layout: post
title: 【CKAD】06.Service and Networking
---


## 1. Services

通过部署，可以轻松创建一组可以动态缩放，更新和替换的副本容器。但是，很难为其他组件提供对这些容器的网络访问。服务提供了解决此问题的抽象层。客户端可以简单地访问服务，该服务可以动态代理到当前副本集的流量。在本课程中，我们将讨论服务，并演示如何创建一个公开部署的副本容器的服务。
![](/docs/images/2020-09-14-09-01-00.png)
![](/docs/images/2020-09-14-09-01-29.png)

### 相关文件

* [https://kubernetes.io/docs/concepts/services-networking/service/](https://kubernetes.io/docs/concepts/services-networking/service/)
* [https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/](https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/)

### 课程参考

创建部署：

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.7.9
        ports:
        - containerPort: 80
```

使用服务公开部署的副本容器：

```
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  type: ClusterIP
  selector:
    app: nginx
  ports:
  - protocol: TCP
    port: 8080
    targetPort: 80
```

您可以使用以下命令获取有关该服务的更多信息：

```
kubectl get svc
kubectl get endpoints my-service
```

### 疑问：

::: tip 1.1 Service和Deployment的区别？
- depoyment负责保持一组Pod运行。
- service负责启用对一组Pod的网络访问
- depoyment就是用容器镜像创的实例， 
- service负责访问这些实例，可以将deployment的端口通过端口暴露给其它服务或外界网络。
:::

::: tip 1.2 【各种端口】port、targetPort是什么？
- nodePort（外部用),
- port（内部用）port是暴露在cluster ip上的端口
- targetPort容器的端口（最终的流量端口）

总的来说，port和nodePort都是service的端口，前者暴露给k8s集群内部服务访问，后者暴露给k8s集群外部流量访问。从这两个端口到来的数据都需要经过反向代理kube-proxy，流入后端pod的targetPort上，最后到达pod内容器的containerPort。
:::


::: tip 1.3 【各种IP】nodeIp,PodIp,ClusterIp什么区别？
- Node IP：Node节点的IP地址，即物理网卡的IP地址。
- Pod IP：Pod的IP地址，即docker容器的IP地址，此为虚拟IP地址。
- Cluster IP：Service的IP地址，此为虚拟IP地址。
:::

::: warning 1.4 【各种IP】PodIp用处？clusterIp用处？nodeIp用户？
Pod IP是每个Pod的IP地址，他是Docker Engine根据docker网桥的IP地址段进行分配的，通常是一个虚拟的二层网络

- 同Service下的pod可以直接根据PodIP相互通信
- 不同Service下的pod在集群间pod通信要借助于 cluster ip
- pod和集群外通信，要借助于node ip
:::


::: tip 1.5 ClusterIp
Service的IP地址，此为虚拟IP地址。外部网络无法ping通，只有kubernetes集群内部访问使用。

在kubernetes查询Cluster IP
kubectl -n 命名空间 get Service即可看到ClusterIP

Cluster IP是一个虚拟的IP，但更像是一个伪造的IP网络，原因有以下几点

Cluster IP仅仅作用于Kubernetes Service这个对象，并由Kubernetes管理和分配P地址
Cluster IP无法被ping，他没有一个“实体网络对象”来响应
Cluster IP只能结合Service Port组成一个具体的通信端口，单独的Cluster IP不具备通信的基础，并且他们属于Kubernetes集群这样一个封闭的空间。
在不同Service下的pod节点在集群间相互访问可以通过Cluster IP
:::

![](/docs/images/2020-09-14-09-38-21.png)


## 2. NetworkPolicies
从安全角度来看，通常最好在基础结构的不同部分之间的任何通信上设置网络级限制。NetworkPolicies允许您限制和控制进出Pod的网络流量。在本课程中，我们将讨论NetworkPolicies，并演示如何创建一个简单的策略来限制对pod的访问。

### 相关文件

* [https://kubernetes.io/docs/concepts/services-networking/network-policies/](https://kubernetes.io/docs/concepts/services-networking/network-policies/)

### 课程参考

为了在群集中使用NetworkPolicies，我们需要有一个支持它们的网络插件。我们可以使用运河通过现有的法兰绒设置完成此任务：

```
wget -O canal.yaml https://docs.projectcalico.org/v3.5/getting-started/kubernetes/installation/hosted/canal/canal.yaml

kubectl apply -f canal.yaml
```

创建一个示例nginx pod：

```
apiVersion: v1
kind: Pod
metadata:
  name: network-policy-secure-pod
  labels:
    app: secure-app
spec:
  containers:
  - name: nginx
    image: nginx
    ports:
    - containerPort: 80
```

创建一个可用于测试对Nginx容器的网络访问的客户端容器：

```
apiVersion: v1
kind: Pod
metadata:
  name: network-policy-client-pod
spec:
  containers:
  - name: busybox
    image: radial/busyboxplus:curl
    command: ["/bin/sh", "-c", "while true; do sleep 3600; done"]
```

使用以下命令获取Nginx容器的群集IP地址：

```
kubectl get pod network-policy-secure-pod -o wide
```

使用安全容器的IP地址来测试从客户端容器到安全Nginx容器的网络访问：

```
kubectl exec network-policy-client-pod -- curl <secure pod cluster ip address>
```

创建一个网络策略，该策略限制所有对安全容器的访问，除了带有`allow-access: "true"`标签的容器之间的访问：

```
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: my-network-policy
spec:
  podSelector:
    matchLabels:
      app: secure-app
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          allow-access: "true"
    ports:
    - protocol: TCP
      port: 80
  egress:
  - to:
    - podSelector:
        matchLabels:
          allow-access: "true"
    ports:
    - protocol: TCP
      port: 80
```

获取有关群集中的NetworkPolicies的信息：

```
kubectl get networkpolicies
kubectl describe networkpolicy my-network-policy
```

