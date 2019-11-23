<template>
  <div id="categoryContainer">
    <div class="leftContainer">
      <ul ref="leftUl" class="navList">
        <li @click="changeNavIndex(index)" class="navItem" :class="{active: navIndex === index}" v-for="(category, index) in categorys" :key="index">
          <p>{{category.name}}</p>
        </li>
      </ul>
    </div>
    <div class="rightContainer">
      <ul ref="rightUl">
        <li class="food-list-hook" v-for="(detail, index) in details" :key="index">
          <h1 class="title">{{detail.name}}</h1>
          <p>喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅喜马拉雅</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        scrollY: 0, // 记录右侧滑动内容滑动的距离
        tops: [], // 记录右侧所有li到滑动页面顶部的距离
        num: 1,
        test: {

        },
        categorys:[{name:'文学'},{name:'儿童'},{name:'音乐'},{name:'历史'},{name:'有声'},{name:'文学'},{name:'儿童'},{name:'音乐'},{name:'历史'},{name:'有声'},{name:'文学'}],
        details:[{name:'文学'},{name:'儿童'},{name:'音乐'},{name:'历史'},{name:'有声'},{name:'文学'},{name:'儿童'},{name:'音乐'},{name:'历史'},{name:'有声'},{name:'文学'}]
      }
    },
    mounted(){
      if(this.details){
        
        this._initScroll()
        this._initTops()
      }
    },
    computed:{
      navIndex(){
        
        // 在计算属性的内部千万不要获取或者操作计算属性本身，否则就是死循环
        let {tops, scrollY} = this
        let index = tops.findIndex((top, index) => scrollY >= top && scrollY < tops[index + 1])
        //if(this.leftScroll && index !== this.navIndex ){
        if(this.leftScroll && this.index !== index){
          this.index = index
          this.leftScroll.scrollToElement(this.$refs.leftUl.children[index], 2000)
        }
        return index
      }
    },
    methods:{
      _initScroll(){
        this.leftScroll = new BScroll('.leftContainer', {
          scrollY: true, // 设置纵向滑动
          click: true, // 允许点击
        })
        this.rightScroll = new BScroll('.rightContainer', {
          scrollY: true, // 设置纵向滑动
          // probeType: 1, // 非实时
          probeType: 2, // 实时
          // probeType: 3, // 实时/惯性滑动
          // click: true, // 允许点击
        })
        
        this.rightScroll.on('scroll', ({x, y}) => {
          this.scrollY = Math.abs(y)
           console.log(this.scrollY)
        })

        this.rightScroll.on('scrollEnd', ({x, y}) => {
          this.scrollY = Math.abs(y)
         
        })
      },
      _initTops(){
        // 记录右侧所有li到滑动页面顶部的距离
        let tops = []
        let top = 0
        tops.push(top)
        let lis = Array.from(this.$refs.rightUl.children)
        for (var i = 0; i < lis.length; i++) {
          top += lis[i].clientHeight
          tops.push(top)
        }
        this.tops = tops
      },
      changeNavIndex(index){
        this.scrollY = this.tops[index]
        
        this.rightScroll.scrollTo(0, -this.scrollY, 2000)
      }
    },
    watch:{
      details(newValue, oldValue){
        this.$nextTick(() => { // 页面下一次全部渲染完毕
          this._initScroll()
          this._initTops()
          
        })
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixins.styl"
  #categoryContainer
    display flex
    overflow hidden
    position absolute
    bottom 0
    top 50px
    .leftContainer
      width 80px
      background #f3f5f7
      .navList
        .navItem
          text-align center
          height 40px
          line-height 40px
          &.active
            background #fff
          p
            font-size 18px
            width 70px
            margin 0 auto
            bottom-border-1px(rgba(7,17,27,0.1))
            color: #f86442
    .rightContainer
      width 295px
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
        font-size 16px
        color: #72727b
      p 
        text-indent 24px
        font-size 12px
</style>
