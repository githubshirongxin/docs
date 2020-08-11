---
layout: post
title: 【vuepress js error】解决
---

刷新vsspress页面，就js控制台就出现这个error。
怀疑是评论插件的问题。



```javascript
app.342fceb8.js:8 POST https://api.github.com/graphql 401 (Unauthorized)
(anonymous) @ app.342fceb8.js:8
e.exports @ app.342fceb8.js:8
...

app.342fceb8.js:48 Error: Request failed with status code 401
    at e.exports (app.342fceb8.js:8)
    at e.exports (app.342fceb8.js:15)
    at XMLHttpRequest.f.onreadystatechange (app.342fceb8.js:8)
```

评论：点login into ，就没有error了，出了一个警告。

```bash
githubshirongxin.github.io/:1 A cookie associated with a cross-site resource at http://travis-ci.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.
```
