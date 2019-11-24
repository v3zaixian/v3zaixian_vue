<template>
  <div id="homeNavagator">
    <div class="homeNav">
      <div class="home_container">
        <div class="home-wrapper">
          <div class="home-slide">
            <span @click="toNavList(index)" :class="{active:NavIndex===index}" v-for="(navItem, index) in nav" :key="index">{{navItem}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <Recommend v-if="NavIndex===0" :classifyData="classifyData"/>
      <Audiobook v-else-if="NavIndex===1" :audioBook="navs.audioBook"/>
      <CrossTalk v-else-if="NavIndex===2" :crossTalk="navs.crossTalk"/>
      <Music v-else-if="NavIndex===3" :music="navs.music"/>
      <Child v-else="NavIndex===4" :child="navs.child"/>
    </div>
    <div v-show="NavIndex !==2" class="downloadApp">
      <img src="../../common/images/nav/downloadApp.png" alt="">
      
    </div>
    <div class="contentContainer">
      <div class="homeContent">
        <div class="contentItem" v-for="(detail, index) in details" :key="index">
          <div class="contentTitle">
            <h2>{{detail.theme.name}}</h2>
            <span>更多</span>
            <span class="more">></span>
          </div>
          <div class="contentDetail" v-for="(item, index) in detail.theme.data" :key="index" @click="goDatil(index)">
            <div class="contentLeft">
              <img :src="item.coverPath" alt="">
            </div>
            <div class="contentRight">
              <h3>{{item.bookName}}</h3>
              <p>“{{item.content}}”</p>
              <span><i class="iconfont icon-yuyin1"></i>100</span>
              <span><i class="iconfont icon-ziyuan1"></i>1.34亿</span>
            </div>
          </div>
        </div> 
      </div>
      
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import Recommend from '../../components/HomeList/Recommend'
  import Audiobook from '../../components/HomeList/Audiobook'
  import CrossTalk from '../../components/HomeList/CrossTalk'
  import Child from '../../components/HomeList/Child'
  import Music from '../../components/HomeList/Music'

  import {mapState} from 'vuex'
  export default {
    components:{
      Recommend,
      Audiobook,
      CrossTalk,
      Child,
      Music
    },
    data(){
      return{
        NavIndex:0,//导航栏选中样式
        nav:['推荐','有声书','相声','音乐','儿童'],//头部导航数据
        appShow:0, //喜马拉雅APP图片是否显示
      }
    },
    methods:{
      toNavList(index){
        this.NavIndex = index
      },
      _initScroll(){
        this.leftScroll = new BScroll('.contentContainer', {
          scrollY: true, // 设置纵向滑动
          click: true, // 允许点击
        })
      },
      goDatil(index){
        this.$router.push('/home/datil')
        console.log(index)

      }
    },
    async mounted(){
      this.$store.dispatch('getClassifyAction')
      this.$store.dispatch('getReconmendAction')
      this.$store.dispatch('getDetailAction')
      this.$store.dispatch('getNavAction')
      if(this.nav){
        this._initScroll()
      }
    },
    computed:{
      ...mapState({
        classifyData: state => state.classifyData,
        reconmendData: state => state.reconmendData,
        details: state => state.details,
        navs:state => state.navs,
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #homeNavagator
    .homeNav
      width 100%
      height 40px
      margin-top 5px
      border-bottom: .5px solid #e8e8e8;
      padding 0 15px 
      box-sizing border-box
      .home_container
        width 100%
        height 100%
        .home-wrapper
          width 100%
          height 100%
          .home-slide
            width 100%
            color #666
            line-height 40px
            white-space nowrap
            span 
              font-size 14px
              display inline-block
              margin 0 15px
              &.active
                font-size 18px
                color #f40
    
    .downloadApp
      width 100%
      margin 18px 0 8px 0
      height 82px
      position relative
      img
        width 100%
        height 100%
      span 
        position absolute
        top 2px 
        right 2px
        color #fff
    .contentContainer
      position relative
      overflow hidden
      height calc(100vh - 252px)
      width 100%
     
      .homeContent
        position absolute
        width 100%
        .contentItem
          padding 15px
          
        .contentTitle
          height 25px
          position relative
          h2
            position absolute
            left 0
            top 0
            font-weight bold
            color #333
            font-size 18px
          span 
            position absolute
            right 14px
            top 0
            font-size 12px
            color: rgb(114, 114, 123)
            &.more
             right 0px
             font-weight 700
        .contentDetail
          padding 15px 10px 15px 0
          width 100%
          box-sizing border-box
          display flex
          .contentLeft
            width 70px
            height 70px
            margin-right 15px
            img 
              width 100%
              height 100%
          .contentRight
            width 250px 
            height 70px
            h3  
              width 250px
              line-height 22px
              font-size 16px
              color rgb(51, 51, 51)
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
            p 
              margin 5px 0 7px
              font-size 13px
              line-height 14px
              color #999
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
            span 
              display inline-block
              line-height 25px
              min-width 55px
              margin-right 10px
              color #999
    
</style>
