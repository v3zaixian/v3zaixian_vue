<template>
  <div id="commentContainer">
    <!--  -->
    <div class="authorAndSearch">
      <span class="adduseicon">
        <i>用户添加</i>
      </span>
      <h3>发现</h3>
      <span class="search">
        <i>搜索</i>
      </span>
    </div>

    <div class="links">
      <section class="profile-author">
        <div class="toAuthor">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>全民朗读</p>
        </div>
        <div class="toAuthor">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>语音房</p>
        </div>
        <div class="toAuthor">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>活动</p>
        </div>
        <div class="toAuthor">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>k歌房</p>
        </div>
      </section>
    </div>

    <div class="commentNav">
      <span>
        <i>箭头</i>
      </span>
      <div class="crdBtn">
        <span class="concern clicked">关注</span>
        <span class="recommend">推荐</span>
        <span class="dub">趣配音</span>
      </div>
    </div>
  
<!-- 关注 -->
    <div class="concernContent off">
      <div class="concernHeader">
        <i class="listen">听</i>
        <span>
          <p>喜马拉雅好声音</p>
          <p>5天前</p>
        </span>
      </div>
      <h2>喜马新鲜事第十期</h2>
      <p>快来康康过去一周喜马拉雅都发生了哪些新鲜事</p>
      <img src="../../assets/text.png" alt="">
      <span>
        <p>来自圈子：</p>
        <a href="javascript">喜马拉雅听货圈</a>
      </span>
      <div class="transmit">
        <span>
          <i>转</i>
          <p>3</p>
        </span>
        <span>
          <i>评</i>
          <p>43</p>
        </span>
        <span>
          <i>赞</i>
          <p>275</p>
        </span>
      </div>
    </div>

<!-- 推荐 -->
    <div class="recommendContent off">
      <div class="recommendHeader">
        <i class="userImg">头像</i>
        <span>
          <p>肉姐小胃王本人</p>
          <p>大家都在看</p>
        </span>
        <button>+关注</button>
      </div>
      <p>火鸡面 辣白菜 炸鸡</p>
      <img src="../../assets/tuijian.jpg" alt="">
      <div class="transmit">
        <span>
          <i>转</i>
          <p>3</p>
        </span>
        <span>
          <i>评</i>
          <p>43</p>
        </span>
        <span>
          <i>赞</i>
          <p>275</p>
        </span>
      </div>
    </div>

<!-- 趣配音 -->
    <div class="concernContent ">
      <img src="../../assets//tuijian.jpg" alt="">
      <p>何以笙箫默：七年后，超市重逢</p>
      <span class="messages">
        <i>头像</i>
        <p>蜜罐小伊</p>
        <span>
          <i>人</i>
          <p>77人都在配</p>
          <i>点</i>
        </span>
      </span>
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
          img 
            width 40px
            height 40px 
  .commentNav
    display flex
    padding 0 0 10px 10px
    bottom-border-1px(#ccc)
    .crdBtn
      margin-left 30px
      span 
        display inline-block
        width 100px
        font-size 20px
        &.clicked
          font-weight bold
          color #f86442
  .concernContent
    padding-left 10px
    border-bottom 8px solid #eee
    .concernHeader
      display flex
      height 50px
      .listen
        font-size 30px
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
  .recommendContent
    padding-left 10px
    border-bottom 8px solid #eee
    .recommendHeader
      bottom-border-1px(#ccc)
      position relative
      display flex
      height 50px
      padding-bottom  10px
      .listen
        font-size 30px
      span
        padding 10px
        p
          margin 0
      button 
        width 60px
        height 30px
        border-radius 10px
        background #fff
        border 1px solid #f86442
        color #f86442
        position absolute
        top 10px 
        right 20px
    p
      padding-bottom 10px
      font-size 14px
    img
      padding 10px 0
    .transmit
      display flex
      justify-content space-around 
      padding-top 10px
      span 
        display flex
        justify-content space-around
        i 
          padding-right 6px
  .concernContent
    padding-left 10px
    p
      font-size 18px
      font-weight bold
    .messages
      position relative
      i
        padding-right 6px
      p
        font-size 16px
        font-weight normal
      span 
        position absolute
        right 10px
        top 0
        p
          padding 0 6px
</style>
