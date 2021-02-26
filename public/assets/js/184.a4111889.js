(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{667:function(s,n,a){"use strict";a.r(n);var e=a(59),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"常见问题答疑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题答疑"}},[s._v("#")]),s._v(" 常见问题答疑")]),s._v(" "),a("h2",{attrs:{id:"typescript的结构类型系统是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript的结构类型系统是什么？"}},[s._v("#")]),s._v(" TypeScript的结构类型系统是什么？")]),s._v(" "),a("p",[s._v("我们都知道 Anders Hejlsberg 先后设计了 c# 和 TypeScript ,两者有很多相似之处,但是其类型系统有本质区别:")]),s._v(" "),a("ul",[a("li",[s._v("C# 采用的是 Nominal Type System（标明类型系统）")]),s._v(" "),a("li",[s._v("TypeScript 考虑到 JavaScript 本身的灵活特性，采用的是结构类型系统（Structural Type System）")])]),s._v(" "),a("p",[s._v("我们看两个例子体验一下两者的不同:")]),s._v(" "),a("p",[s._v("c#代码:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\npublic class Foo  \n{\n    public string Name { get; set; }\n    public int Id { get; set;}\n}\n\npublic class Bar  \n{\n    public string Name { get; set; }\n    public int Id { get; set; }\n}\n\nFoo foo = new Foo(); // Okay.\nBar bar = new Foo(); // Error!!!\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("虽然 "),a("code",[s._v("Foo")]),s._v(" 和 "),a("code",[s._v("Bar")]),s._v(" 两个类的内部定义完全一致，但是赋值时会报错，可见两者类型本质上是不同的。")]),s._v(" "),a("p",[s._v("TS 代码:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Foo {\n  method(input: string): number { ... }\n}\n\nclass Bar {\n  method(input: string): number { ... }\n}\n\nconst foo: Foo = new Foo(); // Okay.\nconst bar: Bar = new Foo(); // Okay.\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("赋值成功，可见两者类型是相同的，这就是c#与ts最大的不同之处。")]),s._v(" "),a("p",[s._v("究其原因，TypeScript 比较的并不是类型定义本身，而是类型定义的形状（Shape），即各种约束条件：")]),s._v(" "),a("blockquote",[a("p",[s._v("TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。")])]),s._v(" "),a("p",[s._v("为什么采用更灵活的"),a("strong",[s._v("结构类型系统")]),s._v("?那就是因为 TS 为了兼容 js 那灵活的特性,这种类型系统用在 js 这种语言上最合适不过了。")]),s._v(" "),a("h2",{attrs:{id:"如何防止两种类型在结构上兼容？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何防止两种类型在结构上兼容？"}},[s._v("#")]),s._v(" 如何防止两种类型在结构上兼容？")]),s._v(" "),a("p",[s._v("我们在上面提到了,TS采用了灵活的结构类型系统,那么会导致一些问题,比如:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("interface ScreenCoordinate {\n  x: number;\n  y: number;\n}\ninterface PrintCoordinate {\n  x: number;\n  y: number;\n}\nfunction sendToPrinter(pt: PrintCoordinate) {\n  // ...\n}\nfunction getCursorPos(): ScreenCoordinate {\n  return { x: 0, y: 0 };\n}\n\nsendToPrinter(getCursorPos());\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("由于 "),a("code",[s._v("ScreenCoordinate")]),s._v(" 与 "),a("code",[s._v("PrintCoordinate")]),s._v(" 的形状(Shape)相同，那么根据结构类型系统的特性，他们的类型是兼容的，但是你如果不想让他们是兼容的类型应该怎么操作?")]),s._v(" "),a("p",[s._v("这时候需要添加一个 「brand」 成员:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("interface ScreenCoordinate {\n  _screenCoordBrand: any;\n  x: number;\n  y: number;\n}\ninterface PrintCoordinate {\n  _printCoordBrand: any;\n  x: number;\n  y: number;\n}\n\n// 报错\nsendToPrinter(getCursorPos());\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"ts类型的substitutability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ts类型的substitutability"}},[s._v("#")]),s._v(" TS类型的substitutability?")]),s._v(" "),a("p",[s._v("我们先看以下例子会不会报错?")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function handler(arg: string) {\n  // ....\n}\n\nfunction doSomething(callback: (arg1: string, arg2: number) => void) {\n  callback('hello', 42);\n}\n\n// 很多人的预期是这里会报错,因为doSomething要求的回调函数是有两个参数的,但是handler只有一个参数\ndoSomething(handler);\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("为什么更少参数的函数能够赋值给具有更多参数的函数?")]),s._v(" "),a("p",[s._v("并没有，究其原因是因为 "),a("code",[s._v("handler")]),s._v(" 的类型 "),a("code",[s._v("(arg: string) => xx")]),s._v(" 是可以作为 "),a("code",[s._v("(arg1: string, arg2: number) => void")]),s._v(" 的替代品即 substitutability，在这种情况下是不会报错的。")]),s._v(" "),a("p",[s._v("类似的情况还有：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function doSomething(): number {\n  return 42;\n}\n\nfunction callMeMaybe(callback: () => void) {\n  callback();\n}\n\n// 有人认为这里会报错,原因是doSomething返回的是number,而callback返回的是void\ncallMeMaybe(doSomething);\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("为什么 TS 会有 substitutability 这种设计，原因也是要兼容 JavaScript 灵活的语法。")]),s._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),a("p",[s._v("TypeScript 是 JavaScript 的超集，毕竟是一门系统的编程语言，我们用 30+ 节的内容想做到面面俱到几乎不可能，因此如果你有什么疑问可以在下方留言，我会尽可能解答。")])])}),[],!1,null,null,null);n.default=t.exports}}]);