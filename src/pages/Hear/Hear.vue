<template>
<div class="listen">
  <div class="listen_top">
    <h2>我听</h2>
    
  </div>
  <div class="sxh_top">
    <a class="sxh_bt">
      <i class="iconfont icon-shouye2"</i>
      <span>下载</span>
      </a>
    <button class="sxh_bt">历史</button>
    <button class="sxh_bt">已购</button>
    <button class="sxh_bt">听单</button>
  </div>
  <div class="sxh_header_title">
    <a href="javascript:;" class="{on:!isPassWordLogin}" @click="isPassWordLogin = false">订阅</a>
    <a href="javascript:;" class="{on:!isPassWordLogin}" @click="isPassWordLogin = true">听更新</a>
  </div>
  <div class="title_left">
    <form>
      <div :class="{on:!isPassWordLogin}">
        1
      </div>
      <div :class="{on:isPassWordLogin}">
        2
      </div>
    </form>
  </div>
     
</div>
</template>

<script type="text/ecmascript-6">
  
  
  export default {
     data(){
       return{
         isPassWordLogin:false,
       }
     }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  
  .listen
    width 100%
    .listen_top
      width 100%
      h2  
        text-align center
        height 30px
        line-height 30px
        font-size 18px 
    .sxh_top 
      margin-top 40px
      margin-left 20px
      float left
      width 330px
      height 90px
      box-shadow: 2px 3px 1px #888888
    .sxh_bt
        margin-left 30px
        margin-top 35px
    .sxh_header_title
      margin-top :200px
      padding-top 10px
      text-align left 
      >a
        color #333
        font-size 18px
        padding-bottom 4px
        &:first-child
          margin-right 40px
        &.on
          color #02a774
          font-wight 700
          border-bottom 2px solid #02a774
    .title_letf
      >from
        >div
          display none
          &.on
            display block
              
      
</style>
