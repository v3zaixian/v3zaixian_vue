<template>
  <div id="profileContainer">
    <div class="emailAndSet">
      <span class="email">
        <i>邮件</i>
      </span>
      <span class="set">
        <i>设置</i>
      </span>
    </div>
    <section class="profile-number">
      <a href="javascript:" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-person_round_fill"></i>
        </div>
        <div class="user-info">
          <button class="user-info-top">立即登录</button>
          <p>登录后，自动同步所有记录哦~</p>
        </div>
      </a>
    </section>
    <section class="profile-author">
      <div class="toAuthor">
        <span>
          <img src="../../assets/demo.png" alt="">
        </span>
        <p>我要录音</p>
      </div>
      <div class="toAuthor">
        <span>
          <img src="../../assets/demo.png" alt="">
        </span>
        <p>我要直播</p>
      </div>
      <div class="toAuthor">
        <span>
          <img src="../../assets/demo.png" alt="">
        </span>
        <p>我的作品</p>
      </div>
      <span>
        <i>}</i>
      </span>
      <div class="toAuthor">
        <span>
          <img src="../../assets/demo.png" alt="">
        </span>
        <p>制作中心</p>
      </div>
    </section>
    <!-- 我的服务 -->
    <section class="profile-until">
      <h3>我的服务</h3>
      <div class="untils">
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>我的钱包</p>
        </div>  
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>我的订单</p>
        </div>
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>推荐有礼</p>
        </div>
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>联系客服</p>
        </div>       
      </div>
      
    </section>

<!-- 必备工具 -->
    <section class="profile-until">
      <h3>必备工具</h3>
      <div class="untils">
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>扫一扫</p>
        </div>  
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>定时关闭</p>
        </div>
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>未成年模式</p>
        </div>
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>驾驶模式</p>
        </div>
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>夜间模式</p>
        </div>       
      </div>
      
    </section>

<!-- 其他服务 -->
    <section class="profile-until">
      <h3>其他服务</h3>
      <div class="untils">
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>金融福利</p>
        </div>  
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>知识大使</p>
        </div>
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>免流量特权</p>
        </div>
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>官方商城</p>
        </div> 
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>商家福利</p>
        </div>       
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>喜马福利社</p>
        </div>
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>大王卡免流量</p>
        </div>
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>微信服务</p>
        </div>             
      </div>
      
    </section>
    <!-- 商务合作与服务 -->
    <section class="profile-until">
      <h3>商务合作与服务</h3>
      <div class="untils">
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>配音服务</p>
        </div>  
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>开放平台</p>
        </div>
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>广告合作</p>
        </div>
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>万物声合作</p>
        </div>
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>企业版</p>
        </div>
        <div class="untilItem">
          <span>
            <img src="../../assets/demo.png" alt="">
          </span>
          <p>会员合作</p>
        </div>       
      </div>
      
    </section>
    <section>
      <mt-button type="danger" style="width:100%">退出登录</mt-button>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import { Button } from 'mint-ui';  
  Vue.component(Button.name, Button);

  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/mixins.styl';
#profileContainer
  .emailAndSet
    .email
      position absolute
      top 8px
      left 10px
    .set
      position absolute
      top 8px
      right 10px
  .profile-number
    margin-top 30px
    .profile-link
      clearFix()
      position relative
      display block
      // background #f86442
      padding 20px 10px
      .profile_image
        float left
        width 60px
        height 60px
        border-radius 50%
        overflow hidden
        vertical-align top
        background #f2f2f2
        .icon-person_round_fill
          background #e4e4e4
          font-size 62px
      .user-info
        float left
        margin-top 8px
        margin-left 15px
        .user-info-top
          display block
          width 80px
          height 30px
          border-radius 4px
          background #fff
          color #f86442
          text-align center
          font-size 10px
          line-height 30px
          border 1px solid #f86442
          border-radius 30px
        p 
          padding-top 10px
          color #555 
  .profile-author
    display flex
    padding-top 20px
    background #eee
    border-radius 10px
    margin 10px 10px
    .toAuthor
      text-align center
      width 100%
      height 80px
      span 
        display block
        width 40px
        height 40px 
        // padding-left 26px
        padding 0 0 6px 26px
        img 
          width 40px
          height 40px  
  .profile-until
    display flex
    flex-direction column
    background #eee
    border-radius 10px 
    margin 10px 10px
    padding 20px 
    h3
      padding-left 10px
      font-size 20px
    .untils
      padding 16px 0
      display flex
      flex-wrap wrap
      .untilItem
        text-align center
        width 25%
        margin 10px 0
        span 
          display block
          width 40px
          height 40px 
          padding 0 0 6px 26px
          img 
            width 40px
            height 40px    
</style>
