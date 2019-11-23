<template>
  <div id="homeChild">
    <div class="swiper-child">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(image, index) in child.imgData" :key="index">
          <img :src="image" alt="">
        </div>
      </div>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  export default {
    props:['child'],
    data(){
      return {
        
      }
    },
    mounted(){
      this.$nextTick(() => { //$nextTick代表下次页面全部渲染完毕
        new Swiper('.swiper-child',{
          loop:'true',
          effect : 'coverflow',
          slidesPerView: 3,
          centeredSlides: true,
          coverflowEffect: {
            rotate: 60,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideShadows : true
          },
        })
      })
    },
    methods:{
      
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #homeChild
    width 375px
    height 100px
    .swiper-child
        width 100%
        height 100%
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
        
</style>

