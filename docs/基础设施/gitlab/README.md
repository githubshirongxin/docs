---
layout: post
title: gitlab EE 与 CE 的区别
---

https://about.gitlab.com/install/ce-or-ee/

1. 其实应该安装EE。

2. 应该安装centos7版本，速度最快。docker版本还是差点。

---



## 介绍

如果您有兴趣使用GitLab，即使您不确定是否会订阅[GitLab Enterprise Edition](https://about.gitlab.com/installation)许可证 ，我们也建议您 [下载并安装](https://about.gitlab.com/installation)[GitLab Enterprise Edition](https://about.gitlab.com/installation)。您仍然可以使用GitLab社区版的所有功能，而无需许可证或注册。

## 许可模式

GitLab建立在开放核心模型上。这意味着有两种版本的GitLab：社区版和企业版。

GitLab社区版是开源的，具有MIT Expat许可证。GitLab企业版建立在Community Edition的基础上：它使用相同的*核心*，但在此基础上增加了其他功能。这是在专有许可下的。

对于两个版本：GitLab中的所有javascript代码都是开源的。GitLab编写的所有javascript代码都在相同的MIT许可下。

## 为什么要使用企业版

为了能够使用GitLab企业版功能，您需要订阅才能获得许可证。如果您使用的是未经许可的企业版，则仅使用MIT许可的功能。

这意味着，如果您没有许可证就安装了GitLab企业版，则不会发现与典型的Community Edition实例有所不同，但是您还有其他优点：

1. 如果您想随时试用Enterprise Edition功能，则无需设置新实例或升级现有实例即可执行此操作。您只需在GitLab中启用试用版即可。如果您对Enterprise Edition功能不满意，则在试用期结束后，您的实例将自动恢复为仅Community Edition功能。
2. 要从Community Edition升级到Enterprise Edition，您必须确保使用相同版本，并按照特定步骤进行操作，而这通常需要停机。使用企业版，只需单击即可在社区版功能和完整版企业版功能之间进行切换。

[安装GitLab企业版](https://about.gitlab.com/installation)。

## 为什么使用社区版

如果您只想下载开源软件Community Edition是最佳选择。此发行版不包含专有代码。在功能上，它将与没有许可证的企业版相同。

请注意，将来如果您决定迁移到企业版，则需要进行升级，并且可能需要停机。

[安装GitLab社区版](https://about.gitlab.com/install/?version=ce)。



---

https://about.gitlab.com/install/

# 安装自我管理的GitLab

我们强烈建议选择官方的Linux软件包安装，因为它安装速度更快，升级更容易，并且它具有增强其他方法所没有的可靠性的功能。我们也强烈 [建议至少有4GB的RAM](https://docs.gitlab.com/ee/install/requirements.html#memory) 运行GitLab。

## 试用GitLab Ultimate 30天！

#### 1. Install and configure the necessary dependencies



On CentOS 7 (and RedHat/Oracle/Scientific Linux 7), the commands below will also open HTTP, HTTPS and SSH access in the system firewall.

```
sudo yum install -y curl policycoreutils-python openssh-server
sudo systemctl enable sshd
sudo systemctl start sshd
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

Next, install Postfix to send notification emails. If you want to use another solution to send emails please skip this step and [configure an external SMTP server](https://docs.gitlab.com/omnibus/settings/smtp.html) after GitLab has been installed.

```
sudo yum install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

During Postfix installation a configuration screen may appear. Select 'Internet Site' and press enter. Use your server's external DNS for 'mail name' and press enter. If additional screens appear, continue to press enter to accept the defaults.

#### 2. Add the GitLab package repository and install the package

Add the GitLab package repository.

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```



Next, install the GitLab package. Change `https://gitlab.example.com` to the URL at which you want to access your GitLab instance. Installation will automatically configure and start GitLab at that URL.

For `https://` URLs GitLab will automatically [request a certificate with Let's Encrypt](https://docs.gitlab.com/omnibus/settings/ssl.html#lets-encrypthttpsletsencryptorg-integration), which requires inbound HTTP access and a valid hostname. You can also [use your own certificate](https://docs.gitlab.com/omnibus/settings/nginx.html#manually-configuring-https) or just use http://.

```
sudo EXTERNAL_URL="https://gitlab.example.com" yum install -y gitlab-ee
```

#### 3. Browse to the hostname and login

On your first visit, you'll be redirected to a password reset screen. Provide the password for the initial administrator account and you will be redirected back to the login screen. Use the default account's username `root` to login.

See our [documentation for detailed instructions on installing and configuration](https://docs.gitlab.com/omnibus/README.html#installation-and-configuration-using-omnibus-package).

#### 4. Set up your communication preferences

Visit our [email subscription preference center](https://about.gitlab.com/company/preference-center/) to let us know when to communicate with you. We have an explicit email opt-in policy so you have complete control over what and how often we send you emails.

Twice a month, we send out the GitLab news you need to know, including new features, integrations, docs, and behind the scenes stories from our dev teams. For critical security updates related to bugs and system performance, sign up for our dedicated security newsletter.

**Important note:** If you do not opt-in to the security newsletter, you will not receive security alerts.

#### 5. Configure sign-up restrictions and sign-in preferences.



After completing your installation, consider the [recommended practices to secure your GitLab instance](https://docs.gitlab.com/ee/security/README.html#securing-your-gitlab-installation).