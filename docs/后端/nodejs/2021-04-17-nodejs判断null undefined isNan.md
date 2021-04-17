---
layout: post
title: JS中判断null、undefined与NaN的方法
---


![](https://csdnimg.cn/release/blogv2/dist/pc/img/reprint.png)


写了个 `str ="s"++;`

然后出现`Nan`，找了一会。

收集资料如下判断：

## 1.判断`undefined`:

```
var tmp = undefined; 
if (typeof(tmp) == "undefined"){ 
alert("undefined"); 
}
```

说明：`typeof` 返回的是字符串，有六种可能：`"number"、"string"、"boolean"、"object"、"function"、"undefined"`

## 2.判断`null`:

```
var tmp = null; 
if (!tmp && typeof(tmp)!="undefined" && tmp!=0){ 
alert("null"); 
}
```

## 3.判断`NaN`:

```
var tmp = 0/0; 
if(isNaN(tmp)){ 
alert("NaN"); 
}
```

说明：如果把 `NaN` 与任何值（包括其自身）相比得到的结果均是 `false`，所以要判断某个值是否是 `NaN`，不能使用 `==` 或 `===` 运算符。

提示：`isNaN()` 函数通常用于检测 `parseFloat()` 和 `parseInt()` 的结果，以判断它们表示的是否是合法的数字。当然也可以用 `isNaN()` 函数来检测算数错误，比如用 `0` 作除数的情况。

## 4.判断`undefined`和`null`:

```
var tmp = undefined; 
if (tmp== undefined) 
{ 
alert("null or undefined"); 
}


var tmp = undefined; 
if (tmp== null) 
{ 
alert("null or undefined"); 
}
```

说明：`null==undefined`

## 5.判断`undefined`、`null`与`NaN`:

```
var tmp = null; 
if (!tmp) 
{ 
alert("null or undefined or NaN"); 
}
```

提示：一般不那么区分就使用这个足够。