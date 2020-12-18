# 在Ubuntu中安装Docker
   ## 1.更新ubuntu的apt源索引
```
　　sudo apt-get update
```
过程中如果出现
```
GPG 错误：http://mirrors.ustc.edu.cn/kali kali-rolling InRelease: 由于没有公钥，无法
验证下列签名： NO_PUBKEY (XXX)
```
可以执行下面的命令解决
```
apt-key adv --keyserver keyserver.ubuntu.com --recv-keys (XXX)
```
如果报错
```
仓库 “XXXX” 不再含有 Release 文件
```
参考https://www.jianshu.com/p/5fb01cf2966e?from=singlemessage解决
## 2.安装包允许apt通过HTTPS使用仓库
```
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
```
## 3.添加Docker官方GPG key
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
## 4.设置Docker稳定版仓库
```
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```
## 5.添加仓库后，更新apt源索引
```
sudo apt-get update
```
## 6.安装最新版Docker CE（社区版）
```
sudo apt-get install docker-ce
```
## 7.检查Docker CE是否安装正确
```
sudo docker run hello-world
```
如果打出如下信息，安装成功
![验证安装成功](/docs/images/验证安装成功.png)
为了避免每次命令都输入sudo，可以设置用户权限，注意执行后须注销重新登录
```
sudo usermod -a -G docker $USER
```
ok安装完成
