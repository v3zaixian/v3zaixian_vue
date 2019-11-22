<template>
  <div id="Music">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(iamge, index) in music.imgData" :key="index">
          <img :src="iamge" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  export default {
    props:['music'],
    data(){
      return {
        
      }
    },
    mounted(){
      this.$nextTick(() => { //$nextTick代表下次页面全部渲染完毕
        new Swiper('.swiper-container', {
          loop: 'true',
          effect : 'cube',
        })
      })
    },
    methods:{
      
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #Music
    width 100%
    height 150px
    .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            width 100%
            height 150px
            box-sizing border-box
            padding 0px 1px
            img 
              width 100%
              height 150px
              border-radius 20px  
    
</style>

