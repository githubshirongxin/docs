---
layout: post
title: async await 写同步应用程序
---

https://www.bilibili.com/video/BV1uK411H7on?p=52&spm_id_from=pageDriver


::: warning
 axios 的返回就是promise对象。
 所以，用axios发请求，用await来接结果。真方便。
:::

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>

        function sendAjax(url) {

            return new Promise((resovle, reject) => {

                const x = new XMLHttpRequest();

                x.open('GET', url);

                x.send();

                x.onreadystatechange = function () {
                    if (x.readyState === 4) {
                        if (x.status >= 200 && x.status < 300) {
                            resovle(x.response)
                        }else{
                            reject(x.status);
                        }
                    }
                }

            });
        }

        // test1 , promise的方法
        // const result = sendAjax("https://api.apiopen.top/getJoke").then(
        //     (value)=>{
        //         console.log(value);
        //     }
        // ).then(reason=>{
        //     console.log(reason);
        // });
        // console.log(result);


        // Test2 ， async

        async function main(){
            let value = await sendAjax("https://api.apiopen.top/getJoke");
            // 再次测试
            let tianqi = await sendAjax("http://t.weather.sojson.com/api/weather/city/101030100");
            console.log(tianqi);
        }
        main();


        // axios 的返回就是promise对象。所以，用axios发请求，用await来接结果。真方便。

    </script>
</body>

</html>
```