(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{688:function(e,v,_){"use strict";_.r(v);var o=_(59),t=Object(o.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h3",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),_("p",[e._v("最近查看了几位同事的代码，发现很多CSS编写习惯都是清一色的类而无相应的选择器，层层嵌套的标签都包含至少一个类。有些同学会问，很多文章都说"),_("code",[e._v("选择器")]),e._v("有性能问题，为何还需使用"),_("code",[e._v("选择器")]),e._v("呢？")]),e._v(" "),_("p",[e._v("是的，"),_("code",[e._v("选择器")]),e._v("和"),_("code",[e._v("类")]),e._v("对比起来性能上确实没后者那么好，但是如今浏览器对于CSS的解析速度已得到大大的提升，完全可忽略"),_("code",[e._v("选择器")]),e._v("那丁点的性能问题。有兴趣的同学可自行百度搜索"),_("code",[e._v("CSS选择器性能")]),e._v("的相关问题学习。多一个技巧多一份保障！")]),e._v(" "),_("p",[e._v("本章不细说"),_("code",[e._v("选择器")]),e._v("的性能问题，而是细说怎样用好"),_("code",[e._v("选择器")]),e._v("。先来对"),_("code",[e._v("选择器")]),e._v("做一个功能性的分类。当然熟悉全部CSS选择器是玩转CSS的"),_("code",[e._v("最最最最最基本功")]),e._v("。")]),e._v(" "),_("h3",{attrs:{id:"分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[e._v("#")]),e._v(" 分类")]),e._v(" "),_("p",[e._v("在讲解"),_("code",[e._v("选择器")]),e._v("的奇妙用处前，还是先把选择器分类记忆吧。没错，笔者就是喜欢总结。由于"),_("code",[e._v("选择器")]),e._v("的标准概念上无作出明确的分类，以下的分类是为了方便记忆而整理的。")]),e._v(" "),_("blockquote",[_("p",[e._v("基础选择器")])]),e._v(" "),_("p",[e._v("选择器")]),e._v(" "),_("p",[e._v("别名")]),e._v(" "),_("p",[e._v("说明")]),e._v(" "),_("p",[e._v("版本")]),e._v(" "),_("p",[_("code",[e._v("tag")])]),e._v(" "),_("p",[e._v("标签选择器")]),e._v(" "),_("p",[e._v("指定类型的"),_("code",[e._v("标签")])]),e._v(" "),_("p",[e._v("1")]),e._v(" "),_("p",[_("code",[e._v("#id")])]),e._v(" "),_("p",[e._v("ID选择器")]),e._v(" "),_("p",[e._v("指定身份的"),_("code",[e._v("标签")])]),e._v(" "),_("p",[e._v("1")]),e._v(" "),_("p",[_("code",[e._v(".class")])]),e._v(" "),_("p",[e._v("类选择器")]),e._v(" "),_("p",[e._v("指定类名的"),_("code",[e._v("标签")])]),e._v(" "),_("p",[e._v("1")]),e._v(" "),_("p",[_("code",[e._v("*")])]),e._v(" "),_("p",[e._v("通配选择器")]),e._v(" "),_("p",[e._v("所有类型的"),_("code",[e._v("标签")])]),e._v(" "),_("p",[e._v("2")]),e._v(" "),_("blockquote",[_("p",[e._v("层次选择器")])]),e._v(" "),_("p",[e._v("选择器")]),e._v(" "),_("p",[e._v("别名")]),e._v(" "),_("p",[e._v("说明")]),e._v(" "),_("p",[e._v("版本")]),e._v(" "),_("p",[_("code",[e._v("elemP elemC")])]),e._v(" "),_("p",[_("code",[e._v("后代选择器")])]),e._v(" "),_("p",[e._v("元素的"),_("code",[e._v("后代元素")])]),e._v(" "),_("p",[e._v("1")]),e._v(" "),_("p",[_("code",[e._v("elemP>elemC")])]),e._v(" "),_("p",[_("code",[e._v("子代选择器")])]),e._v(" "),_("p",[e._v("元素的"),_("code",[e._v("子代元素")])]),e._v(" "),_("p",[e._v("2")]),e._v(" "),_("p",[_("code",[e._v("elem1+elem2")])]),e._v(" "),_("p",[_("code",[e._v("相邻同胞选择器")])]),e._v(" "),_("p",[e._v("元素相邻的"),_("code",[e._v("同胞元素")])]),e._v(" "),_("p",[e._v("2")]),e._v(" "),_("p",[_("code",[e._v("elem1~elem2")])]),e._v(" "),_("p",[_("code",[e._v("通用同胞选择器")])]),e._v(" "),_("p",[e._v("元素后面的"),_("code",[e._v("同胞元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("blockquote",[_("p",[e._v("集合选择器")])]),e._v(" "),_("p",[e._v("选择器")]),e._v(" "),_("p",[e._v("别名")]),e._v(" "),_("p",[e._v("说明")]),e._v(" "),_("p",[e._v("版本")]),e._v(" "),_("p",[_("code",[e._v("elem1,elem2")])]),e._v(" "),_("p",[_("code",[e._v("并集选择器")])]),e._v(" "),_("p",[e._v("多个指定的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("1")]),e._v(" "),_("p",[_("code",[e._v("elem.class")])]),e._v(" "),_("p",[_("code",[e._v("交集选择器")])]),e._v(" "),_("p",[e._v("指定类名的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("1")]),e._v(" "),_("blockquote",[_("p",[e._v("条件选择器")])]),e._v(" "),_("p",[e._v("选择器")]),e._v(" "),_("p",[e._v("说明")]),e._v(" "),_("p",[e._v("版本")]),e._v(" "),_("p",[_("code",[e._v(":lang")])]),e._v(" "),_("p",[e._v("指定标记语言的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("2")]),e._v(" "),_("p",[_("code",[e._v(":dir()")])]),e._v(" "),_("p",[e._v("指定编写方向的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("p",[_("code",[e._v(":has")])]),e._v(" "),_("p",[e._v("包含指定元素的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("p",[_("code",[e._v(":is")])]),e._v(" "),_("p",[e._v("指定条件的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("p",[_("code",[e._v(":not")])]),e._v(" "),_("p",[e._v("非指定条件的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("p",[_("code",[e._v(":where")])]),e._v(" "),_("p",[e._v("指定条件的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("p",[_("code",[e._v(":scope")])]),e._v(" "),_("p",[e._v("指定"),_("code",[e._v("元素")]),e._v("作为参考点")]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("p",[_("code",[e._v(":any-link")])]),e._v(" "),_("p",[e._v("所有包含"),_("code",[e._v("href")]),e._v("的"),_("code",[e._v("链接元素")])]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("p",[_("code",[e._v(":local-link")])]),e._v(" "),_("p",[e._v("所有包含"),_("code",[e._v("href")]),e._v("且属于绝对地址的"),_("code",[e._v("链接元素")])]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("blockquote",[_("p",[e._v("行为选择器")])]),e._v(" "),_("p",[e._v("选择器")]),e._v(" "),_("p",[e._v("说明")]),e._v(" "),_("p",[e._v("版本")]),e._v(" "),_("p",[_("code",[e._v(":active")])]),e._v(" "),_("p",[e._v("鼠标激活的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("1")]),e._v(" "),_("p",[_("code",[e._v(":hover")])]),e._v(" "),_("p",[e._v("鼠标悬浮的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("1")]),e._v(" "),_("p",[_("code",[e._v("::selection")])]),e._v(" "),_("p",[e._v("鼠标选中的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("blockquote",[_("p",[e._v("状态选择器")])]),e._v(" "),_("p",[e._v("选择器")]),e._v(" "),_("p",[e._v("说明")]),e._v(" "),_("p",[e._v("版本")]),e._v(" "),_("p",[_("code",[e._v(":target")])]),e._v(" "),_("p",[e._v("当前锚点的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":link")])]),e._v(" "),_("p",[e._v("未访问的"),_("code",[e._v("链接元素")])]),e._v(" "),_("p",[e._v("1")]),e._v(" "),_("p",[_("code",[e._v(":visited")])]),e._v(" "),_("p",[e._v("已访问的"),_("code",[e._v("链接元素")])]),e._v(" "),_("p",[e._v("1")]),e._v(" "),_("p",[_("code",[e._v(":focus")])]),e._v(" "),_("p",[e._v("输入聚焦的"),_("code",[e._v("表单元素")])]),e._v(" "),_("p",[e._v("2")]),e._v(" "),_("p",[_("code",[e._v(":required")])]),e._v(" "),_("p",[e._v("输入必填的"),_("code",[e._v("表单元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":valid")])]),e._v(" "),_("p",[e._v("输入合法的"),_("code",[e._v("表单元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":invalid")])]),e._v(" "),_("p",[e._v("输入非法的"),_("code",[e._v("表单元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":in-range")])]),e._v(" "),_("p",[e._v("输入范围以内的"),_("code",[e._v("表单元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":out-of-range")])]),e._v(" "),_("p",[e._v("输入范围以外的"),_("code",[e._v("表单元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":checked")])]),e._v(" "),_("p",[e._v("选项选中的"),_("code",[e._v("表单元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":optional")])]),e._v(" "),_("p",[e._v("选项可选的"),_("code",[e._v("表单元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":enabled")])]),e._v(" "),_("p",[e._v("事件启用的"),_("code",[e._v("表单元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":disabled")])]),e._v(" "),_("p",[e._v("事件禁用的"),_("code",[e._v("表单元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":read-only")])]),e._v(" "),_("p",[e._v("只读的"),_("code",[e._v("表单元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":read-write")])]),e._v(" "),_("p",[e._v("可读可写的"),_("code",[e._v("表单元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":target-within")])]),e._v(" "),_("p",[e._v("内部锚点元素处于激活状态的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("p",[_("code",[e._v(":focus-within")])]),e._v(" "),_("p",[e._v("内部表单元素处于聚焦状态的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("p",[_("code",[e._v(":focus-visible")])]),e._v(" "),_("p",[e._v("输入聚焦的"),_("code",[e._v("表单元素")])]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("p",[_("code",[e._v(":blank")])]),e._v(" "),_("p",[e._v("输入为空的"),_("code",[e._v("表单元素")])]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("p",[_("code",[e._v(":user-invalid")])]),e._v(" "),_("p",[e._v("输入合法的"),_("code",[e._v("表单元素")])]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("p",[_("code",[e._v(":indeterminate")])]),e._v(" "),_("p",[e._v("选项未定的"),_("code",[e._v("表单元素")])]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("p",[_("code",[e._v(":placeholder-shown")])]),e._v(" "),_("p",[e._v("占位显示的"),_("code",[e._v("表单元素")])]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("p",[_("code",[e._v(":current()")])]),e._v(" "),_("p",[e._v("浏览中的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("p",[_("code",[e._v(":past()")])]),e._v(" "),_("p",[e._v("已浏览的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("p",[_("code",[e._v(":future()")])]),e._v(" "),_("p",[e._v("未浏览的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("p",[_("code",[e._v(":playing")])]),e._v(" "),_("p",[e._v("开始播放的"),_("code",[e._v("媒体元素")])]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("p",[_("code",[e._v(":paused")])]),e._v(" "),_("p",[e._v("暂停播放的"),_("code",[e._v("媒体元素")])]),e._v(" "),_("p",[e._v("4")]),e._v(" "),_("blockquote",[_("p",[e._v("结构选择器")])]),e._v(" "),_("p",[e._v("选择器")]),e._v(" "),_("p",[e._v("说明")]),e._v(" "),_("p",[e._v("版本")]),e._v(" "),_("p",[_("code",[e._v(":root")])]),e._v(" "),_("p",[e._v("文档的"),_("code",[e._v("根元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":empty")])]),e._v(" "),_("p",[e._v("无子元素的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":first-letter")])]),e._v(" "),_("p",[e._v("元素的"),_("code",[e._v("首字母")])]),e._v(" "),_("p",[e._v("1")]),e._v(" "),_("p",[_("code",[e._v(":first-line")])]),e._v(" "),_("p",[e._v("元素的"),_("code",[e._v("首行")])]),e._v(" "),_("p",[e._v("1")]),e._v(" "),_("p",[_("code",[e._v(":nth-child(n)")])]),e._v(" "),_("p",[e._v("元素中指定顺序索引的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":nth-last-child(n)")])]),e._v(" "),_("p",[e._v("元素中指定逆序索引的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":first-child")])]),e._v(" "),_("p",[e._v("元素中为首的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("2")]),e._v(" "),_("p",[_("code",[e._v(":last-child")])]),e._v(" "),_("p",[e._v("元素中为尾的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":only-child")])]),e._v(" "),_("p",[e._v("父元素仅有该元素的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":nth-of-type(n)")])]),e._v(" "),_("p",[e._v("标签中指定顺序索引的"),_("code",[e._v("标签")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":nth-last-of-type(n)")])]),e._v(" "),_("p",[e._v("标签中指定逆序索引的"),_("code",[e._v("标签")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":first-of-type")])]),e._v(" "),_("p",[e._v("标签中为首的"),_("code",[e._v("标签")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":last-of-type")])]),e._v(" "),_("p",[e._v("标签中为尾"),_("code",[e._v("标签")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v(":only-of-type")])]),e._v(" "),_("p",[e._v("父元素仅有该标签的"),_("code",[e._v("标签")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("blockquote",[_("p",[e._v("属性选择器")])]),e._v(" "),_("p",[e._v("选择器")]),e._v(" "),_("p",[e._v("说明")]),e._v(" "),_("p",[e._v("版本")]),e._v(" "),_("p",[_("code",[e._v("[attr]")])]),e._v(" "),_("p",[e._v("指定属性的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("2")]),e._v(" "),_("p",[_("code",[e._v("[attr=val]")])]),e._v(" "),_("p",[e._v("属性等于指定值的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("2")]),e._v(" "),_("p",[_("code",[e._v("[attr*=val]")])]),e._v(" "),_("p",[e._v("属性包含指定值的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v("[attr^=val]")])]),e._v(" "),_("p",[e._v("属性以指定值开头的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v("[attr$=val]")])]),e._v(" "),_("p",[e._v("属性以指定值结尾的"),_("code",[e._v("元素")])]),e._v(" "),_("p",[e._v("3")]),e._v(" "),_("p",[_("code",[e._v("[attr~=val]")])]),e._v(" "),_("p",[e._v("属性包含指定值(完整单词)的"),_("code",[e._v("元素")]),e._v("(不推荐使用)")]),e._v(" "),_("p",[e._v("2")]),e._v(" "),_("p",[_("code",[e._v("[attr\\|=val]")])]),e._v(" "),_("p",[e._v("属性以指定值(完整单词)开头的"),_("code",[e._v("元素")]),e._v("(不推荐使用)")]),e._v(" "),_("p",[e._v("2")]),e._v(" "),_("blockquote",[_("p",[e._v("伪元素")])]),e._v(" "),_("p",[e._v("选择器")]),e._v(" "),_("p",[e._v("说明")]),e._v(" "),_("p",[e._v("版本")]),e._v(" "),_("p",[_("code",[e._v("::before")])]),e._v(" "),_("p",[e._v("在元素前插入的内容")]),e._v(" "),_("p",[e._v("2")]),e._v(" "),_("p",[_("code",[e._v("::after")])]),e._v(" "),_("p",[e._v("在元素后插入的内容")]),e._v(" "),_("p",[e._v("2")]),e._v(" "),_("h3",{attrs:{id:"优势"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[e._v("#")]),e._v(" 优势")]),e._v(" "),_("p",[e._v("话说选择器若无用处，那"),_("code",[e._v("W3C")]),e._v("还干嘛把它纳入到标准里呢？"),_("code",[e._v("选择器")]),e._v("的劣势就不啰嗦了，使用不当可能会引起"),_("code",[e._v("解析性能问题")]),e._v("，这个对于现代浏览器来说几乎可忽略，除非你还是"),_("code",[e._v("IExplorer")]),e._v("的忠实粉丝。使用选择器有什么好处呢？笔者给各位同学总结一下。")]),e._v(" "),_("ul",[_("li",[e._v("对于那些结构与行为分离的写法，使用"),_("code",[e._v("sass/less")]),e._v("编写属性时结构会更清晰易读")]),e._v(" "),_("li",[e._v("减少很多无用或少用的类，保持"),_("code",[e._v("css文件")]),e._v("的整洁性和观赏性，代码也是一门艺术")]),e._v(" "),_("li",[e._v("减少修改类而有可能导致样式失效的问题，有时修改类但无确保HTML中和CSS中的一致而导致样式失效")]),e._v(" "),_("li",[e._v("减少无实质性使用的类，例如很多层嵌套的标签，这些标签可能只使用到一个CSS属性，就没必要建个类关联")]),e._v(" "),_("li",[e._v("使用选择器可实现一些看似只能由JS才能实现的效果，既可减少代码量也可减少JS对DOM的操作，使得交互效果更流畅")])]),e._v(" "),_("h3",{attrs:{id:"场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[e._v("#")]),e._v(" 场景")]),e._v(" "),_("p",[e._v("由于选择器太多，笔者选择几个最具代表性的耍耍，通过选择器的妙用实现一些看似只能由JS才能实现的效果。未提到的选择器可能在其他地方穿插着讲解，请各位同学放心学习。")]),e._v(" "),_("h5",{attrs:{id:"和"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#和"}},[e._v("#")]),e._v(" +和~")]),e._v(" "),_("p",[_("code",[e._v("+/~")]),e._v("都是作用于当前节点后的同胞节点，但是两者有一个明显的区别，"),_("code",[e._v("+")]),e._v("是针对紧随该节点的节点，而"),_("code",[e._v("~")]),e._v("是针对后面所有的节点，包括紧随该节点的节点。"),_("code",[e._v("~")]),e._v("还可针对一些特定类和选择器的节点，所以其使用性更广泛。")]),e._v(" "),_("p",[e._v("另外，"),_("code",[e._v("+/~")]),e._v("通常都会结合"),_("code",[e._v(":checked")]),e._v("完成一些高难度的纯CSS效果，当"),_("code",[e._v("<input>")]),e._v("触发了"),_("code",[e._v(":checked")]),e._v("选中状态后可通过"),_("code",[e._v("+/~")]),e._v("带动后面指定的节点声明一些特别属性。")]),e._v(" "),_("p",[e._v("通常其CSS代码形式如下。")]),e._v(" "),_("p",[_("code",[e._v("input:checked + div {} input:checked ~ div {}")])]),e._v(" "),_("p",[_("code",[e._v("+/~")]),e._v("的用途很广，静态效果和动态效果都能用上它，是两个很关键的选择器。以下通过动静结合的方式展示"),_("code",[e._v("+/~")]),e._v("的用途。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4bc4620c743f45f6a858ec5d2a533fb6~tplv-k3u1fbpfcp-zoom-1.image",alt:"指定元素"}})]),e._v(" "),_("p",[_("code",[e._v('<div class="specify-selector"> <ul class="list"> <li>同胞元素</li> <li class="next">当前元素</li> <li>同胞元素</li> <li>同胞元素</li> <li>同胞元素</li> </ul> <ul class="list"> <li>同胞元素</li> <li class="next-all">当前元素</li> <li>同胞元素</li> <li>同胞元素</li> <li>同胞元素</li> </ul> <ul class="list"> <li>同胞元素</li> <li class="next-filter">当前元素</li> <li>同胞元素</li> <li class="filter">同胞元素</li> <li>同胞元素</li> </ul> </div> <div class="specify-selector"> <div class="button"> <input id="btn1" type="radio" name="btns" hidden> <label for="btn1">点击我切换样式</label> </div> <div class="button"> <input id="btn2" type="radio" name="btns" hidden> <label for="btn2">点击我切换样式</label> </div> <div class="button"> <input id="btn3" type="radio" name="btns" hidden> <label for="btn3">点击我切换样式</label> </div> </div>')])]),e._v(" "),_("p",[_("code",[e._v(".specify-selector { display: flex; & + .specify-selector { margin-top: 20px; } .list { border: 1px solid #f66; width: 200px; line-height: 2; font-weight: bold; font-size: 20px; color: #f66; & + .list { margin-left: 20px; } li { padding: 0 10px; } .next { background-color: #66f; color: #fff; & + li { background-color: #f90; color: #fff; } } .next-all { background-color: #66f; color: #fff; & ~ li { background-color: #09f; color: #fff; } } .next-filter { background-color: #66f; color: #fff; & ~ .filter { background-color: #09f; color: #fff; } } } .button { & + .button { margin-left: 20px; } label { display: block; padding: 0 10px; height: 40px; background-color: #3c9; cursor: pointer; line-height: 40px; font-size: 16px; color: #fff; transition: all 300ms; } input:checked + label { padding: 0 20px; border-radius: 20px; background-color: #f66; } } }")])]),e._v(" "),_("hr"),e._v(" "),_("ul",[_("li",[e._v("在线演示："),_("a",{attrs:{href:"https://codepen.io/JowayYoung/pen/BayRWgL",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),_("OutboundLink")],1)]),e._v(" "),_("li",[e._v("在线源码："),_("a",{attrs:{href:"https://github.com/JowayYoung/idea-css/blob/master/icss/src/components/behavior/%E4%BD%BF%E7%94%A8+%E6%88%96~%E9%80%89%E6%8B%A9%E6%8C%87%E5%AE%9A%E5%85%83%E7%B4%A0.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),_("OutboundLink")],1)])]),e._v(" "),_("h5",{attrs:{id:"hover"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hover"}},[e._v("#")]),e._v(" :hover")]),e._v(" "),_("p",[_("code",[e._v(":hover")]),e._v("作用于鼠标悬浮的节点，是一个很好用的选择器。在特定场景可代替"),_("code",[e._v("mouseenter")]),e._v("和"),_("code",[e._v("mouseleave")]),e._v("两个鼠标事件，加上"),_("code",[e._v("transtion")]),e._v("让节点的动画更丝滑。")]),e._v(" "),_("p",[e._v("结合"),_("code",[e._v("attr()")]),e._v("有一个很好用的场景，就是鼠标悬浮在某个节点上显示提示浮层，提示浮层里包含着该动作的文本。")]),e._v(" "),_("ul",[_("li",[e._v("给节点标记一个用户属性"),_("code",[e._v("data-*")])]),e._v(" "),_("li",[e._v("当鼠标悬浮在该节点上触发"),_("code",[e._v(":hover")])]),e._v(" "),_("li",[e._v("通过"),_("code",[e._v("attr()")]),e._v("获取"),_("code",[e._v("data-*")]),e._v("的内容")]),e._v(" "),_("li",[e._v("将"),_("code",[e._v("data-*")]),e._v("的内容赋值到伪元素的"),_("code",[e._v("content")]),e._v("上")])]),e._v(" "),_("p",[_("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9bc56c233d86483a9375d98bb7ce06a5~tplv-k3u1fbpfcp-zoom-1.image",alt:"悬浮提示"}})]),e._v(" "),_("p",[_("code",[e._v('<ul class="hover-tips"> <li data-name="姨妈红"></li> <li data-name="基佬紫"></li> <li data-name="箩底橙"></li> <li data-name="姣婆蓝"></li> <li data-name="大粪青"></li> <li data-name="原谅绿"></li> </ul>')])]),e._v(" "),_("p",[_("code",[e._v('$color-list: #f66 #66f #f90 #09f #9c3 #3c9; .hover-tips { display: flex; justify-content: space-between; width: 200px; li { position: relative; padding: 2px; border: 2px solid transparent; border-radius: 100%; width: 24px; height: 24px; background-clip: content-box; cursor: pointer; transition: all 300ms; &::before, &::after { position: absolute; left: 50%; bottom: 100%; opacity: 0; transform: translate3d(0, -30px, 0); transition: all 300ms; } &::before { margin: 0 0 12px -35px; border-radius: 5px; width: 70px; height: 30px; background-color: rgba(#000, .5); line-height: 30px; text-align: center; color: #fff; content: attr(data-name); } &::after { margin-left: -6px; border: 6px solid transparent; border-top-color: rgba(#000, .5); width: 0; height: 0; content: ""; } @each $color in $color-list { $index: index($color-list, $color); &:nth-child(#{$index}) { background-color: $color; &:hover { border-color: $color; } } } &:hover { &::before, &::after { opacity: 1; transform: translate3d(0, 0, 0); } } } }')])]),e._v(" "),_("hr"),e._v(" "),_("ul",[_("li",[e._v("在线演示："),_("a",{attrs:{href:"https://codepen.io/JowayYoung/pen/pojgxpg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),_("OutboundLink")],1)]),e._v(" "),_("li",[e._v("在线源码："),_("a",{attrs:{href:"https://github.com/JowayYoung/idea-css/blob/master/icss/src/components/behavior/%E4%BD%BF%E7%94%A8@hover%E5%AE%9A%E5%88%B6%E6%82%AC%E6%B5%AE%E6%8F%90%E7%A4%BA.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),_("OutboundLink")],1)])]),e._v(" "),_("h5",{attrs:{id:"valid和-invalid"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#valid和-invalid"}},[e._v("#")]),e._v(" :valid和:invalid")]),e._v(" "),_("p",[e._v("很多同学可能还会使用JS去判断表单输入内容是否合法，其实HTML5发布后，可用纯CSS完成这些工作，正确搭配一些属性能大大减少校验表单的代码量。")]),e._v(" "),_("p",[e._v("完成一个完整的表单验证，需以下HTML属性和选择器搭配。")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("placeholder")]),e._v("：占位，在未输入内容时显示提示文本")]),e._v(" "),_("li",[_("strong",[e._v("pattern")]),e._v("：正则，在输入内容时触发正则验证")]),e._v(" "),_("li",[_("strong",[e._v(":valid")]),e._v("：作用于输入合法的表单节点")]),e._v(" "),_("li",[_("strong",[e._v(":invalid")]),e._v("：作用于输入非法的表单节点")])]),e._v(" "),_("p",[_("code",[e._v('<input type="text" placeholder="" pattern="">')])]),e._v(" "),_("p",[_("code",[e._v("input:valid {} input:invalid {}")])]),e._v(" "),_("p",[e._v("这个"),_("code",[e._v("pattern")]),e._v("与JS正则有点不同，JS的正则形式是"),_("code",[e._v("/regexp/")]),e._v("，而"),_("code",[e._v("pattern")]),e._v("的正则形式只需"),_("code",[e._v("/regexp/")]),e._v("里的"),_("code",[e._v("regexp")]),e._v("。这个校验过程是动态触发的，监听了"),_("code",[e._v("input")]),e._v("这个键盘事件，当输入内容合法时触发"),_("code",[e._v(":valid")]),e._v("，当输入内容非法时触发"),_("code",[e._v(":invalid")]),e._v("。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd3a6ba13a7949d09fac31fbff875e57~tplv-k3u1fbpfcp-zoom-1.image",alt:"表单内容"}})]),e._v(" "),_("p",[_("code",[e._v('<form class="form-validation"> <div> <label>名字</label> <input type="text" placeholder="请输入你的名字(1到10个中文)" pattern="^[\\u4e00-\\u9fa5]{1,10}$" required> </div> <div> <label>手机</label> <input type="text" placeholder="请输入你的手机" pattern="^1[3456789]\\d{9}$" required> </div> <div> <label>简介</label> <textarea required></textarea> </div> </form>')])]),e._v(" "),_("p",[_("code",[e._v(".form-validation { width: 500px; div + div { margin-top: 10px; } label { display: block; padding-bottom: 5px; font-weight: bold; font-size: 16px; } input, textarea { display: block; padding: 0 20px; border: 1px solid #ccc; width: 100%; height: 40px; outline: none; caret-color: #09f; transition: all 300ms; &:valid { border-color: #3c9; } &:invalid { border-color: #f66; } } textarea { height: 122px; resize: none; line-height: 30px; font-size: 16px; } }")])]),e._v(" "),_("hr"),e._v(" "),_("ul",[_("li",[e._v("在线演示："),_("a",{attrs:{href:"https://codepen.io/JowayYoung/pen/QemxKr",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),_("OutboundLink")],1)]),e._v(" "),_("li",[e._v("在线源码："),_("a",{attrs:{href:"https://github.com/JowayYoung/idea-css/blob/master/icss/src/components/behavior/%E4%BD%BF%E7%94%A8@valid%E5%92%8C@invalid%E6%A0%A1%E9%AA%8C%E8%A1%A8%E5%8D%95%E5%86%85%E5%AE%B9.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),_("OutboundLink")],1)])]),e._v(" "),_("h5",{attrs:{id:"checked"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#checked"}},[e._v("#")]),e._v(" :checked")]),e._v(" "),_("p",[_("code",[e._v(":checked")]),e._v("作用于选项选中的表单节点，当"),_("code",[e._v("<input>")]),e._v("的"),_("code",[e._v("type")]),e._v("设置成"),_("code",[e._v("radio")]),e._v("和"),_("code",[e._v("checkbox")]),e._v("时可用。在"),_("strong",[e._v("CSS神操作骚技巧")]),e._v("中是一个很重要的技巧，主要是用于模拟鼠标点击事件。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a835669acd744637b7ef4808cce0dade~tplv-k3u1fbpfcp-zoom-1.image",alt:"切换按钮"}})]),e._v(" "),_("p",[_("code",[e._v('<input class="ios-switch" type="checkbox">')])]),e._v(" "),_("p",[_("code",[e._v('.btn { border-radius: 31px; width: 102px; height: 62px; background-color: #e9e9eb; } .ios-switch { position: relative; appearance: none; cursor: pointer; transition: all 100ms; @extend .btn; &::before { position: absolute; content: ""; transition: all 300ms cubic-bezier(.45, 1, .4, 1); @extend .btn; } &::after { position: absolute; left: 4px; top: 4px; border-radius: 27px; width: 54px; height: 54px; background-color: #fff; box-shadow: 1px 1px 5px rgba(#000, .3); content: ""; transition: all 300ms cubic-bezier(.4, .4, .25, 1.35); } &:checked { background-color: #5eb662; &::before { transform: scale(0); } &::after { transform: translateX(40px); } } }')])]),e._v(" "),_("hr"),e._v(" "),_("ul",[_("li",[e._v("在线演示："),_("a",{attrs:{href:"https://codepen.io/JowayYoung/pen/PoqgbGV",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),_("OutboundLink")],1)]),e._v(" "),_("li",[e._v("在线源码："),_("a",{attrs:{href:"https://github.com/JowayYoung/idea-css/blob/master/icss/src/components/component/iOS%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),_("OutboundLink")],1)])]),e._v(" "),_("blockquote",[_("p",[_("code",[e._v("<input>")]),e._v("与"),_("code",[e._v("<label>")]),e._v("的巧妙搭配")])]),e._v(" "),_("p",[e._v("上述有提到与"),_("code",[e._v("+/~")]),e._v("的搭配使用，在此还有一个很重要的技巧，就是结合"),_("code",[e._v("<label>")]),e._v("使用。为何要结合"),_("code",[e._v("<label>")]),e._v("呢？因为要让"),_("code",[e._v("input:checked + div {}")]),e._v("或"),_("code",[e._v("input:checked ~ div {}")]),e._v("起效，其HTML结构必须像以下那样。")]),e._v(" "),_("p",[_("code",[e._v('<input type="radio"> <div></div>')])]),e._v(" "),_("p",[e._v("这样就无法分离结构与行为了，导致CSS必须跟着HTML走，只能使用绝对定位将"),_("code",[e._v("<input>")]),e._v("固定到指定位置。使用"),_("code",[e._v("<label>")]),e._v("绑定"),_("code",[e._v("<input>")]),e._v("，可将"),_("code",[e._v("<input>")]),e._v("的鼠标选择事件转移到"),_("code",[e._v("<label>")]),e._v("上，由"),_("code",[e._v("<label>")]),e._v("控制选中状态。那么HTML结构可改为以下那样，此时的"),_("code",[e._v("<input>")]),e._v("可设置"),_("code",[e._v("hidden")]),e._v("隐藏起来，不参与任何排版。")]),e._v(" "),_("p",[_("code",[e._v('<input type="radio" id="btn" hidden> <div> <label for="btn"> </div>')])]),e._v(" "),_("p",[_("code",[e._v("<input>")]),e._v("使用"),_("code",[e._v("id")]),e._v("与"),_("code",[e._v("<label>")]),e._v("使用"),_("code",[e._v("for")]),e._v("关联起来，而"),_("code",[e._v("hidden")]),e._v("使"),_("code",[e._v("<input>")]),e._v("隐藏起来，不占用页面任何位置，此时"),_("code",[e._v("<label>")]),e._v("放置在页面任何位置都行。")]),e._v(" "),_("p",[_("code",[e._v("input:checked + div {} input:checked ~ div {}")])]),e._v(" "),_("p",[e._v("笔者使用纯CSS实现的"),_("strong",[e._v("标签导航")]),e._v("是一个很好的学习用例，在第8章"),_("strong",[e._v("变量计算")]),e._v("有提及。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/087c742904e848509be19cc49931ca1c~tplv-k3u1fbpfcp-zoom-1.image",alt:"标签导航"}})]),e._v(" "),_("hr"),e._v(" "),_("ul",[_("li",[e._v("在线演示："),_("a",{attrs:{href:"https://codepen.io/JowayYoung/pen/oNvzoZg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),_("OutboundLink")],1)]),e._v(" "),_("li",[e._v("在线源码："),_("a",{attrs:{href:"https://github.com/JowayYoung/idea-css/blob/master/icss/src/components/component/%E6%A0%87%E7%AD%BE%E5%AF%BC%E8%88%AA.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),_("OutboundLink")],1)])]),e._v(" "),_("h5",{attrs:{id:"focus-within"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#focus-within"}},[e._v("#")]),e._v(" :focus-within")]),e._v(" "),_("p",[_("code",[e._v(":focus-within")]),e._v("作用于内部表单节点处于聚焦状态的节点。它监听当前节点里是否有表单节点，且该表单节点是否处于聚焦状态。")]),e._v(" "),_("p",[e._v("有些同学听上去可能觉得拗口，其实它是一个简单易用的属性。表单控件触发"),_("code",[e._v("focus")]),e._v("和"),_("code",[e._v("blur")]),e._v("两个鼠标事件后往祖先节点冒泡，在祖先节点上通过"),_("code",[e._v(":focus-within")]),e._v("捕获该冒泡事件声明样式。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ef03c079cb841939b20c789ecd6a7d8~tplv-k3u1fbpfcp-zoom-1.image",alt:"冒泡响应"}})]),e._v(" "),_("p",[_("code",[e._v('<form class="bubble-distribution"> <h3>注册</h3> <div class="accout"> <input type="text" placeholder="请输入手机或邮箱" pattern="^1[3456789]\\d{9}$|^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$" required> <img src="https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png"> </div> <div class="password"> <input type="password" placeholder="请输入密码(6到20位字符)" pattern="^[\\dA-Za-z_]{6,20}$" required> <img src="https://b-gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png"> </div> <div class="code"> <input type="text" placeholder="请输入邀请码(6位数字)" pattern="^[\\d]{6}$" maxLength="6" required> <button type="button">查询</button> <img src="https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png"> </div> <img src="https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png"> <ul> <li> <input id="male" type="radio" name="sex"> <label for="male">Boy</label> </li> <li> <input id="female" type="radio" name="sex"> <label for="female">Girl</label> </li> </ul> <button type="button">注册</button> </form>')])]),e._v(" "),_("p",[_("code",[e._v(".bubble-distribution { position: relative; margin-top: 50px; padding: 25px; border-radius: 2px; width: 320px; background-color: #fff; h3 { font-size: 16px; color: #333; } div { margin-top: 10px; } img { position: absolute; left: 50%; bottom: 100%; margin: 0 0 -20px -60px; width: 120px; } ul { display: flex; justify-content: space-between; align-items: center; margin-top: 10px; height: 30px; line-height: 30px; } li { position: relative; width: 45%; transition: all 300ms; &:focus-within { background: linear-gradient(90deg, #09f 50%, transparent 0) repeat-x, linear-gradient(90deg, #09f 50%, transparent 0) repeat-x, linear-gradient(0deg, #09f 50%, transparent 0) repeat-y, linear-gradient(0deg, #09f 50%, transparent 0) repeat-y; background-position: 0 0, 0 100%, 0 0, 100% 0; background-size: 8px 1px, 8px 1px, 1px 8px, 1px 8px; animation: move 500ms infinite linear; } } input[type=text], input[type=password] { padding: 10px; border: 1px solid #e9e9e9; border-radius: 2px; width: 100%; height: 40px; outline: none; transition: all 300ms; &:focus:valid { border-color: #09f; } &:focus:invalid { border-color: #f66; } } input[type=radio] { position: absolute; width: 0; height: 0; &:checked + label { border: 3px solid transparent; background-color: #09f; color: #fff; } } label { display: block; border-bottom: 1px solid #ccc; width: 100%; background-clip: padding-box; cursor: pointer; text-align: center; transition: all 300ms; } button { overflow: hidden; margin-top: 10px; border: none; border-radius: 2px; width: 100%; height: 40px; outline: none; background-color: #09f; cursor: pointer; color: #fff; transition: all 300ms; } .accout, .password, .code { img { display: none; margin-bottom: -27px; } &:focus-within { img { display: block; } & ~ img { display: none; } } } .code { display: flex; justify-content: space-between; button { margin-top: 0; } input { &:not(:placeholder-shown) { width: 70%; & + button { width: 25%; } } &:placeholder-shown { width: 100%; & + button { width: 0; opacity: 0; } } } } } @keyframes move { to { background-position: 6% 0, -6% 100%, 0 -6%, 100% 6%; } }")])]),e._v(" "),_("hr"),e._v(" "),_("ul",[_("li",[e._v("在线演示："),_("a",{attrs:{href:"https://codepen.io/JowayYoung/pen/BaBjaBP",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),_("OutboundLink")],1)]),e._v(" "),_("li",[e._v("在线源码："),_("a",{attrs:{href:"https://github.com/JowayYoung/idea-css/blob/master/icss/src/components/behavior/%E4%BD%BF%E7%94%A8@focus-within%E5%88%86%E5%8F%91%E5%86%92%E6%B3%A1%E5%93%8D%E5%BA%94.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),_("OutboundLink")],1)])]),e._v(" "),_("h5",{attrs:{id:"empty"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#empty"}},[e._v("#")]),e._v(" :empty")]),e._v(" "),_("p",[e._v("还有使用JS判断列表集合为空时显示占位符吗？相信很多使用MVVM框架开发的同学都会使用条件判断的方式渲染虚拟DOM，若列表长度不为0则渲染列表，否则渲染占位符。然而CSS提供了一个空判断的选择器"),_("code",[e._v(":empty")]),e._v("，这应该很少同学会注意到。")]),e._v(" "),_("p",[_("code",[e._v(":empty")]),e._v("作用于无子节点的节点，这个子节点也包括行内匿名盒("),_("code",[e._v("单独的文本内容")]),e._v(")，匿名盒在第4章"),_("strong",[e._v("盒模型")]),e._v("有提及。以下三种情况均为非空状态，若不出现这三种状态则为空状态，此时"),_("code",[e._v(":empty")]),e._v("才会触发。")]),e._v(" "),_("ul",[_("li",[e._v("仅存在节点："),_("code",[e._v("<div><p>CSS</p></div>")])]),e._v(" "),_("li",[e._v("仅存在文本："),_("code",[e._v("<div>CSS</div>")])]),e._v(" "),_("li",[e._v("同时存在节点和文本："),_("code",[e._v("<div>Hello <p>CSS</p></div>")])])]),e._v(" "),_("p",[_("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/783eb7e9b5c84722af155515f4ae2e78~tplv-k3u1fbpfcp-zoom-1.image",alt:"清空状态"}})]),e._v(" "),_("p",[_("code",[e._v('<ul class="empty-list"> <li v-for="v in 10" :key="v">Data '+e._s(e.v)+'</li> </ul> <ul class="empty-list"></ul>')])]),e._v(" "),_("p",[_("code",[e._v('$empty: "https://yangzw.vip/img/empty.svg"; .empty-list { overflow: auto; width: 200px; height: 150px; outline: 1px solid #3c9; &:empty { display: flex; justify-content: center; align-items: center; background: url($empty) no-repeat center/100px auto; &::after { margin-top: 90px; font-weight: bold; content: "没钱就没数据"; } } & + .empty-list { margin-left: 20px; } li { padding: 0 10px; height: 30px; background-color: #09f; line-height: 30px; color: #fff; &:nth-child(even) { background-color: #f90; } } }')])]),e._v(" "),_("hr"),e._v(" "),_("ul",[_("li",[e._v("在线演示："),_("a",{attrs:{href:"https://codepen.io/JowayYoung/pen/PoPPbqg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),_("OutboundLink")],1)]),e._v(" "),_("li",[e._v("在线源码："),_("a",{attrs:{href:"https://github.com/JowayYoung/idea-css/blob/master/icss/src/components/behavior/%E4%BD%BF%E7%94%A8@empty%E7%9B%91%E5%90%AC%E6%B8%85%E7%A9%BA%E7%8A%B6%E6%80%81.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),_("OutboundLink")],1)])]),e._v(" "),_("h5",{attrs:{id:"before和-after"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#before和-after"}},[e._v("#")]),e._v(" ::before和::after")]),e._v(" "),_("p",[e._v("有时为了实现某个效果而往页面里反复添加标签变得很繁琐，添加太多标签反而不好处理而变得难以维护。此时会引入"),_("code",[e._v("伪元素")]),e._v("这个概念解决上述问题。")]),e._v(" "),_("p",[_("strong",[e._v("伪元素")]),e._v("指页面里不存在的元素。"),_("code",[e._v("伪元素")]),e._v("在HTML代码里未声明，却能正常显示，在页面渲染时看到这些本来不存在的元素发挥着重要作用。"),_("code",[e._v(":before")]),e._v("和"),_("code",[e._v(":after")]),e._v("是两个很重要的伪元素，早在CSS2就出现了。")]),e._v(" "),_("p",[e._v("起初"),_("code",[e._v("伪元素")]),e._v("的前缀使用"),_("strong",[e._v("单冒号语法")]),e._v("。随着CSS改革，伪元素的前缀被修改成"),_("strong",[e._v("双冒号语法")]),e._v("，"),_("code",[e._v(":before/:after")]),e._v("从此变成"),_("code",[e._v("::before/::after")]),e._v("，用来区分"),_("code",[e._v("伪类")]),e._v("。若兼容低版本浏览器，还需使用"),_("code",[e._v(":before")]),e._v("和"),_("code",[e._v(":after")]),e._v("，但是本小册均以"),_("code",[e._v("::before/::after")]),e._v("编写CSS代码。")]),e._v(" "),_("p",[_("code",[e._v("伪元素")]),e._v("和"),_("code",[e._v("伪类")]),e._v("虽然都是选择器，但是它们还是存在一丝丝的差别。")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("伪元素")]),e._v("通常是一些实体选择器，选择满足指定条件的DOM，例如"),_("code",[e._v("::selection")]),e._v("、"),_("code",[e._v(":nth-child(n)")]),e._v("和"),_("code",[e._v(":first-child")])]),e._v(" "),_("li",[_("code",[e._v("伪类")]),e._v("通常是一些状态选择器，选择处于特定状态的DOM，例如"),_("code",[e._v(":hover")]),e._v("、"),_("code",[e._v(":focus")]),e._v("和"),_("code",[e._v(":checked")])])]),e._v(" "),_("p",[_("code",[e._v("::before/::after")]),e._v("必须结合"),_("code",[e._v("content")]),e._v("使用，通常用作修饰节点，为节点插入一些多余的东西，但又不想内嵌一些其他标签。若插入2个以下(包含2个)的修饰，建议使用"),_("code",[e._v("::before/::after")]),e._v("。")]),e._v(" "),_("p",[e._v("以下两个HTML结构是等效的")]),e._v(" "),_("p",[_("code",[e._v("<p> <span>:before</span> CSS <span>:after</span> </p>")])]),e._v(" "),_("p",[_("code",[e._v("<p>CSS</p>")])]),e._v(" "),_("p",[_("code",[e._v('// 接上一个HTML结构 p { &::before { content: ":before"; } &::after { content: ":after"; } }')])]),e._v(" "),_("p",[_("code",[e._v("::before/::after")]),e._v("最常用的场景就是气泡对话框，圆滚滚的身子带上一个三角形的尾巴。像以下第二个挖空的气泡对话框，其实使用白色填充背景颜色，而小尾巴使用白色的"),_("code",[e._v("::after")]),e._v("叠加橙色的"),_("code",[e._v("::before")]),e._v("形成障眼法。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/20ee69a794ea449e83ab8f9720e25a41~tplv-k3u1fbpfcp-zoom-1.image",alt:"气泡对话框"}})]),e._v(" "),_("p",[_("code",[e._v('<div class="bubble-box">iCSS</div> <div class="bubble-empty-box">iCSS</div>')])]),e._v(" "),_("p",[_("code",[e._v('.bubble-box { position: relative; border-radius: 5px; width: 200px; height: 50px; background-color: #f90; line-height: 50px; text-align: center; font-size: 20px; color: #fff; &::after { position: absolute; left: 100%; top: 50%; margin-top: -5px; border: 5px solid transparent; border-left-color: #f90; content: ""; } } .bubble-empty-box { position: relative; margin-top: 10px; border: 2px solid #f90; border-radius: 5px; width: 200px; height: 50px; line-height: 46px; text-align: center; font-size: 20px; color: #f90; &::before { position: absolute; left: 100%; top: 50%; margin: -5px 0 0 2px; border: 5px solid transparent; border-left-color: #f90; content: ""; } &::after { position: absolute; left: 100%; top: 50%; margin-top: -4px; border: 4px solid transparent; border-left-color: #fff; content: ""; } }')])]),e._v(" "),_("hr"),e._v(" "),_("ul",[_("li",[e._v("在线演示："),_("a",{attrs:{href:"https://codepen.io/JowayYoung/pen/GRZBKJd",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),_("OutboundLink")],1)]),e._v(" "),_("li",[e._v("在线源码："),_("a",{attrs:{href:"https://github.com/JowayYoung/idea-css/blob/master/icss/src/components/component/%E6%B0%94%E6%B3%A1%E5%AF%B9%E8%AF%9D%E6%A1%86.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=t.exports}}]);