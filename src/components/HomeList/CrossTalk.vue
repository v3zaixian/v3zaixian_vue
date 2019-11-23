<template>
  <div id="CrossTalk">
    <div class="swiper-talk">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(image, index) in crossTalk.imgData" :key="index">
          <img :src="image" alt="">
        </div>
      </div>
    </div>
    <ul class="talkList">
      <li class="talkItem">
        <img src="../../common/images/audioBook/5.jpg" alt="">
        <span>都市</span>
      </li>
      <li class="talkItem">
        <img src="../../common/images/audioBook/6.jpg" alt="">
        <span>悬疑</span>
      </li>
      <li class="talkItem">
        <img src="../../common/images/audioBook/7.jpg" alt="">
        <span>幻想</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  export default {
    props:['crossTalk'],
    data(){
      return {
        
      }
    },
    mounted(){
      this.$nextTick(() => { //$nextTick代表下次页面全部渲染完毕
        new Swiper('.swiper-talk', {
          loop:'true',
          effect : 'flip',
          flipEffect: {
            slideShadows : true,
            limitRotation : true,
          }
        })
      })
    },
    methods:{
      
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #CrossTalk
    width 100%
    height 150px
    .swiper-talk
        width 100%
        height 100px
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            width 100%
            height 100px
            box-sizing border-box
            padding 0px 5px
            img 
              width 100%
              height 100px
              border-radius 20px 
    .talkList
      width 100%
      margin-top 10px
      display flex
      justify-content space-around
      .talkItem
        display flex
        flex-direction column
        align-items center
        img 
          width 30px
          height 30px
          border-radius 50%
</style>

