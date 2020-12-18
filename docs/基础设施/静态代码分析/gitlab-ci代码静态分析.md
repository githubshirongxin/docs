# Sonarqube 使用gitlab进行认证
## 配置gitlab OAuth
###  在gitlab中Admin Area -> Applications -> New Application
![New Application](/docs/images/newapplication.png)

Name：字面意思

Redirect URI：回调地址，HTTP://SONAR_ADDRES + /oauth2/callback/gitlab；如果版本不同或许可能存在差异，具体可以看官方文档。   

    假设sonarqube的地址为192.168.3.116:9000,那么在这里回调地址就要写成
    http://192.168.3.116:9000/oauth2/callback/gitlab
    这里要写http，不要写https，之后在snarqube配置的时候要写相同的协议	
				
Scopes：仅启用委托认证勾选read_user，需要组同步则同时勾选api。其他选项根据需求勾选。提交后保存Application ID和Secret。（之后在sonarqube配置的时候要用到）	

## 配置sonarqube ALM Integrations

1. sonarqube地址为docker宿主机地址+9000端口，默认账号密码为admin。
```
http://192.168.3.116:9000/sessions/new
```
![sonar_login](/docs/images/sonar_login.png)
				
2. Server base URL
首先在通用设置中配置好Server base URL，此地址必须和Gitlab Redirect URI（回调地址）的协议+主机域名（或IP）是一致的。     
配置 -> 通用配置 -> 通用    
Server base URL：sonarqube的公共访问地址。				
![server_base_url.png](/docs/images/server_base_url.png)   

3. 配置ALM Integrations：      
配置 -> 通用配置 -> ALM Integrations -> Gitlab      
Enabled：启用。   	            
GitLab URL：Gitlab地址。(https协议)    （https://gitlab.ccbjb.com.cn/）     
Application ID：在Gitlab applications中创建的application id。          
Secret：在Gitlab applications中创建的application Secret。       
其他选项根据需求勾选。          
![ALM_Integrations.png](/docs/images/ALM_Integrations.png)   
    确认无误后退出账号，点击登录后则会看到使用gitlab登录。          
    第一次使用gitlab登录sonarqube的会弹出授权窗口，点击授权即可
![gitlab授权.png](/docs/images/gitlab授权.png)    
    
## 创建sonarqube project
### 语言包和语言分析规则
1. sonarqube安装本地化语言包，在应用市场中搜索chinese。

2. 分析语言首先需要安装一个分析语言规则插件。               
配置 -> 应用市场（marketplace）-> 搜索项目用到的主要语言并安装      
基于网络原因，可能会需要一定时间。安装完如果无法启动，可能是下载的插件包不完整，可以手动下载将插件包放到sonarqube/extensions/plugins目录下重启docker容器即可。          
  - 分析shell,就在应用市场搜索shell
  - 分析java,就在应用市场搜索java还有findbug，主要是findbug这个插件，下载比较慢。
  - 其他语言可以上网搜索
### 创建分析项目
    1. 在sonarqube web界面中点击新建项目，输入项目标识（例如：myproject）和显示名称（例如：myproject）       
    2. 创建一个TOKEN、输入TOKEN名称（例如：myproject）后点击创建会生成TOKEN串、保存TOKEN串。如果之后要使用已有的令牌需要输入这个Token串。在修改sonar-project.properties
    文件的时候也需要，下面会介绍，注意保留。
    3. 在这一步完成后，其实sonarqube项目就已经创建好了
![new_project.png](/docs/images/new_project.png)   
![创建令牌.png](/docs/images/创建令牌.png)   

* 到这里sonarqube的部分配置结束，接下来是关于gitlab的部分

---
---

## 配置Gitlab-ci(接下来是关于gitlab的部分)
### 首先需要一点git的知识
1. 在本地安装一个gitbash，右键出现git bash here安装成功，如图所示
![右键gitbash.png](/docs/images/右键gitbash.png)   
2. 在gitlab上新建一个项目之后，或者将已经存在的项目克隆到本地。具体的做法是在本地新建一个文件夹，文件夹的名字随意，右键选择git bash here，弹出命令行窗口。然后输入命令:
```
git clone 链接
```
链接部分所代内容可以在gitlab中自己的项目下找到，具体位置如图所示，图片中有两种方式，如果要使用ssh方式需要进行下面的操作，http的方式不需要，但是需要gitlab的邮箱密码     
```
# 生成新的SSH密钥对
> 1. 使用命令生成密钥（密钥的位置在C:\Users\Administrator\.ssh）
> ssh-keygen -t rsa -b 2048 -C "yangtao@ccbjb.com.cn"
> 2. Gitlab操作
> settings→SSH Keys→添加id_rsa.pub里密钥→Add key
```  
![clone地址位置.png](/docs/images/clone地址位置.png)  
![gitbash_clone.png](/docs/images/gitbash_clone.png)       
执行命令后，可以看到你的gitlab项目已经在第二步中新建好的文件夹中了，本地项目中的.git文件不要修改。    

