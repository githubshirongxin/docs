---
layout: post
title: Promise封装ajax
---

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>右键live server运行</title>
</head>

<body>
    <script>

        const p = new Promise(function (resolve, reject) {
            // 接口： https://api.apiopen.top/getJoke

            // 创建对象
            const xhr = new XMLHttpRequest();

            // 初始化
            xhr.open("GET", "https://api.apiopen.top/getJoke");

            // 发送
            xhr.send();

            //绑定事件
            xhr.onreadystatechange = function () {
                //判断
                if (xhr.readyState === 4) {
                    // 200-299
                    if (xhr.status >= 200 && xhr.status < 300) {
                        // success
                        //  console.log(xhr.response);
                        resolve(xhr.response);
                    } else {
                        // error
                        //  console.log(xhr.status);
                        reject(xhr.status);
                    }
                }
            }
        });


        p.then(value =>{
            console.log(value);
        },reason=>{
            console.error(reason);
        });
    </script>
</body>

</html>
```

