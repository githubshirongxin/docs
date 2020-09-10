---
layout: post
title: nodejs监控文件夹变化并发送json
---

```bash
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.post('/process_post', urlencodedParser, function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "first_name":req.body.first_name,
       "last_name":req.body.last_name,
       "msg": "hello2020"
   };
  //  console.log(response);
   console.log(req.body.first_name);
   console.log(req.body.last_name);
   res.end(JSON.stringify(response));
})
 
app.listen(3000, function () {
  console.log('server start at 127.0.0.1:3000')
})
```