---
layout: post
title: RXJS的PRomise all
----

# [RxJS: 详解forkJoin, zip, combineLatest之间的区别](/a/1190000012369871)

[![](https://avatar-static.segmentfault.com/214/458/2144589935-5a2def6c2aaa1_big64)**TonyZhu**](/u/tonyzhu)发布于 <!-- -->2017-12-11

![](https://sponsor.segmentfault.com/lg.php?bannerid=0&campaignid=0&zoneid=25&loc=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000012369871&referer=https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DI4h2PYQ4FbZ10wSKZMxS2fSPWCiBSL5vJLB8KlPFXbKMSPlvGPVht8L7MeuJLVBE4IPwqVgrfcRjkaItx6l4-a%26wd%3D%26eqid%3Dc5a09ed9000343fc000000026052a151&cb=6d1ecb5b26)

### 前言

`forkJoin`, `zip`, `combineLatest`是`rxjs`中的合并操作符，用于对多个流进行合并。很多人第一次接触`rxjs`时往往分不清它们之间的区别，其实这很正常，因为当你准备用来合并的流是那种只会发射一次数据就关闭的流时（比如`http`请求），就结果而言这三个操作符没有任何区别。

```
const ob1 = Rx.Observable.of(1).delay(1000);
const ob2 = Rx.Observable.of(2).delay(2000);
const ob3 = Rx.Observable.of(3).delay(3000);

Rx.Observable.forkJoin(ob1, ob2, ob3).subscribe((data) => console.log(data));
Rx.Observable.zip(ob1, ob2, ob3).subscribe((data) => console.log(data));
Rx.Observable.combineLatest(ob1, ob2, ob3).subscribe((data) => console.log(data));

// [1, 2, 3]
// [1, 2, 3]
// [1, 2, 3]
// 都是在3秒的时候打印
```

`rxjs`中很多操作符功能相近，只有当其操作的流会多次发射数据时才会体现出它们之间的区别，下面我们来详细解释`forkJoin`, `zip`, 和`combineLatest`。

### 一个基本概念

首先我们要知道，一个流（或者说`Observable`序列）的生命周期中，每次发射数据会发出`next`信号（`Notification`），结束发射时会发出`complete`信号，发生错误时发出`error`信号，三个信号分别对应`observer`的三个方法。`next`信号会由于发射源的不同发射0到多次；而`complete`和`error`仅会发射其中一个，且只发射一次，标志着流的结束。  
`subscribe`接收一个`observer`对象用来处理上述三种信号，只传入一个函数会被认为是`next`方法，因此传入`subscribe`的`next`方法会执行0到N次，N为序列正常发射信号的次数。

### `forkJoin`

用`forkJoin`合并的流，会在每个被合并的流都发出结束信号时发射一次也是唯一一次数据。假设我们有两个流：

```
const ob1 = Rx.Observable.interval(1000).map(d => `ob1:${d}`).take(3);
const ob2 = Rx.Observable.interval(2000).map(d => `ob2:${d}`).take(2);

Rx.Observable.forkJoin(ob1, ob2).subscribe((data) => console.log(data));
// ["ob1:2", "ob2:1"]
```

`ob1`会在发射完第三个数据时停止发射，`ob2`会在发射完第二个数据时停止，而`forkJoin`合并后的流会等到`ob1`和`ob2`都结束时，发射一次数据，也就是触发一次`subscribe`里的回调，接收到的数据为`ob1`和`ob2`发射的最后一次数据的数组。

### `zip`

`zip`工作原理如下，当每个传入`zip`的流都发射完毕第一次数据时，`zip`将这些数据合并为数组并发射出去；当这些流都发射完第二次数据时，`zip`再次将它们合并为数组并发射。以此类推直到其中某个流发出结束信号，整个被合并后的流结束，不再发射数据。

```
const ob1 = Rx.Observable.interval(1000).map(d => `ob1:${d}`).take(3);
const ob2 = Rx.Observable.interval(2000).map(d => `ob2:${d}`).take(2);

Rx.Observable.zip(ob1, ob2).subscribe({
  next: (data) => console.log(data),
  complete: () => console.log('complete')
});
// ["ob1:0", "ob2:0"] ob1等待ob2发射数据，之后合并
// ["ob1:1", "ob2:1"] 此时ob2结束，整个合并的流也结束
// "complete"
```

`zip`和`forkJoin`的区别在于，`forkJoin`仅会合并各个子流最后发射的一次数据，触发一次回调；`zip`会等待每个子流都发射完一次数据然后合并发射，之后继续等待，直到其中某个流结束（因为此时不能使合并的数据包含每个子流的数据）。

### `combineLatest`

`combineLatest`与`zip`很相似，`combineLatest`一开始也会等待每个子流都发射完一次数据，但是在合并时，如果子流1在等待其他流发射数据期间又发射了新数据，则使用子流最新发射的数据进行合并，之后每当有某个流发射新数据，不再等待其他流同步发射数据，而是使用其他流之前的最近一次数据进行合并。

```
const ob1 = Rx.Observable.interval(1000).map(d => `ob1:${d}`).take(3);
const ob2 = Rx.Observable.interval(2000).map(d => `ob2:${d}`).take(2);

Rx.Observable.combineLatest(ob1, ob2).subscribe({
  next: (data) => console.log(data),
  complete: () => console.log('complete')
});
// ["ob1:1", "ob2:0"] ob1等待ob2发射，当ob2发射时ob1已经发射了第二次数据，使用ob1的第二次数据
// ["ob1:2", "ob2:0"] ob1继续发射第三次也是最后一次数据，ob2虽然还未发射，但是可以使用它上一次的数据
// ["ob1:2", "ob2:1"] ob2发射第二次也是最后一次数据，使ob1上一次的数据。
// "complete"
```

本期内容结束，下一期会继续带来`rxjs`的其他操作符或者概念详解。

[rxjs](/t/rxjs)[javascript](/t/javascript)
