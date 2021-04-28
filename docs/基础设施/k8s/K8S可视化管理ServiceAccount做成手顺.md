### K8S可视化管理ServiceAccount做成手顺

#### 1.先用管理员token登录

​     管理员token

      ```
kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep kuboard-user | awk '{print $1}')
      ```
![](/docs/images/2021-02-05-09-43-46.png)
![image-20210428140224990](/docs/images/Kuboard/image-20210428140224990.png)

#### 2.生成特殊用的ServiceAccount

点击权限管理

![image-20210428140055250](/docs/images/Kuboard/image-20210428140055250.png)

创建ServiceAccount

![image-20210428140327926](/docs/images/Kuboard/image-20210428140327926.png)

![image-20210428140424614](/docs/images/Kuboard/image-20210428140424614.png)

点击保存->应用，进行到下一步

![image-20210428140615681](/docs/images/Kuboard/image-20210428140615681.png)

为角色添加权限

![image-20210428140723050](/docs/images/Kuboard/image-20210428140723050.png)

创建之后点击查看，Token，用于ServiceAccount登录

![image-20210428141230200](/docs/images/Kuboard/image-20210428141230200.png)

最后用生成的ServiceAccount，登录Kuboart。



PS：普通用户登录方式

在master机，输入一下命令

```
kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep kuboard-viewer | awk '{print $1}')
```

