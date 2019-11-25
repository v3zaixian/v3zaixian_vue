<template>
  <div id="categoryContainer">
    <div class="leftContainer">
      <ul ref="leftUl" class="navList">
        <li @click="changeNavIndex(index)" class="navItem" :class="{active: navIndex === index}" v-for="(bookContent, index) in bookfenlei" :key="index">
          <p>{{bookContent.name}}</p>
        </li>
      </ul>
    </div>
    <div class="rightContainer">
      <ul ref="rightUl" class="contentNav">
        <li class="food-list-hook" v-for="(bookContent, index) in bookfenlei" :key="index">
          <h1 class="title">{{bookContent.name}}</h1>
          <div class="contentfenlei">
            <img :src="bookContent.coverPath" alt="">
            <span>
              <h3>{{bookContent.title}}</h3>
              <p>{{bookContent.subtitle}}</p>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import { 
    mapState
   } from 'vuex'
  export default {
    data(){
      return {
        scrollY: 0, // 记录右侧滑动内容滑动的距离
        tops: [], // 记录右侧所有li到滑动页面顶部的距离
        num: 1,
        test: {

        },
      }
    },
    async mounted(){
      if(this.bookfenlei){
        
        this._initScroll()
        this._initTops()
      }

      this.$store.dispatch('getBooksFenleiAction')
      // console.log(this.bookfenlei)
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
      },

      ...mapState({
        bookfenlei:state => state.bookfenlei
      })
    },
    methods:{
      _initScroll(){
        this.leftScroll = new BScroll('.leftContainer', {
          scrollY: true, // 设置纵向滑动
          click: true, // 允许点击
        })
        this.rightScroll = new BScroll('.rightContainer', {
          scrollY: true, // 设置纵向滑动
          probeType: 2, // 实时
        })
        
        this.rightScroll.on('scroll', ({ y}) => {
          this.scrollY = Math.abs(y)
          //  console.log(this.scrollY)
        })

        this.rightScroll.on('scrollEnd', ({ y}) => {
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
        // console.log(this.rightScroll)
        // console.log(this)
        this.rightScroll.scrollTo(0, -this.scrollY, 2000)
      }
    },
    watch:{
      bookfenlei(){
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
      .contentfenlei
        display flex
        img
          width 100px
          height 100px
          margin-right 10px
        span 
          h3
            font-size 20px
            font-weight bold
            color #f86442
            margin-top 10px
          p 
            padding-top 8px
            // text-indent 24px
            font-size 16px
            // white-space nowrap
            // display block
            // overflow hidden
            // text-overflow ellipsis
</style>
