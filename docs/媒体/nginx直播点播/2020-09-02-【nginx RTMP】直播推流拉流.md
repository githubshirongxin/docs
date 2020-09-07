---
layout: post
title: 【nginx RTMP】直播推流拉流
---

## 参考：[【搭建基于nginx的rtmp直播服务器】](https://hywlovexyc.info/blog/archives/572/#%E6%8E%A8%E6%8B%89%E6%B5%81)

## 参考：[windows搭建rtmp服务器。](https://www.cnblogs.com/lidabo/p/9077938.html)


## 参考：OBS录屏推流教程
- <https://www.bilibili.com/video/av78957794>  
- <https://www.bilibili.com/video/av78808759>

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
cd /usr/local/src
wget http://jaist.dl.sourceforge.net/project/pcre/pcre/8.33/pcre-8.33.tar.gz
tar -zxvf pcre-8.33.tar.gz
cd pcre-8.33
./configure
make && make install
```

## 安装openssl

```
cd /usr/local/src
wget http://www.openssl.org/source/openssl-1.0.1j.tar.gz 
tar -zxvf openssl-1.0.1j.tar.gz 
cd openssl-1.0.1j
./config
make && make install
```

如果提示`You need Perl 5`，则输入下面这个命令。

```
yum -y install Perl 5
```

## 安装zlib

```
cd /usr/local/src
wget http://zlib.net/zlib-1.2.11.tar.gz
tar -zxvf zlib-1.2.11.tar.gz
cd ./zlib-1.2.11
./configure
make && make install
```

## git clone

```
cd /usr/local/src
yum -y install git
git clone https://github.com/arut/nginx-rtmp-module.git 
```

## 安装nginx

```
cd /usr/local/src
wget http://nginx.org/download/nginx-1.8.0.tar.gz
tar -zxvf nginx-1.8.0.tar.gz
cd nginx-1.8.0
./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_gzip_static_module --with-http_realip_module --with-http_sub_module --with-http_ssl_module  --add-module=../nginx-rtmp-module  --with-openssl=/usr/local/src/openssl-1.0.1j --with-http_ssl_module
make && make install 
```
::: danger 疑问：
 - --prefix=/usr/local/nginx 这时什么意思？
  答： 解压缩地址。/usr/local/nginx也是默认地址。
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
/usr/local/nginx/sbin/nginx
```

重启

```
/usr/local/nginx/sbin/nginx –s reload
```

启动后，打开浏览器，输入服务器ip地址，访问显示如下页面，则表示成功安装。  


# 修改conf

/usr/local/src/nginx-1.8.0/conf/nginx.conf  
在http\{前加入

```
rtmp {
    server {
        listen 1935; #监听的端口
        chunk_size 4000;

        #拉取：rtmp://ip:1935/vod/001.mp4 (端口和推流密码不用写)
        application vod {
            #支持点播功能
            play /opt/video/vod;
        }

        # rtmp://ip:1935/yuchen/推流密钥 ，推流密钥在推流时指定。
        application yuchen {#rtmp推流请求路径 (切记路径错了会推不上流)
            live on; #开启实时
            hls on; #开启hls
            hls_path /usr/local/src/nginx/html/yuchen; #rtmp推流请求路径，文件存放路径
            hls_fragment 5s; #每个TS文件包含5秒的视频内容
        }

       application live {
        live on;                                   #支持直播功能

        hls on;                                    #支持hls功能。
        wait_key on;                               #对视频切片进行保护，这样就不会产生马赛克了。
        hls_path /opt/video/hls;                   #切片视频文件存放位置。
        hls_fragment 10s;                          #每个视频切片的时长。
        hls_playlist_length 60s;                   #总共可以回看的事件，这里设置的是1分钟。
        hls_continuous on;                         #连续模式。
        hls_cleanup on;                            #对多余的切片进行删除。
        hls_nested on;                             #嵌套模式。
    }

    }
}
```

修改完成后，使用命令重启nginx
```
/usr/local/nginx/sbin/nginx –s reload
```

## 创建目录。
```bash
[root@centos109 ~]# mkdir -p /opt/video/hls
[root@centos109 ~]# mkdir -p /opt/video/vod
[root@centos109 data_videos]# ls
001.mp4  002.mkv  02-Docker Certified Associate (DCA)
[root@centos109 data_videos]# cp 001.mp4 /opt/video/vod/
[root@centos109 data_videos]# cp 002.mkv /opt/video/vod/
```

## 推流

打开obs推流，右下角变为绿色方块则推流成功。 
![](/docs/images/2020-09-03-10-52-59.png) 
![](/docs/images/2020-09-03-10-52-40.png)

::: warning 
- 这个串流密码是随便写的，目的是让拉流的人也输入同样的密码才能看。
- 例如串流密码写shirx，那么直播拉流的人，必须写。点播拉流不用写密码。
- rtmp://ip:1935/yuchen/shirx ,rtmp默认端口就是1935所以不写也行。
- yuchen和live是nginx.conf里的application名字。
:::

## 直播拉流
在potplayer中播放http的m3u8地址。或者是使用支持rtmp协议的播放器拉流。

使用VLC media player
![](/docs/images/2020-09-02-16-39-01.png)
![](/docs/images/2020-09-02-16-38-39.png)
就能看直播了。
![](/docs/images/2020-09-02-16-39-45.png)


## 点播拉流
rtmp://192.168.3.109/vod/001.mp4
![](/docs/images/2020-09-03-16-10-53.png)

[服务器](https://hywlovexyc.info/blog/tag/%E6%9C%8D%E5%8A%A1%E5%99%A8/)  
[串流](https://hywlovexyc.info/blog/tag/%E4%B8%B2%E6%B5%81/)  
[nginx](https://hywlovexyc.info/blog/tag/nginx/)  
[内网穿透工具nps使用教程](https://hywlovexyc.info/blog/archives/570/ "内网穿透工具nps使用教程")  
[在VMware workstation/ESXi上安装群晖DSM6.2](https://hywlovexyc.info/blog/archives/576/ "在VMware workstation/ESXi上安装群晖DSM6.2")