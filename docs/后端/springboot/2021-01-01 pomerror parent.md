---
layout: post
title:  Project build error Non-resolvable parent POM for com.nouhoun.springboot.jwt.integration:springboot-jwt:0.0.1-SNAPSHOT
---


## error1:
```
Multiple annotations found at this line:
	- Project build error: Non-resolvable parent POM for com.nouhoun.springboot.jwt.integration:springboot-jwt:0.0.1-SNAPSHOT: Could 
	 not transfer artifact org.springframework.boot:spring-boot-starter-parent:pom:2.0.4.RELEASE from/to central (https://repo.maven.apache.org/
	 maven2): Malformed reply from SOCKS server and 'parent.relativePath' points at no local POM
	- Non-resolvable parent POM for com.nouhoun.springboot.jwt.integration:springboot-jwt:0.0.1-SNAPSHOT: Could not find artifact 
	 org.springframework.boot:spring-boot-starter-parent:pom:2.0.4.RELEASE
```

pom.xml
```xml
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.0.4.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
```

## error2 
```
Project build error: Non-resolvable parent POM for com.devhao:spring-dojo:0.0.1-SNAPSHOT: Failure to transfer org.springframework.boot:spring-boot-starter-parent:pom:2.0.4.RELEASE from https://repo.maven.apache.org/maven2 was cached in the local repository, resolution will not be reattempted until the update interval of central has elapsed or updates are forced. Original error: Could not transfer artifact org.springframework.boot:spring-boot-starter-parent:pom:2.0.4.RELEASE from/to central (https://repo.maven.apache.org/maven2): Malformed reply from SOCKS server and 'parent.relativePath' points at no local POM
```