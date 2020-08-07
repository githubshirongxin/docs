(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{502:function(s,a,t){"use strict";t.r(a);var e=t(55),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("我的md文件希望同时push到github的blog，和gitlab的blog。\n如果其它blog支持git那也同时push（估计不支持）")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 1 ，新增加一个远端仓库，提交\ngit remote add XXOrigin git@xxx.git //增加一个库\ngit push XXOrigin develop //提交到某个别的分支\n\n// 2， 再次执行，提交到默认仓库\ngit push //提交到默认分支\n// 或者\ngit push Origin master // 提交到默认库的master分支\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("git提交本地分支到远程分支")]),s._v(" "),t("p",[s._v("git 常用命令(含删除文件)\nGit常用操作命令收集：")]),s._v(" "),t("h2",{attrs:{id:"_1-远程仓库相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-远程仓库相关命令"}},[s._v("#")]),s._v(" 1) 远程仓库相关命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("检出仓库：$ git clone git://github.com/jquery/jquery.git\n查看远程仓库：$ git remote -v\n添加远程仓库：$ git remote add [name] [url]\n删除远程仓库：$ git remote rm [name]\n修改远程仓库：$ git remote set-url --push[name][newUrl]\n拉取远程仓库：$ git pull [remoteName] [localBranchName]\n推送远程仓库：$ git push [remoteName] [localBranchName]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"_2）分支-branch-操作相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2）分支-branch-操作相关命令"}},[s._v("#")]),s._v(" 2）分支(branch)操作相关命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("查看本地分支：$ git branch\n查看远程分支：$ git branch -r\n创建本地分支：$ git branch [name] ----注意新分支创建后不会自动切换为当前分支\n切换分支：$ git checkout [name]\n创建新分支并立即切换到新分支：$ git checkout -b [name]\n删除分支：$ git branch -d [name] ---- -d选项只能删除已经参与了合并的分支，对于未有合并的分支是无法删除的。如果想强制删除一个分支，可以使用-D选项\n合并分支：$ git merge [name] ----将名称为[name]的分支与当前分支合并\n创建远程分支(本地分支push到远程)：$ git push origin [name]\n删除远程分支：$ git push origin :heads/[name]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("blockquote",[t("p",[s._v("我从master分支创建了一个issue5560分支，做了一些修改后，使用"),t("code",[s._v("git push origin master")]),s._v("提交，但是显示的结果却是'Everything up-to-date'，")]),s._v(" "),t("p",[s._v("发生问题的原因是git push origin master 在没有track远程分支的本地分支中默认提交的master分支，因为master分支默认指向了origin master 分支，这里要使用"),t("code",[s._v("git push origin issue5560：master")]),s._v(" 就可以把issue5560推送到远程的master分支了。")])]),s._v(" "),t("p",[s._v("如果想把本地的某个分支test提交到远程仓库，并作为远程仓库的master分支，或者作为另外一个名叫test的分支，那么可以这么做。")]),s._v(" "),t("p",[s._v("// 提交本地test分支作为远程的master分支\n//好像只写这一句，远程的github就会自动创建一个test分支")]),s._v(" "),t("p",[t("code",[s._v("$ git push origin test:master")])]),s._v(" "),t("p",[s._v("// 提交本地test分支作为远程的test分支")]),s._v(" "),t("p",[t("code",[s._v("$ git push origin test:test")])]),s._v(" "),t("p",[s._v("如果想删除远程的分支呢？类似于上面，如果:左边的分支为空，那么将删除:右边的远程的分支。")]),s._v(" "),t("p",[t("code",[s._v("$ git push origin :test // 刚提交到远程的test将被删除，但是本地还会保存的，不用担心")])]),s._v(" "),t("h2",{attrs:{id:"_3）版本-tag-操作相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3）版本-tag-操作相关命令"}},[s._v("#")]),s._v(" 3）版本(tag)操作相关命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("查看版本：$ git tag\n创建版本：$ git tag [name]\n删除版本：$ git tag -d [name]\n查看远程版本：$ git tag -r\n创建远程版本(本地版本push到远程)：$ git push origin [name]\n删除远程版本：$ git push origin :refs/tags/[name]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"_4-子模块-submodule-相关操作命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-子模块-submodule-相关操作命令"}},[s._v("#")]),s._v(" 4) 子模块(submodule)相关操作命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("添加子模块：$ git submodule add [url] [path]\n如：$ git submodule add git://github.com/soberh/ui-libs.git src/main/webapp/ui-libs\n初始化子模块：$ git submodule init ----只在首次检出仓库时运行一次就行\n更新子模块：$ git submodule update ----每次更新或切换分支后都需要运行一下\n删除子模块：（分4步走哦）\n1)$ git rm --cached [path]\n2) 编辑“.gitmodules”文件，将子模块的相关配置节点删除掉\n3) 编辑“.git/config”文件，将子模块的相关配置节点删除掉\n4) 手动删除子模块残留的目录\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"_5）忽略一些文件、文件夹不提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5）忽略一些文件、文件夹不提交"}},[s._v("#")]),s._v(" 5）忽略一些文件、文件夹不提交")]),s._v(" "),t("p",[s._v("在仓库根目录下创建名称为“.gitignore”的文件，写入不需要的文件夹名或文件，每个元素占一行即可，如")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("target\nbin\n*.db\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);