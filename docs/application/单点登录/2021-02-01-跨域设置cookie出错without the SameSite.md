---
layout: post
title: 跨域写cookie出错 A cookie associated with a cross-site resource at http://www.sys1.com/ was set without the `SameSite` attribute.
---



## 不论使用什么方式。都会出现错误。
```
A cookie associated with a cross-site resource at http://www.sys1.com/ was set without the `SameSite` attribute.
```

- script方式跨域写cookie
```javascript
<c:forEach items="${sysList}" var="sys">
<!-- cross domain ,write cookie. with different domain -->
<script type="text/javascript" src="${sys.baseUrl}/cookie_set?vt=${vt}"></script>
</c:forEach>
```

- iframe方式跨域写cookie
```javascript
<c:forEach items="${sysList}" var="sys">
<p>iframe</p>
<iframe src="http:${sys.baseUrl}/cookie_set?vt=${vt}" width="0px" height="0px" style="display:nonoe"></iframe>
</c:forEach>
```


```
A cookie associated with a cross-site resource at http://www.sys1.com/ was set without the `SameSite` attribute.

Indicate whether a cookie is intended to be set in a cross-site context by specifying its SameSite attribute
Because a cookie's SameSite attribute was not set or is invalid, it defaults to SameSite=Lax, which prevents the cookie from being set in a cross-site context. This behavior protects user data from accidentally leaking to third parties and cross-site request forgery.

Resolve this issue by updating the attributes of the cookie:
Specify SameSite=None and Secure if the cookie is intended to be set in cross-site contexts. Note that only cookies sent over HTTPS may use the Secure attribute.
Specify SameSite=Strict or SameSite=Lax if the cookie should not be set by cross-site requests

1 cookie
1 request
Learn more: SameSite cookies explained
```

- 原因：
http://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html

## 解决
1. www.sys1.com 增加https

Eclipse找不到jks,
```
at org.apache.catalina.startup.Bootstrap.main(Bootstrap.java:472)
Caused by: java.lang.IllegalArgumentException: F:\work\eclipseworkspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\conf\www.sys1.com.jks (系统找不到指定的文件。)
```

www.sys1.com.jks应该放到哪呢？

首先放到
D:\apache-tomcat-9.0.41\conf
然后Eclipse点Republish，这样就把www.sys1.com.jsk拷贝到eclipse里的临时目录。
```
F:\work\eclipseworkspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\conf
```
![](/docs/images/2021-02-01-13-51-41.png)

Eclipse的配置是这样的。
![](/docs/images/2021-02-01-13-52-04.png)

2. sys1.com的写cookie的java代码必须修改
```java
import java.io.IOException;
import java.time.Duration;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;

@WebServlet("/cookie_set")
public class Test1CookieSetServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String vt = request.getParameter("vt");

		response.setContentType("text/plain");
		

		ResponseCookie cookie = ResponseCookie.from("VT", vt) // key & value
				.httpOnly(false)		// 禁止js读取
				.secure(true)		// 在http下也传输
				.domain("www.sys1.com")// 域名
				.path("/")			// path
				.maxAge(Duration.ofHours(1))	// 1个小时候过期
				.sameSite("None")	// 大多数情况也是不发送第三方 Cookie，但是导航到目标网址的 Get 请求除外
				.build()
				;
		
		// 设置Cookie Header
		response.setHeader(HttpHeaders.SET_COOKIE, cookie.toString());	
	}
}


```

如此，就可以跨域写cookie了。
- 可以看到www.sys1.com的cookie成功写入了。
![](/docs/images/2021-02-01-14-34-10.png)


## 最后必须要做的。

如果浏览器拦截了，说https://www.sys2.com:8444/是不安全的。你没有点继续执行的话，cookie也不会写成功。
所以，浏览器需要安装三个网站的证书。就不用每次都手工去点同意继续访问了。


- 这种状态没办法写入cookie的。提前安装好sys1,sys2的证书才行。
![](/docs/images/2021-02-01-14-51-32.png)
