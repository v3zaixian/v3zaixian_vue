<template>
  <div>
    <div class="concernContent">
      <div>
        <div class="contaner" v-for="(item, index) in bookfenlei" :key="index">
          <div class="concernHeader">
            <i class="iconfont icon-tingli"></i>
            <span>
              <p style="paddingRight:5px">{{item.firstTitle}}</p>
              <p>5天前</p>
            </span>
          </div>
          <h2>{{item.name}}类：{{item.title}}</h2>
          <p>{{item.subtitle}}</p>
          <img :src="item.coverPath" alt="">
          <span>
            <p>来自圈子：</p>
            <a href="javascript">{{item.calcPeriod}}第{{item.firstId}}名</a>
          </span>
          <div class="transmit">
            <span>
              <i class="iconfont icon-ic_history">转</i>
              <p>3</p>
            </span>
            <span>
              <i class="iconfont icon-dd_active">评</i>
              <p>43</p>
            </span>
            <span>
              <i class="iconfont icon-tuijianyouli">赞</i>
              <p>275</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
  export default {
    methods: {
      _initScroll(){
        this.scroll = new BScroll('.concernContent',{
          scrollY: true, // 设置纵向滑动
          // click:true
        })
      }
      
    },

    
    async mounted() {
      this.$store.dispatch('getBooksFenleiAction')
      // if(this.booksDatas){
        this._initScroll()
      // }
    },

    computed: {
      ...mapState({
        bookfenlei:state => state.bookfenlei
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../assets/stylus/mixins.styl';
.concernContent
  height 450px
  position relative
  padding-left 10px
  border-bottom 8px solid #eee
  margin-top 160px
  .contaner
    bottom-border-1px(#ccc)
    margin 6px 0
    .concernHeader
      display flex
      height 50px
      .iconfont
        font-size 30px
        color #f86442
      span
        padding 10px
        p
          margin 0
    h2
      font-size 16px
      font-weight bold
      padding-bottom 10px
    p
      padding-bottom 10px
    img
      padding-bottom 10px
      width 50%
    span
      display flex
      font-size 16px
      a
        color blue
    .transmit
      display flex
      justify-content space-around 
      padding-top 10px
      span 
        i 
          padding-right 6px 
</style>
