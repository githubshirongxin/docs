---
layout: post
title: nodejs监控文件夹变化并发送json
---

jsonserver.js
``` js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})

app.post('/process_post', urlencodedParser, function (req, res) {

    // 输出 JSON 格式
    var body = '';
    req.on('data', (chunk) => {
        body += chunk;
    })
    console.log('body='+req.body.status);
    res.json(req.body);

    // req.on('end', () => {
    //     data = JSON.parse(body);
    //     console.log('data='+data);
    //     var response = {
    //         first_name: data.status,
    //         last_name: data.path,
    //         msg: "hello2020"
    //     };
    //     res.end(JSON.stringify(response));
    // })
})

app.listen(3000, function () {
    console.log('server start at 127.0.0.1:3000')
})
```