(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{588:function(s,a,n){"use strict";n.r(a);var t=n(59),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("k8s资源，资源清单，常用字段说明，容器生命周期")]),s._v(" "),n("h2",{attrs:{id:"k8s-【资源】简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#k8s-【资源】简介"}},[s._v("#")]),s._v(" k8s 【资源】简介")]),s._v(" "),n("p",[s._v("资源实例化叫对象\n集群资源分类（按生效范围）：")]),s._v(" "),n("ul",[n("li",[s._v("名称空间 < 集群级别")]),s._v(" "),n("li",[s._v("元数据型\n两者不是一个标准。在两者之间。")])]),s._v(" "),n("h3",{attrs:{id:"名称空间级别："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#名称空间级别："}},[s._v("#")]),s._v(" 名称空间级别：")]),s._v(" "),n("p",[s._v("只在次名称空间有效 kubeadm k8s 是kube-system\n默认 -n default\n在某个空间下看不到另一个空间的资源。")]),s._v(" "),n("h4",{attrs:{id:"_1-工作负载型资源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-工作负载型资源"}},[s._v("#")]),s._v(" 1. 工作负载型资源")]),s._v(" "),n("p",[s._v("pod、ReplicaSet(通过标签管理pod创建)、Deployment、StatefulSet（有状态服务）、DaemonSet（运行pod主键）、Job（批处理）、CronJob")]),s._v(" "),n("h4",{attrs:{id:"_2-服务发现及负载均衡资源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-服务发现及负载均衡资源"}},[s._v("#")]),s._v(" 2. 服务发现及负载均衡资源")]),s._v(" "),n("p",[s._v("SLB,Service,Ingress")]),s._v(" "),n("h4",{attrs:{id:"_3-配置与存储资源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置与存储资源"}},[s._v("#")]),s._v(" 3. 配置与存储资源")]),s._v(" "),n("p",[s._v("Volume（存储卷）,CSI（容器存储接口，可以扩展第三方存储卷）")]),s._v(" "),n("h4",{attrs:{id:"_4-特殊类型的存储卷"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-特殊类型的存储卷"}},[s._v("#")]),s._v(" 4. 特殊类型的存储卷")]),s._v(" "),n("p",[s._v("ConfigMap（当配置中心用）,Secret(sfd),DownloadAPI(把外部环境的信息输出给容器)")]),s._v(" "),n("h3",{attrs:{id:"集群级别："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集群级别："}},[s._v("#")]),s._v(" 集群级别：")]),s._v(" "),n("p",[s._v("在集群范围内有效 role\n不管在哪个名字空间下，只要是这个集群，全集群可见。")]),s._v(" "),n("p",[s._v("NameSpace,Node,Role,ClusterRole,RoleBingding  ,ClusterRoleBinding")]),s._v(" "),n("h3",{attrs:{id:"元数据级别："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#元数据级别："}},[s._v("#")]),s._v(" 元数据级别：")]),s._v(" "),n("p",[s._v("通过指标进行操作 HPA（通过cpu使用率来扩展）\nPodTemplate,LimitRange")]),s._v(" "),n("hr"),s._v(" "),n("h2",{attrs:{id:"【资源清单】"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#【资源清单】"}},[s._v("#")]),s._v(" 【资源清单】")]),s._v(" "),n("p",[s._v("yaml创建符合期望的pod，这个yaml叫资源清单")]),s._v(" "),n("h3",{attrs:{id:"yaml的格式："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yaml的格式："}},[s._v("#")]),s._v(" yaml的格式：")]),s._v(" "),n("ul",[n("li",[s._v("不允许使用Tab，只允许使用空格")]),s._v(" "),n("li",[s._v("缩进的空格数不重要，只要相同层级的左侧对齐即可。")]),s._v(" "),n("li",[s._v("#表示注释")])]),s._v(" "),n("h3",{attrs:{id:"yaml支持的数据结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yaml支持的数据结构"}},[s._v("#")]),s._v(" yaml支持的数据结构")]),s._v(" "),n("ul",[n("li",[s._v("对象")]),s._v(" "),n("li",[s._v("数组")]),s._v(" "),n("li",[s._v("纯量：单个不可再分的值")])]),s._v(" "),n("h4",{attrs:{id:"对象："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对象："}},[s._v("#")]),s._v(" 对象：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("name: shirx\nage: 19\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h4",{attrs:{id:"数组："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组："}},[s._v("#")]),s._v(" 数组：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("aniaml\n- Cat\n- dog\n\nanimal: [cat,dog]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h4",{attrs:{id:"复合类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复合类型"}},[s._v("#")]),s._v(" 复合类型:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("language:\n- Ruby\n- perl\n- python\nwebsites:\nYaml: yaml.org\nRuby: ruby-lang.org\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h4",{attrs:{id:"纯量："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#纯量："}},[s._v("#")]),s._v(" 纯量：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("时间日期，数值\nnumber: 12.30\nisSet : true\nparent: ~ # null\niso8601:2001-12-14t21:59\ne: !!str 123 #强制转换成字符串\nstr: 这是字符串\nstr: '这是 字符串'\nstr: '这是 \\n字符串' #不转义\nstr: \"这是 \\n字符串\" #转义成换行\n// 单引号中还有单引号,必须使用两个单引号转义\nstr: 'shirx''s dog'\n// 第二行必须至少有单空格缩进.换行会被转为空格\nstr:字符串\n  可以写成\n  多行\n\n// 也可以用|或> 保留换行\nthis: | \nis\na \nstory\n\n// |+ 表示保留换行符 |- 表示删除末尾换行符\nstr: this |-\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("hr"),s._v(" "),n("h2",{attrs:{id:"pod必须存在的属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pod必须存在的属性"}},[s._v("#")]),s._v(" pod必须存在的属性")]),s._v(" "),n("p",[s._v("pod必须存在的属性\n"),n("img",{attrs:{src:"/docs/images/2020-07-17-17-17-11.png",alt:""}})]),s._v(" "),n("p",[s._v("有这些属性就能运行pod了。")]),s._v(" "),n("h2",{attrs:{id:"pod可选的属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pod可选的属性"}},[s._v("#")]),s._v(" pod可选的属性")]),s._v(" "),n("p",[n("img",{attrs:{src:"/docs/images/2020-07-17-17-25-05.png",alt:""}})]),s._v(" "),n("p",[s._v("imagePullPolicy : always 总是拉新镜像\ncommand : 覆盖镜像里原来的指令\nargs: command的参数\nworkDir：跟docker的workdir一样")]),s._v(" "),n("p",[n("img",{attrs:{src:"/docs/images/2020-07-17-17-27-21.png",alt:""}}),s._v("\nports\nports.name :端口名称\nports.hostPort : 主机上的端口\nports.protocol :")]),s._v(" "),n("p",[n("img",{attrs:{src:"/docs/images/2020-07-17-17-29-14.png",alt:""}}),s._v(" "),n("img",{attrs:{src:"/docs/images/2020-07-17-17-30-25.png",alt:""}}),s._v(" "),n("img",{attrs:{src:"/docs/images/2020-07-17-17-30-00.png",alt:""}})]),s._v(" "),n("p",[s._v("用到的时候就明白了。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("//讲上面的具体属性的。\nkubectl explain --help\n// 例如\nkubectl explain pod.apiVersion\nkubectl explain pod.spec\nkubectl explain pod.metadata\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" pod.yaml\n\napiVersion: v1\nkind: Pod "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 必须大写P")]),s._v("\nmetadata:\n  name: myapp-pod\n  namespace: default\n  labels:\n    app: myapp\n    version: v1\nspec:\n  containers: \n  - name: app\n    image: harbor.ccbjb.com.cn/library/myapp:v1\n  - name: "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n    image: harbor.ccbjb.com.cn/library/myapp:v1 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可能端口被占用")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[n("code",[s._v("kubectl -f pod.yaml")])]),s._v(" "),n("p",[n("code",[s._v("kubectl get pod")])]),s._v(" "),n("p",[n("code",[s._v("kubectl describe pod mypodName")])]),s._v(" "),n("p",[n("code",[s._v("kubectl log myaap-pod -c test")]),s._v(" # log后接pod名字，-c指定容器名字 ，看log")]),s._v(" "),n("p",[s._v("https://www.bilibili.com/video/BV1ME411g7EU?p=17 17:53")])])}),[],!1,null,null,null);a.default=e.exports}}]);