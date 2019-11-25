const express = require('express')
const cors = require('cors')

const sms_util = require('./util/sms_util')

const app = express()

app.use(express.static(__dirname+'/public'))

// 使用cors, 允许跨域
app.use(cors())
// 能解析urlencode格式的post请求体参数
app.use(express.urlencoded())
// 能解析json格式的请求体参数
app.use(express.json())

const users = {}
app.get('/fenlei', (req, res) => {
  
  setTimeout(() => {
    res.send([
      {
        "id": 1,
        "title": "排行榜",
        "author": "typicode",
        "coverPath": "http://localhost:3000/nav/3.png"
      },
      {
        "id": 2,
        "title": "听单",
        "author": "typicode",
        "coverPath": "http://localhost:3000/nav/4.png"
      },
      {
        "id": 3,
        "title": "易烊千玺",
        "author": "typicode",
        "coverPath": "http://localhost:3000/nav/5.png"
      },
      {
        "id": 4,
        "title": "直播",
        "author": "typicode",
        "coverPath": "http://localhost:3000/nav/2.png"
      },
      {
        "id": 5,
        "title": "分类",
        "author": "typicode",
        "coverPath": "http://localhost:3000/nav/1.png"
      },
    ])
  }, 1000 + Math.random()*2000);
  
})

app.get('/navData', (req, res) => {
  
  setTimeout(() => {
    res.send({
      "audioBook": {
        "imgData": [
          "http://localhost:3000/audioBook/1.png",
          "http://localhost:3000/audioBook/2.png",
          "http://localhost:3000/audioBook/3.png"
        ]
      },
      "crossTalk": {
        "imgData": [
          "http://localhost:3000/crossTalk/01.png",
          "http://localhost:3000/crossTalk/02.png",
          "http://localhost:3000/crossTalk/03.png",
          "http://localhost:3000/crossTalk/04.png"
        ]
      },
      "music": {
        "imgData": [
          "http://localhost:3000/crossTalk/1.jpg",
          "http://localhost:3000/crossTalk/2.jpg",
          "http://localhost:3000/crossTalk/4.jpg",
          "http://localhost:3000/crossTalk/5.jpg"
        ]
      },
      "child": {
        "imgData": [
          "http://localhost:3000/child/3.jpg",
          "http://localhost:3000/child/6.jpg",
          "http://localhost:3000/child/7.jpg",
          "http://localhost:3000/child/8.jpg",
          "http://localhost:3000/child/9.jpg"
        ]
      },
  },)
  }, 1000 + Math.random()*2000);
  
})

