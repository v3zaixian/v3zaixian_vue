<template>
  <div id="homeListContainer">
    <div class="homeTop">
      <ul class="homeTopList">
        <li @click="toCategory" class="homeTopItem" v-for="(item, index) in homeTops" :key="index">
          <img src="../../common/images/nav/3.png" alt="">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div> 
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        homeTops:[//需要从服务器读取写入
          {imgUrl:'../../common/images/nav/3.png',name:'排行榜'},
          {imgUrl:'../../common/images/nav/4.png',name:'听单'},
          {imgUrl:'../../common/images/nav/5.png',name:'易烊千玺'},
          {imgUrl:'../../common/images/nav/2.png',name:'直播'},
          {imgUrl:'../../common/images/nav/1.png',name:'分类'}
        ]
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

