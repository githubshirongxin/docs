(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{380:function(t,s,i){"use strict";i.r(s);var o=i(42),v=Object(o.a)({},(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("p",[t._v("可能是git凭证出现了错误，如果是，你可以看看下面步骤：")]),t._v(" "),i("p",[t._v('进入“控制面板” => "用户帐户" => "管理您的凭证" => "Windows凭据 / 普通凭据" ，到此发现在普通凭据中有多个git凭证，确认后发现有错误的凭证，修改后就能顺利的push代码了。参考链接: https://gitlab.com/gitlab-com...')]),t._v(" "),i("p",[t._v("在企业开发中，常用git push分支。作为新进入项目的开发者，遇到You are not allowed to push code to this project 请冷静对待，是否出现以下六种我在看博客时搜集的问题。我自己是对应第6种，其它原因属于分析猜测。")]),t._v(" "),i("ol",[i("li",[t._v("用户名 / 邮箱 / 密码是否输入正确")])]),t._v(" "),i("p",[t._v("查询：git config user.name | git config user.email")]),t._v(" "),i("p",[t._v("设置当前仓库信息：git config user.name xxx | git config user.email xxx")]),t._v(" "),i("p",[t._v("如果觉得可能密码输错了，但git没有重置密码的指令，可以到 控制面板->凭据管理器->windows凭据，删除对应配置好用户密码的git网址。重新push时则会提示重新输入用户名密码。（git如何重置密码->删除凭据）")]),t._v(" "),i("p",[t._v("扩展阅读（非本文问题分析） ：git配置user.name和user.email 中含 --global 设置全局user.name, user.email 的讲解")]),t._v(" "),i("ol",{attrs:{start:"2"}},[i("li",[t._v("windows凭据")])]),t._v(" "),i("p",[t._v("可以在windows凭据中添加普通凭据，将访问网址设置为白名单。（不过一般连接push时输入账号密码就自动配置了，和问题1相仿）")]),t._v(" "),i("ol",{attrs:{start:"3"}},[i("li",[t._v("是否在项目代码服务端添加公钥")])]),t._v(" "),i("p",[t._v("如果需要公钥和私钥访问的话，没有把公钥挂上代码管理服务端也可能git push失败")]),t._v(" "),i("ol",{attrs:{start:"4"}},[i("li",[t._v("是否只能http访问")])]),t._v(" "),i("p",[t._v("有的项目或项目接口只能http访问，就不要用ssh的方式。")]),t._v(" "),i("ol",{attrs:{start:"5"}},[i("li",[t._v("若ssh访问添加用户名")])]),t._v(" "),i("p",[t._v("地址形如 git@xxx.xxx.xxx.com，将@前替换为自己的项目用户名（这一点很多时候git@也是能正常运行的）")]),t._v(" "),i("ol",{attrs:{start:"6"}},[i("li",[t._v("是否有权限")])]),t._v(" "),i("p",[t._v("配置好以上条件的前提下。我自己因为在gitlab没有管理员为我添加开发者权限（默认为访客），所以一直不能上传")])])}),[],!1,null,null,null);s.default=v.exports}}]);