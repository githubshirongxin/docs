---
layout: post
title: 前后台接口设计
---


## 1. DB设计

### 旧DB

- video table 视频对象，id是video_path_id
video_id  1:n video_path_id , 一条是一个视频。 video_id是？一个章节。

- detail table 章节对象 ，id是video_id
一条是一个章节

- course_list table 是课程对象， id=detail_id
一条是一个课程

- category table 是分类对象， id= category_id
一条是一个分类。

::: warning
category , detail , video, path
分类，课程，章节，视频。
:::


### 新DB 修改

category，course，section，video
categroyId，courseId，sectionId，videoId

三个表

- category
{categroyId,categoryName}
FXXXX

- course
{categroyId,courseId,courseName,sectinoId,sectionName}
KXXXX,SXXXX

- video
{categroyId,courseId,sectinoId,videoId,videoName,videoPath,videoDoneFlg,videoDuration}
VXXXX

- user
{userId,userName,其他}

- course_schedule
{scheduleId,scheduleName,userId,courseId,startDate,input1,2,3,4,5,6,7,endDate,donePercent,allDuration}

- video_schedule
{userId,courseId,videoId,planDate,overlayFlg}

---

## API设计

### A 课程一览：前台课程一览（点搜索或点Home）

#### 点Home 或者 默认初始进入，初始页
courseList/

同下

#### 点搜索
courseList?courseName="搜索输入"
- 返回：
课程列表
```json
"course": [
    {
      "categoryId": 1,
      "categoryName":"",
      "courseId":"",
      "courseName":""  
    },
    {
      "categoryId": 1,
      "categoryName":"",
      "courseId":"",
      "courseName":""      
    },
    
    ...

    {
      "categoryId": 1,
      "categoryName":"",
      "courseId":"",
      "courseName":""      
    }
]
```



### B 课程：点击具体课程"某课程页面"

- url：
/course?courseId="123" 

- 返回：
课程内容
```json
"course":{
    "categoryId": 1,
    "categoryName":"",
    "courseId":"",
    "courseName":"",
    "download1":"",
    "download2":"",
    "download3":"",
    "download4":"",
    "download5":"",
    "download6":"",
    "download7":"",
    "download8":"",
    "download9":"",
    "download10":"",
    "sections" : [
     {
       "sectionId": "",
       "sectionName":"",
       "videos":[
         {
          "videoId":"",
          "videoName":"",
          "videoPath":"",
          "videoDoneFlg":"",
          "videoDuration":""
         
         }
       ]
      
     }
    ]
}
```


### C 视频画面：
- url:
GET /video?videoId="123"

- return:
```json
 "videos": 
    {
      "videoid": "",
      "videoPath": "",
      "videoName":"",
      "videoDoneFlg": "",
      "videoDuration": ""
    }
```

#### C画面上点击mark
- 返回到B
- 发送给后台的接口 PUT
PUT /video?videoId="123"&videoDoneFlg=true

::: warning
 残课题。
:::

```json
 "videoid": "",
 "videoDoneFlg": ""
```

### 课表
course_schedule
{scheduleId,scheduleName,userId,courseId,startDate,input1,2,3,4,5,6,7,endDate,donePercent,allDuration}

video_schedule
{userId,courseId,videoId,planDate,overlayFlg}


#### 新建课表

POST /schedule

```json
{
scheduleId: "",
scheduleName: "",
userId: "",
courseId: "",
startDate: "",
input1: "",
input2: "",
intpu3: "",
intput4: "",
intput5: "",
intput6: "",
intput7: "",
endDate: "",
donePercent: "",
allDuration
}
```

#### 查询某用户的某课是否有课表,有的话返回具体某个课表。

GET /schedule?courseId=""&userId=""

```json
{userId,courseId,videoId,planDate,overlayFlg}

```

#### 课表一览

GET /schedule?userId=""

```json
[
{
scheduleId: "",
scheduleName: "",
userId: "",
courseId: "",
startDate: "",
input1: "",
input2: "",
intpu3: "",
intput4: "",
intput5: "",
intput6: "",
intput7: "",
endDate: "",
donePercent: "",
allDuration
},{
scheduleId: "",
scheduleName: "",
userId: "",
courseId: "",
startDate: "",
input1: "",
input2: "",
intpu3: "",
intput4: "",
intput5: "",
intput6: "",
intput7: "",
endDate: "",
donePercent: "",
allDuration
}
...

]

```
