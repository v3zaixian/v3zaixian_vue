<template>
  <div class="page-navbar">
    <div class="page-title">
      <div :class="{active:$route.path === '/hear'}" @click="goPath('/hear')"> <span class="sxh_jt"> ← </span> </div>
      <span class="sxh_qk">清空</span>
    </div>
    <!-- navbar -->
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1"><span class="sxh_top">播放历史</span></mt-tab-item>
      <mt-tab-item id="2"><span class="sxh_top">阅读历史</span></mt-tab-item>
      
    </mt-navbar>
 
    <div class="sxh_gkjl">
      
    </div>
	<!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="sxh_dy">
          <span class="sxh_sp">
          <p>
            没有收听过节目
          </p>
          <button class="sxh_bto">去康康</button>
          </span>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell class="page-part" title="正在观看">{{ selected }}</mt-cell>
        <mt-cell v-for="n in 10" :title="'听书 ' + n" />
      </mt-tab-container-item>
      
    </mt-tab-container>
  </div>
</template>
 
<script>
export default {
  name: 'page-navbar',
 
  data() {
    return {
      selected: '1'
    }
  },
   methods: {
      goPath(path){
        // $router(路由器对象，包含了路由跳转的方法) $route(路由信息对象， 包含当前路由的所有路由信息)
        this.$route.path !== path && this.$router.replace(path)
        // this.$router.push()
        
      }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .sxh_jt
     float: left
     margin-top 12px
     font-size 24px
  .sxh_qk
    display block
    float right
    margin-top 15px
    margin-right 15px
  .sxh_top
    font-size 20px
  .sxh_dy
    width 100%
    height 370px
    .sxh_sp  
        float left
        margin-top 120px
        margin-left 130px
        color #cccccc
    .sxh_bto
        background-color #fff
        margin-top 20px
        margin-left -15px
        border 1px solid #cccccc
        width 120px
        height 40px  
  .sxh_gkjl
    margin-top 20px
</style>