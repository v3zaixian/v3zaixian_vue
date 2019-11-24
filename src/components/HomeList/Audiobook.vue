<template>
  <div id="audioBook">
    <div>
      <img src="../../common/images/audioBook/6.jpg" alt="">
    </div>
  </div>
</template>

<script>
  
  export default {
    props:['audioBook'],
    data(){
      return {
        
      }
    },
    mounted(){
      console.log(this.audioBook)
    },
    methods:{
      
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #audioBook
    width 100%
    height 100%
    img 
      width 100%
      height 100%
</style>