app.get('/shouye',(req,res) =>{
  setTimeout(() => {
    res.send(
      [
        // 最新专辑
        {
          "name":'最新专辑',
          "data":[
            {
              "id": 1,
              "title": "new",
              "bookName": "读者",
              "coverPath": "http://localhost:3000/content/1.png",
              "content":"读者经典故事选集，有你故事",
              "contentList":[
                {
                  "listTitle":"读者经典故事选集，有你故事"
                },
                {
                  "listTitle":"读者经典故事选集，有你故事"
                },
                {
                  "listTitle":"读者经典故事选集，有你故事"
                },
                {
                  "listTitle":"读者经典故事选集，有你故事"
                },
                {
                  "listTitle":"读者经典故事选集，有你故事"
                },
                {
                  "listTitle":"读者经典故事选集，有你故事"
                },
                {
                  "listTitle":"读者经典故事选集，有你故事"
                },
                {
                  "listTitle":"读者经典故事选集，有你故事"
                },
                {
                  "listTitle":"读者经典故事选集，有你故事"
                },
                {
                  "listTitle":"读者经典故事选集，有你故事"
                }
              ]
            },
            {
              "id": 2,
              "title": "new",
              "bookName": "小王子",
              "coverPath": "http://localhost:3000/content/2.png",
              "content":"小王子爱着玫瑰，每天浇水却不能体会",
              "contentList":[
                {
                  "listTitle":"小王子爱着玫瑰，每天浇水却不能体会"
                },
                {
                  "listTitle":"小王子爱着玫瑰，每天浇水却不能体会"
                },
                {
                  "listTitle":"小王子爱着玫瑰，每天浇水却不能体会"
                },
                {
                  "listTitle":"小王子爱着玫瑰，每天浇水却不能体会"
                },
                {
                  "listTitle":"小王子爱着玫瑰，每天浇水却不能体会"
                },
                {
                  "listTitle":"小王子爱着玫瑰，每天浇水却不能体会"
                },
                {
                  "listTitle":"小王子爱着玫瑰，每天浇水却不能体会"
                },
                {
                  "listTitle":"小王子爱着玫瑰，每天浇水却不能体会"
                },
                {
                  "listTitle":"小王子爱着玫瑰，每天浇水却不能体会"
                },
                {
                  "listTitle":"小王子爱着玫瑰，每天浇水却不能体会"
                }
              ]
            },
            {
              "id": 3,
              "title": "new",
              "bookName": "世界神秘档案",
              "coverPath": "http://localhost:3000/content/3.png",
              "content":"从南到北，从东到西，人类文明不可解释的奇闻异事",
              "contentList":[
                {
                  "listTitle":"从南到北，从东到西，人类文明不可解释的奇闻异事"
                },
                {
                  "listTitle":"从南到北，从东到西，人类文明不可解释的奇闻异事"
                },
                {
                  "listTitle":"从南到北，从东到西，人类文明不可解释的奇闻异事"
                },
                {
                  "listTitle":"从南到北，从东到西，人类文明不可解释的奇闻异事"
                },
                {
                  "listTitle":"从南到北，从东到西，人类文明不可解释的奇闻异事"
                },
                {
                  "listTitle":"从南到北，从东到西，人类文明不可解释的奇闻异事"
                },
                {
                  "listTitle":"从南到北，从东到西，人类文明不可解释的奇闻异事"
                },
                {
                  "listTitle":"从南到北，从东到西，人类文明不可解释的奇闻异事"
                },
                {
                  "listTitle":"从南到北，从东到西，人类文明不可解释的奇闻异事"
                },
                {
                  "listTitle":"从南到北，从东到西，人类文明不可解释的奇闻异事"
                }
              ]
            },
            {
              "id": 4,
              "title": "new",
              "bookName": "古今大战秦俑情",
              "coverPath": "http://localhost:3000/content/4.png",
              "content":"秦王统一，兵佣穿越千年的悲歌",
              "contentList":[
                {
                  "listTitle":"秦王统一，兵佣穿越千年的悲歌"
                },
                {
                  "listTitle":"秦王统一，兵佣穿越千年的悲歌"
                },
                {
                  "listTitle":"秦王统一，兵佣穿越千年的悲歌"
                },
                {
                  "listTitle":"秦王统一，兵佣穿越千年的悲歌"
                },
                {
                  "listTitle":"秦王统一，兵佣穿越千年的悲歌"
                },
                {
                  "listTitle":"秦王统一，兵佣穿越千年的悲歌"
                },
                {
                  "listTitle":"秦王统一，兵佣穿越千年的悲歌"
                },
                {
                  "listTitle":"秦王统一，兵佣穿越千年的悲歌"
                },
                {
                  "listTitle":"秦王统一，兵佣穿越千年的悲歌"
                },
                {
                  "listTitle":"秦王统一，兵佣穿越千年的悲歌"
                }
              ]
            },
            
          ]
        },
        // 有声书
        {
          "name":'有声书',
          "data":[
            {
              "id": 1,
              "title": "audioBook",
              "bookName": "单田芳经典—乱世枭雄",
              "coverPath": "http://localhost:3000/content/6.png",
              "content":"张作霖和张学良的传奇故事",
              "contentList":[
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                }
              ]
            },
            {
              "id": 2,
              "title": "audioBook",
              "bookName": "总有这样的歌只想一个人听",
              "coverPath": "http://localhost:3000/content/11.png",
              "content":"治愈|播放量最高的怀旧好歌推荐",
              "contentList":[
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                }
              ]
            },
            {
              "id": 3,
              "title": "audioBook",
              "bookName": "糗事播报",
              "coverPath": "http://localhost:3000/content/8.png",
              "content":"爆笑糗事互怼停不下来",
              "contentList":[
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                }
              ]
            },
            {
              "id": 4,
              "title": "audioBook",
              "bookName": "蕊希电台",
              "coverPath": "http://localhost:3000/content/7.png",
              "content":"治愈情感|最暖心主播陪你入睡",
              "contentList":[
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                }
              ]
            },
            {
              "id": 5,
              "title": "audioBook",
              "bookName": "晓说2018",
              "coverPath": "http://localhost:3000/content/12.png",
              "content":"世界依旧很大，大到可以晓说",
              "contentList":[
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                }
              ]
            },
            {
              "id": 6,
              "title": "audioBook",
              "bookName": "小沈龙脱口秀",
              "coverPath": "http://localhost:3000/content/13.png",
              "content":"超文艺与众不同，头都笑歪了",
              "contentList":[
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                }
              ]
            },
          ]
        },
        // 相声
        {
          "name":'相声',
          "data":[
            {
              "id": 1,
              "title": "audioBook",
              "bookName": "单田芳经典—乱世枭雄",
              "coverPath": "http://localhost:3000/content/6.png",
              "content":"张作霖和张学良的传奇故事",
              "contentList":[
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                }
              ]
            },
            {
              "id": 2,
              "title": "audioBook",
              "bookName": "总有这样的歌只想一个人听",
              "coverPath": "http://localhost:3000/content/11.png",
              "content":"治愈|播放量最高的怀旧好歌推荐",
              "contentList":[
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                }
              ]
            },
            {
              "id": 3,
              "title": "audioBook",
              "bookName": "糗事播报",
              "coverPath": "http://localhost:3000/content/8.png",
              "content":"爆笑糗事互怼停不下来",
              "contentList":[
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                }
              ]
            },
            {
              "id": 4,
              "title": "audioBook",
              "bookName": "蕊希电台",
              "coverPath": "http://localhost:3000/content/7.png",
              "content":"治愈情感|最暖心主播陪你入睡",
              "contentList":[
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                }
              ]
            },
            {
              "id": 5,
              "title": "audioBook",
              "bookName": "晓说2018",
              "coverPath": "http://localhost:3000/content/12.png",
              "content":"世界依旧很大，大到可以晓说",
              "contentList":[
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                }
              ]
            },
            {
              "id": 6,
              "title": "audioBook",
              "bookName": "小沈龙脱口秀",
              "coverPath": "http://localhost:3000/content/13.png",
              "content":"超文艺与众不同，头都笑歪了",
              "contentList":[
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                }
              ]
            },
          ]
        },
        // 音乐
        {
          "name":'音乐',
          "data":[
            {
              "id": 1,
              "title": "audioBook",
              "bookName": "单田芳经典—乱世枭雄",
              "coverPath": "http://localhost:3000/content/6.png",
              "content":"张作霖和张学良的传奇故事",
              "contentList":[
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                }
              ]
            },
            {
              "id": 2,
              "title": "audioBook",
              "bookName": "总有这样的歌只想一个人听",
              "coverPath": "http://localhost:3000/content/11.png",
              "content":"治愈|播放量最高的怀旧好歌推荐",
              "contentList":[
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                }
              ]
            },
            {
              "id": 3,
              "title": "audioBook",
              "bookName": "糗事播报",
              "coverPath": "http://localhost:3000/content/8.png",
              "content":"爆笑糗事互怼停不下来",
              "contentList":[
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                }
              ]
            },
            {
              "id": 4,
              "title": "audioBook",
              "bookName": "蕊希电台",
              "coverPath": "http://localhost:3000/content/7.png",
              "content":"治愈情感|最暖心主播陪你入睡",
              "contentList":[
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                }
              ]
            },
            {
              "id": 5,
              "title": "audioBook",
              "bookName": "晓说2018",
              "coverPath": "http://localhost:3000/content/12.png",
              "content":"世界依旧很大，大到可以晓说",
              "contentList":[
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                }
              ]
            },
            {
              "id": 6,
              "title": "audioBook",
              "bookName": "小沈龙脱口秀",
              "coverPath": "http://localhost:3000/content/13.png",
              "content":"超文艺与众不同，头都笑歪了",
              "contentList":[
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                }
              ]
            },
          ]
        },
        // 儿童
        {
          "name":'有声书',
          "data":[
            {
              "id": 1,
              "title": "audioBook",
              "bookName": "单田芳经典—乱世枭雄",
              "coverPath": "http://localhost:3000/content/6.png",
              "content":"张作霖和张学良的传奇故事",
              "contentList":[
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                },
                {
                  "listTitle":"张作霖和张学良的传奇故事"
                }
              ]
            },
            {
              "id": 2,
              "title": "audioBook",
              "bookName": "总有这样的歌只想一个人听",
              "coverPath": "http://localhost:3000/content/11.png",
              "content":"治愈|播放量最高的怀旧好歌推荐",
              "contentList":[
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                },
                {
                  "listTitle":"治愈|播放量最高的怀旧好歌推荐"
                }
              ]
            },
            {
              "id": 3,
              "title": "audioBook",
              "bookName": "糗事播报",
              "coverPath": "http://localhost:3000/content/8.png",
              "content":"爆笑糗事互怼停不下来",
              "contentList":[
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                },
                {
                  "listTitle":"爆笑糗事互怼停不下来"
                }
              ]
            },
            {
              "id": 4,
              "title": "audioBook",
              "bookName": "蕊希电台",
              "coverPath": "http://localhost:3000/content/7.png",
              "content":"治愈情感|最暖心主播陪你入睡",
              "contentList":[
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                },
                {
                  "listTitle":"治愈情感|最暖心主播陪你入睡"
                }
              ]
            },
            {
              "id": 5,
              "title": "audioBook",
              "bookName": "晓说2018",
              "coverPath": "http://localhost:3000/content/12.png",
              "content":"世界依旧很大，大到可以晓说",
              "contentList":[
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                },
                {
                  "listTitle":"世界依旧很大，大到可以晓说"
                }
              ]
            },
            {
              "id": 6,
              "title": "audioBook",
              "bookName": "小沈龙脱口秀",
              "coverPath": "http://localhost:3000/content/13.png",
              "content":"超文艺与众不同，头都笑歪了",
              "contentList":[
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                },
                {
                  "listTitle":"超文艺与众不同，头都笑歪了"
                }
              ]
            },
          ]
        }
      ]
    )
  }, 1000 + Math.random() * 2000);
})

