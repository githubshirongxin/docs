(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{535:function(v,_,e){"use strict";e.r(_);var r=e(55),t=Object(r.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("win10 开机启动vmware并自动启动虚机\n思路")]),v._v(" "),e("p",[v._v("先实现程序或者命令启动VM并启动虚机，然后再开机启动这个程序。")]),v._v(" "),e("p",[v._v("1.实现一键启动VM和虚机")]),v._v(" "),e("p",[v._v("找了一圈的资料，有两个方法，都测试了，最终比较有效的是下面这个命令")]),v._v(" "),e("p",[v._v('"C:\\Program Files (x86)\\VMware\\VMware Workstation\\vmware.exe" -x "D:\\centos701\\centos701.vmx"')]),v._v(" "),e("p",[v._v("第一个地址为VM的安装程序exe的完整路径")]),v._v(" "),e("p",[v._v("第二个地址为虚机的vmx完整路径。")]),v._v(" "),e("p",[v._v("为了确认这个语句是否正确，最好先在控制台或【运行】上试一遍。如果能够成功则进行下一步。")]),v._v(" "),e("p",[v._v("2.设置开机启动")]),v._v(" "),e("p",[v._v("有了运行命令，接下来就是程序以什么方式启动，有以服务的形式、以开机启动的方式、以任务计划的方式。")]),v._v(" "),e("p",[v._v("由于程序启动后需要界面查看，所以只能以开机启动的方式。")]),v._v(" "),e("p",[v._v("win10的开机启动程序的路径为")]),v._v(" "),e("p",[v._v("C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\StartUp")]),v._v(" "),e("p",[v._v("剩下的就是把命令变成bat或快捷方式。下面介绍快捷方式的方法，设置完成后，重启设备查看是否成功。")]),v._v(" "),e("p",[v._v("【快捷方式】")]),v._v(" "),e("p",[v._v('右键，新建快捷方式，地址输入"C:\\Program Files (x86)\\VMware\\VMware Workstation\\vmware.exe"')]),v._v(" "),e("p",[v._v("快捷方式名称：VM自动启动虚机")]),v._v(" "),e("p",[v._v('然后生成了，生成了之后右键属性。把目标改成刚刚运行过的"C:\\Program Files (x86)\\VMware\\VMware Workstation\\vmware.exe" -x "D:\\centos701\\centos701.vmx"。')]),v._v(" "),e("p",[v._v("3.win10自动登录")]),v._v(" "),e("p",[v._v("本来事情到此处应该就算结束了。但是如果是一台远程的电脑，启动Windows之后，虚机是无法运行的，因为启动程序是需要账户登录的。")]),v._v(" "),e("p",[v._v("所以接下来要解决的就是如何win10自动登录的问题。")]),v._v(" "),e("p",[v._v("比较好的方式是通过注册表")]),v._v(" "),e("p",[v._v("在【运行】窗口中，输入命令regedit，")]),v._v(" "),e("p",[v._v("在注册表编辑器窗口中定位到：计算机\\HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Winlogon （直接把地址复制过去）")]),v._v(" "),e("p",[v._v("右侧窗口中找到AutoAdminLogon注册表键值，修改键值为1")]),v._v(" "),e("p",[v._v("右侧窗口中找到DefaultUserName注册表键值，修改键值为登录的用户名")]),v._v(" "),e("p",[v._v("右侧窗口中找到DefaultPassword注册表键值，修改键值为登录的密码（没有这个键则自己创建一个）")])])}),[],!1,null,null,null);_.default=t.exports}}]);