<template>
  <div id="commentContainer">
    <div class="authorAndSearch">
      <span class="adduseicon iconfont icon-tianjiayonghu"></span>
      <h3>发现</h3>
      <span class="search iconfont icon-fangdajing"></span>
    </div>

    <div class="links">
      <section class="profile-author">
        <div class="toAuthor">
          <span class="iconfont icon-langdu"></span>
          <p>全民朗读</p>
        </div>
        <div class="toAuthor">
          <span class="iconfont icon-home"></span>
          <p>语音房</p>
        </div>
        <div class="toAuthor">
          <span class="iconfont icon-huodong"></span>
          <p>活动</p>
        </div>
        <div class="toAuthor">
          <span class="iconfont icon-Kge"></span>
          <p>k歌房</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/mixins.styl';
#commentContainer
  z-index 100
  background #fff
  width 100%
  height 136px
  position fixed
  left 0
  top 0
  clearFix()
  .iconfont
    font-size 24px
  .off
    display none
  .authorAndSearch
    h3
      padding 8px 0
      font-size 20px
      text-align center
    .adduseicon
      position absolute
      left 10px
      top 10px
    .search
      position absolute
      top 10px
      right 10px 
  .links
    // margin-top 20px
    top-border-1px(#eee)
    bottom-border-1px(#ccc)
    .profile-author
      display flex
      padding-top 20px
      border-radius 10px
      margin-bottom 10px
      .toAuthor
        text-align center
        width 100%
        height 80px
        span 
          display block
          width 40px
          height 40px 
          padding-left 26px
        .iconfont
          font-size 30px
          color #f86442
          img 
            width 40px
            height 40px 
</style>
