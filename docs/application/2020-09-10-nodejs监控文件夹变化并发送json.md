---
layout: post
title: nodejs监控文件夹变化并发送json
---

否则出错。
 `node --unhandled-rejections=none test.js`

# 启动服务端程序，监听3000
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

# 客户端使用的工具List
./tools/ArrayList.js
``` js
exports.ArrayList = function() {
    this.arr = [],
 
    this.size = function () {
        return this.arr.length;
    },
    this.add = function () {
        if (arguments.length == 1) {
            this.arr.push(arguments[0]);
        } else if (arguments.length >= 2) {
            var deleteItem = this.arr[arguments[0]];
            this.arr.splice(arguments[0], 1, arguments[1], deleteItem)
        }
        return this;
    },
    this.get = function (index) {
        return this.arr[index];
    },
    this.removeIndex = function (index) {
        this.arr.splice(index, 1);
    },
    this.removeObj = function (obj) {
        this.removeIndex(this.indexOf(obj));
    },
    this.indexOf = function (obj) {
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === obj) {
                return i;
            };
        }
        return -1;
    },
    this.isEmpty = function () {
        return this.arr.length == 0;
    },
    this.clear = function () {
        this.arr = [];
    },
    this.contains = function (obj) {
        return this.indexOf(obj) != -1;
    }
};
```

# 客户端监听文件夹变化信息发送Json给服务端
test.js
``` js
const chokidar = require('chokidar');
var arrayUtil = require('./tools/ArrayUtil');
var http = require('http');


var list = new arrayUtil.ArrayList();
//One-liner for current directory
chokidar.watch('Y:/').on('all', (event, path) => {
    //console.log(event + path);
    list.add('{"status":' + event + ',"path":\'' + path + '\'}');
});

setTimeout(function () {
    console.log('list.size1=' + list.size());
    if (list.size() > 0) {
        var post_data = '[';
        console.log('list.size2=' + list.size());
        for (var i = 0; i < list.size(); i++) {
            if (i == list.size() - 1) {
                post_data = post_data + list.get(i) 
            } else {
                post_data = post_data + list.get(i)+ ','
            }
            //console.log("post_data="+post_data+" i="+i);
        }
        post_data = post_data + ']';
        //console.log("post_data="+post_data);
        var content = JSON.stringify(post_data);
        console.log('content='+content);

        var options = {

            host: '127.0.0.1',

            port: 3000,

            path: '/process_post',

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

                'Content-Length': content.length

            }

        };


        console.log(`http.request()`);
        var req = http.request(options, function (res) {

            console.log("statusCode: ", res.statusCode);
            console.log("headers: ", res.headers);
            var _data = '';
            res.on('data', function (chunk) {
                _data += chunk;
            });
            res.on('end', function () {
                console.log("\n--->>\nresult:", _data)
            });
        });


        req.write(content);

        req.end();

        // clear
        list.clear;
        var str1 = '';
    }
}, 3000);
// // Initialize watcher.
// const watcher = chokidar.watch('Y:/', {
//     ignored: /(^|[\/\\])\../, // ignore dotfiles
//     persistent: true
// });

// // Something to use when events are received.
// const log = console.log.bind(console);
// // Add event listeners.

// watcher
//     .on('add', path => log(`File ${path} has been added`))
//     .on('change', path => log(`File ${path} has been changed`))
//     .on('unlink', path => log(`File ${path} has been removed`));
```