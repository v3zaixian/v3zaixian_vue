<template>
  <div class="homeHeader">
      <h1><img src="../../common/images/logo/logo.jpg" alt=""></h1>
      <input class="homeHeaderSearch" type="text" placeholder="搜索"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .homeHeader
      width 100%
      height 50px
      display flex
      box-sizing border-box
      padding 15px 15px 5px 15px
      h1
        width 20%
        img
          width 100%
          margin-top 5px
      .homeHeaderSearch
        width 200px
        color #7e8c8d
        border-radius 20px
        background #eee
        margin 0 10px 0
        text-indent 10px
        outline none
 
</style>
