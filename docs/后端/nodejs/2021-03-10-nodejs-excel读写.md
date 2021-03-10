---
layout: post
title: nodejs读写excel
---

[参考](https://www.geeksforgeeks.org/how-to-read-and-write-excel-file-in-node-js/)


`npm install xlsx`


```js
// Requiring the module 
const reader = require('xlsx')

// Reading our test file 
const file = reader.readFile('./20210309104846_员工信息导出.xlsx')

const ccbjb = "@ccbjb.com.cn"

let data = []

const sheets = file.SheetNames

for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]]);
    temp.forEach((res) => {
        data.push(res)
    })
}

// Printing data 
const { STYLE_NORMAL } = require("pinyin");
const pinyin = require("pinyin");

var options = {
    style: STYLE_NORMAL
}


for( let i = 0 ;i<data.length;i++){
    let pi = pinyin(data[i].员工姓名,options);
    if(pi.length===2){
        data[i].邮件 = pi.join('') +ccbjb;
    }else{
        data[i].邮件 = pi[0][0]+pi[1][0].substr(0,1)+pi[2][0].substr(0,1)+ccbjb;
    }
 
}


// function firstUpperCase( value ){
//     return value.charAt(0).toUpperCase() + value.slice(1);
// }
console.log(data)

const ws = reader.utils.json_to_sheet(data) 

reader.utils.book_append_sheet(file,ws,"Sheet1") 

// Writing to our file 
reader.writeFile(file,'./20210309104846_员工信息导出.xlsx') 
```