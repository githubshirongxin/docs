---
layout: post
title: Promise的then方法
---

vscode !回车会自动生成html

```html
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
            setTimeout(() => {
              resolve('用户数据');
    //            reject('出错了');

            }, 1000);
        });

        // 对象状态由会带哦函数的执行结果来决定
        // 1. 返回 非promise类型123，状态成功 ， 123.
        // 不写 return，状态成功。 undefine
        // 2. 返回 promise，则，result的值和状态为返回的promise的值。
        // 3. 返回new Error, result的状态为失败，返回为error
        const result = p.then(value => {
            console.log(value);
            return new Promise((resolve,reject)=>{
                 resolve('ok');
                // reject("err");
                //throw new Error("error");
            })
        }, reason => {
            console.log(reason);
        });

        console.log(result);


        // 链式调用，避免回调地狱
        result.then(value=>{
            // 先执行
        }).then(value=>{
            // 后执行
        });
    </script>
</body>

</html>
```

catch方法就是语法糖

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
        const p = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject("出错了");
            },1000);
        });

        p.then(function(value){
            console.log();
        });

        p.catch(reason=>{
            console.log(reason);
        })

    </script>
</body>
</html>
```