const express = require('express')
const cors = require('cors')

const app = express()

// 使用cors, 允许跨域
app.use(cors())
// 能解析urlencode格式的post请求体参数
app.use(express.urlencoded())
// 能解析json格式的请求体参数
app.use(express.json())

app.get('/fenlei', (req, res) => {
  
  setTimeout(() => {
    res.send([
      {
        "id": 1,
        "title": "有声书",
        "author": "typicode",
        "coverPath": "http://fdfs.xmcdn.com/group13/M07/77/51/wKgDXlYDXcKRfiFkAADtrVK2Q1w653.png"
      },
      {
        "id": 3,
        "title": "相声评书",
        "author": "typicode",
        "coverPath": "http://fdfs.xmcdn.com/group14/M08/76/EE/wKgDZFYDXg-BHq02AABPSsDv8kM964.png"
      },
      {
        "id": 4,
        "title": "历史",
        "author": "typicode",
        "coverPath": "http://fdfs.xmcdn.com/group14/M08/76/EE/wKgDZFYDXg-BHq02AABPSsDv8kM964.png"
      },
      {
        "id": 5,
        "title": "娱乐",
        "author": "typicode",
        "coverPath":"http://fdfs.xmcdn.com/group31/M01/E0/A4/wKgJSVmS0B7AmC4sAAAGed3MxIY273.jpg",
      },
      {
        "id": 6,
        "title": "国学书院",
        "author": "typicode",
        "coverPath": "http://fdfs.xmcdn.com/group19/M00/39/7E/wKgJK1fqO_SjW4HNAAAG4eALmVg620.jpg"
      }
    ])
  }, 1000 + Math.random()*2000);
  
})

app.get('/bangdan', (req, res) => {

  setTimeout(() => {
    res.send(
      {
      "isAllPaid": false,
      "coverPath": "http://fdfs.xmcdn.com/group37/M0A/A9/C0/wKgJoFpCOvjxj8zjAABWkqxY2as682.jpg",
      "title": "喜马拉雅最热合集",
      "subtitle": "80%的用户都在听的好内容",
      "key": "1_163_ranking:album:playedEndUsers:30:0",
      "firstId": 7,
      "firstTitle": "鲜快报",
      "calcPeriod": "月榜",
      "top": 100,
      "firstKResults": [
          {
              "id": 7,
              "title": "鲜快报",
              "contentType": "album"
          },
          {
              "id": 8,
              "title": "郭德纲21年相声精选",
              "contentType": "album"
          },
          {
              "id":9,
              "title": "读者",
              "contentType": "album"
          }
      ]
  },
  {
    "coverPath": "http://fdfs.xmcdn.com/group37/M0A/A9/C0/wKgJoFpCOvjxj8zjAABWkqxY2as682.jpg",
    "title": "喜马拉雅最热合集",
    "subtitle": "80%的用户都在听的好内容",
    "key": "1_163_ranking:album:playedEndUsers:30:0",
    "firstId": 8,
    "firstTitle": "摸金天师【紫襟演播】",
    "calcPeriod": "月榜",
    "top": 100,
    "firstKResults": [
      {
        "id": 4756811,
        "title": "摸金天师【紫襟演播】",
        "contentType": "album"
    },
    {
      "id": 12642314,
      "title": "猎罪者（阴间神探 | 紫襟演播）",
      "contentType": "album"
  },
    {
    "id": 19383749,
    "title": "王的女人谁敢动｜爆笑古言穿越（免费双播精品）",
    "contentType": "album"
   }
    ]
},
{
  "coverPath": "http://fdfs.xmcdn.com/group7/M05/6E/5F/wKgDWlc6_cDSLN8TAABrpbm1xw8820.jpg",
  "title": "科技播客精选榜",
  "subtitle": "有趣有料的科技播客，听就够了！",
  "key": "1_163_ranking:album:playedEndUsers:30:0",
  "firstId": 10,
  "firstTitle": "原来是这样？！",
  "calcPeriod": "日榜",
  "top": 100,
  "firstKResults": [
    {
      "id": 10,
      "title": "原来是这样？！",
      "contentType": "album"
   },
    {
        "id": 10,
        "title": "大老李聊数学（全集）",
        "contentType": "album"
    },
    {
        "id": 11,
        "title": "回到2049",
        "contentType": "album"
    }
  ]
},
{
          "coverPath": "http://fdfs.xmcdn.com/group7/M05/6E/5F/wKgDWlc6_cqS-503AACRSvnvtvo900.jpg",
          "title": "涨知识历史榜",
          "subtitle": "涨点历史知识很重要！不听会吃亏！",
          "key":"1_61_ranking:album:subscribed:1:9",
          "firstId": 12,
          "firstTitle": "易中天品三国",
          "calcPeriod": "日榜",
          "top": 100,
          "firstKResults": [
            {
              "id": 12,
              "title": "易中天品三国",
              "contentType": "album"
          },
          {
              "id": 13,
              "title": "中国历史未解之谜（持续更新中）",
              "contentType": "album"
          },
          {
              "id": 14,
              "title": "听谢涛·真三国 (请留意简介说明)",
              "contentType": "album"
          }
          ]
      },)
  }, 1000 + Math.random() * 2000);

})
app.get('/tuijian',(req,res) =>{
setTimeout(() => {
  res.send(

  )
}, 1000 + Math.random() * 2000);
})

app.listen(3000, () => {
  console.log('服务器启动0')
})