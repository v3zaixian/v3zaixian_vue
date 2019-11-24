<template>
  <div>
    <div :class="{active:$route.path === '/hear'}" @click="goPath('/hear')"> <span class="sxh_jt"> ← </span> </div>
    <div class="nav">
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'">专辑</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">声音</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">视频</mt-button>
    </div>
    <div class="sxh_zy"> 
      <p>已占用0MB/可用空间64G</p>
    </div>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          <div class="sxh_dy">
          <span class="sxh_sp">
          <p class="sxh_p">
            没有下载的专辑
          </p>
            <button :class="{active:$route.path === '/hear'}" @click="goPath('/home')">去看看</button>
          </span>
        </div>
        	<!-- cell组件 -->
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <div class="sxh_dy">
          <span class="sxh_sp">
          <p class="sxh_p">
            没有下载的音乐
          </p>
            <button :class="{active:$route.path === '/hear'}" @click="goPath('/home')">去看看</button>
          </span>
        </div>
        	<!-- cell组件 -->
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <div class="sxh_dy">
          <span class="sxh_sp">
          <p class="sxh_p">
            没有下载的视频
          </p>
            <button :class="{active:$route.path === '/hear'}" @click="goPath('/home')">去看看</button>
          </span>
        </div>
        	<!-- cell组件 -->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'page-tab-container',
  data() {
    return {
      active: 'tab-container1'
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
 
<style lang="css" scoped>
  .item {
    display: inline-block;
  }
  .nav {
    padding: 10px;
    margin-left: 90px;
  }
  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }
  .sxh_dy{
    width: 100%;
      height:370px;
  }      
  .sxh_sp{
        float :left;
        margin-top: 230px;
        margin-left :130px;
        color: #cccccc;
      }   
  .sxh_zy{
    text-align: center;
    background-color: #cccccc;
  }     
 .sxh_p{
   margin-bottom: 20px;
 }
 .sxh_jt{
   float: left;
   margin-top: 12px;
   font-size: 24px;
 }

</style>
