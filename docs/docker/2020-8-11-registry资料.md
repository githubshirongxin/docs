---
layout: post
title: 【registry资料】 
---

https://linuxacademy.com/cp/courses/lesson/course/4420/lesson/7/module/347

Relevant Documentation
https://docs.docker.com/registry/deploying/
https://docs.docker.com/registry/configuration/
https://docs.docker.com/registry/insecure/

Lesson Reference
Run a simple registry:

```bash
docker run -d -p 5000:5000 --restart=always --name registry registry:2
docker container stop registry && docker container rm -v registry
```
Override the log level using an environment variable:

```bash
docker logs registry
docker container stop registry && docker container rm -v registry
docker run -d -p 5000:5000 --restart=always --name registry -e REGISTRY_LOG_LEVEL=debug registry:2
docker logs registry
docker container stop registry && docker container rm -v registry
```
Secure the registry by generating an htpasswd file to be used for authentication:

## registry ssl

```bash
mkdir ~/registry
cd ~/registry
mkdir auth
docker run --entrypoint htpasswd registry:2.7.0 -Bbn testuser password > auth/htpasswd
```
Generate a self-signed certificate. When generating the cert, leave the prompts blank except for Common Name*. For *Common Name, put the public hostname of the registry server. The public hostname is in the playground interface:

```bash
mkdir certs
openssl req \
  -newkey rsa:4096 -nodes -sha256 -keyout certs/domain.key \
  -x509 -days 365 -out certs/domain.crt
```

Run the registry with authentication and TLS enabled:
```bash
docker run -d -p 443:443 --restart=always --name registry \
  -v /home/cloud_user/registry/certs:/certs \
  -v /home/cloud_user/registry/auth:/auth \
  -e REGISTRY_HTTP_ADDR=0.0.0.0:443 \
  -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.crt \
  -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key \
  -e REGISTRY_AUTH=htpasswd \
  -e "REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm" \
  -e REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd \
  registry:2
```

## Client： docker login to registry

// registry 自签了之后docker login失败的解决方案：
![](/docs/images/2020-08-11-10-24-52.png)

Relevant Documentation
https://docs.docker.com/engine/reference/commandline/push/
https://docs.docker.com/engine/reference/commandline/pull/
https://docs.docker.com/engine/reference/commandline/login/
https://docs.docker.com/registry/insecure/
https://docs.docker.com/engine/reference/commandline/search/

Lesson Reference
Pull and search images on Docker hub:

```bash
docker pull ubuntu
docker search ubuntu
```
Attempt to authenticate against the private registry:

```bash
docker login <registry public hostname>
```

Log in with the credentials we created earlier (testuser and password). A certificate signed by unknown authority message should pop up, because we are using a self-signed certificate.

Configure docker to ignore certificate verification when accessing the private registry:
```bash
sudo vi /etc/docker/daemon.json
{
  "insecure-registries" : ["<registry public hostname>"]
}
```
Restart docker:
```bash
sudo systemctl restart docker
```

Try docker login again:
```bash
docker login <registry public hostname>
```

This time it should work!

However, this method of accessing the registry is very insecure. It turns off certificate verification entirely, exposing us to man-in-the-middle attacks. So, let's do this the right way.

First, log out of the private registry:
```bash
docker logout <registry public hostname>
```

Next, remove the insecure-registries key and value from /etc/docker/daemon.json.

Restart Docker:
```bash
sudo systemctl restart docker
```

Download the cert public key from the registry and configure the local docker engine to use it:
```bash
sudo mkdir -p /etc/docker/certs.d/<registry public hostname>
sudo scp cloud_user@<registry public hostname>:/home/cloud_user/registry/certs/domain.crt /etc/docker/certs.d/<registry public hostname>
```

Try docker login:
```bash
docker login <registry public hostname>
```

Push to and pull from your private registry:

```bash
docker pull ubuntu
docker tag ubuntu <registry public hostname>/ubuntu
docker push <registry public hostname>/ubuntu
docker image rm <registry public hostname>/ubuntu
docker image rm ubuntu
docker pull <registry public hostname>/ubuntu
```