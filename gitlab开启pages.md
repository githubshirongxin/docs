
srv/gitlab/config/gitlab.rb
```
pages_external_url "https://gitlab.ccbjb.com.cn/docs"
gitlab_pages['enable'] = true
```
gitlab-ctl restart 


==> /var/log/gitlab/nginx/current <==
2020-07-27_06:28:52.19820 nginx: [emerg] cannot load certificate "/etc/gitlab/ssl/gitlab.ccbjb.com.cn.crt": BIO_new_file() failed (SSL: error:02001002:system library:fopen:No such file or directory:fopen('/etc/gitlab/ssl/gitlab.ccbjb.com.cn.crt','r') error:2006D080:BIO routines:BIO_new_file:no such file)

gitlab.ccbjb.com.cn_chain.crt

==> /var/log/gitlab/nginx/current <==
2020-07-27_06:32:16.21791 nginx: [emerg] cannot load certificate key "/etc/gitlab/ssl/gitlab.ccbjb.com.cn.key": BIO_new_file() failed (SSL: error:02001002:system library:fopen:No such file or directory:fopen('/etc/gitlab/ssl/gitlab.ccbjb.com.cn.key','r') error:2006D080:BIO routines:BIO_new_file:no such file)