3. gitbash命令行窗口 cd 到项目目录 命令行的最右边可以看到当前所在分支 ，如图所示：
![当前分支.png](/docs/images/当前分支.png)       
   使用下面的命令可以切换当前分支
```
git checkout dev
```
![切换分支.png](/docs/images/切换分支.png)  
切换分支后，你在本地的项目录下看到是切换后分支（dev）的内容，而不能看到切换前分支（master）的内容，
这样我们可以根据自己想要更新的分支进行操作。

###   配置.gitlab-ci.yml文件和sonar-project.properties文件
#### 在本地的项目目录中添加下面两个文件
1. 关于.gitlab-ci.yml文件（主要修改的内容是only）
```
stages:
  - test

# sonarqube check 
test:
  image:
    name: docker.ccbjb.com.cn/sonarsource/sonar-scanner-cli:latest
  stage: test
  script:
    - sonar-scanner
  allow_failure: true
  only:
    - master
```

2. 关于sonar-project.properties文件(这个是sonarqube的配置文件，默认项目根目录，如果要放到其他目录，执行sonar-scanner前要先cd)     
   这个文件要修改     
   sonar.projectKey=             
   sonar.projectName=     
   sonar.sources=       
   sonar.host.url=    
   sonar.login=   
   根据实际情况修改
```
# must be unique in a given SonarQube instance
sonar.projectKey=educateApp 
sonar.projectName=educateApp
sonar.projectVersion=1.0
 
# 源文件在这个项目中的路径
sonar.sources=./cjb_educate/src   
# 编译文件(分析java代码需要)
# sonar.java.binaries=./cjb_educate/bin/src/main
sonar.sourceEncoding=UTF-8
# sonarqube url
sonar.host.url=http://192.168.3.116:9000
# token是在sonarqube上创建项目的时候的token
sonar.login=${token}
```
3. 在本地添加好上面的两个文件，还有自己的项目的代码之后，使用在本地的gitbash中使用git命令提交gitlab上面
  * 将修改的内容提交的暂存区
```
  git add .
```
   * 显示项目修改的信息
```
  git status
```
   * 引号中的内容可以写本次提交项目更新的内容，或者更新项目的人的姓名都可以
```
  git commit -m "注释"
```
   *  将项目提交到对应的分支（master,dev……）
```
  git push origin 分支名 
```
代码提交之后，gitlab会自动执行.gitlab-ci.yml文件，.gitlab-ci.yml文件会加载sonar-project.properties配置文件。我们可以在gitlab的CI/CD中查看运行的过程。在sonarqube上查看代码静态分析的结果。运行情况如下图：
![CICD结果001.png](/docs/images/CICD结果001.png)   
![CICD结果002.png](/docs/images/CICD结果002.png)   
![CICD结果003.png](/docs/images/CICD结果003.png)   

以上就是gitlab-ci集成sonarqube对代码进行静态分析的全过程。

## 补充：关于sonarqube检测到代码有质量问题，gitlab-ci自动停止执行如何设置的方法           
1. 首先更改你的.gitlab-ci.yml文件(只需要添加添加了-X的参数)
```
stages:
  - test

# sonarqube check 
test:
  image:
    name: docker.ccbjb.com.cn/sonarsource/sonar-scanner-cli:latest
  stage: test
  script:
    - sonar-scanner -X
  allow_failure: true
  only:
    - master
```
2. 其次在你的配置文件sonar-project.properties中添加两行代码
```
sonar.qualitygate.wait = true
sonar.qualitygate.timeout = 100
```
3. 在sonarqubede网站上查看或者更改你的质量阈（一旦代码的质量超过了质量阈值设定的数值，gitlab-ci就会终止执行）
![质量阈.png](/docs/images/zhiliangfa.png) 

4. 运行CI/CD，演示结果
![gate_status.png](/docs/images/gate_status.png) 

## 常见问题
1. .gitlab-ci.yml中发现错误
![yml中发现错误.png](/docs/images/yml中发现错误.png)   
    如果确认.yml没有问题还是出现异常，在gitlab页面重新把yml文件提交一次。

2. 未定义编译文件路径
![未定义编译文件路径.png](/docs/images/未定义编译文件路径.png) 

3. findbug插件异常
![findbug插件问题](/docs/images/findbug插件问题.png)   
    问题原因
![findbug插件问题原因](/docs/images/findbug插件问题原因.png)   

4. sonar-scanner.properties文件位置问题
![properties文件位置问题](/docs/images/properties文件位置问题.png) 