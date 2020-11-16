(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{592:function(s,e,n){"use strict";n.r(e);var a=n(59),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-services"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-services"}},[s._v("#")]),s._v(" 1. Services")]),s._v(" "),n("p",[s._v("通过部署，可以轻松创建一组可以动态缩放，更新和替换的副本容器。但是，很难为其他组件提供对这些容器的网络访问。服务提供了解决此问题的抽象层。客户端可以简单地访问服务，该服务可以动态代理到当前副本集的流量。在本课程中，我们将讨论服务，并演示如何创建一个公开部署的副本容器的服务。\n"),n("img",{attrs:{src:"/docs/images/2020-09-14-09-01-00.png",alt:""}}),s._v(" "),n("img",{attrs:{src:"/docs/images/2020-09-14-09-01-29.png",alt:""}})]),s._v(" "),n("h3",{attrs:{id:"相关文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相关文件"}},[s._v("#")]),s._v(" 相关文件")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://kubernetes.io/docs/concepts/services-networking/service/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://kubernetes.io/docs/concepts/services-networking/service/"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/"),n("OutboundLink")],1)])]),s._v(" "),n("h3",{attrs:{id:"课程参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#课程参考"}},[s._v("#")]),s._v(" 课程参考")]),s._v(" "),n("p",[s._v("创建部署：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.7.9\n        ports:\n        - containerPort: 80\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("使用服务公开部署的副本容器：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("apiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\nspec:\n  type: ClusterIP\n  selector:\n    app: nginx\n  ports:\n  - protocol: TCP\n    port: 8080\n    targetPort: 80\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("您可以使用以下命令获取有关该服务的更多信息：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("kubectl get svc\nkubectl get endpoints my-service\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"疑问："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#疑问："}},[s._v("#")]),s._v(" 疑问：")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("1.1 Service和Deployment的区别？")]),s._v(" "),n("ul",[n("li",[s._v("depoyment负责保持一组Pod运行。")]),s._v(" "),n("li",[s._v("service负责启用对一组Pod的网络访问")]),s._v(" "),n("li",[s._v("depoyment就是用容器镜像创的实例，")]),s._v(" "),n("li",[s._v("service负责访问这些实例，可以将deployment的端口通过端口暴露给其它服务或外界网络。")])])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("1.2 【各种端口】port、targetPort是什么？")]),s._v(" "),n("ul",[n("li",[s._v("nodePort（外部用),")]),s._v(" "),n("li",[s._v("port（内部用）port是暴露在cluster ip上的端口")]),s._v(" "),n("li",[s._v("targetPort容器的端口（最终的流量端口）")])]),s._v(" "),n("p",[s._v("总的来说，port和nodePort都是service的端口，前者暴露给k8s集群内部服务访问，后者暴露给k8s集群外部流量访问。从这两个端口到来的数据都需要经过反向代理kube-proxy，流入后端pod的targetPort上，最后到达pod内容器的containerPort。")])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("1.3 【各种IP】nodeIp,PodIp,ClusterIp什么区别？")]),s._v(" "),n("ul",[n("li",[s._v("Node IP：Node节点的IP地址，即物理网卡的IP地址。")]),s._v(" "),n("li",[s._v("Pod IP：Pod的IP地址，即docker容器的IP地址，此为虚拟IP地址。")]),s._v(" "),n("li",[s._v("Cluster IP：Service的IP地址，此为虚拟IP地址。")])])]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("1.4 【各种IP】PodIp用处？clusterIp用处？nodeIp用户？")]),s._v(" "),n("p",[s._v("Pod IP是每个Pod的IP地址，他是Docker Engine根据docker网桥的IP地址段进行分配的，通常是一个虚拟的二层网络")]),s._v(" "),n("ul",[n("li",[s._v("同Service下的pod可以直接根据PodIP相互通信")]),s._v(" "),n("li",[s._v("不同Service下的pod在集群间pod通信要借助于 cluster ip")]),s._v(" "),n("li",[s._v("pod和集群外通信，要借助于node ip")])])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("1.5 ClusterIp")]),s._v(" "),n("p",[s._v("Service的IP地址，此为虚拟IP地址。外部网络无法ping通，只有kubernetes集群内部访问使用。")]),s._v(" "),n("p",[s._v("在kubernetes查询Cluster IP\nkubectl -n 命名空间 get Service即可看到ClusterIP")]),s._v(" "),n("p",[s._v("Cluster IP是一个虚拟的IP，但更像是一个伪造的IP网络，原因有以下几点")]),s._v(" "),n("p",[s._v("Cluster IP仅仅作用于Kubernetes Service这个对象，并由Kubernetes管理和分配P地址\nCluster IP无法被ping，他没有一个“实体网络对象”来响应\nCluster IP只能结合Service Port组成一个具体的通信端口，单独的Cluster IP不具备通信的基础，并且他们属于Kubernetes集群这样一个封闭的空间。\n在不同Service下的pod节点在集群间相互访问可以通过Cluster IP")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/docs/images/2020-09-14-09-38-21.png",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"_2-networkpolicies-难点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-networkpolicies-难点"}},[s._v("#")]),s._v(" 2. NetworkPolicies (难点)")]),s._v(" "),n("p",[s._v("从安全角度来看，通常最好在基础结构的不同部分之间的任何通信上设置网络级限制。NetworkPolicies允许您限制和控制进出Pod的网络流量。在本课程中，我们将讨论NetworkPolicies，并演示如何创建一个简单的策略来限制对pod的访问。")]),s._v(" "),n("h3",{attrs:{id:"相关文件-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相关文件-2"}},[s._v("#")]),s._v(" 相关文件")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://kubernetes.io/docs/concepts/services-networking/network-policies/"),n("OutboundLink")],1)])]),s._v(" "),n("h3",{attrs:{id:"课程参考-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#课程参考-2"}},[s._v("#")]),s._v(" 课程参考")]),s._v(" "),n("p",[s._v("为了在群集中使用NetworkPolicies，我们需要有一个支持它们的网络插件。我们可以使用运河通过现有的法兰绒设置完成此任务：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("wget -O canal.yaml https://docs.projectcalico.org/v3.5/getting-started/kubernetes/installation/hosted/canal/canal.yaml\n\nkubectl apply -f canal.yaml\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("创建一个示例nginx pod：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("apiVersion: v1\nkind: Pod\nmetadata:\n  name: network-policy-secure-pod\n  labels:\n    app: secure-app\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    ports:\n    - containerPort: 80\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("创建一个可用于测试对Nginx容器的网络访问的客户端容器：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('apiVersion: v1\nkind: Pod\nmetadata:\n  name: network-policy-client-pod\nspec:\n  containers:\n  - name: busybox\n    image: radial/busyboxplus:curl\n    command: ["/bin/sh", "-c", "while true; do sleep 3600; done"]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("使用以下命令获取Nginx容器的群集IP地址：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("kubectl get pod network-policy-secure-pod -o wide\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("使用安全容器的IP地址来测试从客户端容器到安全Nginx容器的网络访问：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("kubectl exec network-policy-client-pod -- curl <secure pod cluster ip address>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("创建一个网络策略，该策略限制所有对安全容器的访问，除了带有"),n("code",[s._v('allow-access: "true"')]),s._v("标签的容器之间的访问：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: my-network-policy\nspec:\n  podSelector:\n    matchLabels:\n      app: secure-app\n  policyTypes:\n  - Ingress\n  - Egress\n  ingress:\n  - from:\n    - podSelector:\n        matchLabels:\n          allow-access: "true"\n    ports:\n    - protocol: TCP\n      port: 80\n  egress:\n  - to:\n    - podSelector:\n        matchLabels:\n          allow-access: "true"\n    ports:\n    - protocol: TCP\n      port: 80\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[s._v("获取有关群集中的NetworkPolicies的信息：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("kubectl get networkpolicies\nkubectl describe networkpolicy my-network-policy\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("img",{attrs:{src:"/docs/images/2020-09-14-14-10-43.png",alt:""}}),s._v(" "),n("img",{attrs:{src:"/docs/images/2020-09-14-14-12-39.png",alt:""}})])])}),[],!1,null,null,null);e.default=t.exports}}]);