(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{595:function(t,v,_){"use strict";_.r(v);var r=_(59),a=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"知识体系与小册格局"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#知识体系与小册格局"}},[t._v("#")]),t._v(" 知识体系与小册格局")]),t._v(" "),_("h2",{attrs:{id:"写给读者"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#写给读者"}},[t._v("#")]),t._v(" 写给读者")]),t._v(" "),_("p",[t._v("提起性能优化，大家现在脑海里第一时间会映射出什么内容呢？")]),t._v(" "),_("p",[t._v("可能是类似"),_("a",{attrs:{href:"https://developer.yahoo.com/performance/rules.html?guccounter=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("“雅虎军规”"),_("OutboundLink")],1),t._v("和"),_("a",{attrs:{href:"https://book.douban.com/subject/5362856/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《高性能 JavaScript》"),_("OutboundLink")],1),t._v("这样历久弥香的经典之作，也可能是搜索引擎聚合给你的一篇又一篇以性能优化为主题的个人或团队实践而来的“私货”。至少当我确定自己的研发方向、并接到第一个性能优化任务时，我做的第一件事是向搜索引擎求助，第二件事是买书，然后开始了摸着石头过河，前后花费了大量的时间和精力。我深感性能优化实在是前端知识树中特别的一环——当你需要学习前端框架时，文档和源码几乎可以告诉你所有问题的答案，当你需要学习 Git 时，你也可以找到放之四海皆准的实践方案。但性能优化却不一样，它好像只能是一个摸索的过程。")]),t._v(" "),_("p",[t._v("这个摸索的过程是痛苦的、漫长的，也是紧要的。因为在如今的互联网环境下，一个前端团队如果只把性能优化这个任务写在纸上，而不投入实践，它将缺失最基本的竞争力。")]),t._v(" "),_("p",[t._v("笔者写这本小册，是希望通过短短十数个章节的讲解，尽可能降低一些大家学习性能优化的成本。")]),t._v(" "),_("p",[t._v("一方面，这本小册为没有接触过性能优化的新同学建立起一个正确的前端性能优化的“世界观”，知道性能优化是什么、为什么、怎么做，从而使性能优化这件事情有迹可循，有路可走。这样在面试现场被问到性能优化层面的问题时，能够做到滔滔不绝、言之有物，而非像背书一样罗列干巴巴的知识点，最终淹没在茫茫的求职大军中。另一方面，小册可以为在职的工程师们提供一线团队已经实践过的“方法论”，知道什么场景下该做什么事情，最终在脑海中留下一张涵盖核心原理和实践的、可随时查阅并且高度可扩展的性能优化思路索引表。然后在今后的开发生活中可以去践行它，更进一步去挖掘它。把性能优化变作你前端工程师生涯的一门必修课，进而演化为自己研发方面的核心竞争力。")]),t._v(" "),_("p",[t._v("同时，相信大家可以明确这样一个学习观念：任何技术的掌握，都离不开一定比例的理论基础和实际操作的支撑。")]),t._v(" "),_("p",[t._v("具体到前端性能优化这件事情上，我认为它是 20% 的理论，加上至少 80% 的实践，甚至很多理论本身也都是我们在具体的业务场景中实践出来的。所以希望大家阅读本小册时，能够读到一些“书本之外的东西”——最好是一边读一边回忆自己既有的开发经历，尝试去留意哪些知识是已知的，哪些是未知的。")]),t._v(" "),_("p",[t._v("这样读完之后，就可以有的放矢地把这些知识转换为自己的项目实践——前端技术日新月异，性能方案永远都在更迭，所以一定要形成自己的学习思路。")]),t._v(" "),_("p",[t._v("建议每一位读者都带着“学了就要用”的心态去读这本小册。如果阅读结束，能够为你带来哪怕一个小小的开发习惯或者优化观念上的改变，这数小时的阅读时间就算没有白费。")]),t._v(" "),_("h2",{attrs:{id:"知识体系：-从一道面试题说起"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#知识体系：-从一道面试题说起"}},[t._v("#")]),t._v(" 知识体系： 从一道面试题说起")]),t._v(" "),_("p",[t._v("在展开性能优化的话题之前，我想先抛出一个老生常谈的面试问题：")]),t._v(" "),_("blockquote",[_("p",[t._v("从输入 URL 到页面加载完成，发生了什么？")])]),t._v(" "),_("p",[t._v("这个问题非常重要，因为我们后续的内容都将以这个问题的答案为骨架展开。我希望正在阅读这本小册的各位可以在心里琢磨一下这个问题——无须你调动太多计算机的专业知识，只需要你用最快的速度在脑海中架构起这个抽象的过程——我们接下来所有的工作，就是围绕这个过程来做文章。")]),t._v(" "),_("p",[t._v("我们现在站在性能优化的角度，一起简单地复习一遍这个经典的过程：首先我们需要通过 DNS（域名解析系统）将 URL 解析为对应的 IP 地址，然后与这个 IP 地址确定的那台服务器建立起 TCP 网络连接，随后我们向服务端抛出我们的 HTTP 请求，服务端处理完我们的请求之后，把目标数据放在 HTTP 响应里返回给客户端，拿到响应数据的浏览器就可以开始走一个渲染的流程。渲染完毕，页面便呈现给了用户，并时刻等待响应用户的操作（如下图所示）。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/18/16685737b823244c?w=489&h=329&f=png&s=19023",alt:""}})]),t._v(" "),_("p",[t._v("我们将这个过程切分为如下的过程片段：")]),t._v(" "),_("ol",[_("li",[t._v("DNS 解析")]),t._v(" "),_("li",[t._v("TCP 连接")]),t._v(" "),_("li",[t._v("HTTP 请求抛出")]),t._v(" "),_("li",[t._v("服务端处理请求，HTTP 响应返回")]),t._v(" "),_("li",[t._v("浏览器拿到响应数据，解析响应内容，把解析的结果展示给用户")])]),t._v(" "),_("p",[t._v("大家谨记，我们任何一个用户端的产品，都需要把这 5 个过程滴水不漏地考虑到自己的性能优化方案内、反复权衡，从而打磨出用户满意的速度。")]),t._v(" "),_("h2",{attrs:{id:"从原理到实践：各个击破"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从原理到实践：各个击破"}},[t._v("#")]),t._v(" 从原理到实践：各个击破")]),t._v(" "),_("p",[t._v("我们接下来要做的事情，就是针对这五个过程进行分解，各个提问，各个击破。")]),t._v(" "),_("p",[t._v("具体来说，DNS 解析花时间，能不能尽量减少解析次数或者把解析前置？能——浏览器 DNS 缓存和 DNS prefetch。TCP 每次的三次握手都急死人，有没有解决方案？有——长连接、预连接、接入 SPDY 协议。如果说这两个过程的优化往往需要我们和团队的服务端工程师协作完成，前端单方面可以做的努力有限，那么 HTTP 请求呢？——在减少请求次数和减小请求体积方面，我们应该是专家！再者，服务器越远，一次请求就越慢，那部署时就把静态资源放在离我们更近的 CDN 上是不是就能更快一些？")]),t._v(" "),_("p",[t._v("以上提到的都是网络层面的性能优化。再往下走就是浏览器端的性能优化——这部分涉及资源加载优化、服务端渲染、浏览器缓存机制的利用、DOM 树的构建、网页排版和渲染过程、回流与重绘的考量、DOM 操作的合理规避等等——这正是前端工程师可以真正一展拳脚的地方。学习这些知识，不仅可以帮助我们从根本上提升页面性能，更能够大大加深个人对浏览器底层原理、运行机制的理解，一举两得！")]),t._v(" "),_("p",[t._v("我们整个的知识图谱，用思维导图展示如下：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/23/1669f5358f63c0f8?w=2478&h=1506&f=png&s=340672",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"小册格局"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#小册格局"}},[t._v("#")]),t._v(" 小册格局")]),t._v(" "),_("p",[t._v("总的来说，我们将从"),_("strong",[t._v("网络层面")]),t._v("和"),_("strong",[t._v("渲染层面")]),t._v("两个大的维度来逐个点亮前端性能优化的技能树。")]),t._v(" "),_("p",[t._v("这两个维度的知识面貌各有千秋：在网络层面，我们需要学习一些必需的理论基础作为前置知识。这部分的学习或许不需要大家写特别多的代码，但需要大家对每一个知识点理解透彻，进而应用到自己日常优化的决策中去。网络层面结束后，由本地存储开始，我们会渐渐过渡到浏览器这一端的优化，大家喜闻乐见的“真代码”就会相应地多起来。")]),t._v(" "),_("p",[t._v("为了使同学们耐心学习一些理论性稍强的知识，我也会尽自己所能去讲述得有趣、易读、可用，同时希望大家可以真的沉下心去理解这些知识，它们与大家喜闻乐见的框架和工具无异，一样是实实在在的生产力。")]),t._v(" "),_("p",[t._v("“经验丰富的人读书用两只眼睛，一只眼睛看到纸面上的话，另一只眼睛看到纸的背面”。在这本小册，代码片段固然有用，它们是“纸面上的话”，我自然希望大家可以记下来、用起来。而代码之外那些反复讲解的原理，则是“纸的背面”，同样是我希望引起大家重视的内容。")]),t._v(" "),_("p",[t._v("现在相信大家已经对我们的优化观念、知识结构、小册格局都有了基本认知，那么我们就赶快趁热打铁，进入实战技能的学习吧~")])])}),[],!1,null,null,null);v.default=a.exports}}]);