//还未使用
app.get('/tuijian/bangdan', (req, res) => {

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

//还未使用
app.get('/shouye1',(req,res) =>{
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
  )
}, 1000 + Math.random() * 2000);
})

// 分类数据
app.get('/books-type',(req,res) =>{
  setTimeout(() => {
    res.send([
      {
        "name":"文学",
        "isAllPaid": false,
        "coverPath": "http://localhost:3000/booksfenlei/1.png",
        "title": "绝世高手",
        "subtitle": "男女双播，读书奇幻，修真神作",
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
        "name":"儿童",
        "isAllPaid": false,
        "coverPath": "http://localhost:3000/booksfenlei/2.png",
        "title": "极品天师",
        "subtitle": "绅士天师，城市猎人，打怪泡妹",
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
        "name":"音乐",
        "isAllPaid": false,
        "coverPath": "http://localhost:3000/booksfenlei/3.png",
        "title": "雪中悍刀行",
        "subtitle": "腥风血雨江湖录，凄美悠扬儿女情",
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
        "name":"历史",
        "isAllPaid": false,
        "coverPath": "http://localhost:3000/booksfenlei/4.png",
        "title": "异世邪君",
        "subtitle": "挂壁踏穿天穹",
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
        "name":"有声",
        "isAllPaid": false,
        "coverPath": "http://localhost:3000/booksfenlei/5.png",
        "title": "恶魔之女",
        "subtitle": "恋爱暴君",
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
        "name":"文学",
        "isAllPaid": false,
        "coverPath": "http://localhost:3000/booksfenlei/6.png",
        "title": "医女学武",
        "subtitle": "爽文，扮猪吃老虎",
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
        "name":"儿童",
        "isAllPaid": false,
        "coverPath": "http://localhost:3000/booksfenlei/7.png",
        "title": "美人谋",
        "subtitle": "美人心计",
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
        "name":"音乐",
        "isAllPaid": false,
        "coverPath": "http://localhost:3000/booksfenlei/8.png",
        "title": "余生",
        "subtitle": "余生不需要人指点，抱着40多张房产证瞎几把过",
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
        "name":"历史",
        "isAllPaid": false,
        "coverPath": "http://localhost:3000/booksfenlei/9.png",
        "title": "故事里的玩家",
        "subtitle": "游戏里的真人彩蛋",
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
        "name":"有声",
        "isAllPaid": false,
        "coverPath": "http://localhost:3000/booksfenlei/10.png",
        "title": "宫墙柳",
        "subtitle": "知乎爆款，虐心之作",
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
        "name":"文学",
        "isAllPaid": false,
        "coverPath": "http://localhost:3000/booksfenlei/10.png",
        "title": "宫墙柳",
        "subtitle": "知乎爆款，虐心之作",
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
    ]  
      
    
    )
   }, 1000 + Math.random() * 2000);
  })

  //用户密码登录
app.post('/login_pwd',(req, res)=>{
  const name = req.body.name
  const pwd = req.body.pwd
  if(name === 'admin' && pwd === 'admin'){
    res.send({
      code: 0,
      data:{
        name,
        pwd,
      }
    })
  }
})

//获取手机验证码
app.get('/sendcode',(req, res)=>{
  var phone = req.query.phone;
  var code = sms_util.randomCode(6);
  console.log(`向${phone}发送验证码短信: ${code}`);
  sms_util.sendCode(phone, code, function (success) {//success表示是否成功
    if (success) {
      users[phone] = code
      console.log('保存验证码: ', phone, code)
      res.send({"code": 0})
    } else {
      //3. 返回响应数据
      res.send({"code": 1, msg: '短信验证码发送失败'})
    }
  })
})

//手机验证码登录
app.post('/login_sms',(req, res, next)=>{
  var phone = req.body.phone;
  var code = req.body.code;
  if (users[phone] != code) {
    res.send({code: 1, msg: '手机号或验证码不正确'});
    return;
  }else{
    res.send({
      code: 0,
      data:{
        phone
      }
    })
  }

})

app.listen(3000, () => {
  console.log('服务器启动0')
})