<template>
<div class="listen">
  <div class="listen_top">
    <h2>我听</h2>
      <span>
        <i class="iconfont icon-chazhaobiaodanliebiao1"></i>
      </span>
  </div>
  <div class="sxh_top">
    <div class="sxh_bt">
    <a>
    <i class="iconfont icon-yiwancheng"></i>
      下载
    </a>
    </div>
    <div class="sxh_bt">
    <a>
    <i class="iconfont icon-guanyu"></i>
      历史
    </a>
    </div>
    <div class="sxh_bt">
    <a>
    <i class="iconfont icon-gouwuche-"></i>
      已购
    </a>
    </div>
    <div class="sxh_bt">
    <a>
    <i class="iconfont icon-kefu1"></i>
      听单
    </a>
    </div>
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
          </span>
        </div>
        <span class="sxh_gx">---——你可能感兴趣的内容——---</span>
        	<!-- cell组件 -->
          <mt-cell v-for="n in 10" title="书">
            <!-- <mt-cell class="listenItem" v-for="(listen,index) in listenArr" :key="index"></mt-cell> -->
            <!-- <img class="listenImg" :src="listen.image" alt="">
            <div class="listenInfo">
             <p class="listenName">{{book.title}}</p>
             <p class="listenName">播放量{{book.author}}</p>
             <p class="listenName">{{book.publisher}}集</p>
            </div> -->
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
          <span class="sxh_sp">
          <p>
            登录后，订阅更新声音</br>
            你可以在这收听
          </p>
          </span>
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
      span
        position relative
        bottom 26px
        left 330px
        i 
          font-size 24px
    .sxh_top 
      margin-top 20px
      margin-left 24px
      float left
      width 330px
      height 90px
      box-shadow:  1px 1px 5px  -1px #888888
    .sxh_bt
        width 40px
        float left 
        margin-left 34px
        margin-top 20px
        text-align center
        a 
          i 
            font-size 42px
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
        color #cccccc
    .sxh_gx
      display block
      text-align center
      color #FD9480    
</style>
