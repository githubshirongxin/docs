(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{684:function(v,_,e){"use strict";e.r(_);var o=e(59),t=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h3",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),e("p",[v._v("上一章梳理了浏览器三大核心内容："),e("strong",[v._v("渲染引擎")]),v._v("、"),e("strong",[v._v("渲染过程")]),v._v("、"),e("strong",[v._v("兼容性")]),v._v("。其中渲染过程里的"),e("strong",[v._v("回流")]),v._v("和"),e("strong",[v._v("重绘")]),v._v("是CSS中很重要的概念。了解和认识它们，可编写出性能更好的CSS代码。")]),v._v(" "),e("p",[v._v("有些同学说，怎么不开发完CSS再找时间优化呢？试问有多少同学开发完一个项目后会拿出空余时间重构或优化你的代码。何必不在编码时对CSS代码进行一次完美的编写呢？接下来隆重介绍本章的两位主角。")]),v._v(" "),e("h3",{attrs:{id:"回流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回流"}},[v._v("#")]),v._v(" 回流")]),v._v(" "),e("p",[e("strong",[v._v("回流")]),v._v("又名"),e("strong",[v._v("重排")]),v._v("，指"),e("code",[v._v("几何属性")]),v._v("需改变的渲染。但是感觉回流这个词比较高大上，后续统称回流吧。")]),v._v(" "),e("p",[v._v("可理解成，将整个网页填白，对内容重新渲染一次。只不过以人眼的感官速度去看浏览器回流是不会有任何变化的，若你拥有"),e("code",[v._v("闪电侠")]),v._v("的感官速度去看浏览器回流("),e("code",[v._v("实质是将时间调慢")]),v._v(")，就会发现每次回流都会将页面清空，再从左上角第一个像素点从左到右从上到下这样一点一点渲染，直至右下角最后一个像素点。每次回流都会呈现该过程，只是感受不到而已。")]),v._v(" "),e("p",[v._v("渲染树的节点发生改变，影响了该节点的几何属性，导致该节点位置发生变化，此时就会触发浏览器回流并重新生成渲染树。回流意味着节点的几何属性改变，需重新计算并生成渲染树，导致渲染树的全部或部分发生变化。")]),v._v(" "),e("h3",{attrs:{id:"重绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重绘"}},[v._v("#")]),v._v(" 重绘")]),v._v(" "),e("p",[e("strong",[v._v("重绘")]),v._v("指更改"),e("code",[v._v("外观属性")]),v._v("而不影响"),e("code",[v._v("几何属性")]),v._v("的渲染。相比回流，重绘在两者中会温和一些，后续谈到的CSS性能优化就会基于该特点展开。")]),v._v(" "),e("p",[v._v("渲染树的节点发生改变，但是不影响该节点的几何属性。由此可见，回流对浏览器性能的消耗是高于重绘的，而且回流一定会伴随重绘，重绘却不一定伴随回流。")]),v._v(" "),e("p",[v._v("为何回流一定会伴随重绘呢？整个节点的位置都变了，肯定要重新渲染它的外观属性啊！")]),v._v(" "),e("h3",{attrs:{id:"属性分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性分类"}},[v._v("#")]),v._v(" 属性分类")]),v._v(" "),e("p",[v._v("以下对一些常用的几何属性和外观属性分类，其实同种分类的属性都有一些共同点，各位同学可自行感受。推荐一个查询CSS属性渲染状态的网站"),e("a",{attrs:{href:"https://csstriggers.com",target:"_blank",rel:"noopener noreferrer"}},[v._v("CssTriggers"),e("OutboundLink")],1),v._v("，可查看每个属性在渲染过程中发生了什么影响了什么。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("几何属性")]),v._v("：包括布局、尺寸等可用数学几何衡量的属性"),e("br"),v._v("\n* 布局："),e("code",[v._v("display")]),v._v("、"),e("code",[v._v("float")]),v._v("、"),e("code",[v._v("position")]),v._v("、"),e("code",[v._v("list")]),v._v("、"),e("code",[v._v("table")]),v._v("、"),e("code",[v._v("flex")]),v._v("、"),e("code",[v._v("columns")]),v._v("、"),e("code",[v._v("grid")]),e("br"),v._v("\n* 尺寸："),e("code",[v._v("margin")]),v._v("、"),e("code",[v._v("padding")]),v._v("、"),e("code",[v._v("border")]),v._v("、"),e("code",[v._v("width")]),v._v("、"),e("code",[v._v("height")])]),v._v(" "),e("li",[e("strong",[v._v("外观属性")]),v._v("：包括界面、文字等可用状态向量描述的属性"),e("br"),v._v("\n* 界面："),e("code",[v._v("appearance")]),v._v("、"),e("code",[v._v("outline")]),v._v("、"),e("code",[v._v("background")]),v._v("、"),e("code",[v._v("mask")]),v._v("、"),e("code",[v._v("box-shadow")]),v._v("、"),e("code",[v._v("box-reflect")]),v._v("、"),e("code",[v._v("filter")]),v._v("、"),e("code",[v._v("opacity")]),v._v("、"),e("code",[v._v("clip")]),e("br"),v._v("\n* 文字："),e("code",[v._v("text")]),v._v("、"),e("code",[v._v("font")]),v._v("、"),e("code",[v._v("word")])])]),v._v(" "),e("blockquote",[e("p",[v._v("如何理解回流重绘")])]),v._v(" "),e("p",[v._v("有无更好的方法可帮助理解"),e("strong",[v._v("回流重绘")]),v._v("呢？答案是有的。")]),v._v(" "),e("p",[v._v("某一天星巴克发行一套很有纪念价值的杯子，男同胞们为了买到心仪的杯子给女友当惊喜礼物，通宵达旦搬张板凳去星巴克门口排队。此时形成的队伍是有序的，毕竟大家都是文明人，不可能随便插队吧，先到先拿，这个道理谁都懂！")]),v._v(" "),e("p",[v._v("可是总有一些人不按常理出牌，别人排队排得那么辛苦，他一到来就仗着自己有钱有势人多马多，插队到最前面。若他插队成功，那么后面的人都要往后挪一位。此时队伍就要重新往后挪，甚至引发多人斗殴。但是混乱的情况总会被控制下来，此时就得重新排队，而原先的队伍顺序经过这次斗殴就可能不按照原先的队伍顺序排队了。几何属性变了，就要重新排队，这个就是"),e("strong",[v._v("回流")]),v._v("或"),e("strong",[v._v("重排")]),v._v("。重新排队啊😂！")]),v._v(" "),e("p",[v._v("一位漂亮妹纸排队排得久肚子呱呱叫，就与另一位同伴交换，她去买早餐，而这位同伴代替她的位置。各位男同胞可能发现这位妹纸更漂亮了。没错，外观属性改变了，变漂亮了，但是除了妹纸，其余人的位置和顺序都无发生变化，所以肯定不会发生上述重新排队的情况。外观属性变了，但是几何属性没变，这个就是"),e("strong",[v._v("重绘")]),v._v("。不用重新排队，还有漂亮妹纸看，大家都很乐意🤔！")]),v._v(" "),e("h3",{attrs:{id:"性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[v._v("#")]),v._v(" 性能优化")]),v._v(" "),e("p",[e("strong",[v._v("回流重绘")]),v._v("在操作节点样式时频繁出现，同时也存在很大程度上的性能问题。"),e("code",[v._v("回流成本比重绘成本高得多")]),v._v("，一个节点的回流很有可能导致子节点、兄弟节点或祖先节点的回流。在一些高性能电脑上也许无什么影响，但是回流发生在手机上("),e("code",[v._v("明摆说某些安卓手机")]),v._v(")，就会"),e("code",[v._v("减缓加载速度")]),v._v("和"),e("code",[v._v("增加电量消耗")]),v._v("。")]),v._v(" "),e("p",[v._v("在上一章中引出一个定向法则："),e("strong",[v._v("回流必定引发重绘，重绘不一定引发回流")]),v._v("，可利用该法则解决一些因为回流重绘而引发的性能问题。在优化性能前，需了解什么情况可能产生性能问题，以下罗列一些常见的情况。")]),v._v(" "),e("ul",[e("li",[v._v("改变窗口大小")]),v._v(" "),e("li",[v._v("修改盒模型")]),v._v(" "),e("li",[v._v("增删样式")]),v._v(" "),e("li",[v._v("重构布局")]),v._v(" "),e("li",[v._v("重设尺寸")]),v._v(" "),e("li",[v._v("改变字体")]),v._v(" "),e("li",[v._v("改动文字")])]),v._v(" "),e("p",[v._v("很多同学可能不知，回流重绘其实与浏览器的"),e("strong",[v._v("事件循环")]),v._v("有关，以下源自对"),e("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model",target:"_blank",rel:"noopener noreferrer"}},[v._v("HTML文档"),e("OutboundLink")],1),v._v("的理解。")]),v._v(" "),e("ul",[e("li",[v._v("浏览器刷新频率为"),e("code",[v._v("60Hz")]),v._v("，即每"),e("code",[v._v("16.6ms")]),v._v("更新一次")]),v._v(" "),e("li",[e("code",[v._v("事件循环")]),v._v("执行完成"),e("code",[v._v("微任务")])]),v._v(" "),e("li",[v._v("判断"),e("code",[v._v("document")]),v._v("是否需更新")]),v._v(" "),e("li",[v._v("判断"),e("code",[v._v("resize/scroll")]),v._v("事件是否存在，存在则触发事件")]),v._v(" "),e("li",[v._v("判断"),e("code",[v._v("Media Query")]),v._v("是否触发")]),v._v(" "),e("li",[v._v("更新动作并发送事件")]),v._v(" "),e("li",[v._v("判断"),e("code",[v._v("document.isFullScreen")]),v._v("是否为"),e("code",[v._v("true")]),v._v("(全屏)")]),v._v(" "),e("li",[v._v("执行"),e("code",[v._v("requestAnimationFrame")]),v._v("回调")]),v._v(" "),e("li",[v._v("执行"),e("code",[v._v("IntersectionObserver")]),v._v("回调")]),v._v(" "),e("li",[v._v("更新界面")])]),v._v(" "),e("p",[v._v("上述就是浏览器每一帧中可能会做到的事情，若在一帧中有空闲时间，就会执行"),e("code",[v._v("requestIdleCallback")]),v._v("回调。")]),v._v(" "),e("p",[v._v("回到正题，通过定向法则"),e("strong",[v._v("回流必定引发重绘，重绘不一定引发回流")]),v._v("可知道，尽量减少回流重绘，就是CSS性能优化中一个很好的指标。")]),v._v(" "),e("blockquote",[e("p",[v._v("如何减少和避免回流重绘")])]),v._v(" "),e("h5",{attrs:{id:"使用transform代替top"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用transform代替top"}},[v._v("#")]),v._v(" 使用transform代替top")]),v._v(" "),e("p",[e("code",[v._v("top")]),v._v("是几何属性，操作"),e("code",[v._v("top")]),v._v("会改变节点位置从而引发回流，使用"),e("code",[v._v("transform:translate3d(x,0,0)")]),v._v("代替"),e("code",[v._v("top")]),v._v("，只会引发图层重绘，还会间接启动GPU加速，该情况在第12章"),e("strong",[v._v("变换与动画")]),v._v("中会详细讲解。")]),v._v(" "),e("h5",{attrs:{id:"使用visibility-hidden替换display-none"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用visibility-hidden替换display-none"}},[v._v("#")]),v._v(" 使用visibility:hidden替换display:none")]),v._v(" "),e("p",[v._v("笔者从以下四方面对比"),e("code",[v._v("display:none")]),v._v("和"),e("code",[v._v("visibility:hidden")]),v._v("，"),e("code",[v._v("display:none")]),v._v("简称"),e("code",[v._v("DN")]),v._v("，"),e("code",[v._v("visibility:hidden")]),v._v("简称"),e("code",[v._v("VH")]),v._v("。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("占位表现")]),v._v(" "),e("ul",[e("li",[v._v("DN不占据空间")]),v._v(" "),e("li",[v._v("VH占据空间")])])]),v._v(" "),e("li",[e("strong",[v._v("触发影响")]),v._v(" "),e("ul",[e("li",[v._v("DN触发回流重绘")]),v._v(" "),e("li",[v._v("VH触发重绘")])])]),v._v(" "),e("li",[e("strong",[v._v("过渡影响")]),v._v(" "),e("ul",[e("li",[v._v("DN影响过渡不影响动画")]),v._v(" "),e("li",[v._v("VH不影响过渡不影响动画")])])]),v._v(" "),e("li",[e("strong",[v._v("株连效果")]),v._v(" "),e("ul",[e("li",[v._v("DN后自身及其子节点全都不可见")]),v._v(" "),e("li",[v._v("VH后自身及其子节点全都不可见但可声明子节点"),e("code",[v._v("visibility:visible")]),v._v("单独显示")])])])]),v._v(" "),e("p",[v._v("两者的"),e("code",[v._v("占位表现")]),v._v("、"),e("code",[v._v("触发影响")]),v._v("和"),e("code",[v._v("株连效果")]),v._v("就能说明"),e("code",[v._v("VH")]),v._v("代替"),e("code",[v._v("DN")]),v._v("的好处，从两者区别中就能找出恰当的答案了。")]),v._v(" "),e("h5",{attrs:{id:"避免使用table布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#避免使用table布局"}},[v._v("#")]),v._v(" 避免使用Table布局")]),v._v(" "),e("p",[e("code",[v._v("牵一发而动全身")]),v._v("用在Table布局身上就很适合了，可能很小的一个改动就会造成整个"),e("code",[v._v("<table>")]),v._v("回流，有兴趣的同学可用"),e("code",[v._v("Chrome Devtools")]),v._v("的"),e("code",[v._v("Performance")]),v._v("调试看看，在此就不演示了。")]),v._v(" "),e("p",[v._v("通常可用"),e("code",[v._v("<ul>")]),v._v("、"),e("code",[v._v("<li>")]),v._v("和"),e("code",[v._v("<span>")]),v._v("等标签取代"),e("code",[v._v("<table>")]),v._v("系列标签生成表格。")]),v._v(" "),e("h5",{attrs:{id:"避免样式节点层级过多"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#避免样式节点层级过多"}},[v._v("#")]),v._v(" 避免样式节点层级过多")]),v._v(" "),e("p",[v._v("浏览器的"),e("code",[v._v("CSS解析器")]),v._v("解析"),e("code",[v._v("css文件")]),v._v("时，对CSS规则是从右到左匹配查找，样式层级过多会影响回流重绘效率，建议保持CSS规则在"),e("code",[v._v("3层")]),v._v("左右。")]),v._v(" "),e("h5",{attrs:{id:"将频繁回流或重绘的节点设置为图层"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将频繁回流或重绘的节点设置为图层"}},[v._v("#")]),v._v(" 将频繁回流或重绘的节点设置为图层")]),v._v(" "),e("p",[v._v("上一章的"),e("code",[v._v("渲染过程")]),v._v("最后一步，提到将回流重绘生成的图层逐张合并并显示在屏幕上。可将其理解成"),e("code",[v._v("Photoshop")]),v._v("的图层，若不对图层添加关联，图层间是不会互相影响的。同理，在浏览器中设置频繁回流或重绘的节点为一张新图层，那么新图层就能够阻止节点的渲染行为影响别的节点，这张图层里怎样变化都无法影响到其他图层。")]),v._v(" "),e("p",[v._v("设置新图层有两种方法，将节点设置为"),e("code",[v._v("<video>")]),v._v("或"),e("code",[v._v("<iframe>")]),v._v("，为节点添加"),e("code",[v._v("will-change")]),v._v("。"),e("code",[v._v("will-change")]),v._v("是一个很叼的属性，在第12章"),e("strong",[v._v("变换与动画")]),v._v("中会详细讲解。")]),v._v(" "),e("h5",{attrs:{id:"动态改变类名而不改变样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态改变类名而不改变样式"}},[v._v("#")]),v._v(" 动态改变类名而不改变样式")]),v._v(" "),e("p",[v._v("不要尝试每次操作DOM去改变节点样式，这样会频繁触发回流。")]),v._v(" "),e("p",[v._v("更好的方法是使用新的类名预定义节点样式，在执行逻辑操作时收集并确认最终更换的类名集合，在适合时机一次性动态替换原来的类名集合。有点像"),e("code",[v._v("vue")]),v._v("的"),e("code",[v._v("依赖收集机制")]),v._v("，不知这样描述会不会更容易理解。")]),v._v(" "),e("p",[v._v("各位同学可研究下这个强大的"),e("a",{attrs:{href:"https://www.runoob.com/jsref/prop-element-classlist.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("classList"),e("OutboundLink")],1),v._v("，它能满足笔者所说的需求。")]),v._v(" "),e("h5",{attrs:{id:"避免节点属性值放在循环里当成循环变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#避免节点属性值放在循环里当成循环变量"}},[v._v("#")]),v._v(" 避免节点属性值放在循环里当成循环变量")]),v._v(" "),e("p",[e("code",[v._v('for (let i = 0; i < 10000; i++) { const top = document.getElementById("css").style.top; console.log(top); }')])]),v._v(" "),e("p",[v._v("呵呵，每次循环操作DOM都会发生回流，应该在循环外使用变量保存一些不会变化的DOM映射值。")]),v._v(" "),e("p",[e("code",[v._v('const top = document.getElementById("css").style.top; for (let i = 0; i < 10000; i++) { console.log(top); }')])]),v._v(" "),e("h5",{attrs:{id:"使用requestanimationframe作为动画速度帧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用requestanimationframe作为动画速度帧"}},[v._v("#")]),v._v(" 使用requestAnimationFrame作为动画速度帧")]),v._v(" "),e("p",[v._v("动画速度越快，回流次数越多，上述有提到浏览器刷新频率为"),e("code",[v._v("60Hz")]),v._v("，即每"),e("code",[v._v("16.6ms")]),v._v("更新一次，而"),e("code",[v._v("requestAnimationFrame()")]),v._v("正是以"),e("code",[v._v("16.6ms")]),v._v("的速度更新一次。所以可用"),e("code",[v._v("requestAnimationFrame()")]),v._v("代替"),e("code",[v._v("setInterval()")]),v._v("。")]),v._v(" "),e("h3",{attrs:{id:"属性排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性排序"}},[v._v("#")]),v._v(" 属性排序")]),v._v(" "),e("p",[v._v("在进入属性排序这个话题前，先来看看以下两段CSS代码。")]),v._v(" "),e("p",[e("code",[v._v(".elem { width: 200px; background-color: #f66; align-items: center; color: #fff; height: 200px; justify-content: center; font-size: 20px; display: flex; }")])]),v._v(" "),e("p",[e("code",[v._v(".elem { display: flex; justify-content: center; align-items: center; width: 200px; height: 200px; background-color: #f66; font-size: 20px; color: #fff; }")])]),v._v(" "),e("p",[v._v("若不特别指明，可能各位同学觉得这两段代码无异样，顶多就是属性顺序不同。但是仔细观察两段代码，就会发现第一段代码好像无依据地随便排列，而第二段代码好像按照某些规范顺序排列。")]),v._v(" "),e("p",[e("strong",[v._v("属性排序")]),v._v("指按照预设规范排列CSS属性。提供一个预设的约定规范，依据该规范以一定的顺序排列所有属性。")]),v._v(" "),e("p",[v._v("曾经笔者也是随机排列属性顺序，想到什么写什么，反正能实现就行。但是反过来看，随意真的好吗，每次维护代码都需反复确认某个属性是否已经存在，混乱的属性排序让笔者有时无法在脑海里构思出更好的排版。所以笔者下意识去了解和认识属性排序，利用一些约定规范合理管理我的CSS代码。")]),v._v(" "),e("p",[v._v("曾经有一个著名的CSS网站"),e("a",{attrs:{href:"https://css-tricks.com",target:"_blank",rel:"noopener noreferrer"}},[v._v("CSSTricks"),e("OutboundLink")],1),v._v("做了一份属性排序的"),e("a",{attrs:{href:"https://css-tricks.com/poll-results-how-do-you-order-your-css-properties",target:"_blank",rel:"noopener noreferrer"}},[v._v("调查问卷"),e("OutboundLink")],1),v._v("，调查结果如下。")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/94af68e4f7d34b70a0e1aca114158ede~tplv-k3u1fbpfcp-zoom-1.image",alt:"调查问卷"}})]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("A")]),v._v("：随意排序占"),e("code",[v._v("39%")])]),v._v(" "),e("li",[e("strong",[v._v("B")]),v._v("：按照类型排序占"),e("code",[v._v("45%")])]),v._v(" "),e("li",[e("strong",[v._v("C")]),v._v("：按照单行代码长度排序占"),e("code",[v._v("2%")])]),v._v(" "),e("li",[e("strong",[v._v("D")]),v._v("：按照属性字母排序占"),e("code",[v._v("14%")])])]),v._v(" "),e("p",[v._v("发现"),e("strong",[v._v("B选项")]),v._v("占比最多，很可惜，这份调查问卷都是针对国外前端开发者。所以笔者在自己的微信群里发起了这个调查问卷，结果还是"),e("strong",[v._v("B选项")]),v._v("占比最多。")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ad59e0524a44f2bafa653804783bf8c~tplv-k3u1fbpfcp-zoom-1.image",alt:"调查问卷"}})]),v._v(" "),e("p",[v._v("由于人数过少，怕可信度不高，所以笔者又去Github上随机寻找200个国内项目，通过一个周末的时间细心对比了所有"),e("code",[v._v("css文件")]),v._v("，统计出以下结果。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("A")]),v._v("：随意排序占"),e("code",[v._v("38%")])]),v._v(" "),e("li",[e("strong",[v._v("B")]),v._v("：按照类型排序占"),e("code",[v._v("58%")])]),v._v(" "),e("li",[e("strong",[v._v("C")]),v._v("：按照长度排序占"),e("code",[v._v("1%")])]),v._v(" "),e("li",[e("strong",[v._v("D")]),v._v("：按照字母排序占"),e("code",[v._v("3%")])])]),v._v(" "),e("p",[v._v("结果还是"),e("strong",[v._v("B选项")]),v._v("占比最多，不过这也说明不了什么问题。毕竟CSS编码的灵活性比JS编码更高，随意也是一件不错的事情。可能就是在维护代码时比较眼花缭乱，问了一位编码很随意的同事(每次开发项目时都把预设的"),e("code",[v._v("Lint")]),v._v("关掉，搞到每次"),e("code",[v._v("Commit")]),v._v("代码都手忙脚乱)，他如实说出了随便排列属性顺序经常会重复编写某些属性，导致属性冗余。")]),v._v(" "),e("p",[v._v("其实属性排序有很多优点，笔者着重罗列一些。")]),v._v(" "),e("ul",[e("li",[v._v("突出CSS艺术之美")]),v._v(" "),e("li",[v._v("防止属性重复编写")]),v._v(" "),e("li",[v._v("可快速定位到问题代码")]),v._v(" "),e("li",[v._v("可快速在脑海里构思出节点")]),v._v(" "),e("li",[v._v("可锻炼无视图架构页面能力")]),v._v(" "),e("li",[v._v("提高代码的可读性和可维护性")])]),v._v(" "),e("p",[v._v("大部分前端开发者都会给属性做排序，可见业内大部分人对属性排序持有肯定的态度，只是在排序方式上会有一定的分歧。"),e("code",[v._v("按照长度排序")]),v._v("和"),e("code",[v._v("按照字母排序")]),v._v("是比较简单易用的排序方式，但是忽略了属性间的关联性。而"),e("code",[v._v("按照类型排序")]),v._v("又会分为很多种，主要还是围绕着"),e("code",[v._v("盒模型")]),v._v("。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("按照类型排序")])]),v._v(" "),e("li",[e("strong",[v._v("按照长度排序")])]),v._v(" "),e("li",[e("strong",[v._v("按照字母排序")])])]),v._v(" "),e("p",[v._v("属性排序并不会影响样式的功能和性能，只是让代码看起来更简洁和规范。")]),v._v(" "),e("h5",{attrs:{id:"想法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#想法"}},[v._v("#")]),v._v(" 想法")]),v._v(" "),e("p",[v._v("笔者有一个想法，就是按照"),e("code",[v._v("回流重绘")]),v._v("的原理，涉及到"),e("code",[v._v("几何属性")]),v._v("和"),e("code",[v._v("外观属性")]),v._v("，结合"),e("code",[v._v("盒模型规范")]),v._v("和"),e("code",[v._v("从外到里")]),v._v("进行属性排序。综合太极图的哲学思想，将一些回流的几何属性排在最前面，毕竟这些属性决定了节点的布局、尺寸等和本质有关的状态，有了这些状态才能派生出节点更多的外观属性，逐一构成完整的节点。")]),v._v(" "),e("p",[v._v("好比一座摩天大楼的构筑过程，从打桩("),e("code",[v._v("存在")]),v._v(")、搭设("),e("code",[v._v("布局")]),v._v(")、主体("),e("code",[v._v("尺寸")]),v._v(")、砌体("),e("code",[v._v("界面")]),v._v(")、装修("),e("code",[v._v("文字")]),v._v(")、装潢("),e("code",[v._v("交互")]),v._v(")到验收("),e("code",[v._v("生成一个完整的节点")]),v._v(")，每一步都基于前一步作为基础才能继续下去。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("太极图哲学思想：太极生两仪，两仪生四象，四象生八卦，从无极生太极开始，一直通过物质派生而构筑一个完整的立体结构，这一过程又显然是一个立体并包含位次顺序的四维关系\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("h5",{attrs:{id:"理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#理解"}},[v._v("#")]),v._v(" 理解")]),v._v(" "),e("p",[v._v("假设编写一个节点样式，先声明"),e("code",[v._v("display")]),v._v("还是"),e("code",[v._v("width")]),v._v("呢？"),e("code",[v._v("display")]),v._v("决定了该节点的开始状态，是"),e("code",[v._v("none")]),v._v("，还是"),e("code",[v._v("block")]),v._v("，还是"),e("code",[v._v("inline")]),v._v("，还是其他。若先声明"),e("code",[v._v("width")]),v._v("，万一后续声明"),e("code",[v._v("display:inline")]),v._v("表示该节点是行内元素，行内元素无法显式声明宽高，那么"),e("code",[v._v("width")]),v._v("不是白白浪费了？所以推荐声明"),e("code",[v._v("display")]),v._v("在首位，毕竟它声明了该节点最开始的状态，"),e("code",[v._v("有还是无")]),v._v("。")]),v._v(" "),e("h5",{attrs:{id:"排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#排序"}},[v._v("#")]),v._v(" 排序")]),v._v(" "),e("p",[v._v("根据上述想法和理解，笔者将属性排序按照"),e("code",[v._v("布局 → 尺寸 → 界面 → 文字 → 交互")]),v._v("的方式顺序定义。把交互属性放到后面是因为"),e("code",[v._v("transform")]),v._v("和"),e("code",[v._v("animation")]),v._v("会让节点重新生成新图层，上述有提到新图层不会对其他图层造成影响。")]),v._v(" "),e("blockquote",[e("p",[v._v("布局属性")])]),v._v(" "),e("ul",[e("li",[v._v("显示："),e("code",[v._v("display")]),v._v(" "),e("code",[v._v("visibility")])]),v._v(" "),e("li",[v._v("溢出："),e("code",[v._v("overflow")]),v._v(" "),e("code",[v._v("overflow-x")]),v._v(" "),e("code",[v._v("overflow-y")])]),v._v(" "),e("li",[v._v("浮动："),e("code",[v._v("float")]),v._v(" "),e("code",[v._v("clear")])]),v._v(" "),e("li",[v._v("定位："),e("code",[v._v("position")]),v._v(" "),e("code",[v._v("left")]),v._v(" "),e("code",[v._v("right")]),v._v(" "),e("code",[v._v("top")]),v._v(" "),e("code",[v._v("bottom")]),v._v(" "),e("code",[v._v("z-index")])]),v._v(" "),e("li",[v._v("列表："),e("code",[v._v("list-style")]),v._v(" "),e("code",[v._v("list-style-type")]),v._v(" "),e("code",[v._v("list-style-position")]),v._v(" "),e("code",[v._v("list-style-image")])]),v._v(" "),e("li",[v._v("表格："),e("code",[v._v("table-layout")]),v._v(" "),e("code",[v._v("border-collapse")]),v._v(" "),e("code",[v._v("border-spacing")]),v._v(" "),e("code",[v._v("caption-side")]),v._v(" "),e("code",[v._v("empty-cells")])]),v._v(" "),e("li",[v._v("弹性："),e("code",[v._v("flex-flow")]),v._v(" "),e("code",[v._v("flex-direction")]),v._v(" "),e("code",[v._v("flex-wrap")]),v._v(" "),e("code",[v._v("justify-content")]),v._v(" "),e("code",[v._v("align-content")]),v._v(" "),e("code",[v._v("align-items")]),v._v(" "),e("code",[v._v("align-self")]),v._v(" "),e("code",[v._v("flex")]),v._v(" "),e("code",[v._v("flex-grow")]),v._v(" "),e("code",[v._v("flex-shrink")]),v._v(" "),e("code",[v._v("flex-basis")]),v._v(" "),e("code",[v._v("order")])]),v._v(" "),e("li",[v._v("多列："),e("code",[v._v("columns")]),v._v(" "),e("code",[v._v("column-width")]),v._v(" "),e("code",[v._v("column-count")]),v._v(" "),e("code",[v._v("column-gap")]),v._v(" "),e("code",[v._v("column-rule")]),v._v(" "),e("code",[v._v("column-rule-width")]),v._v(" "),e("code",[v._v("column-rule-style")]),v._v(" "),e("code",[v._v("column-rule-color")]),v._v(" "),e("code",[v._v("column-span")]),v._v(" "),e("code",[v._v("column-fill")]),v._v(" "),e("code",[v._v("column-break-before")]),v._v(" "),e("code",[v._v("column-break-after")]),v._v(" "),e("code",[v._v("column-break-inside")])]),v._v(" "),e("li",[v._v("格栅："),e("code",[v._v("grid-columns")]),v._v(" "),e("code",[v._v("grid-rows")])])]),v._v(" "),e("blockquote",[e("p",[v._v("尺寸属性")])]),v._v(" "),e("ul",[e("li",[v._v("模型："),e("code",[v._v("box-sizing")])]),v._v(" "),e("li",[v._v("边距："),e("code",[v._v("margin")]),v._v(" "),e("code",[v._v("margin-left")]),v._v(" "),e("code",[v._v("margin-right")]),v._v(" "),e("code",[v._v("margin-top")]),v._v(" "),e("code",[v._v("margin-bottom")])]),v._v(" "),e("li",[v._v("填充："),e("code",[v._v("padding")]),v._v(" "),e("code",[v._v("padding-left")]),v._v(" "),e("code",[v._v("padding-right")]),v._v(" "),e("code",[v._v("padding-top")]),v._v(" "),e("code",[v._v("padding-bottom")])]),v._v(" "),e("li",[v._v("边框："),e("code",[v._v("border")]),v._v(" "),e("code",[v._v("border-width")]),v._v(" "),e("code",[v._v("border-style")]),v._v(" "),e("code",[v._v("border-color")]),v._v(" "),e("code",[v._v("border-colors")]),v._v(" "),e("code",[v._v("border-[direction]-<param>")])]),v._v(" "),e("li",[v._v("圆角："),e("code",[v._v("border-radius")]),v._v(" "),e("code",[v._v("border-top-left-radius")]),v._v(" "),e("code",[v._v("border-top-right-radius")]),v._v(" "),e("code",[v._v("border-bottom-left-radius")]),v._v(" "),e("code",[v._v("border-bottom-right-radius")])]),v._v(" "),e("li",[v._v("框图："),e("code",[v._v("border-image")]),v._v(" "),e("code",[v._v("border-image-source")]),v._v(" "),e("code",[v._v("border-image-slice")]),v._v(" "),e("code",[v._v("border-image-width")]),v._v(" "),e("code",[v._v("border-image-outset")]),v._v(" "),e("code",[v._v("border-image-repeat")])]),v._v(" "),e("li",[v._v("大小："),e("code",[v._v("width")]),v._v(" "),e("code",[v._v("min-width")]),v._v(" "),e("code",[v._v("max-width")]),v._v(" "),e("code",[v._v("height")]),v._v(" "),e("code",[v._v("min-height")]),v._v(" "),e("code",[v._v("max-height")])])]),v._v(" "),e("blockquote",[e("p",[v._v("界面属性")])]),v._v(" "),e("ul",[e("li",[v._v("外观："),e("code",[v._v("appearance")])]),v._v(" "),e("li",[v._v("轮廓："),e("code",[v._v("outline")]),v._v(" "),e("code",[v._v("outline-width")]),v._v(" "),e("code",[v._v("outline-style")]),v._v(" "),e("code",[v._v("outline-color")]),v._v(" "),e("code",[v._v("outline-offset")]),v._v(" "),e("code",[v._v("outline-radius")]),v._v(" "),e("code",[v._v("outline-radius-[direction]")])]),v._v(" "),e("li",[v._v("背景："),e("code",[v._v("background")]),v._v(" "),e("code",[v._v("background-color")]),v._v(" "),e("code",[v._v("background-image")]),v._v(" "),e("code",[v._v("background-repeat")]),v._v(" "),e("code",[v._v("background-repeat-x")]),v._v(" "),e("code",[v._v("background-repeat-y")]),v._v(" "),e("code",[v._v("background-position")]),v._v(" "),e("code",[v._v("background-position-x")]),v._v(" "),e("code",[v._v("background-position-y")]),v._v(" "),e("code",[v._v("background-size")]),v._v(" "),e("code",[v._v("background-origin")]),v._v(" "),e("code",[v._v("background-clip")]),v._v(" "),e("code",[v._v("background-attachment")]),v._v(" "),e("code",[v._v("bakground-composite")])]),v._v(" "),e("li",[v._v("遮罩："),e("code",[v._v("mask")]),v._v(" "),e("code",[v._v("mask-mode")]),v._v(" "),e("code",[v._v("mask-image")]),v._v(" "),e("code",[v._v("mask-repeat")]),v._v(" "),e("code",[v._v("mask-repeat-x")]),v._v(" "),e("code",[v._v("mask-repeat-y")]),v._v(" "),e("code",[v._v("mask-position")]),v._v(" "),e("code",[v._v("mask-position-x")]),v._v(" "),e("code",[v._v("mask-position-y")]),v._v(" "),e("code",[v._v("mask-size")]),v._v(" "),e("code",[v._v("mask-origin")]),v._v(" "),e("code",[v._v("mask-clip")]),v._v(" "),e("code",[v._v("mask-attachment")]),v._v(" "),e("code",[v._v("mask-composite")]),v._v(" "),e("code",[v._v("mask-box-image")]),v._v(" "),e("code",[v._v("mask-box-image-source")]),v._v(" "),e("code",[v._v("mask-box-image-width")]),v._v(" "),e("code",[v._v("mask-box-image-outset")]),v._v(" "),e("code",[v._v("mask-box-image-repeat")]),v._v(" "),e("code",[v._v("mask-box-image-slice")])]),v._v(" "),e("li",[v._v("滤镜："),e("code",[v._v("box-shadow")]),v._v(" "),e("code",[v._v("box-reflect")]),v._v(" "),e("code",[v._v("filter")]),v._v(" "),e("code",[v._v("mix-blend-mode")]),v._v(" "),e("code",[v._v("opacity")]),v._v(",")]),v._v(" "),e("li",[v._v("裁剪："),e("code",[v._v("object-fit")]),v._v(" "),e("code",[v._v("clip")])]),v._v(" "),e("li",[v._v("事件："),e("code",[v._v("resize")]),v._v(" "),e("code",[v._v("zoom")]),v._v(" "),e("code",[v._v("cursor")]),v._v(" "),e("code",[v._v("pointer-events")]),v._v(" "),e("code",[v._v("touch-callout")]),v._v(" "),e("code",[v._v("user-modify")]),v._v(" "),e("code",[v._v("user-focus")]),v._v(" "),e("code",[v._v("user-input")]),v._v(" "),e("code",[v._v("user-select")]),v._v(" "),e("code",[v._v("user-drag")])])]),v._v(" "),e("blockquote",[e("p",[v._v("文字属性")])]),v._v(" "),e("ul",[e("li",[v._v("模式："),e("code",[v._v("line-height")]),v._v(" "),e("code",[v._v("line-clamp")]),v._v(" "),e("code",[v._v("vertical-align")]),v._v(" "),e("code",[v._v("direction")]),v._v(" "),e("code",[v._v("unicode-bidi")]),v._v(" "),e("code",[v._v("writing-mode")]),v._v(" "),e("code",[v._v("ime-mode")])]),v._v(" "),e("li",[v._v("文本："),e("code",[v._v("text-overflow")]),v._v(" "),e("code",[v._v("text-decoration")]),v._v(" "),e("code",[v._v("text-decoration-line")]),v._v(" "),e("code",[v._v("text-decoration-style")]),v._v(" "),e("code",[v._v("text-decoration-color")]),v._v(" "),e("code",[v._v("text-decoration-skip")]),v._v(" "),e("code",[v._v("text-underline-position")]),v._v(" "),e("code",[v._v("text-align")]),v._v(" "),e("code",[v._v("text-align-last")]),v._v(" "),e("code",[v._v("text-justify")]),v._v(" "),e("code",[v._v("text-indent")]),v._v(" "),e("code",[v._v("text-stroke")]),v._v(" "),e("code",[v._v("text-stroke-width")]),v._v(" "),e("code",[v._v("text-stroke-color")]),v._v(" "),e("code",[v._v("text-shadow")]),v._v(" "),e("code",[v._v("text-transform")]),v._v(" "),e("code",[v._v("text-size-adjust")])]),v._v(" "),e("li",[v._v("字体："),e("code",[v._v("src")]),v._v(" "),e("code",[v._v("font")]),v._v(" "),e("code",[v._v("font-family")]),v._v(" "),e("code",[v._v("font-style")]),v._v(" "),e("code",[v._v("font-stretch")]),v._v(" "),e("code",[v._v("font-weight")]),v._v(" "),e("code",[v._v("font-variant")]),v._v(" "),e("code",[v._v("font-size")]),v._v(" "),e("code",[v._v("font-size-adjust")]),v._v(" "),e("code",[v._v("color")])]),v._v(" "),e("li",[v._v("内容："),e("code",[v._v("overflow-wrap")]),v._v(" "),e("code",[v._v("word-wrap")]),v._v(" "),e("code",[v._v("word-break")]),v._v(" "),e("code",[v._v("word-spacing")]),v._v(" "),e("code",[v._v("letter-spacing")]),v._v(" "),e("code",[v._v("white-space")]),v._v(" "),e("code",[v._v("caret-color")]),v._v(" "),e("code",[v._v("tab-size")]),v._v(" "),e("code",[v._v("content")]),v._v(" "),e("code",[v._v("counter-increment")]),v._v(" "),e("code",[v._v("counter-reset")]),v._v(" "),e("code",[v._v("quotes")]),v._v(" "),e("code",[v._v("page")]),v._v(" "),e("code",[v._v("page-break-before")]),v._v(" "),e("code",[v._v("page-break-after")]),v._v(" "),e("code",[v._v("page-break-inside")])])]),v._v(" "),e("blockquote",[e("p",[v._v("交互属性")])]),v._v(" "),e("ul",[e("li",[v._v("模式："),e("code",[v._v("will-change")]),v._v(" "),e("code",[v._v("perspective")]),v._v(" "),e("code",[v._v("perspective-origin")]),v._v(" "),e("code",[v._v("backface-visibility")])]),v._v(" "),e("li",[v._v("变换："),e("code",[v._v("transform")]),v._v(" "),e("code",[v._v("transform-origin")]),v._v(" "),e("code",[v._v("transform-style")])]),v._v(" "),e("li",[v._v("过渡："),e("code",[v._v("transition")]),v._v(" "),e("code",[v._v("transition-property")]),v._v(" "),e("code",[v._v("transition-duration")]),v._v(" "),e("code",[v._v("transition-timing-function")]),v._v(" "),e("code",[v._v("transition-delay")])]),v._v(" "),e("li",[v._v("动画："),e("code",[v._v("animation")]),v._v(" "),e("code",[v._v("animation-name")]),v._v(" "),e("code",[v._v("animation-duration")]),v._v(" "),e("code",[v._v("animation-timing-function")]),v._v(" "),e("code",[v._v("animation-delay")]),v._v(" "),e("code",[v._v("animation-iteration-count")]),v._v(" "),e("code",[v._v("animation-direction")]),v._v(" "),e("code",[v._v("animation-play-state")]),v._v(" "),e("code",[v._v("animation-fill-mode")])])]),v._v(" "),e("p",[v._v("在此已经整合了95%的属性，可满足95%的属性排序。其他未列入的属性，可根据自身使用习惯添加。当然笔者的属性分类只提供参考。")]),v._v(" "),e("h5",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[v._v("#")]),v._v(" 配置")]),v._v(" "),e("p",[v._v("纯粹靠在编码过程中按照约定规范排列属性肯定是有难度的，也不方便频繁修改代码。每次编码时都记住这些属性排序估计也挺费脑力的，这么多属性，肯定使用工具自动化处理啊！推荐一个自动排列CSS属性的网站"),e("a",{attrs:{href:"https://csscomb.com",target:"_blank",rel:"noopener noreferrer"}},[v._v("Csscomb"),e("OutboundLink")],1),v._v("，在"),e("code",[v._v("学前准备")]),v._v("那章已经安装了"),e("code",[v._v("VSCode")]),v._v("的"),e("code",[v._v("Csscomb")]),v._v("，接下来就配置"),e("code",[v._v("一键排序")]),v._v("。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("该插件貌似只有存档，主软件包已经无维护者了，后续估计也不会再更新\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("p",[v._v("官网内容已经不复存在，以前是一步一步显示配置再选择适合自己的配置，最终生成一个"),e("code",[v._v("json文件")]),v._v("。配置详情请戳"),e("a",{attrs:{href:"https://github.com/csscomb/csscomb.js/blob/dev/doc/options.md",target:"_blank",rel:"noopener noreferrer"}},[v._v("这里"),e("OutboundLink")],1),v._v("，以下的全局配置也是依据文档处理的，当然你也可对工作区设置。")]),v._v(" "),e("p",[v._v("打开"),e("code",[v._v("VSCode")]),v._v("，"),e("code",[v._v("Window系统")]),v._v("选择"),e("code",[v._v("ctrl+, → 用户 → 右上角第二个图标(打开设置)")]),v._v("，"),e("code",[v._v("Mac系统")]),v._v("选择"),e("code",[v._v("cmd+, → 用户 → 右上角第二个图标(打开设置)")]),v._v("，在"),e("code",[v._v("json文件")]),v._v("里插入以下配置。")]),v._v(" "),e("p",[e("code",[v._v('{ "csscomb.formatOnSave": true, // 保存代码时自动格式化 "csscomb.preset": { "always-semicolon": true, // 分号结尾 "block-indent": "\\t", // 换行格式 "color-case": "lower", // 颜色格式 "color-shorthand": true, // 颜色缩写 "element-case": "lower", // 元素格式 // "eof-newline": false, // 结尾空行 "leading-zero": false, // 保留前导零位 // "lines-between-rulesets": 0, // 规则间隔行数 "quotes": "double", // 引号格式 "remove-empty-rulesets": true, // 剔除空规则 "space-between-declarations": "\\n", // 属性换行 "space-before-closing-brace": "\\n", // 后花括号前插入 "space-after-colon": " ", // 冒号后插入 "space-before-colon": "", // 冒号前插入 "space-after-combinator": " ", // 大于号后插入 "space-before-combinator": " ", // 大于号前插入 "space-after-opening-brace": "\\n", // 前花括号后插入 "space-before-opening-brace": " ", // 前花括号前插入 "space-after-selector-delimiter": "\\n", // 逗号后插入 "space-before-selector-delimiter": "", // 逗号前插入 "strip-spaces": true, // 剔除空格 "tab-size": true, // 缩进大小 "unitless-zero": true, // 剔除零单位 "vendor-prefix-align": false, // 前缀缩进 "sort-order": [] // 属性排序 } }')])]),v._v(" "),e("p",[e("code",[v._v("sort-order")]),v._v("是一个数组，由于属性太多就不一一插入了，按照上述分类好的排序逐个插入即可，"),e("code",[v._v('"sort-order":["display", "visibility", ...]')]),v._v("。配置详情请戳"),e("a",{attrs:{href:"https://github.com/JowayYoung/idea-css/blob/master/vscode/settings.json",target:"_blank",rel:"noopener noreferrer"}},[v._v("这里"),e("OutboundLink")],1),v._v("。")]),v._v(" "),e("p",[v._v("配置完成后，若觉得每次保存时格式化CSS代码会影响编辑器性能，可为"),e("code",[v._v("Csscomb")]),v._v("配置快捷键，在有需时再格式化CSS代码。"),e("code",[v._v("Window系统")]),v._v("选择"),e("code",[v._v("ctrl+K+S → 用户 → 右上角第一个图标(打开键盘快捷方式)")]),v._v("，"),e("code",[v._v("Mac系统")]),v._v("选择"),e("code",[v._v("cmd+K+S → 用户 → 右上角第一个图标(打开键盘快捷方式)")]),v._v("，在"),e("code",[v._v("json文件")]),v._v("里插入以下配置。")]),v._v(" "),e("p",[e("code",[v._v('[{ "key": "ctrl+alt+c", // "cmd+alt+c" "command": "csscomb.execute" }]')])]),v._v(" "),e("p",[v._v("全选代码或选择局部代码，执行"),e("code",[v._v("ctrl/cmd+alt+c")]),v._v("，自动格式化代码且自动排列属性，一个字，爽🤔！配置详情请戳"),e("a",{attrs:{href:"https://github.com/JowayYoung/idea-css/blob/master/vscode/keybindings.json",target:"_blank",rel:"noopener noreferrer"}},[v._v("这里"),e("OutboundLink")],1),v._v("。")])])}),[],!1,null,null,null);_.default=t.exports}}]);