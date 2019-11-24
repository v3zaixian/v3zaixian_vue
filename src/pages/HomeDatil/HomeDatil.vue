<template>
  <div id="homeDatil">
    <div class="homeDatilHeader">
      <span class="iconfont icon-home" @click="$router.replace('/home')"></span>
      <span class="listens">
        <i class="iconfont icon-ting"></i>
        <i class="iconfont icon-ico_ximalayaFM"></i>
        <p>-想听啥听啥</p>
      </span>
      <button class="btnApp">打开APP</button>
    </div>
    <div class="scrollContainer">
      <div>
        <div class="booksImg">
      <!-- <img :src="booksDatas[0].coverPath" style="width:100%" alt=""> -->
          <img :src="booksDatas.coverPath" style="width:100%" alt="暂无图片">
        </div>
        <div class="datilTitle">
          <!-- <h3 class="text">{{booksDatas[0].bookName}}</h3> -->
          <h3 class="text">{{booksDatas.content}}</h3>
          <button class="openBtn">打开APP，完整收听</button>
        </div>
        <div class="datilList">
          <span style="paddingLeft:10px">节目(100)</span>
          <span class="rightPI">
            <p>批量下载</p>
            <i class="iconfont icon-download-01"></i>
          </span>
        </div>
        <div class="contentCantonter">
          <!-- <ul class="content" v-for="(book, index) in booksDatas" :key="index"> -->
          <ul class="content"  v-for="(item, index) in booksDatas.contentList" :key="index">
            <li>
              <span class="iconfont icon-bofang"></span>
              <div class="contentText">
                <p>{{item.listTitle}}</p>
              </div>
              <span class="iconfont icon-xiazai1"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    
    data() {
      return {
        booksDatas:{},
        index:0
      }
    },

    methods: {
      _initScroll(){
        this.scroll = new BScroll('.scrollContainer',{
          scrollY: true, // 设置纵向滑动
          click:true
        })
      }
      
    },

    async mounted() {
      
      this.index = this.$route.params.index
      // console.log(this.index)
      this.booksDatas = this.details[this.index].data[this.index]
      // console.log(this.booksDatas)

      if(this.booksDatas){
        this._initScroll()
      }
    },

    computed: {
      ...mapState({
        details:state => state.details
      })
    },

    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/mixins.styl';
#homeDatil
  height 100%
  .homeDatilHeader
    z-index 100
    position fixed
    left 0
    top 0
    display flex
    height 56px
    width 100%
    padding-left 5px
    line-height 56px
    background rgba(34,35,37,.8)
    clearFix()
    .icon-home
      margin-right 16px
      color #f86442
    .listens
      display flex
      color #f86442
      .icon-ting
        font-size 28px
      .icon-ico_ximalayaFM
        font-size 18px
      p
        color white
    .btnApp
      position absolute
      top 50%
      right 20px
      height 28px
      margin-top -12px
      border-radius 10px
      font-size 8px
      color white
      background #f86442
      border 0
  .scrollContainer
    position relative
    top 56px
    height 611px
    .booksImg
      // padding-top 56px
      width 100%
      height 200px
      overflow hidden
    .datilTitle
      margin-top 16px
      padding-left 30px
      .text
        width 70%
        white-space nowrap
        display block
        overflow hidden
        text-overflow ellipsis
        font-size 20px
      .openBtn
        margin 10px 0 0 30px
        padding 0 20px
        border-radius 18px
        display block
        height 40px 
        border 0 
        background #f86442 
        color white
        font-size 18px
    .datilList
      font-size 16px
      position relative
      display flex
      margin-top 18px
      .rightPI
        display flex
        position absolute
        top 0
        right 10px
        color #f86442
        p
          padding-right 5px
    .contentCantonter
      margin-bottom 10px
      .content
        margin-top 20px
        display flex
        li
          width 100%
          position relative
          display flex
          .icon-bofang
            // width 20%
            padding 5px 0 0 10px
            font-size 20px
            color #f86442
          .contentText
            width 60%
            height 32px
            line-height 32px
            white-space nowrap
            display block
            overflow hidden
            text-overflow ellipsis
            font-size 16px
            padding-left 10px
          .icon-xiazai1
            width 10%
            position absolute
            top 5px
            right 0
            font-size 20px
            color #f86442
</style>
