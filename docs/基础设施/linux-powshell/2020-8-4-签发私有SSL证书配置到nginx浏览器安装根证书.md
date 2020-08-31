---
layout: post
title: 【私有SSL证书】签发私有SSL证书，给nginx
---

## 一，最先进得方式：使用开源方式
https://github.com/Fishdrowned/ssl

好处，
- 一步搞定。
- 有Root.crt供客户端浏览器安装。

clone 到192.168.3.107

```bash
[root@centos3 ssl]# cd ssl
[root@centos3 ssl]# ls
ca.cnf  docs  flush.sh  gen.cert.sh  gen.root.sh  LICENSE  README.md
[root@centos3 ssl]# ./gen.cert.sh harbor.ccbjb.com.cn
Removing dir out
Creating output structure
Done
Generating a 2048 bit RSA private key
....+++
...+++
writing new private key to 'out/root.key.pem'
-----
Generating RSA private key, 2048 bit long modulus
......................+++
..+++
e is 65537 (0x10001)
Using configuration from ./ca.cnf
Check that the request matches the signature
Signature ok
The Subject's Distinguished Name is as follows
countryName           :PRINTABLE:'CN'
stateOrProvinceName   :ASN.1 12:'Guangdong'
localityName          :ASN.1 12:'Guangzhou'
organizationName      :ASN.1 12:'Fishdrowned'
organizationalUnitName:ASN.1 12:'harbor.ccbjb.com.cn'
commonName            :ASN.1 12:'*.harbor.ccbjb.com.cn'
Certificate is to be certified until Aug  5 01:54:11 2022 GMT (730 days)

Write out database with 1 new entries
Data Base Updated

Certificates are located in:
lrwxrwxrwx 1 root root 45 8月   5 09:54 /root/ssl/ssl/out/harbor.ccbjb.com.cn/harbor.ccbjb.com.cn.bundle.crt -> ./20200805-0954/harbor.ccbjb.com.cn .bundle.crt
lrwxrwxrwx 1 root root 38 8月   5 09:54 /root/ssl/ssl/out/harbor.ccbjb.com.cn/harbor.ccbjb.com.cn.crt -> ./20200805-0954/harbor.ccbjb.com.cn.crt
lrwxrwxrwx 1 root root 15 8月   5 09:54 /root/ssl/ssl/out/harbor.ccbjb.com.cn/harbor.ccbjb.com.cn.key.pem -> ../cert.key.pem
lrwxrwxrwx 1 root root 11 8月   5 09:54 /root/ssl/ssl/out/harbor.ccbjb.com.cn/root.crt -> ../root.crt
[root@centos3 ssl]#
```

out/有
- harbor.ccbjb.com.cn.bundle.crt
- harbor.ccbjb.com.cn.crt
- harbor.ccbjb.com.cn.key.pem
- root.crt

##### 下载root.crt到客户端，双击。
为了浏览器能够不提示“不安全，是否继续”

安装根证书：
- 双击根dao证书文件 弹出证du书属性的对话框，此zhi时该根证书并不受信任，我们dao需要将其加入“版受信任的根证书颁发机权构”
- 步骤二：点击“安装证书”，弹出证书导入向导
- 步骤三：点击下一步，选择证书的存储区
- 步骤四：选择“将所有的证书放入下列存储区”，然后点击下一步，选择证书存储
- 步骤五：在“选择证书存储”对话框中选择“受信任的根证书颁发机构”，点击确定，此时返回到证书导入向导页面
- 步骤六：在证书导入向导页面，证书存储变为“受信任的根证书颁发机构”，点击下一步
- 步骤七：点击“完成”，此时会弹出安全警告 步骤八：点击“是”，安装该证书。此时所有操作完成，成功将根证书加入“受信任的根证书颁发机构”。



## 二，原始得命令方式：
以harbor配置nginx的SSL私有证书为例。

### 签发私有证书

#### 生成私钥
正式生产环境建议使用商业证书！
使用openssl工具生成一个RSA私钥

`openssl genrsa -des3 -out harbor1.key 2048`

```
Generating RSA private key, 2048 bit long modulus
.......................+++
......+++
e is 65537 (0x10001)
Enter pass phrase for harbor.key:                   # 输入一个至少4位的密码
Verifying - Enter pass phrase for harbor.key:       # 重复输入密码
复制代码删除harbor.key中的密码
# openssl rsa -in harbor.key -out harbor.key
Enter pass phrase for harbor.key:                 # 输入刚才创建时的密码
writing RSA key
```

#### 去掉key的密码 

`openssl rsa -in harbor1.key -out harbor.key`


#### 生成CSR（证书签名请求）
```
# openssl req -new -key harbor.key -out harbor.csr
```

```
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [XX]:cn             # 国家
State or Province Name (full name) []:Sichuan    # 地区 
Locality Name (eg, city) [Default City]:Chengdu  # 城市
Organization Name (eg, company) [Default Company Ltd]:akiya  # 组织
Organizational Unit Name (eg, section) []:akiya  # 组织单位
Common Name (eg, your name or your server's hostname) []:akiya    # 常用名可填自己名字或域名
Email Address []:a@b.com                         # 邮件地址

Please enter the following 'extra' attributes
to be sent with your certificate request      
A challenge password []:       # 可留空
An optional company name []:   # 可留空
```


