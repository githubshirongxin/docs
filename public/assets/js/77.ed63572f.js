(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{561:function(e,s,a){"use strict";a.r(s);var n=a(59),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("多容器吊舱提供了一个通过提供其他功能的辅助容器来增强容器的机会。本课程涵盖什么是多容器容器以及如何创建容器的基础知识。它还讨论了容器可以在同一容器中进行交互的主要方式，以及三种主要的多容器容器设计模式：边车sidecar，大使ambassador和适配器。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/docs/images/2020-09-03-13-26-11.png",alt:""}})]),e._v(" "),a("p",[e._v("请务必查看本课程的动手实验（包括实践考试），以获得一些实施多容器吊舱的动手经验。")]),e._v(" "),a("h3",{attrs:{id:"相关文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关文件"}},[e._v("#")]),e._v(" 相关文件")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/cluster-administration/logging/#using-a-sidecar-container-with-the-logging-agent",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubernetes.io/docs/concepts/cluster-administration/logging/#using-a-sidecar-container-with-the-logging-agent"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://kubernetes.io/docs/tasks/access-application-cluster/communicate-containers-same-pod-shared-volume/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubernetes.io/docs/tasks/access-application-cluster/communicate-containers-same-pod-shared-volume/"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"课程参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课程参考"}},[e._v("#")]),e._v(" 课程参考")]),e._v(" "),a("p",[e._v("这是用于在视频中创建简单的多容器容器的YAML：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("apiVersion: v1\nkind: Pod\nmetadata:\n  name: multi-container-pod\nspec:\n  containers:\n  - name: nginx\n    image: nginx:1.15.8\n    ports:\n    - containerPort: 80\n  - name: busybox-sidecar\n    image: busybox\n    command: ['sh', '-c', 'while true; do sleep 30; done;']\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("h2",{attrs:{id:"pod内的两个container互相访问的方式："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pod内的两个container互相访问的方式："}},[e._v("#")]),e._v(" pod内的两个container互相访问的方式：")]),e._v(" "),a("h3",{attrs:{id:"第一种，直接访问另一个container的端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一种，直接访问另一个container的端口"}},[e._v("#")]),e._v(" 第一种，直接访问另一个container的端口")]),e._v(" "),a("h3",{attrs:{id:"第二种，volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二种，volume"}},[e._v("#")]),e._v(" 第二种，volume")]),e._v(" "),a("p",[a("img",{attrs:{src:"/docs/images/2020-09-09-10-36-38.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"第三种，shareprocess-namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三种，shareprocess-namespace"}},[e._v("#")]),e._v(" 第三种，shareprocess Namespace")]),e._v(" "),a("p",[a("img",{attrs:{src:"/docs/images/2020-09-09-10-37-13.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"多容器pod的设计模式，有三种："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多容器pod的设计模式，有三种："}},[e._v("#")]),e._v(" 多容器pod的设计模式，有三种：")]),e._v(" "),a("ol",[a("li",[e._v("SideCar模式\n"),a("img",{attrs:{src:"/docs/images/2020-09-09-10-39-18.png",alt:""}})]),e._v(" "),a("li",[e._v("Ambassador模式\n"),a("img",{attrs:{src:"/docs/images/2020-09-09-10-39-52.png",alt:""}})]),e._v(" "),a("li",[e._v("Adaptor模式 主要用来转换格式输出\n"),a("img",{attrs:{src:"/docs/images/2020-09-09-10-42-05.png",alt:""}})])]),e._v(" "),a("p",[e._v("Additional Information and Resources")]),e._v(" "),a("p",[e._v("Your supermarket company is in the process of moving their infrastructure to a Kubernetes platform in the cloud. This is sometimes challenging, because some of the older, legacy portions of that infrastructure have non-standard requirements. One of these legacy applications is a web service that provides a list of the various types of fruit the company sells in its stores.")]),e._v(" "),a("p",[e._v("This service has already been packaged into a container image, but there is one special requirement: The legacy app is hard-coded to only serve content on port 8775, but the team wants to be able to access the service using the standard port 80. Your task is to build a Kubernetes pod that runs this legacy container and uses the ambassador design pattern to expose access to the service on port 80.")]),e._v(" "),a("p",[e._v("This setup will need to meet the following specifications:")]),e._v(" "),a("ul",[a("li",[e._v("The pod should have the name "),a("code",[e._v("fruit-service")]),e._v(".")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("fruit-service")]),e._v(" pod should have a container that runs the legacy fruit service image: "),a("code",[e._v("linuxacademycontent/legacy-fruit-service:1")]),e._v(".")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("fruit-service")]),e._v(" pod should have an ambassador container that runs the "),a("code",[e._v("haproxy:1.7")]),e._v(" image and proxies incoming traffic on port "),a("code",[e._v("80")]),e._v(" to the legacy service on port "),a("code",[e._v("8775")]),e._v(" (the HAProxy configuration for this is provided below).")]),e._v(" "),a("li",[e._v("Port "),a("code",[e._v("80")]),e._v(" should be exposed as a containerPort. Note that you do not need to expose port "),a("code",[e._v("8775")]),e._v(".")]),e._v(" "),a("li",[e._v("The HAProxy configuration should be stored in a ConfigMap called "),a("code",[e._v("fruit-service-ambassador-config")]),e._v(".")]),e._v(" "),a("li",[e._v("The HAProxy config should be provided to the ambassador container using a volume mount that places the data from the ConfigMap in a file at "),a("code",[e._v("/usr/local/etc/haproxy/haproxy.cfg")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("haproxy.cfg")]),e._v(" should contain the following configuration data:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("global\n    daemon\n    maxconn 256\n\ndefaults\n    mode http\n    timeout connect 5000ms\n    timeout client 50000ms\n    timeout server 50000ms\n\nlisten http-in\n    bind *:80\n    server server1 127.0.0.1:8775 maxconn 32\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("p",[e._v("Once your pod is up and running, it's a good idea to test it to make sure you can access the service from within the cluster using port 80. In order to do this, you can create a busybox pod in the cluster, and then run a command to attempt to access the service from within the busybox pod.")]),e._v(" "),a("p",[e._v("Create a descriptor for the busybox pod called "),a("code",[e._v("busybox.yml")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("apiVersion: v1\nkind: Pod\nmetadata:\n  name: busybox\nspec:\n  containers:\n  - name: myapp-container\n    image: radial/busyboxplus:curl\n    command: ['sh', '-c', 'while true; do sleep 3600; done']\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v("Create the busybox testing pod.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl apply -f busybox.yml\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Use this command to access "),a("code",[e._v("fruit-service")]),e._v(" using port 80 from within the busybox pod.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl exec busybox -- curl $(kubectl get pod fruit-service -o=custom-columns=IP:.status.podIP --no-headers):80\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("If the service is working, you should see some JSON listing various types of fruit.")]),e._v(" "),a("h3",{attrs:{id:"learning-objectives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#learning-objectives"}},[e._v("#")]),e._v(" Learning Objectives")]),e._v(" "),e._v("check\\_circleCreate a ConfigMap containing the configuration for the HAProxy ambassador."),e._v(" "),a("p",[e._v("Create a YAML definition file called "),a("code",[e._v("fruit-service-ambassador-config.yml")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: fruit-service-ambassador-config\ndata:\n  haproxy.cfg: |-\n    global\n        daemon\n        maxconn 256\n\n    defaults\n        mode http\n        timeout connect 5000ms\n        timeout client 50000ms\n        timeout server 50000ms\n\n    listen http-in\n        bind *:80\n        server server1 127.0.0.1:8775 maxconn 32\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br")])]),a("p",[e._v("Create the ConfigMap in the cluster from the YAML definition file.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl apply -f fruit-service-ambassador-config.yml\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),e._v("check\\_circleCreate a multi-container pod which provides access to the legacy service on port 80."),e._v(" "),a("p",[e._v("Create a YAML definition file for the pod called "),a("code",[e._v("fruit-service.yml")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("apiVersion: v1\nkind: Pod\nmetadata:\n  name: fruit-service\nspec:\n  containers:\n  - name: legacy-fruit-service\n    image: linuxacademycontent/legacy-fruit-service:1\n  - name: haproxy-ambassador\n    image: haproxy:1.7\n    ports:\n    - containerPort: 80\n    volumeMounts:\n    - name: config-volume\n      mountPath: /usr/local/etc/haproxy\n  volumes:\n  - name: config-volume\n    configMap:\n      name: fruit-service-ambassador-config\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br")])]),a("p",[e._v("Create the pod in the cluster.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl apply -f fruit-service.yml\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("If everything is working correctly, you should be able to access "),a("code",[e._v("fruit-service")]),e._v(" from another pod.")]),e._v(" "),a("p",[e._v("You can create a busybox pod to use for testing with a file called "),a("code",[e._v("busybox.yml")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("apiVersion: v1\nkind: Pod\nmetadata:\n  name: busybox\nspec:\n  containers:\n  - name: myapp-container\n    image: radial/busyboxplus:curl\n    command: ['sh', '-c', 'while true; do sleep 3600; done']\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v("Create the busybox testing pod.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl apply -f busybox.yml\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Use the busybox pod to test the legacy service on port 80. This command uses a subcommand to get the cluster's IP address for the pod and executes a "),a("code",[e._v("curl")]),e._v(" command in the busybox pod to access the legacy service on port 80.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl exec busybox -- curl $(kubectl get pod fruit-service -o=custom-columns=IP:.status.podIP --no-headers):80\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("If everything is working, you should see some JSON listing various types of fruit.")])])}),[],!1,null,null,null);s.default=t.exports}}]);