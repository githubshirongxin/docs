(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{540:function(v,_,t){"use strict";t.r(_);var a=t(55),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("主备：备平时不开机\n主从：从只用于读\n主主：两个都可以写")]),v._v(" "),t("p",[v._v("主备 主从 主主模式\n单点故障的情况不可避免，而且单副本的存储方案早已无法满足业务的可靠性要求，单机可靠性就就两个9，也就是一年大概有3.65天不可用。因此一般情况下我们至少也会上个双机存储架构。凡事最好有个plan B。")]),v._v(" "),t("h2",{attrs:{id:"主备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主备"}},[v._v("#")]),v._v(" 主备")]),v._v(" "),t("p",[v._v("主：主机，备：备机。\n主机的意思当然是以它为主了，读写都是主机上，而备机呢就是备用，默默的在背后吸收主机的数据，时刻待命着等待主机挂了之后取而代之(没这么坏哈哈)。因此在主机还活着的情况下，备机的唯一使命就是同步主机的数据，不对外提供服务。")]),v._v(" "),t("p",[t("img",{attrs:{src:"/docs/images/2020-07-13-20-38-22.png",alt:""}}),v._v("\n优点：简单，主备之间只有数据同步，不需要考虑别的情况。就很简单的配置一下，再搞一台服务器就能组成主备架构了。")]),v._v(" "),t("p",[v._v("缺点：备机等于就拿来备份，浪费了备机这台服务器的资源。上面说的不考虑别的情况指的是主机和备机它们两之间就只要复制数据，但是有些情况我们人还是得考虑的：主机挂了如何让备机上。")]),v._v(" "),t("p",[v._v("有三种选择")]),v._v(" "),t("p",[v._v("1.人工切换。人工切换时效性不高，出了事情首先你得开机，登录远程一阵啪啪得好几分钟或者万一你在LOL，黑铁晋级青铜最后一把努力了几个月即将晋升倔强青铜的一刻！是吧。还要万一在深夜或者说....是吧。")]),v._v(" "),t("p",[v._v("2.引入中间件。例如ZooKeeper、keepalived。就跟好多房东把房子委托给中介一样，这中间件就是个中介。全权由中介来打理主机和备机，它会根据机子状态来判别这时候是不是该备机上了。(建议)")]),v._v(" "),t("p",[v._v("3.主机备机之间状态传输(咱不找中介了，自己来打理)，啥意思呢？就是除数据同步，主备之间还要有个状态传输过程，来让备机只要现在主机过得好不好，可以是主机主动推送它的状态给备机，或者是备机去索要状态。当状态拿不到或者不对的时候就开始主备切换。但是可能传输出现了波动啥的，导致备机误判了，然后备机升级为主机，这样就两主机了(下面会说主主的问题)。")]),v._v(" "),t("h2",{attrs:{id:"主从"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主从"}},[v._v("#")]),v._v(" 主从")]),v._v(" "),t("p",[v._v("主：主机，从：从机")]),v._v(" "),t("p",[v._v("从机和备机的区别在于它得除了同步数据之外还得干活，对外提供读的操作，你可以理解为它是仆从。但是仆从和备机一样也有翻身做主人的一天，所以它也在默默的等待着主机挂了，取而代之。")]),v._v(" "),t("p",[t("img",{attrs:{src:"/docs/images/2020-07-13-20-38-41.png",alt:""}}),v._v("\n优点：充分利用了资源，嘿嘿不想备机这么爽了，还得出来干活，对外提供读操作。而且在主机挂了的时候，如果没任命新机主之前，读操作还是能用的。")]),v._v(" "),t("p",[v._v("缺点：")]),v._v(" "),t("p",[v._v("1.客户端需要多个判断，也就是不同操作需要发放给不同服务器，我上图主机提供读写，有时候读写分离了，主机就提供写。")]),v._v(" "),t("p",[v._v("2.主从延迟，读操作分配给从库，就会存在数据同步的延迟问题，比如某个人注册了账号之后，登录走的是从机，这时候数据还未从主机同步过来，那可不让人很难受了。有关主从延迟问题的一些解决办法")]),v._v(" "),t("p",[v._v("3.和主备一样的切换问题。(参考主备)")]),v._v(" "),t("h2",{attrs:{id:"主主"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主主"}},[v._v("#")]),v._v(" 主主")]),v._v(" "),t("p",[v._v("主主就是两台都是主机。同时对外提供读写操作。客户端任意访问提供的一台。")]),v._v(" "),t("p",[t("img",{attrs:{src:"/docs/images/image.png",alt:""}}),v._v("\n优点：主主的好处就是可以把写操作也分担一下，但是问题恰恰就出在写操作上，导致主主的架构有很大的局限性。")]),v._v(" "),t("p",[v._v("缺点：例如主机A有个注册的插入操作，生成的id是50，同一时刻主机B也有个插入操作生成的id也是50。然后它们之间的数据同步了，你说是谁覆盖谁呢？谁覆盖谁都不对！")]),v._v(" "),t("p",[v._v("因此主主只适用于可以双向复制，覆盖的数据(例如用户登录生成的token)。但是我们平日里绝大部分的数据都不允许。")]),v._v(" "),t("p",[v._v("结语\n这种双机存储架构一般而言应用于一些业务量不大的场景。主要还是为了存储的可用性。")])])}),[],!1,null,null,null);_.default=s.exports}}]);