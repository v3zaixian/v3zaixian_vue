<template>
  <div id="appContainer">
    <HeaderGuide v-if="$route.meta.isShowHeaderGuide"/>
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.isShowFooterGuide"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import HeaderGuide from './components/HeaderGuide/HeaderGuide.vue'
  export default {
    name:'App',
    components: {FooterGuide,HeaderGuide}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #appContainer
    height 100vh
    overflow hidden
</style>
