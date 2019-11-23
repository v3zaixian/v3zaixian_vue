<template>
  <div id="homeListContainer">
    <div class="homeTop">
      <ul class="homeTopList">
        <li @click="toCategory" class="homeTopItem" v-for="(item, index) in classifyData" :key="index">
          <img :src="item.coverPath" alt="">
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div> 
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['classifyData'],
    data(){
      return {
        
      }
    },
    methods:{
      toCategory(){
        this.$router.push('/category')
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #homeListContainer
    .homeTop
      width 100%
      height 54px
      margin-top 25px
      .homeTopList
        padding 0 50px
        display flex
        justify-content space-around
        .homeTopItem
          display flex
          flex-direction column
          align-items center
          img
            width 34px
            height 34px
            margin 0 5px 5px 0
            border-radius 50%
    
</style>

