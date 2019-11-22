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
    res.send([{
        id: 1,
        name: 'product2.1'
      },
      {
        id: 2,
        name: 'product2.2'
      },
      {
        id: 3,
        name: 'product2.3'
      }
    ])
  }, 1000 + Math.random() * 2000);

})

app.listen(4000, () => {
  console.log('server app start on port 4000')
})