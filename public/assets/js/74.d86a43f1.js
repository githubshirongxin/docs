(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{559:function(s,e,a){"use strict";a.r(e);var n=a(59),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-创建集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建集群"}},[s._v("#")]),s._v(" 1. 创建集群")]),s._v(" "),a("p",[s._v("尽管安装和配置Kubernetes集群不是CKAD考试的目标之一，但重要的一点是要获得本课程中涵盖的概念的实际操作经验。因此，拥有一个Kubernetes集群非常有用，您可以用它进行实验并尝试整个课程中涉及的内容。本课程将指导您完成构建基本集群的过程，您可以在进行后续操作时进行试验。")]),s._v(" "),a("h3",{attrs:{id:"课程参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课程参考"}},[s._v("#")]),s._v(" 课程参考")]),s._v(" "),a("p",[s._v("如果您想继续学习，下面有本课程中使用的命令的参考。")]),s._v(" "),a("h4",{attrs:{id:"在所有3台服务器上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在所有3台服务器上"}},[s._v("#")]),s._v(" 在所有3台服务器上")]),s._v(" "),a("p",[s._v("首先，设置Docker和Kubernetes存储库：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\n\nsudo add-apt-repository    "deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n   $(lsb_release -cs) \\\n   stable"\n\ncurl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -\n\ncat << EOF | sudo tee /etc/apt/sources.list.d/kubernetes.list\ndeb https://apt.kubernetes.io/ kubernetes-xenial main\nEOF\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("安装Docker和Kubernetes软件包：")]),s._v(" "),a("p",[s._v("请注意，如果要使用Kubernetes的较新版本，请更改为kubelet，kubeadm和kubectl安装的版本。确保所有三个使用相同的版本。")]),s._v(" "),a("p",[a("strong",[s._v("注意")]),s._v("：Kubernetes 1.13.4（及更早版本）中当前存在一个错误，该错误可能导致安装软件包时出现问题。使用1.13.5-00可以避免此问题。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo apt-get update\n\nsudo apt-get install -y docker-ce=18.06.1~ce~3-0~ubuntu kubelet=1.14.5-00 kubeadm=1.14.5-00 kubectl=1.14.5-00\n\nsudo apt-mark hold docker-ce kubelet kubeadm kubectl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("启用iptables桥接呼叫：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('echo "net.bridge.bridge-nf-call-iptables=1" | sudo tee -a /etc/sysctl.conf\n\nsudo modprobe br_netfilter\n\nsudo sysctl -p\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"在kube主服务器上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在kube主服务器上"}},[s._v("#")]),s._v(" 在Kube主服务器上")]),s._v(" "),a("p",[s._v("初始化集群：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo nano /proc/sys/net/ipv4/ip_forward\n(Change from 0 to 1) \n\nsudo kubeadm init --pod-network-cidr=10.244.0.0/16\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("设置本地kubeconfig：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mkdir -p $HOME/.kube\n\nsudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n\nsudo chown $(id -u):$(id -g) $HOME/.kube/config\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("安装Flannel网络：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/bc79dd1505b0c8681ece4de4c0d86c5cd2643275/Documentation/kube-flannel.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("**注意：**如果您正在使用Kubernetes 1.16或更高版本，则需要使用更新的法兰绒安装yaml：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/3f7d3e6c24f641e7ff557ebcea1136fdf4b1b6a1/Documentation/kube-flannel.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"在每个kube节点服务器上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在每个kube节点服务器上"}},[s._v("#")]),s._v(" 在每个Kube节点服务器上")]),s._v(" "),a("p",[s._v("将节点加入集群。通过在初始化主节点时从输出中复制提供的行来执行此操作。请记住，复制命令时，如果系统在Web终端中跨多行，则系统将添加换行符。要解决此问题，请将命令复制到文本编辑器，并确保其适合整行。它看起来应该如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo kubeadm join $controller_private_ip:6443 --token $token --discovery-token-ca-cert-hash $hash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"在kube主服务器上-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在kube主服务器上-2"}},[s._v("#")]),s._v(" 在Kube主服务器上")]),s._v(" "),a("p",[s._v("验证所有节点已加入并准备就绪：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kubectl get nodes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("您应该看到所有三台服务器的状态为“就绪”：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("NAME                      STATUS   ROLES    AGE   VERSION\nwboyd1c.mylabserver.com   Ready    master   54m   v1.13.4\nwboyd2c.mylabserver.com   Ready    <none>   49m   v1.13.4\nwboyd3c.mylabserver.com   Ready    <none>   49m   v1.13.4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_2-创建pod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建pod"}},[s._v("#")]),s._v(" 2.创建pod")]),s._v(" "),a("p",[s._v("Pod是最基本的Kubernetes对象类型之一。Kubernetes的大多数编排功能都围绕Pod的管理。在本课程中，我们将讨论什么是Pod，并演示如何创建Pod。我们还将讨论创建容器后如何编辑和删除容器。本课中讨论的用于管理Pod的原理也适用于其他类型的Kubernetes对象的管理。")]),s._v(" "),a("h3",{attrs:{id:"相关文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关文件"}},[s._v("#")]),s._v(" 相关文件")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"课程参考-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课程参考-2"}},[s._v("#")]),s._v(" 课程参考")]),s._v(" "),a("p",[s._v("创建一个新的Yaml文件以包含pod定义。使用任何喜欢的编辑器，但我们使用了"),a("code",[s._v("vi")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vi my-pod.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("my-pod.yml")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\n  labels:\n    app: myapp\nspec:\n  containers:\n  - name: myapp-container\n    image: busybox\n    command: ['sh', '-c', 'echo Hello Kubernetes! && sleep 3600']\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("从yaml定义文件创建一个pod：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kubectl create -f my-pod.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("通过更新yaml定义并重新应用来编辑pod：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kubectl apply -f my-pod.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("您也可以像这样编辑pod：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kubectl edit pod my-pod\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("您可以像这样删除pod：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kubectl delete pod my-pod\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3-名字空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-名字空间"}},[s._v("#")]),s._v(" 3.名字空间")]),s._v(" "),a("p",[s._v("尽管名称空间不在CKAD考试的目标列表中，但它们在考试可能涵盖的许多任务中起着重要作用。为了避免在使用Kubernetes时可能出现的许多情况下产生混淆，必须了解名称空间。在本课中，我们将简要讨论名称空间，如何将对象分配给名称空间以及如何浏览名称空间中的对象。")]),s._v(" "),a("h3",{attrs:{id:"相关文件-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关文件-2"}},[s._v("#")]),s._v(" 相关文件")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"课程参考-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课程参考-3"}},[s._v("#")]),s._v(" 课程参考")]),s._v(" "),a("p",[s._v("您可以像这样获得集群中名称空间的列表：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kubectl get namespaces\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("您也可以创建自己的名称空间。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kubectl create ns my-ns\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("要将对象分配给自定义名称空间，只需指定其"),a("code",[s._v("metadata.namespace")]),s._v("属性即可。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-ns-pod\n  namespace: my-ns\n  labels:\n    app: myapp\nspec:\n  containers:\n  - name: myapp-container\n    image: busybox\n    command: ['sh', '-c', 'echo Hello Kubernetes! && sleep 3600']\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("使用创建的yaml文件创建容器。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kubectl create -f my-ns.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("-n")]),s._v("当使用类似的命令时，请使用该标志指定名称空间"),a("code",[s._v("kubectl get")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kubectl get pods -n my-ns\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("您还可以"),a("code",[s._v("-n")]),s._v("在使用时使用来指定名称空间"),a("code",[s._v("kubectl describe")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kubectl describe pod my-ns-pod -n my-ns\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4-基本容器配置-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-基本容器配置-command"}},[s._v("#")]),s._v(" 4. 基本容器配置-command")]),s._v(" "),a("p",[s._v("在Kubernetes中构建应用程序时，通常需要为容器提供一些配置。在这一课中，我们将讨论一些常用的容器配置选项："),a("code",[s._v("command")]),s._v("，"),a("code",[s._v("args")]),s._v("，和"),a("code",[s._v("containerPort")]),s._v("。完成本课程后，您将基本了解Kubernetes允许您自定义容器在Pod中的运行方式。")]),s._v(" "),a("h3",{attrs:{id:"相关文件-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关文件-3"}},[s._v("#")]),s._v(" 相关文件")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"课程参考-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课程参考-4"}},[s._v("#")]),s._v(" 课程参考")]),s._v(" "),a("p",[s._v("您可以为容器指定自定义命令。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-command-pod\n  labels:\n    app: myapp\nspec:\n  containers:\n  - name: myapp-container\n    image: busybox\n    command: ['echo']\n  restartPolicy: Never\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("您还可以像这样添加自定义参数：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-args-pod\n  labels:\n    app: myapp\nspec:\n  containers:\n  - name: myapp-container\n    image: busybox\n    command: ['echo']\n    args: ['This is my custom argument']\n  restartPolicy: Never\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("这是带有containerPort的pod：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-containerport-pod\n  labels:\n    app: myapp\nspec:\n  containers:\n  - name: myapp-container\n    image: nginx\n    ports:\n    - containerPort: 80\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("您可以随时使用来检查Pod的状态"),a("code",[s._v("kubectl get pods")]),s._v("。")])])}),[],!1,null,null,null);e.default=t.exports}}]);