(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{602:function(s,a,n){"use strict";n.r(a);var e=n(59),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("https://blog.csdn.net/chen1995csdn/article/details/86540833")]),s._v(" "),n("p",[s._v("最近学习k8s相关知识，整理一下第一次部署经验~")]),s._v(" "),n("p",[s._v("在已经搭建好的k8s集群上部署mysql服务主要步骤如下：")]),s._v(" "),n("p",[s._v("1、创建一个新的namespace")]),s._v(" "),n("p",[s._v("2、在该namespace下创建一个deployment")]),s._v(" "),n("p",[s._v("3、deployment自动部署好replicaSet和pod")]),s._v(" "),n("p",[s._v("4、创建对应服务")]),s._v(" "),n("p",[s._v("5、验证是否成功")]),s._v(" "),n("h2",{attrs:{id:"下面是具体的操作说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下面是具体的操作说明"}},[s._v("#")]),s._v(" 下面是具体的操作说明")]),s._v(" "),n("p",[s._v("1、创建一个新的namespace")]),s._v(" "),n("p",[s._v("#创建namespace ,命令行直接创建")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ kubectl create namespace "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("2、在该namespace下创建一个deployment（env中设置了mysql的root用户的密码为mysql）")]),s._v(" "),n("p",[s._v("(1)编写deployment的对应yaml文件: mysql-deployment.yaml")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: mysql-deployment\n  namespace: "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\nspec:\n  replicas: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  selector:\n    matchLabels:\n      app: mysql\n  template:\n    metadata:\n      labels:\n        app: mysql\n    spec:\n      containers:\n      - name: mysql\n        image: mysql:5.6\n        imagePullPolicy: IfNotPresent\n        args:\n          - "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--ignore-db-dir=lost+found"')]),s._v("\n        ports:\n        - containerPort: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n        env:\n        - name: MYSQL_ROOT_PASSWORD\n          value: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql"')]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[s._v("(2)创建deployment")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("kubectl create -f mysql-deployment.yaml --record\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("3、deployment自动部署好replicaSet和pod")]),s._v(" "),n("p",[s._v("执行一下命令可以查看test namespace 下自动部署好replicaSet和pod")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("kubectl get rs -n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n\nkubectl get pod -n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("4、创建对应服务（注意定义type=NodePort,并对应的nodeport端口号，以便集群外访问该服务）")]),s._v(" "),n("p",[s._v("(1)创建对应的service的yaml文件：mysql-svc.yaml")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("apiVersion: v1\nkind: Service\nmetadata:\n  name: mysql-svc\n  namespace: "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n  labels:\n    name: mysql-svc\nspec:\n  type: NodePort\n  ports:\n  - port: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n    protocol: TCP\n    targetPort: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n    name: http\n    nodePort: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("33306")]),s._v("\n  selector:\n    app: mysql\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("(2)创建对应的service")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("kubectl create -f mysql-svc.yaml --record  \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("5、验证是否成功")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("在远程客户端上下载mysql客户端Navicat,进行验证\n\n其中\n\n主机：service对应的pod所在的node的ip\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos3 test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pods -n test -o wide")]),s._v("\nNAME                                READY   STATUS    RESTARTS   AGE   IP            NODE      NOMINATED NODE   READINESS GATES\nmysql-deployment-79bc58d8b4-r7w8f   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          31m   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".1.10   centos2   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos3 test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\ncentos2是192.168.3.106主机。\n\n端口：上面service中的nodeport端口号\n\n密码：deployment文件env中设置的root用户的密码）\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[n("img",{attrs:{src:"/docs/images/2020-08-13-18-50-35.png",alt:""}})])])}),[],!1,null,null,null);a.default=t.exports}}]);