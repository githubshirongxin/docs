## docker-compose up -d
```
Successfully tagged root_gitlab-runner:latest
WARNING: Image for service gitlab-runner was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.
Recreating gitlab_runner ... error

ERROR: for gitlab_runner  no such image: sha256:9f5a0d4939f37b2c0a7420d1f2b119a91340bd3b9610ae9dcea6b16f01a6256a: No such image: sha256:9f5a0d4939f37b2c0a7420d1f2b119a91340bd3b9610ae9dcea6b16f01a6256a

ERROR: for gitlab-runner  no such image: sha256:9f5a0d4939f37b2c0a7420d1f2b119a91340bd3b9610ae9dcea6b16f01a6256a: No such image: sha256:9f5a0d4939f37b2c0a7420d1f2b119a91340bd3b9610ae9dcea6b16f01a6256a
ERROR: The image for the service you're trying to recreate has been removed. If you continue, volume data could be lost. Consider backing up your data before continuing.

Continue with the new image? [yN]
```

### resolv: docker-compose up --build

---
## docker-compose up --build , th
```
gitlab_runner    | ERROR: Failed to load config stat /etc/gitlab-runner/config.toml: no such file or directory  builds=0
```
做一个config.toml
```

```

---
## 
```
E: gnupg, gnupg2 and gnupg1 do not seem to be installed, but one of them is required for this operation
```
### resolve:
`RUN apt-get update && apt-get install -y gnupg2`


## config.toml 宿主机做了一个空文件
```
 revision=efa30e33 version=13.2.1
gitlab_runner    | Starting multi-runner from /etc/gitlab-runner/config.toml...  builds=0
gitlab_runner    | Running in system-mode.
gitlab_runner    |
gitlab_runner    | Configuration loaded                                builds=0
gitlab_runner    | listen_address not defined, metrics & debug endpoints disabled  builds=0
gitlab_runner    | [session_server].listen_address not defined, session endpoints disabled  builds=0
```
