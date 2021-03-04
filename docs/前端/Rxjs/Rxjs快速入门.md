---
layout : post
title : Rxjs 快速入门
---

[来源 ： ](https://www.bilibili.com/video/BV1Mt4y127An?from=search&seid=18010178910837940956)

官网： https://rxjs.dev/

直接F11，console就能执行rxjs。
![](/docs/images/2021-03-03-21-15-18.png)


推荐这么写:
 ![](/docs/images/2021-03-03-21-14-20.png)

简化版：
 ![](/docs/images/2021-03-03-21-16-01.png)

 过滤资料：
 ![](/docs/images/2021-03-03-21-16-40.png)

```
const { fromEvent } = rxjs;
const { filter } = rxjs.operators;
const { take } = rxjs.operators;
var click$ = fromEvent(document,'click');
var subs = click$.pipe( filter(d => d.clientX < 1000)).subscribe(console.log)

subs.unsubscribe()
```

- `click$`后面带一个`$`表示observerable。
- observerable.subscribe(括弧里的是一个观察者)
- 观察者通常是一个方法。
- 观察者其实是三个方法
- 通过pipe传入operator
- 最深奥的地方就是operator的各种组合

```
{
    next: (取到的资料) => { 处理资料}
}
```


第一个条件的，只出现一次。
```
const { take } = rxjs.operators;
var subs = click$.pipe( filter(d => d.clientX < 1000), 
take(1)
).subscribe(console.log)
```


## 示范 subject主体物件的用法
subject先当作观察者，观察observerable。
然后subject又充当observable，允许其他observer订阅subject。达到广播出去的效果。

![](/docs/images/2021-03-03-21-35-55.png)

```
var subject = new rxjs.Subject();
var click$ = rxjs.fromEvent( document ,'click');

click$ = click$.pipe( take(2) );

click$.subscribe(subject);

// subscribe()的结果仍旧是observerable.
var subs1$ = subject.subscribe((x) => console.log(x.clientX));
var subs2$ = subject.subscribe((x) => console.log(x.clientX));

subs1$.unsubscribe();
subs2$.unsubscribe();

```

## 理解弹珠图

![](/docs/images/2021-03-03-21-43-14.png)

![](/docs/images/2021-03-03-21-43-23.png)

contact串接两个observerable。生成一个新的observerable
![](/docs/images/2021-03-03-21-44-06.png)

### 1. 比较好的能托拉的帮助理解弹珠图
[rxmarbles.com](https://rxmarbles.com/)

## operator

### 1.创建Observerable
创建：
![](/docs/images/2021-03-04-13-12-47.png)

组合：
![](/docs/images/2021-03-04-13-13-35.png)

转换格式：
![](/docs/images/2021-03-04-13-14-24.png)

过滤：
![](/docs/images/2021-03-04-13-15-18.png)

组合：
![](/docs/images/2021-03-04-13-16-19.png)

多播：
![](/docs/images/2021-03-04-13-16-35.png)

错误处理：
![](/docs/images/2021-03-04-13-17-09.png)

即将废弃的API
![](/docs/images/2021-03-04-13-21-56.png)