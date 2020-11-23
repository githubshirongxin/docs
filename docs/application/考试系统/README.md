---
layout: post
title: CCBJB在线考试系统V1.0总结
---

# 在线教育总结 V1.0

## 连接开发（测试）环境：
- 前端：192.168.3.130 ,容器，nginx代理了后端/api/避免跨域问题。
  - 前台代码编译， npm run build 
  - Dockerfile ，把生成的dist/拷贝到nginx镜像的/usr/share/nginx/html/
  - nginx.conf ，作用有两个：
    - nginx指定了前端代码在/usr/share/nginx/html/
    - nginx代理了后端/api/避免跨域问题。 在前台nginx容器里
- 后端：192.168.3.130
  - java容器，执行java -jar命令。
- DB：192.168.3.130
  - 初始化数据，首次启动会导入初始数据，中间故障重启，会恢复持久化数据而不是重新导入旧的原始数据 

## 本番环境：
- https://kaoshi.ccbjb.com.cn
 一个前端+一个后端+一个mysql服务器。


## 架构
前后端分离。vue+springboot+mysql

## 前后端跨域问题解决：

### 问题：
前后端分离部署之后，虽然都是同一台服务器，前台http://192.168.3.130:80 后台 http://192.168.3.130:8099，
因为端口不同，所以前台发送的请求，后台处理之后，前台接到返回的数据，首先判断数据头，发现端口对不上。
认为中间有人修改了数据，认为不安全数据，就抛弃掉了。导致，CROS问题。

### 解决：
- 思路：
一般的解决方法是用nginx来代理前台和后台。这样前台后台对客户来说就不是两个不同的端口了。而是相同端口的不同path。
例如。后台http://192.168.3.130:8099伪装成http://192.168.3.130:80/api 端口和IP都一样，就不报CROS问题了。
只需要在nginx配置好代理后端。
- 具体：
 后端代码不动。 前端代码：
 #### Dockerfile:
 ```
 FROM docker.ccbjb.com.cn/library/nginx
COPY dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
```
#### nginx.conf
```
user  root;
worker_processes  auto;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {

        include       mime.types;                                                   
    default_type  application/octet-stream;                                     
                                                                                
    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '  
    #                  '$status $body_bytes_sent "$http_referer" '              
    #                  '"$http_user_agent" "$http_x_forwarded_for"';            
                                                                                
    #access_log  logs/access.log  main;                                         
                                                                                
    sendfile        on;                                                         
    #tcp_nopush     on;                                                         
                                                                                
    #keepalive_timeout  0;                                                      
    keepalive_timeout  65;                                                      
                                                                                
    #gzip  on;                                                                  
                                                                                
    server {                                                                    
        listen       80;                                                        
        server_name  localhost;                                                 
                                                                                
        #charset koi8-r;                                                        
                                                                                
        #access_log  logs/host.access.log  main;                                
                                                                                
        location / {                                                            
            #root   html;                                                       
            #root   /root/test-system/dist;                                      
            root   /usr/share/nginx/html;
            index  index.html index.htm;                                        
        }                                                                       
                                                                                
        location  /api/ {                                                       
            rewrite ^/api/(.*) /$1 break;                                       
            proxy_pass  http://192.168.3.130:8099;                              
        }                                                                       
    }                                                                             
}
```
 #### 修改config/prod.env.js,API_ROOT后面追加一个api，这样所有的axios请求后面都会追加一个/api
 ```
 'use strict'
  module.exports = {
    NODE_ENV: '"production"',
    API_ROOT: '"http://192.168.3.130/api"' //前后端分离，解决跨域问题。前后台都经过一个nginx
    //API_ROOT: '"http://localhost"'
}
```
#### src/request/api/base.js 没动！
```
/**
 * 接口域名的管理
 */
const base = {
  url: process.env.API_ROOT
}

export default base;
```

#### src/request/api/login.js 没动！
```
import base from './base'; // 导入接口域名列表
import axios from '../utils/http'; // 导入http中创建的axios实例

const loginUrl = base.url + '/Login';
```

可见以login为例（其他功能也是一样）url都是base.js里的url后拼接真正的功能符号(例如/Login)
所以，把config/prod.env.js改了，就把所有的url都添加上了api。

### 这还不算完，还得知道下面的内容：
#### npm run build 理解
- 使用的是production环境，我们用这个环境来连接测试（真正本番环境需要修改这个文件），
- 它调用build/webpack.prod.conf.js,
- 这个js又调用config/prod.env.js
- 最终生成了/dist内容
- config/index.js里没有启动任何端口的服务。

#### npm run dev 理解
- 使用的是development环境。用这个来本地开发前台（而不是前后台联调。用这个命令联调需要修改config/dev.env.js里的url为后台真正的url，默认是/static）
- 它调用build/webpack.dev.conf.js,
- 这个js又调用config/dev.env.js
- config/index.js里把localhost:8080端口启动起来。

## 以后想本地前后台联调
### 1. 拷贝dist/到后台的方式
- 本地启动前台和后台
- 不用修改config/dev.env.js
- 执行npm run dev
- 拷贝前台生成的代码到后台/resources/static下
- 启动后台

### 2. 前后台分离的方式联调前后台。
- 修改config/prod.env.js把API_ROOT: '"http://前台IP/api"'
- 前台nginx.conf修改 
  ```
   location / {                                                            
            root   /usr/share/nginx/html;
            index  index.html index.htm;                                        
   }                                                                       
                                                                                
   location  /api/ {                                                       
            rewrite ^/api/(.*) /$1 break;                                       
            proxy_pass  http://真正后台IP:真正后台端口; # /api代理后台
   }       

  ```
- 启动前台nginx
- 启动后台服务