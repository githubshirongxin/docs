(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{582:function(s,t,a){"use strict";a.r(t);var e=a(59),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"什么是-jwt-json-web-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-jwt-json-web-token"}},[s._v("#")]),s._v(" 什么是 JWT -- JSON WEB TOKEN")]),s._v(" "),a("h1",{attrs:{id:"什么是jwt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是jwt"}},[s._v("#")]),s._v(" 什么是JWT")]),s._v(" "),a("blockquote",[a("p",[s._v("Json web token (JWT), 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准（"),a("a",{attrs:{href:"https://link.jianshu.com?t=https://tools.ietf.org/html/rfc7519",target:"_blank",rel:"noopener noreferrer"}},[s._v("(RFC 7519"),a("OutboundLink")],1),s._v(").该token被设计为紧凑且安全的，特别适用于分布式站点的单点登录（SSO）场景。JWT的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源，也可以增加一些额外的其它业务逻辑所必须的声明信息，该token也可直接被用于认证，也可被加密。")])]),s._v(" "),a("h2",{attrs:{id:"起源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起源"}},[s._v("#")]),s._v(" 起源")]),s._v(" "),a("p",[s._v("说起JWT，我们应该来谈一谈基于token的认证和传统的session认证的区别。")]),s._v(" "),a("h3",{attrs:{id:"传统的session认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传统的session认证"}},[s._v("#")]),s._v(" 传统的session认证")]),s._v(" "),a("p",[s._v("我们知道，http协议本身是一种无状态的协议，而这就意味着如果用户向我们的应用提供了用户名和密码来进行用户认证，那么下一次请求时，用户还要再一次进行用户认证才行，因为根据http协议，我们并不能知道是哪个用户发出的请求，所以为了让我们的应用能识别是哪个用户发出的请求，我们只能在服务器存储一份用户登录的信息，这份登录信息会在响应时传递给浏览器，告诉其保存为cookie,以便下次请求时发送给我们的应用，这样我们的应用就能识别请求来自哪个用户了,这就是传统的基于session认证。")]),s._v(" "),a("p",[s._v("但是这种基于session的认证使应用本身很难得到扩展，随着不同客户端用户的增加，独立的服务器已无法承载更多的用户，而这时候基于session认证应用的问题就会暴露出来.")]),s._v(" "),a("h4",{attrs:{id:"基于session认证所显露的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于session认证所显露的问题"}},[s._v("#")]),s._v(" 基于session认证所显露的问题")]),s._v(" "),a("p",[a("strong",[s._v("Session")]),s._v(": 每个用户经过我们的应用认证之后，我们的应用都要在服务端做一次记录，以方便用户下次请求的鉴别，通常而言session都是保存在内存中，而随着认证用户的增多，服务端的开销会明显增大。")]),s._v(" "),a("p",[a("strong",[s._v("扩展性")]),s._v(": 用户认证之后，服务端做认证记录，如果认证的记录被保存在内存中的话，这意味着用户下次请求还必须要请求在这台服务器上,这样才能拿到授权的资源，这样在分布式的应用上，相应的限制了负载均衡器的能力。这也意味着限制了应用的扩展能力。")]),s._v(" "),a("p",[a("strong",[s._v("CSRF")]),s._v(": 因为是基于cookie来进行用户识别的, cookie如果被截获，用户就会很容易受到跨站请求伪造的攻击。")]),s._v(" "),a("h2",{attrs:{id:"基于token的鉴权机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于token的鉴权机制"}},[s._v("#")]),s._v(" 基于token的鉴权机制")]),s._v(" "),a("p",[s._v("基于token的鉴权机制类似于http协议也是无状态的，它不需要在服务端去保留用户的认证信息或者会话信息。这就意味着基于token认证机制的应用不需要去考虑用户在哪一台服务器登录了，这就为应用的扩展提供了便利。")]),s._v(" "),a("p",[s._v("流程上是这样的：")]),s._v(" "),a("ul",[a("li",[s._v("用户使用用户名密码来请求服务器")]),s._v(" "),a("li",[s._v("服务器进行验证用户的信息")]),s._v(" "),a("li",[s._v("服务器通过验证发送给用户一个token")]),s._v(" "),a("li",[s._v("客户端存储token，并在每次请求时附送上这个token值")]),s._v(" "),a("li",[s._v("服务端验证token值，并返回数据")])]),s._v(" "),a("p",[s._v("这个token必须要在每次请求时传递给服务端，它应该保存在请求头里， 另外，服务端要支持"),a("code",[s._v("CORS(跨来源资源共享)")]),s._v("策略，一般我们在服务端这么做就可以了"),a("code",[s._v("Access-Control-Allow-Origin: *")]),s._v("。")]),s._v(" "),a("p",[s._v("那么我们现在回到JWT的主题上。")]),s._v(" "),a("h2",{attrs:{id:"jwt长什么样？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt长什么样？"}},[s._v("#")]),s._v(" JWT长什么样？")]),s._v(" "),a("p",[s._v("JWT是由三段信息构成的，将这三段信息文本用"),a("code",[s._v(".")]),s._v("链接一起就构成了Jwt字符串。就像这样:")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"jwt的构成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt的构成"}},[s._v("#")]),s._v(" JWT的构成")]),s._v(" "),a("p",[s._v("第一部分我们称它为头部（header),第二部分我们称其为载荷（payload, 类似于飞机上承载的物品)，第三部分是签证（signature).")]),s._v(" "),a("h3",{attrs:{id:"header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[s._v("#")]),s._v(" header")]),s._v(" "),a("p",[s._v("jwt的头部承载两部分信息：")]),s._v(" "),a("ul",[a("li",[s._v("声明类型，这里是jwt")]),s._v(" "),a("li",[s._v("声明加密的算法 通常直接使用 HMAC SHA256")])]),s._v(" "),a("p",[s._v("完整的头部就像下面这样的JSON：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'typ'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'JWT'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'alg'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HS256'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后将头部进行base64加密（该加密是可以对称解密的),构成了第一部分.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"playload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#playload"}},[s._v("#")]),s._v(" playload")]),s._v(" "),a("p",[s._v("载荷就是存放有效信息的地方。这个名字像是特指飞机上承载的货品，这些有效信息包含三个部分")]),s._v(" "),a("ul",[a("li",[s._v("标准中注册的声明")]),s._v(" "),a("li",[s._v("公共的声明")]),s._v(" "),a("li",[s._v("私有的声明")])]),s._v(" "),a("p",[a("strong",[s._v("标准中注册的声明")]),s._v(" (建议但不强制使用) ：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("iss")]),s._v(": jwt签发者")]),s._v(" "),a("li",[a("strong",[s._v("sub")]),s._v(": jwt所面向的用户")]),s._v(" "),a("li",[a("strong",[s._v("aud")]),s._v(": 接收jwt的一方")]),s._v(" "),a("li",[a("strong",[s._v("exp")]),s._v(": jwt的过期时间，这个过期时间必须要大于签发时间")]),s._v(" "),a("li",[a("strong",[s._v("nbf")]),s._v(": 定义在什么时间之前，该jwt都是不可用的.")]),s._v(" "),a("li",[a("strong",[s._v("iat")]),s._v(": jwt的签发时间")]),s._v(" "),a("li",[a("strong",[s._v("jti")]),s._v(": jwt的唯一身份标识，主要用来作为一次性token,从而回避重放攻击。")])]),s._v(" "),a("p",[a("strong",[s._v("公共的声明")]),s._v(" ："),a("br"),s._v("\n公共的声明可以添加任何的信息，一般添加用户的相关信息或其他业务需要的必要信息.但不建议添加敏感信息，因为该部分在客户端可解密.")]),s._v(" "),a("p",[a("strong",[s._v("私有的声明")]),s._v(" ："),a("br"),s._v("\n私有声明是提供者和消费者所共同定义的声明，一般不建议存放敏感信息，因为base64是对称解密的，意味着该部分信息可以归类为明文信息。")]),s._v(" "),a("p",[s._v("定义一个payload:")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"sub"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1234567890"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"John Doe"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"admin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("然后将其进行base64加密，得到Jwt的第二部分。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"signature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signature"}},[s._v("#")]),s._v(" signature")]),s._v(" "),a("p",[s._v("jwt的第三部分是一个签证信息，这个签证信息由三部分组成：")]),s._v(" "),a("ul",[a("li",[s._v("header (base64后的)")]),s._v(" "),a("li",[s._v("payload (base64后的)")]),s._v(" "),a("li",[s._v("secret")])]),s._v(" "),a("p",[s._v("这个部分需要base64加密后的header和base64加密后的payload使用"),a("code",[s._v(".")]),s._v("连接组成的字符串，然后通过header中声明的加密方式进行加盐"),a("code",[s._v("secret")]),s._v("组合加密，然后就构成了jwt的第三部分。")]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// javascript")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" encodedString "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("base64UrlEncode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string character"}},[s._v("'.'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("base64UrlEncode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" signature "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("HMACSHA256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("encodedString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 'secret'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("将这三部分用"),a("code",[s._v(".")]),s._v("连接成一个完整的字符串,构成了最终的jwt:")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("注意：secret是保存在服务器端的，jwt的签发生成也是在服务器端的，secret就是用来进行jwt的签发和jwt的验证，所以，它就是你服务端的私钥，在任何场景都不应该流露出去。一旦客户端得知这个secret, 那就意味着客户端是可以自我签发jwt了。")])]),s._v(" "),a("h3",{attrs:{id:"如何应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何应用"}},[s._v("#")]),s._v(" 如何应用")]),s._v(" "),a("p",[s._v("一般是在请求头里加入"),a("code",[s._v("Authorization")]),s._v("，并加上"),a("code",[s._v("Bearer")]),s._v("标注：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'api/user/1'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  headers: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Authorization'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Bearer '")]),s._v(" + token\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("服务端会验证token，如果验证通过就会返回相应的资源。整个流程就是这样的:\n"),a("img",{attrs:{src:"/docs/images/2020-08-28-16-41-00.png",alt:""}})]),s._v(" "),a("p",[s._v("jwt-diagram")]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("h3",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[s._v("#")]),s._v(" 优点")]),s._v(" "),a("ul",[a("li",[s._v("因为json的通用性，所以JWT是可以进行跨语言支持的，像JAVA,JavaScript,NodeJS,PHP等很多语言都可以使用。")]),s._v(" "),a("li",[s._v("因为有了payload部分，所以JWT可以在自身存储一些其他业务逻辑所必要的非敏感信息。")]),s._v(" "),a("li",[s._v("便于传输，jwt的构成非常简单，字节占用很小，所以它是非常便于传输的。")]),s._v(" "),a("li",[s._v("它不需要在服务端保存会话信息, 所以它易于应用的扩展")])]),s._v(" "),a("h3",{attrs:{id:"安全相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全相关"}},[s._v("#")]),s._v(" 安全相关")]),s._v(" "),a("ul",[a("li",[s._v("不应该在jwt的payload部分存放敏感信息，因为该部分是客户端可解密的部分。")]),s._v(" "),a("li",[s._v("保护好secret私钥，该私钥非常重要。")]),s._v(" "),a("li",[s._v("如果可以，请使用https协议")])])])}),[],!1,null,null,null);t.default=n.exports}}]);