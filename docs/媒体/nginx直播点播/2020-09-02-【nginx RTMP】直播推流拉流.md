---
layout: post
title: 【nginx RTMP】直播推流拉流
---

## 参考：[【搭建基于nginx的rtmp直播服务器】](https://hywlovexyc.info/blog/archives/572/#%E6%8E%A8%E6%8B%89%E6%B5%81)

[技术](https://hywlovexyc.info/blog/category/Tech/),[视频](https://hywlovexyc.info/blog/category/video/)

# 搭建基于nginx的rtmp直播服务器

发表于 2019-12-12 浏览量 3490

# 视频教程

<https://www.bilibili.com/video/av78957794>  
OBS录屏推流教程：<https://www.bilibili.com/video/av78808759>

搭建nginx + nginx-rtmp-module  
演示的系统使用CentOS-7-x86\_64-Everything-1611.iso

## 关闭防火墙

请根据实际情况调整防火墙。为了演示方便，博主关闭防火墙。  
临时停止

```
systemctl stop firewalld
```

禁用

```
systemctl disable firewalld
```

查看状态

```
systemctl status firewalld
```

## 安装wget

```
yum -y install wget
```

## 安装 gcc gcc-c++

```
yum -y install gcc gcc-c++
```

## 安装PCRE库

```
cd /usr/local/
wget http://jaist.dl.sourceforge.net/project/pcre/pcre/8.33/pcre-8.33.tar.gz
tar -zxvf pcre-8.33.tar.gz
cd pcre-8.33
./configure
make && make install
```

## 安装openssl

```
cd /usr/local/ 
wget http://www.openssl.org/source/openssl-1.0.1j.tar.gz 
tar -zxvf openssl-1.0.1j.tar.gz 
cd openssl-1.0.1j
./config
make && make install
```

![nginxrtmp2.jpg](https://pic.hywlovexyc.info/images/2019/12/12/nginxrtmp2.jpg "nginxrtmp2.jpg")  
如果提示You need Perl 5，则输入下面这个命令。

```
yum -y install Perl 5
```

## 安装zlib

```
cd /usr/local/
wget http://zlib.net/zlib-1.2.11.tar.gz
tar -zxvf zlib-1.2.11.tar.gz
cd ./zlib-1.2.11
./configure
make && make install
```

## git clone

```
cd /usr/local/
yum -y install git
git clone https://github.com/arut/nginx-rtmp-module.git 
```

## 安装nginx

```
cd /usr/local/
wget http://nginx.org/download/nginx-1.8.0.tar.gz
tar -zxvf nginx-1.8.0.tar.gz
cd nginx-1.8.0
./configure --prefix=/usr/local/src/nginx --with-http_stub_status_module --with-http_gzip_static_module --with-http_realip_module --with-http_sub_module --with-http_ssl_module  --add-module=../nginx-rtmp-module  --with-openssl=/usr/local/openssl-1.0.1j --with-http_ssl_module
make && make install 
```
::: danger 疑问：
 --prefix=/usr/local/src/nginx 这时什么意思？实际nginx下载目录是/usr/local/nginx-1.8.0
 为什么不指定这个目录呢？
:::

如果提示

```
./configure: error: SSL modules require the OpenSSL library.
```

执行

```
yum -y install openssl openssl-devel
```

如果提示

```
 ./configure: error: the HTTP rewrite module requires the PCRE library.
```

执行
```
yum -y install pcre-devel
```

我下载并安装了pcre-8.33.tar.gz 和 openssl-1.0.1j.tar.gz ，并没有出现上面的错误

# nginx相关命令

启动

```
/usr/local/src/nginx/sbin/nginx
```

重启

```
/usr/local/src/nginx/sbin/nginx –s reload
```

启动后，打开浏览器，输入服务器ip地址，访问显示如下页面，则表示成功安装。  
![nginxrtmp3.jpg](https://pic.hywlovexyc.info/images/2019/12/12/nginxrtmp3.jpg "nginxrtmp3.jpg")

# 修改conf

![nginxrtmp4.jpg](https://pic.hywlovexyc.info/images/2019/12/12/nginxrtmp4.jpg "nginxrtmp4.jpg")  
使用winscp前往/usr/local/src/nginx/conf/nginx.conf  
在http\{前加入

```
rtmp {
    server {
        listen 1935; #监听的端口
        chunk_size 4000;
        # rtmp://ip:1935/yuchen/推流密钥 ，推流密钥在推流时指定。
        application yuchen {#rtmp推流请求路径 (切记路径错了会推不上流)
            live on; #开启实时
            hls on; #开启hls
            hls_path /usr/local/src/nginx/html/yuchen; #rtmp推流请求路径，文件存放路径
            hls_fragment 5s; #每个TS文件包含5秒的视频内容
        }
    }
}
```

修改完成后，使用命令重启nginx

```
/usr/local/src/nginx/sbin/nginx –s reload
```

## 推流

打开obs推流，右下角变为绿色方块则推流成功。 
![](/docs/images/2020-09-03-10-52-59.png) 
::: danger 注意：
- 推流的時候沒有指定端口！拉流才需要指定端口！
- yuchen是nginx.conf中的application名字！
:::
![](/docs/images/2020-09-03-10-52-40.png)

::: warning 
- 这个串流密码是随便写的，目的是让拉流的人也输入同样的密码才能看。
- 例如串流密码写shirx，那么拉流的人，必须写rtmp://ip:1935/yuchen/shirx
- yuchen是nginx.conf里的application名字。
:::

## 拉流
在potplayer中播放http的m3u8地址。或者是使用支持rtmp协议的播放器拉流。

使用VLC media player
![](/docs/images/2020-09-02-16-39-01.png)
![](/docs/images/2020-09-02-16-38-39.png)
就能看直播了。
![](/docs/images/2020-09-02-16-39-45.png)

[服务器](https://hywlovexyc.info/blog/tag/%E6%9C%8D%E5%8A%A1%E5%99%A8/)  
[串流](https://hywlovexyc.info/blog/tag/%E4%B8%B2%E6%B5%81/)  
[nginx](https://hywlovexyc.info/blog/tag/nginx/)  
[内网穿透工具nps使用教程](https://hywlovexyc.info/blog/archives/570/ "内网穿透工具nps使用教程")  
[在VMware workstation/ESXi上安装群晖DSM6.2](https://hywlovexyc.info/blog/archives/576/ "在VMware workstation/ESXi上安装群晖DSM6.2")