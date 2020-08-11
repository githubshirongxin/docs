(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{501:function(s,e,t){"use strict";t.r(e);var n=t(55),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("记录git使用过程中遇到的问题。持续更新。")]),s._v(" "),t("h2",{attrs:{id:"现象：git-commit-m-hello-仍旧提示-aborting-commit-due-to-empty-commit-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#现象：git-commit-m-hello-仍旧提示-aborting-commit-due-to-empty-commit-message"}},[s._v("#")]),s._v(' 现象：git commit -m"hello" 仍旧提示“Aborting commit due to empty commit message.”')]),s._v(" "),t("p",[s._v("【解决】：.git/config 下user和email清空了。我在vi补上。")]),s._v(" "),t("h2",{attrs:{id:"现象：the-authenticity-of-host-github-com-13-250-177-223-can-t-be-established"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#现象：the-authenticity-of-host-github-com-13-250-177-223-can-t-be-established"}},[s._v("#")]),s._v(" 现象：The authenticity of host 'github.com (13.250.177.223)' can't be established.")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ git push\nThe authenticity of host 'github.com (13.250.177.223)' can't be established.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("【解决】ping ping 13.250.177.223 ,已经ping不通。估计是被墙了。\nhttps://site.ip138.com/raw.Githubusercontent.com/ 输入github.com\n放到/etc/hosts里。然后执行\n"),t("code",[s._v("git push")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Warning: Permanently added the RSA host key for IP address '192.30.255.113' to the list of known hosts.\ngit@github.com: Permission denied (publickey).\nfatal: Could not read from remote repository.\n\nPlease make sure you have the correct access rights\nand the repository exists.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("【继续解决：】")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('$ ssh-keygen -t rsa -b 4096 -C "shirx@ccbjb.com.cn"\n一路回车\nGenerating public/private rsa key pair.\nEnter file in which to save the key (/c/Users/Administrator/.ssh/id_rsa):\n/c/Users/Administrator/.ssh/id_rsa already exists.\nOverwrite (y/n)? y\nEnter passphrase (empty for no passphrase):\nEnter same passphrase again:\nYour identification has been saved in /c/Users/Administrator/.ssh/id_rsa\nYour public key has been saved in /c/Users/Administrator/.ssh/id_rsa.pub\nThe key fingerprint is:\nSHA256:OC1g39FYwEiTVqjIe2YAlrRjt86vwyzadIxgrkvA+Q8 shirx@ccbjb.com.cn\nThe key\'s randomart image is:\n\ncat /c/Users/Administrator/.ssh/id_rsa.pub\nssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCoB20IkrlOigkoh0iqVwE5xWFUCnzhVSsGYSI/YxJogEzqBguI5eCnMnOGbM0+tGtNIhexO308MOxjSz90/LEdw9EoZtfmq1mUyJZ80/略\n\n拷贝到github的SSH key中\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("再试 OK了")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ git push\nEnumerating objects: 9, done.\nCounting objects: 100% (9/9), done.\nDelta compression using up to 16 threads\nCompressing objects: 100% (5/5), done.\nWriting objects: 100% (5/5), 461 bytes | 461.00 KiB/s, done.\nTotal 5 (delta 2), reused 0 (delta 0), pack-reused 0\nremote: Resolving deltas: 100% (2/2), completed with 2 local objects.\nTo github.com:githubshirongxin/githubshirongxin.github.io.git\n   844ceab..933d3b1  master -> master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);