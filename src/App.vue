<template>
  <div>
    <HeaderGuide v-if="$route.meta.isShowHeaderGuide"/>
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.isShowFooterGuide"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import HeaderGuide from './components/HeaderGuide/HeaderGuide'
  export default {
    name:'App',
    components: {FooterGuide,HeaderGuide}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
