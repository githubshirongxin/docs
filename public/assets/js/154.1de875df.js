(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{637:function(a,t,e){"use strict";e.r(t);var l=e(59),s=Object(l.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"理解maven命令package、install、deploy的联系与区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#理解maven命令package、install、deploy的联系与区别"}},[a._v("#")]),a._v(" 理解maven命令package、install、deploy的联系与区别")]),a._v(" "),e("p",[a._v("我们在用maven构建java项目时，最常用的打包命令有mvn package、mvn install、deploy，这三个命令都可完成打jar包或war（当然也可以是其它形式的包）的功能，但这三个命令还是有区别的。下面通过分别执行这三个命令的输出结果，来分析各自所执行的maven的生命周期。")]),a._v(" "),e("h2",{attrs:{id:"mvn-clean-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mvn-clean-package"}},[a._v("#")]),a._v(" mvn clean package")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdn.net/20180515155839690?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW9qaWFudGluZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"这里写图片描述"}}),e("img",{attrs:{src:"https://img-blog.csdn.net/20180515155852762?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW9qaWFudGluZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"这里写图片描述"}})]),a._v(" "),e("h2",{attrs:{id:"mvn-clean-install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mvn-clean-install"}},[a._v("#")]),a._v(" mvn clean install")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdn.net/20180515155917549?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW9qaWFudGluZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"这里写图片描述"}}),e("img",{attrs:{src:"https://img-blog.csdn.net/20180515155928251?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW9qaWFudGluZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"这里写图片描述"}})]),a._v(" "),e("h2",{attrs:{id:"mvn-clean-deploy（忽略最后的build-failure）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mvn-clean-deploy（忽略最后的build-failure）"}},[a._v("#")]),a._v(" mvn clean deploy（忽略最后的BUILD FAILURE）")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdn.net/20180515160000710?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW9qaWFudGluZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"这里写图片描述"}}),e("img",{attrs:{src:"https://img-blog.csdn.net/20180515160009425?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW9qaWFudGluZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"这里写图片描述"}})]),a._v(" "),e("p",[a._v("通过三个命令的输出我们可以看出三者的区别在于包函的maven生命的阶段和执行目标(goal)不同。在我的上一篇文章https://blog.csdn.net/zhaojianting/article/details/80321488　中介绍了maven的生命周期和各种插件，不明白的请参考此博文。maven生命周期（lifecycle）由各个阶段组成，每个阶段由maven的插件plugin来执行完成。生命周期（lifecycle）主要包括clean、resources、complie、install、pacakge、testResources、testCompile、deploy等，其中带test开头的都是用业编译测试代码或运行单元测试用例的。")]),a._v(" "),e("p",[a._v("仔细查看上面的输出结果截图，可以发现，")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("mvn clean package依次执行了clean、resources、compile、testResources、testCompile、test、jar(打包)等７个阶段。")])]),a._v(" "),e("li",[e("strong",[a._v("mvn clean install依次执行了clean、resources、compile、testResources、testCompile、test、jar(打包)、install等8个阶段。")])]),a._v(" "),e("li",[e("strong",[a._v("mvn clean deploy依次执行了clean、resources、compile、testResources、testCompile、test、jar(打包)、install、deploy等９个阶段。")])])]),a._v(" "),e("p",[a._v("由上面的分析可知主要区别如下，")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("package命令完成了项目编译、单元测试、打包功能，但没有把打好的可执行jar包（war包或其它形式的包）布署到本地maven仓库和远程maven私服仓库")])]),a._v(" "),e("li",[e("strong",[a._v("install命令完成了项目编译、单元测试、打包功能，同时把打好的可执行jar包（war包或其它形式的包）布署到本地maven仓库，但没有布署到远程maven私服仓库")])]),a._v(" "),e("li",[e("strong",[a._v("deploy命令完成了项目编译、单元测试、打包功能，同时把打好的可执行jar包（war包或其它形式的包）布署到本地maven仓库和远程maven私服仓库")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);