<template>
  <div id="audioBook">
    <div v-for="(item, index) in audioBook.imgData" :key="index">
      <img :src="audioBook.imgData[0]" alt="">
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

