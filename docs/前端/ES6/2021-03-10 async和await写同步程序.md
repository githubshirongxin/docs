---
layout: post
title: async await 写同步应用程序
---

https://www.bilibili.com/video/BV1uK411H7on?p=51&spm_id_from=pageDriver


## async和await结合读取多个文件.js:
```js
const fs = require("fs");

function readWeiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile('../../resources/为学.md', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    })
}

function readChaYangShi() {
    return new Promise((resolve, reject) => {
        fs.readFile('../../resources/插秧诗.md', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    }
    )
}

function readGuanShu() {
    return new Promise((resolve, reject) => {
        fs.readFile('../../resources/观书有感.md', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

async function main() {
    let weixue = await readWeiXue();
    let chayangshi = await readChaYangShi();
    let guanshu = await readGuanShu();
    console.log(weixue.toString(), chayangshi.toString(), guanshu.toString());
}

main();

```

`node async和await结合读取多个文件.js`