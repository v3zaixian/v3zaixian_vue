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
    <div>
      <img src="../../common/images/audioBook/1.jpg" style="width:100%" alt="">
    </div>
    <div class="datilTitle">
      <h3 class="text">中国特色社会主义中国特色社会主义,中国特色社会主义</h3>
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
      <ul class="content">
        <li>
          <span class="iconfont icon-bofang"></span>
          <div class="contentText">
            <p >中国特色社会主义中国特色社会主义,中国特色社会主义</p>
          </div>
          <span class="iconfont icon-xiazai1"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#homeDatil
  .homeDatilHeader
    position relative
    display flex
    height 56px
    width 100%
    padding-left 5px
    line-height 56px
    background rgba(34,35,37,.8)
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
          // white-space nowrap
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
