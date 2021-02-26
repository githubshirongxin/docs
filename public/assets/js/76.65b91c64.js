(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{558:function(n,s,a){"use strict";a.r(s);var e=a(59),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"我理解json-server干什么用的："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我理解json-server干什么用的："}},[n._v("#")]),n._v(" 我理解json-server干什么用的：")]),n._v(" "),a("p",[n._v("json-server我理解它就是一个用json全面替代数据库和后端的一个restful-api服务器。\n有了它不用数据库，也不用写sql，也不用写复杂的后台逻辑。\n就能够实现多个类对象的增删改查。也能维护多个类对象之间的映射关系。也能返回某页数据。也能模糊查询。")]),n._v(" "),a("p",[n._v("它不是专门用来mock数据给前台的。虽然能当作mock，但是功能却不如全职的mock工具强大。\n它不支持json嵌套，嵌套了之后就查询不出来了。它只支持第一层属性的查询！\n这说明，它就是想每个类对应一个普通的不带嵌套的json对象。")]),n._v(" "),a("h2",{attrs:{id:"安装和使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装和使用"}},[n._v("#")]),n._v(" 安装和使用")]),n._v(" "),a("p",[n._v("参考：")]),n._v(" "),a("ul",[a("li",[n._v("json-server的基本全面介绍：\nhttps://malun666.github.io/aicoder_vip_doc/#/pages/jsonserver")]),n._v(" "),a("li",[n._v("json-server如何处理一堆多，多对多关系。\n"),a("ul",[a("li",[n._v("https://www.jianshu.com/p/9cfc5cdb0aeb // 只第一层能查询")]),n._v(" "),a("li",[n._v("https://keyholesoftware.com/2020/03/16/mock-restful-server-fast-with-json-server/ // 实体映射")])])])]),n._v(" "),a("p",[n._v("npm install -g json-server\njson-server --watch --port 53000 db.json // 生成一个db.json，这就是db了。可以通过url来增删改查。")]),n._v(" "),a("p",[n._v("这就启动了服务。端口为53000.")]),n._v(" "),a("h2",{attrs:{id:"基本使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用方法"}},[n._v("#")]),n._v(" 基本使用方法")]),n._v(" "),a("p",[n._v("可以尝试用postman与json-server交互。\n也可以用浏览器与json-server交互，只支持get协议。\n也可以用程序与json-server交互。\n本质上都一样。")]),n._v(" "),a("p",[n._v("以postman为例。")]),n._v(" "),a("p",[a("img",{attrs:{src:"/docs/images/2020-12-29-12-01-16.png",alt:""}})]),n._v(" "),a("p",[n._v("db.json先自己手写一些，保存后马上生效，不用重启json-server")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('{\n  "courseList": [\n    {\n      "categoryId": 1,\n      "categoryName": "1111",\n      "courseId": "111",\n      "courseName": "111"\n    },\n    {\n      "categoryId": 2,\n      "categoryName": "222",\n      "courseId": "222",\n      "courseName": "222"\n    },\n    {\n      "categoryId": 3,\n      "categoryName": "333",\n      "courseId": "333",\n      "courseName": "333"\n    }\n  ],\n  "search": [\n    {\n      "categoryId": 1,\n      "categoryName": "111",\n      "courseId": "",\n      "courseName": "111",\n      "download1": "",\n      "download2": "",\n      "download3": "",\n      "download4": "",\n      "download5": "",\n      "download6": "",\n      "download7": "",\n      "download8": "",\n      "download9": "",\n      "download10": "",\n      "sections": [\n        {\n          "sectionId": "",\n          "sectionName": "",\n          "videos": [\n            {\n              "videoId": "1",\n              "videoName": "111a",\n              "videoPath": "",\n              "videoDoneFlg": "",\n              "videoDuration": ""\n            },\n            {\n              "videoId": "2",\n              "videoName": "222b",\n              "videoPath": "",\n              "videoDoneFlg": "",\n              "videoDuration": ""\n            }\n          ]\n        }\n      ]\n    },\n    {\n      "categoryId": 2,\n      "categoryName": "333",\n      "courseId": "",\n      "courseName": "333",\n      "download1": "",\n      "download2": "",\n      "download3": "",\n      "download4": "",\n      "download5": "",\n      "download6": "",\n      "download7": "",\n      "download8": "",\n      "download9": "",\n      "download10": "",\n      "sections": [\n        {\n          "sectionId": "",\n          "sectionName": "",\n          "videos": [\n            {\n              "videoId": "3",\n              "videoName": "333a",\n              "videoPath": "",\n              "videoDoneFlg": "",\n              "videoDuration": ""\n            },\n            {\n              "videoId": "4",\n              "videoName": "444b",\n              "videoPath": "",\n              "videoDoneFlg": "",\n              "videoDuration": ""\n            }\n          ]\n        }\n      ]\n    }\n  ],\n  "course": [{\n    "categoryId": 1,\n    "categoryName": "",\n    "courseId": "111",\n    "courseName": "111",\n    "download1": "",\n    "download2": "",\n    "download3": "",\n    "download4": "",\n    "download5": "",\n    "download6": "",\n    "download7": "",\n    "download8": "",\n    "download9": "",\n    "download10": "",\n    "sections": [\n      {\n        "sectionId": "",\n        "sectionName": "",\n        "videos": [\n          {\n            "videoId": "",\n            "videoName": "",\n            "videoPath": "",\n            "videoDoneFlg": "",\n            "videoDuration": ""\n          }\n        ]\n      }\n    ]\n  }\n  ,\n  {\n    "categoryId": 2,\n    "categoryName": "",\n    "courseId": "222",\n    "courseName": "222",\n    "download1": "",\n    "download2": "",\n    "download3": "",\n    "download4": "",\n    "download5": "",\n    "download6": "",\n    "download7": "",\n    "download8": "",\n    "download9": "",\n    "download10": "",\n    "sections": [\n      {\n        "sectionId": "",\n        "sectionName": "",\n        "videos": [\n          {\n            "videoId": "",\n            "videoName": "",\n            "videoPath": "",\n            "videoDoneFlg": "",\n            "videoDuration": ""\n          }\n        ]\n      }\n    ]\n  }\n  ,\n  {\n    "categoryId": 3,\n    "categoryName": "",\n    "courseId": "333",\n    "courseName": "333",\n    "download1": "",\n    "download2": "",\n    "download3": "",\n    "download4": "",\n    "download5": "",\n    "download6": "",\n    "download7": "",\n    "download8": "",\n    "download9": "",\n    "download10": "",\n    "sections": [\n      {\n        "sectionId": "",\n        "sectionName": "01. introduce",\n        "videos": [\n          {\n            "videoId": "v3001",\n            "videoName": "v3001",\n            "videoPath": "",\n            "videoDoneFlg": "",\n            "videoDuration": ""\n          },\n          {\n            "videoId": "v3002",\n            "videoName": "v3002",\n            "videoPath": "",\n            "videoDoneFlg": "false",\n            "videoDuration": ""\n          }\n        ]\n      },\n      {\n        "sectionId": "",\n        "sectionName": "02. forcee ",\n        "videos": [\n          {\n            "videoId": "v3003",\n            "videoName": "v3003",\n            "videoPath": "",\n            "videoDoneFlg": "",\n            "videoDuration": ""\n          },\n          {\n            "videoId": "v3004",\n            "videoName": "v3004",\n            "videoPath": "",\n            "videoDoneFlg": "",\n            "videoDuration": ""\n          }\n        ]\n      }\n    ]\n  }\n  \n],\n"video": {\n    "videoid": "123",\n    "videoPath": "",\n    "videoName": "",\n    "videoDoneFlg": "",\n    "videoDuration": ""\n  },\n  "courseSchedule": [\n    {\n      "id": "",\n      "scheduleName": "",\n      "userId": "",\n      "courseId": "",\n      "startDate": "",\n      "input1": "",\n      "input2": "",\n      "input3": "",\n      "input4": "",\n      "input5": "",\n      "input6": "",\n      "input7": "",\n      "endDate": "",\n      "donePercent": "",\n      "allDuration": ""\n    },\n    {\n      "id": "",\n      "scheduleName": "",\n      "userId": "",\n      "courseId": "",\n      "startDate": "",\n      "input1": "",\n      "input2": "",\n      "input3": "",\n      "input4": "",\n      "input5": "",\n      "input6": "",\n      "input7": "",\n      "endDate": "",\n      "donePercent": "",\n      "allDuration": ""\n    },\n    {\n      "id": "www",\n      "scheduleName": "www",\n      "userId": "",\n      "courseId": "",\n      "startDate": "",\n      "input1": "",\n      "input2": "",\n      "input3": "",\n      "input4": "",\n      "input5": "",\n      "input6": "",\n      "input7": "",\n      "endDate": "",\n      "donePercent": "",\n      "allDuration": ""\n    }\n  ],\n  "videoSchedule": {\n    "userId": "",\n    "courseId": "",\n    "videoId": "",\n    "planDate": "",\n    "overlayFlg": ""\n  }\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br"),a("span",{staticClass:"line-number"},[n._v("68")]),a("br"),a("span",{staticClass:"line-number"},[n._v("69")]),a("br"),a("span",{staticClass:"line-number"},[n._v("70")]),a("br"),a("span",{staticClass:"line-number"},[n._v("71")]),a("br"),a("span",{staticClass:"line-number"},[n._v("72")]),a("br"),a("span",{staticClass:"line-number"},[n._v("73")]),a("br"),a("span",{staticClass:"line-number"},[n._v("74")]),a("br"),a("span",{staticClass:"line-number"},[n._v("75")]),a("br"),a("span",{staticClass:"line-number"},[n._v("76")]),a("br"),a("span",{staticClass:"line-number"},[n._v("77")]),a("br"),a("span",{staticClass:"line-number"},[n._v("78")]),a("br"),a("span",{staticClass:"line-number"},[n._v("79")]),a("br"),a("span",{staticClass:"line-number"},[n._v("80")]),a("br"),a("span",{staticClass:"line-number"},[n._v("81")]),a("br"),a("span",{staticClass:"line-number"},[n._v("82")]),a("br"),a("span",{staticClass:"line-number"},[n._v("83")]),a("br"),a("span",{staticClass:"line-number"},[n._v("84")]),a("br"),a("span",{staticClass:"line-number"},[n._v("85")]),a("br"),a("span",{staticClass:"line-number"},[n._v("86")]),a("br"),a("span",{staticClass:"line-number"},[n._v("87")]),a("br"),a("span",{staticClass:"line-number"},[n._v("88")]),a("br"),a("span",{staticClass:"line-number"},[n._v("89")]),a("br"),a("span",{staticClass:"line-number"},[n._v("90")]),a("br"),a("span",{staticClass:"line-number"},[n._v("91")]),a("br"),a("span",{staticClass:"line-number"},[n._v("92")]),a("br"),a("span",{staticClass:"line-number"},[n._v("93")]),a("br"),a("span",{staticClass:"line-number"},[n._v("94")]),a("br"),a("span",{staticClass:"line-number"},[n._v("95")]),a("br"),a("span",{staticClass:"line-number"},[n._v("96")]),a("br"),a("span",{staticClass:"line-number"},[n._v("97")]),a("br"),a("span",{staticClass:"line-number"},[n._v("98")]),a("br"),a("span",{staticClass:"line-number"},[n._v("99")]),a("br"),a("span",{staticClass:"line-number"},[n._v("100")]),a("br"),a("span",{staticClass:"line-number"},[n._v("101")]),a("br"),a("span",{staticClass:"line-number"},[n._v("102")]),a("br"),a("span",{staticClass:"line-number"},[n._v("103")]),a("br"),a("span",{staticClass:"line-number"},[n._v("104")]),a("br"),a("span",{staticClass:"line-number"},[n._v("105")]),a("br"),a("span",{staticClass:"line-number"},[n._v("106")]),a("br"),a("span",{staticClass:"line-number"},[n._v("107")]),a("br"),a("span",{staticClass:"line-number"},[n._v("108")]),a("br"),a("span",{staticClass:"line-number"},[n._v("109")]),a("br"),a("span",{staticClass:"line-number"},[n._v("110")]),a("br"),a("span",{staticClass:"line-number"},[n._v("111")]),a("br"),a("span",{staticClass:"line-number"},[n._v("112")]),a("br"),a("span",{staticClass:"line-number"},[n._v("113")]),a("br"),a("span",{staticClass:"line-number"},[n._v("114")]),a("br"),a("span",{staticClass:"line-number"},[n._v("115")]),a("br"),a("span",{staticClass:"line-number"},[n._v("116")]),a("br"),a("span",{staticClass:"line-number"},[n._v("117")]),a("br"),a("span",{staticClass:"line-number"},[n._v("118")]),a("br"),a("span",{staticClass:"line-number"},[n._v("119")]),a("br"),a("span",{staticClass:"line-number"},[n._v("120")]),a("br"),a("span",{staticClass:"line-number"},[n._v("121")]),a("br"),a("span",{staticClass:"line-number"},[n._v("122")]),a("br"),a("span",{staticClass:"line-number"},[n._v("123")]),a("br"),a("span",{staticClass:"line-number"},[n._v("124")]),a("br"),a("span",{staticClass:"line-number"},[n._v("125")]),a("br"),a("span",{staticClass:"line-number"},[n._v("126")]),a("br"),a("span",{staticClass:"line-number"},[n._v("127")]),a("br"),a("span",{staticClass:"line-number"},[n._v("128")]),a("br"),a("span",{staticClass:"line-number"},[n._v("129")]),a("br"),a("span",{staticClass:"line-number"},[n._v("130")]),a("br"),a("span",{staticClass:"line-number"},[n._v("131")]),a("br"),a("span",{staticClass:"line-number"},[n._v("132")]),a("br"),a("span",{staticClass:"line-number"},[n._v("133")]),a("br"),a("span",{staticClass:"line-number"},[n._v("134")]),a("br"),a("span",{staticClass:"line-number"},[n._v("135")]),a("br"),a("span",{staticClass:"line-number"},[n._v("136")]),a("br"),a("span",{staticClass:"line-number"},[n._v("137")]),a("br"),a("span",{staticClass:"line-number"},[n._v("138")]),a("br"),a("span",{staticClass:"line-number"},[n._v("139")]),a("br"),a("span",{staticClass:"line-number"},[n._v("140")]),a("br"),a("span",{staticClass:"line-number"},[n._v("141")]),a("br"),a("span",{staticClass:"line-number"},[n._v("142")]),a("br"),a("span",{staticClass:"line-number"},[n._v("143")]),a("br"),a("span",{staticClass:"line-number"},[n._v("144")]),a("br"),a("span",{staticClass:"line-number"},[n._v("145")]),a("br"),a("span",{staticClass:"line-number"},[n._v("146")]),a("br"),a("span",{staticClass:"line-number"},[n._v("147")]),a("br"),a("span",{staticClass:"line-number"},[n._v("148")]),a("br"),a("span",{staticClass:"line-number"},[n._v("149")]),a("br"),a("span",{staticClass:"line-number"},[n._v("150")]),a("br"),a("span",{staticClass:"line-number"},[n._v("151")]),a("br"),a("span",{staticClass:"line-number"},[n._v("152")]),a("br"),a("span",{staticClass:"line-number"},[n._v("153")]),a("br"),a("span",{staticClass:"line-number"},[n._v("154")]),a("br"),a("span",{staticClass:"line-number"},[n._v("155")]),a("br"),a("span",{staticClass:"line-number"},[n._v("156")]),a("br"),a("span",{staticClass:"line-number"},[n._v("157")]),a("br"),a("span",{staticClass:"line-number"},[n._v("158")]),a("br"),a("span",{staticClass:"line-number"},[n._v("159")]),a("br"),a("span",{staticClass:"line-number"},[n._v("160")]),a("br"),a("span",{staticClass:"line-number"},[n._v("161")]),a("br"),a("span",{staticClass:"line-number"},[n._v("162")]),a("br"),a("span",{staticClass:"line-number"},[n._v("163")]),a("br"),a("span",{staticClass:"line-number"},[n._v("164")]),a("br"),a("span",{staticClass:"line-number"},[n._v("165")]),a("br"),a("span",{staticClass:"line-number"},[n._v("166")]),a("br"),a("span",{staticClass:"line-number"},[n._v("167")]),a("br"),a("span",{staticClass:"line-number"},[n._v("168")]),a("br"),a("span",{staticClass:"line-number"},[n._v("169")]),a("br"),a("span",{staticClass:"line-number"},[n._v("170")]),a("br"),a("span",{staticClass:"line-number"},[n._v("171")]),a("br"),a("span",{staticClass:"line-number"},[n._v("172")]),a("br"),a("span",{staticClass:"line-number"},[n._v("173")]),a("br"),a("span",{staticClass:"line-number"},[n._v("174")]),a("br"),a("span",{staticClass:"line-number"},[n._v("175")]),a("br"),a("span",{staticClass:"line-number"},[n._v("176")]),a("br"),a("span",{staticClass:"line-number"},[n._v("177")]),a("br"),a("span",{staticClass:"line-number"},[n._v("178")]),a("br"),a("span",{staticClass:"line-number"},[n._v("179")]),a("br"),a("span",{staticClass:"line-number"},[n._v("180")]),a("br"),a("span",{staticClass:"line-number"},[n._v("181")]),a("br"),a("span",{staticClass:"line-number"},[n._v("182")]),a("br"),a("span",{staticClass:"line-number"},[n._v("183")]),a("br"),a("span",{staticClass:"line-number"},[n._v("184")]),a("br"),a("span",{staticClass:"line-number"},[n._v("185")]),a("br"),a("span",{staticClass:"line-number"},[n._v("186")]),a("br"),a("span",{staticClass:"line-number"},[n._v("187")]),a("br"),a("span",{staticClass:"line-number"},[n._v("188")]),a("br"),a("span",{staticClass:"line-number"},[n._v("189")]),a("br"),a("span",{staticClass:"line-number"},[n._v("190")]),a("br"),a("span",{staticClass:"line-number"},[n._v("191")]),a("br"),a("span",{staticClass:"line-number"},[n._v("192")]),a("br"),a("span",{staticClass:"line-number"},[n._v("193")]),a("br"),a("span",{staticClass:"line-number"},[n._v("194")]),a("br"),a("span",{staticClass:"line-number"},[n._v("195")]),a("br"),a("span",{staticClass:"line-number"},[n._v("196")]),a("br"),a("span",{staticClass:"line-number"},[n._v("197")]),a("br"),a("span",{staticClass:"line-number"},[n._v("198")]),a("br"),a("span",{staticClass:"line-number"},[n._v("199")]),a("br"),a("span",{staticClass:"line-number"},[n._v("200")]),a("br"),a("span",{staticClass:"line-number"},[n._v("201")]),a("br"),a("span",{staticClass:"line-number"},[n._v("202")]),a("br"),a("span",{staticClass:"line-number"},[n._v("203")]),a("br"),a("span",{staticClass:"line-number"},[n._v("204")]),a("br"),a("span",{staticClass:"line-number"},[n._v("205")]),a("br"),a("span",{staticClass:"line-number"},[n._v("206")]),a("br"),a("span",{staticClass:"line-number"},[n._v("207")]),a("br"),a("span",{staticClass:"line-number"},[n._v("208")]),a("br"),a("span",{staticClass:"line-number"},[n._v("209")]),a("br"),a("span",{staticClass:"line-number"},[n._v("210")]),a("br"),a("span",{staticClass:"line-number"},[n._v("211")]),a("br"),a("span",{staticClass:"line-number"},[n._v("212")]),a("br"),a("span",{staticClass:"line-number"},[n._v("213")]),a("br"),a("span",{staticClass:"line-number"},[n._v("214")]),a("br"),a("span",{staticClass:"line-number"},[n._v("215")]),a("br"),a("span",{staticClass:"line-number"},[n._v("216")]),a("br"),a("span",{staticClass:"line-number"},[n._v("217")]),a("br"),a("span",{staticClass:"line-number"},[n._v("218")]),a("br"),a("span",{staticClass:"line-number"},[n._v("219")]),a("br"),a("span",{staticClass:"line-number"},[n._v("220")]),a("br"),a("span",{staticClass:"line-number"},[n._v("221")]),a("br"),a("span",{staticClass:"line-number"},[n._v("222")]),a("br"),a("span",{staticClass:"line-number"},[n._v("223")]),a("br"),a("span",{staticClass:"line-number"},[n._v("224")]),a("br"),a("span",{staticClass:"line-number"},[n._v("225")]),a("br"),a("span",{staticClass:"line-number"},[n._v("226")]),a("br"),a("span",{staticClass:"line-number"},[n._v("227")]),a("br"),a("span",{staticClass:"line-number"},[n._v("228")]),a("br"),a("span",{staticClass:"line-number"},[n._v("229")]),a("br"),a("span",{staticClass:"line-number"},[n._v("230")]),a("br"),a("span",{staticClass:"line-number"},[n._v("231")]),a("br"),a("span",{staticClass:"line-number"},[n._v("232")]),a("br"),a("span",{staticClass:"line-number"},[n._v("233")]),a("br"),a("span",{staticClass:"line-number"},[n._v("234")]),a("br"),a("span",{staticClass:"line-number"},[n._v("235")]),a("br"),a("span",{staticClass:"line-number"},[n._v("236")]),a("br"),a("span",{staticClass:"line-number"},[n._v("237")]),a("br"),a("span",{staticClass:"line-number"},[n._v("238")]),a("br"),a("span",{staticClass:"line-number"},[n._v("239")]),a("br"),a("span",{staticClass:"line-number"},[n._v("240")]),a("br"),a("span",{staticClass:"line-number"},[n._v("241")]),a("br"),a("span",{staticClass:"line-number"},[n._v("242")]),a("br"),a("span",{staticClass:"line-number"},[n._v("243")]),a("br"),a("span",{staticClass:"line-number"},[n._v("244")]),a("br"),a("span",{staticClass:"line-number"},[n._v("245")]),a("br"),a("span",{staticClass:"line-number"},[n._v("246")]),a("br"),a("span",{staticClass:"line-number"},[n._v("247")]),a("br"),a("span",{staticClass:"line-number"},[n._v("248")]),a("br"),a("span",{staticClass:"line-number"},[n._v("249")]),a("br"),a("span",{staticClass:"line-number"},[n._v("250")]),a("br"),a("span",{staticClass:"line-number"},[n._v("251")]),a("br"),a("span",{staticClass:"line-number"},[n._v("252")]),a("br"),a("span",{staticClass:"line-number"},[n._v("253")]),a("br"),a("span",{staticClass:"line-number"},[n._v("254")]),a("br"),a("span",{staticClass:"line-number"},[n._v("255")]),a("br"),a("span",{staticClass:"line-number"},[n._v("256")]),a("br"),a("span",{staticClass:"line-number"},[n._v("257")]),a("br"),a("span",{staticClass:"line-number"},[n._v("258")]),a("br"),a("span",{staticClass:"line-number"},[n._v("259")]),a("br"),a("span",{staticClass:"line-number"},[n._v("260")]),a("br"),a("span",{staticClass:"line-number"},[n._v("261")]),a("br"),a("span",{staticClass:"line-number"},[n._v("262")]),a("br"),a("span",{staticClass:"line-number"},[n._v("263")]),a("br"),a("span",{staticClass:"line-number"},[n._v("264")]),a("br"),a("span",{staticClass:"line-number"},[n._v("265")]),a("br"),a("span",{staticClass:"line-number"},[n._v("266")]),a("br"),a("span",{staticClass:"line-number"},[n._v("267")]),a("br"),a("span",{staticClass:"line-number"},[n._v("268")]),a("br"),a("span",{staticClass:"line-number"},[n._v("269")]),a("br"),a("span",{staticClass:"line-number"},[n._v("270")]),a("br"),a("span",{staticClass:"line-number"},[n._v("271")]),a("br"),a("span",{staticClass:"line-number"},[n._v("272")]),a("br"),a("span",{staticClass:"line-number"},[n._v("273")]),a("br"),a("span",{staticClass:"line-number"},[n._v("274")]),a("br"),a("span",{staticClass:"line-number"},[n._v("275")]),a("br"),a("span",{staticClass:"line-number"},[n._v("276")]),a("br"),a("span",{staticClass:"line-number"},[n._v("277")]),a("br"),a("span",{staticClass:"line-number"},[n._v("278")]),a("br"),a("span",{staticClass:"line-number"},[n._v("279")]),a("br"),a("span",{staticClass:"line-number"},[n._v("280")]),a("br"),a("span",{staticClass:"line-number"},[n._v("281")]),a("br"),a("span",{staticClass:"line-number"},[n._v("282")]),a("br"),a("span",{staticClass:"line-number"},[n._v("283")]),a("br"),a("span",{staticClass:"line-number"},[n._v("284")]),a("br"),a("span",{staticClass:"line-number"},[n._v("285")]),a("br"),a("span",{staticClass:"line-number"},[n._v("286")]),a("br"),a("span",{staticClass:"line-number"},[n._v("287")]),a("br"),a("span",{staticClass:"line-number"},[n._v("288")]),a("br"),a("span",{staticClass:"line-number"},[n._v("289")]),a("br"),a("span",{staticClass:"line-number"},[n._v("290")]),a("br"),a("span",{staticClass:"line-number"},[n._v("291")]),a("br")])]),a("p",[n._v("url就是json前面的字符串。")]),n._v(" "),a("h2",{attrs:{id:"程序使用json-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#程序使用json-server"}},[n._v("#")]),n._v(" 程序使用json-server")]),n._v(" "),a("p",[n._v("把url改成http://localhost:53000（json-server的端口，可以灵活配置）即可。\n然后该干啥干啥，和以前一样")])])}),[],!1,null,null,null);s.default=t.exports}}]);