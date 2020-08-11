(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{521:function(e,s,t){"use strict";t.r(s);var a=t(55),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"git-使用流程规范（merge-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-使用流程规范（merge-request"}},[e._v("#")]),e._v(" git 使用流程规范（merge-request)")]),e._v(" "),t("blockquote",[t("p",[e._v("如果你的git workflow 采用此模式，谨记一定要忘记 git merge,除了在 master 分支上 git pull 可以使用 git pull，其他分支如果要 git pull应该使用 "),t("code",[e._v("git pull --rebase")]),e._v("\n使用 git rebase 的黄金法则就是：分支的开发者尽量是一个人，重写提交历史不会影响别人")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("新建分支")]),e._v(" "),t("p",[e._v("​")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# 创建分之前，先切换到 master 分支，更新到最新版本，确保你的新分支是基于最新版本的master\n# 在 master 分支上基本上只有一个操作 git pull\ngit checkout master\ngit pull\n# 创建分支 git checkout 命令是切换分支，加上参数 -b 表示如果分支不存在，就创建，且立即切换到新创建的分支\ngit checkout -b myfeature\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("分支开发")]),e._v(" "),t("p",[e._v("​")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# 添加工作区改变的文件到暂存区，尽量git add file1 file2, 不提倡 git add *\ngit add *\n# 查看当前工作区的状态\ngit status\n# 把暂存区内容放入版本库,加上 verbose 参数的话会对变化比较且显示\ngit commit --verbose\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("撰写提交信息")]),e._v(" "),t("blockquote",[t("p",[e._v("git 提交的信息非常重要\n第一行是信息摘要50字以内")])]),e._v(" "),t("p",[e._v("空一行，\n第三行罗列出改天原因，主要变动，注意事项\n切记提交有意义的 commit message")])]),e._v(" "),t("li",[t("p",[e._v("与主干同步")]),e._v(" "),t("p",[e._v("​")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# 拉取远端仓库所有变更内容到本地仓库\n# 注意和 git pull 的区别，git pull=git fetch + git merge(rebase)\ngit fetch origin\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("假设分支 myfeature 是几个人共同开发，这个时候 需要执行")]),e._v(" "),t("p",[e._v("​")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# 此操作可能会产生冲突，且解决完之后 push 的时候，可能要加上 --force 参数强制推送代码，改变提交历史记录，慎用\ngit pull --rebase\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("合并 commit\n此处的操作是最复杂的")]),e._v(" "),t("p",[e._v("​")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("#rebase 命令和 merge 相仿,-i参数表示交互模式\ngit rebase -i origin/master\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("blockquote",[t("p",[e._v("使用交互模式，可以合并同一个分支里面的多个 commit 为一个或者多个，能灵活控制 commit。\n当执行 rebase 发生冲突的时候，先解决冲突文件，使用git add 标志所有冲突为已经解决。                    最后 git rebase --continue 完成 rebase 流程")])])]),e._v(" "),t("li",[t("p",[e._v("推送代码到远端")]),e._v(" "),t("p",[e._v("​")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# push 命令加上 --force 参数，因为 rebase 之后，分支历史改变，跟远程分支不一定兼容\n# \ngit push -u origin myfeature \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("请求代码合并 merge-request")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);