#### 生成自签名证书
注意：在使用自签名的临时证书时，浏览器会提示证书的颁发机构是未知的。 

```
echo subjectAltName = IP:192.168.3.120 > extfile.cnf
openssl x509 -req -days 365 -in harbor.csr -signkey harbor.key -out harbor.crt -extfile extfile.cnf
```

```
Signature ok
subject=/C=cn/ST=Sichuan/L=Chengdu/O=akiya/OU=akiya/CN=akiya/emailAddress=a@b.com
Getting Private key
```

#### 存放证书
拷贝到nginx的证书目录 cp harbor.* /etc/nginx/certs/

#### 配置证书到nginx
```
# vim /etc/nginx/nginx.conf
# 替换 http 上下文的内容
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    proxy_send_timeout 120;
    proxy_read_timeout 300;
    proxy_buffering    off;
    keepalive_timeout  5 5;
    tcp_nodelay        on;
    sendfile        on;
    #tcp_nopush     on;
    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}


# vim /etc/nginx/conf.d/harbor.conf
server {
    listen 2222 ssl;
    server_name harbor.ccbjb.com.cn;

    ssl_certificate /etc/nginx/certs/harbor.crt;
    ssl_certificate_key /etc/nginx/certs/harbor.key;
    ssl_session_cache shared:SSL:50m;

    location / {
        proxy_set_header        Host $host:$server_port;
        proxy_set_header        X-Real-IP $remote_addr;
        proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header        X-Forwarded-Proto $scheme;
        proxy_redirect          http:// https://;
        proxy_pass              http://192.168.3.124:8082;
        client_max_body_size       1024m;
        client_body_buffer_size    128k;
    }
}

server {
    listen 3333 ssl;
    server_name harbor.ccbjb.com.cn;

    ssl_certificate /etc/nginx/certs/harbor.crt;
    ssl_certificate_key /etc/nginx/certs/harbor.key;
    ssl_session_cache shared:SSL:50m;

    location / {
        proxy_set_header        Host $host:$server_port;
        proxy_set_header        X-Real-IP $remote_addr;
        proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header        X-Forwarded-Proto $scheme;
        proxy_redirect          http:// https://;
        proxy_pass              http://192.168.3.124:8083;
        client_max_body_size       1024m;
        client_body_buffer_size    128k;
    }
}


# 添加 https 配置
# vim /etc/nginx/conf.d/ssl.conf
server {
    listen   443 ssl;
    server_name  harbor.ccbjb.com.cn;

    # 允许大文件上传
    client_max_body_size 1G;

    # 对大于 1G 文件的下载进行优化
    #proxy_max_temp_file_size 2G;

    #ssl on;
    ssl_certificate      /etc/nginx/certs/harbor.crt;
    ssl_certificate_key  /etc/nginx/certs/harbor.key;

    location / {
        proxy_pass http://192.168.3.124:8081/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto "https";
    }
}

```
检查语法错误  
`nginx -t`  

启动nginx  
`systemctl start nginx`  

启动出错，查看`systemctl status nginx`
```
[root@centos124 ~]# systemctl start nginx
Job for nginx.service failed because the control process exited with error code. See "systemctl status nginx.service" and "journalctl -xe" for details.
[root@centos124 ~]# systemctl status nginx.service
● nginx.service - nginx - high performance web server
   Loaded: loaded (/usr/lib/systemd/system/nginx.service; disabled; vendor preset: disabled)
   Active: failed (Result: exit-code) since 二 2020-08-04 14:54:21 CST; 17s ago
     Docs: http://nginx.org/en/docs/
  Process: 4812 ExecStart=/usr/sbin/nginx -c /etc/nginx/nginx.conf (code=exited, status=1/FAILURE)

8月 04 14:54:21 centos124 systemd[1]: Starting nginx - high performance web server...
8月 04 14:54:21 centos124 nginx[4812]: nginx: [emerg] bind() to 0.0.0.0:2222 failed (13: Permission denied)
8月 04 14:54:21 centos124 systemd[1]: nginx.service: control process exited, code=exited status=1
8月 04 14:54:21 centos124 systemd[1]: Failed to start nginx - high performance web server.
8月 04 14:54:21 centos124 systemd[1]: Unit nginx.service entered failed state.
8月 04 14:54:21 centos124 systemd[1]: nginx.service failed.
```

- 原因：nginx: [emerg] bind() to 0.0.0.0:2222 failed (13: Permission denied)

- 解决：
https://blog.csdn.net/RunSnail2018/article/details/81185653
这篇文章是安装semanage增加允许的tcp端口。

而我干脆关闭selinux。
```
sed -i 's/enforcing/disabled/' /etc/selinux/config
setenforce 0
```


#### 测试
https://harbor.ccbjb.com.cn
```
502 Bad Gateway
```
nginx配置文件中http://127.0.0.1 修改成http://192.168.3.124


![](/docs/images/2020-08-04-15-25-47.png)