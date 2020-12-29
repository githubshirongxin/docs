---
layout: post
title: json-server入门
---

## 我理解json-server干什么用的：
json-server我理解它就是一个用json全面替代数据库和后端的一个restful-api服务器。
有了它不用数据库，也不用写sql，也不用写复杂的后台逻辑。
就能够实现多个类对象的增删改查。也能维护多个类对象之间的映射关系。也能返回某页数据。也能模糊查询。

它不是专门用来mock数据给前台的。虽然能当作mock，但是功能却不如全职的mock工具强大。
它不支持json嵌套，嵌套了之后就查询不出来了。它只支持第一层属性的查询！
这说明，它就是想每个类对应一个普通的不带嵌套的json对象。


## 安装和使用
参考：
- json-server的基本全面介绍：
      https://malun666.github.io/aicoder_vip_doc/#/pages/jsonserver
- json-server如何处理一堆多，多对多关系。
   -  https://www.jianshu.com/p/9cfc5cdb0aeb // 只第一层能查询
   -  https://keyholesoftware.com/2020/03/16/mock-restful-server-fast-with-json-server/ // 实体映射

npm install -g json-server
json-server --watch --port 53000 db.json // 生成一个db.json，这就是db了。可以通过url来增删改查。

这就启动了服务。端口为53000.

## 基本使用方法
可以尝试用postman与json-server交互。
也可以用浏览器与json-server交互，只支持get协议。
也可以用程序与json-server交互。
本质上都一样。


以postman为例。

![](/docs/images/2020-12-29-12-01-16.png)

db.json先自己手写一些，保存后马上生效，不用重启json-server
```
{
  "courseList": [
    {
      "categoryId": 1,
      "categoryName": "1111",
      "courseId": "111",
      "courseName": "111"
    },
    {
      "categoryId": 2,
      "categoryName": "222",
      "courseId": "222",
      "courseName": "222"
    },
    {
      "categoryId": 3,
      "categoryName": "333",
      "courseId": "333",
      "courseName": "333"
    }
  ],
  "search": [
    {
      "categoryId": 1,
      "categoryName": "111",
      "courseId": "",
      "courseName": "111",
      "download1": "",
      "download2": "",
      "download3": "",
      "download4": "",
      "download5": "",
      "download6": "",
      "download7": "",
      "download8": "",
      "download9": "",
      "download10": "",
      "sections": [
        {
          "sectionId": "",
          "sectionName": "",
          "videos": [
            {
              "videoId": "1",
              "videoName": "111a",
              "videoPath": "",
              "videoDoneFlg": "",
              "videoDuration": ""
            },
            {
              "videoId": "2",
              "videoName": "222b",
              "videoPath": "",
              "videoDoneFlg": "",
              "videoDuration": ""
            }
          ]
        }
      ]
    },
    {
      "categoryId": 2,
      "categoryName": "333",
      "courseId": "",
      "courseName": "333",
      "download1": "",
      "download2": "",
      "download3": "",
      "download4": "",
      "download5": "",
      "download6": "",
      "download7": "",
      "download8": "",
      "download9": "",
      "download10": "",
      "sections": [
        {
          "sectionId": "",
          "sectionName": "",
          "videos": [
            {
              "videoId": "3",
              "videoName": "333a",
              "videoPath": "",
              "videoDoneFlg": "",
              "videoDuration": ""
            },
            {
              "videoId": "4",
              "videoName": "444b",
              "videoPath": "",
              "videoDoneFlg": "",
              "videoDuration": ""
            }
          ]
        }
      ]
    }
  ],
  "course": [{
    "categoryId": 1,
    "categoryName": "",
    "courseId": "111",
    "courseName": "111",
    "download1": "",
    "download2": "",
    "download3": "",
    "download4": "",
    "download5": "",
    "download6": "",
    "download7": "",
    "download8": "",
    "download9": "",
    "download10": "",
    "sections": [
      {
        "sectionId": "",
        "sectionName": "",
        "videos": [
          {
            "videoId": "",
            "videoName": "",
            "videoPath": "",
            "videoDoneFlg": "",
            "videoDuration": ""
          }
        ]
      }
    ]
  }
  ,
  {
    "categoryId": 2,
    "categoryName": "",
    "courseId": "222",
    "courseName": "222",
    "download1": "",
    "download2": "",
    "download3": "",
    "download4": "",
    "download5": "",
    "download6": "",
    "download7": "",
    "download8": "",
    "download9": "",
    "download10": "",
    "sections": [
      {
        "sectionId": "",
        "sectionName": "",
        "videos": [
          {
            "videoId": "",
            "videoName": "",
            "videoPath": "",
            "videoDoneFlg": "",
            "videoDuration": ""
          }
        ]
      }
    ]
  }
  ,
  {
    "categoryId": 3,
    "categoryName": "",
    "courseId": "333",
    "courseName": "333",
    "download1": "",
    "download2": "",
    "download3": "",
    "download4": "",
    "download5": "",
    "download6": "",
    "download7": "",
    "download8": "",
    "download9": "",
    "download10": "",
    "sections": [
      {
        "sectionId": "",
        "sectionName": "01. introduce",
        "videos": [
          {
            "videoId": "v3001",
            "videoName": "v3001",
            "videoPath": "",
            "videoDoneFlg": "",
            "videoDuration": ""
          },
          {
            "videoId": "v3002",
            "videoName": "v3002",
            "videoPath": "",
            "videoDoneFlg": "false",
            "videoDuration": ""
          }
        ]
      },
      {
        "sectionId": "",
        "sectionName": "02. forcee ",
        "videos": [
          {
            "videoId": "v3003",
            "videoName": "v3003",
            "videoPath": "",
            "videoDoneFlg": "",
            "videoDuration": ""
          },
          {
            "videoId": "v3004",
            "videoName": "v3004",
            "videoPath": "",
            "videoDoneFlg": "",
            "videoDuration": ""
          }
        ]
      }
    ]
  }
  
],
"video": {
    "videoid": "123",
    "videoPath": "",
    "videoName": "",
    "videoDoneFlg": "",
    "videoDuration": ""
  },
  "courseSchedule": [
    {
      "id": "",
      "scheduleName": "",
      "userId": "",
      "courseId": "",
      "startDate": "",
      "input1": "",
      "input2": "",
      "input3": "",
      "input4": "",
      "input5": "",
      "input6": "",
      "input7": "",
      "endDate": "",
      "donePercent": "",
      "allDuration": ""
    },
    {
      "id": "",
      "scheduleName": "",
      "userId": "",
      "courseId": "",
      "startDate": "",
      "input1": "",
      "input2": "",
      "input3": "",
      "input4": "",
      "input5": "",
      "input6": "",
      "input7": "",
      "endDate": "",
      "donePercent": "",
      "allDuration": ""
    },
    {
      "id": "www",
      "scheduleName": "www",
      "userId": "",
      "courseId": "",
      "startDate": "",
      "input1": "",
      "input2": "",
      "input3": "",
      "input4": "",
      "input5": "",
      "input6": "",
      "input7": "",
      "endDate": "",
      "donePercent": "",
      "allDuration": ""
    }
  ],
  "videoSchedule": {
    "userId": "",
    "courseId": "",
    "videoId": "",
    "planDate": "",
    "overlayFlg": ""
  }
}
```
url就是json前面的字符串。

## 程序使用json-server
把url改成http://localhost:53000（json-server的端口，可以灵活配置）即可。
然后该干啥干啥，和以前一样


