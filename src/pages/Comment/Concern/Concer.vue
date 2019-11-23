<template>
  <div>
    <div class="concernContent">
      <div class="concernHeader">
        <i class="iconfont icon-tingli"></i>
        <span>
          <p>喜马拉雅好声音</p>
          <p>5天前</p>
        </span>
      </div>
      <h2>喜马新鲜事第十期</h2>
      <p>快来康康过去一周喜马拉雅都发生了哪些新鲜事</p>
      <img src="../../../assets/text.png" alt="">
      <span>
        <p>来自圈子：</p>
        <a href="javascript">喜马拉雅听货圈</a>
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
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.concernContent
  padding-left 10px
  border-bottom 8px solid #eee
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
