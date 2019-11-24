<template>
  <div>
    <!--  -->
    <CommentHeader />

    <div class="commentNav">
      <div class="crdBtn">
        <div class="crdBtnItem">
          <router-link class="concern clicked" to="/comment/concern">关注</router-link>
        </div>
        <div class="crdBtnItem">
          <router-link class="recommend" to="/comment/recommend">推荐</router-link>
        </div>
        <div class="crdBtnItem">
          <router-link class="dub" to="/comment/dub">趣配音</router-link>
        </div>
             
      </div>
    </div>

    <router-view></router-view>
  </div>  
  
</template>

<script type="text/ecmascript-6">
import CommentHeader from '../../components/CommentHeader/CommentHeader'
  export default {
    components:{
      CommentHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/mixins.styl';
.commentNav
  z-index 100
  background #fff
  width 100%
  height 24px
  position fixed
  left 0
  top 136px
  clearFix()
  .crdBtn
    display flex
    padding 0 0 10px 10px
    bottom-border-1px(#ccc)
    .crdBtnItem
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #f86442
          &::after
            content ''
            position absolute
            left 50%
            bottom -5px
            width 35px
            height 2px
            transform translateX(-50%)
            background #f86442
    
  
  
    
</style>
