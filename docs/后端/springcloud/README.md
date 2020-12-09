---
layout: post
title: ----【SpringCloud】----
---

<!--done-->

# [spring boot和spring cloud的区别](https://www.cnblogs.com/chsoul/p/12529913.html)

Java中说到微服务肯定离不开Spring Boot和Spring Cloud，这两者到底有什么关系，什么是微服务，如果单纯的说SpringBoot，SpringCloud，都是不准确的，那应该怎么回答。

* 官网对于[Spring Boot](https://spring.io/projects/spring-boot)的介绍

  > Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".

  SpringBoot相对于传统基于springframework的项目来说，大大简化了开发配置，当我们指定其Parent版本后，只需要引入需要的Starter就可以快 速开发，实现`just run`，不用再去考虑相关jar包之间的依赖，版本冲突问题，体现了约定大于配置，是一种落地生根的技术。

* 官网对于[Spring Cloud](https://spring.io/projects/spring-cloud)的介绍

  > Spring Cloud provides tools for developers to quickly build some of the common patterns in distributed systems

  Spring Cloud为开发人员提供了一些工具来快速构建分布式系统中的一些常见模式（例如配置管理、服务发现、断路器、网关路由），可以理解为对于微服务中常见的场景和问题，Spring Cloud提供了一站式的解决方案。

* 总结：

  > Spring Boot build anything 构建一切  
  > Spring Cloud coordinate anything 协调一切

Spring Boot是一种快速开发技术实现，约定大于配置；Spring Cloud提供了微服务系统中一站式的解决方案，每个微服务方案都以Spring Boot为基础。

作者： Chsoul

出处：<https://www.cnblogs.com/chsoul/p/12529913.html>
