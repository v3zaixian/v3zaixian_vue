<template>
<div class="listen">
  <div class="listen_top">
    <h2>我听</h2>
  </div>
  <div class="sxh_top">
    <a class="sxh_bt">
    <i class="iconfont icon-yiwancheng"></i>
      下载
    </a>
    <a class="sxh_bt">
    <i class="iconfont icon-kefu1"></i>
      历史
    </a>
    <a class="sxh_bt">
    <i class="iconfont icon-gouwuche-"></i>
      已购
    </a>
    <a class="sxh_bt">
    <i class="iconfont icon-dingdan"></i>
      听单
    </a>
  </div>
  <!-- <div class="sxh_header_title">
    <a href="javascript:;" class="{on:!isPassWordLogin}" @click="isPassWordLogin = false">订阅</a>
    <a href="javascript:;" class="{on:!isPassWordLogin}" @click="isPassWordLogin = true">听更新</a>
  </div> -->
     <div>
    <div class="nav">
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'">订阅</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">听更新</mt-button>
    </div>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1"> 
        <div class="sxh_dy">
          <span class="sxh_sp">
          <p>
            登录后，订阅更新声音</br>
            你可以在这收听
          </p>
            <button>去登陆</button>
          </span>
        </div>
        	<!-- cell组件 -->
          <mt-cell v-for="n in 10" title="书">
            <button>
              订阅
            </button>
          </mt-cell>
          <mt-cell>
            <div>
              <button>订阅</button>
            </div>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <div class="sxh_dy">
          <button>订阅</button>
        </div>
        	<!-- cell组件 -->
        </mt-tab-container-item>
        
      </mt-tab-container>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  
  
  export default {
    name: 'page-tab-container',
     data(){
       return{
         isPassWordLogin:false,
         active: 'tab-container1'
       }
     }
     
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  
  .listen
    width 100%
    .listen_top
      width 100%
      h2  
        text-align center
        height 30px
        line-height 30px
        font-size 18px 
    .sxh_top 
      margin-top 20px
      margin-left 20px
      float left
      width 330px
      height 90px
      box-shadow: 2px 3px 1px #888888
    .sxh_bt
        width 30px
        height 40px
        float left
        margin-left 40px
        margin-top 40px
        >i 
          margin-top 10px
          color #FD9480
    .item 
      display: inline-block
    .nav
      margin-top :150px
      padding-top 10px
      text-align left 
      padding: 10px
    .link 
      color: inherit
      padding: 20px
      display: block
    .sxh_dy
      width 100%
      height 370px
      .sxh_sp  
        float left
        margin-top 130px
        margin-left 100px
</style>
