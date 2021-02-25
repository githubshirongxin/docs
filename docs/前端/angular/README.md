---
layout: post
title: ----【angular相关】----
---

![](/docs/images/2021-02-25-10-00-28.png)

- 启动服务
```
ng serve --open
```

-  创建一个组件
```
ng g component components/组件名
```

组件里的方法无法在组件之间共享。只能自己用。
所以创建服务，服务里的方法所有组件都能用。
::: warning
组件能调用服务。
服务不能调用组件。
服务之间可以相互调用
父子组件可以相互传值
:::
- 创建一个服务
```
ng g service my-new-service
ng g service services/storage //放到services目录下。
```
  - app.modules引入并配置该服务。
   ```js
   - // 引入并配置服务，
   import { StorageService} from './services/storage.service';
   ...
    providers: [
      StorageService // 引入服务
    ],
    ```
  - 其他组件里这么使用
    - 1.每个组件也得引入这个服务。注意ts文件的相对路径。
    - 2.在组件的构造函数里
        ```
        (public varname:ServiceName){
        this.varName.serviceMethod();
        }
        ```


## router-outlet就是挂载子组件用.