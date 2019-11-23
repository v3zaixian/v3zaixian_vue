<template>
  <div id="LoginContainter">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">喜马拉雅</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on: !isPassWordLogin}" @click="isPassWordLogin = false">验证码登录</a>
          <a href="javascript:;" :class="{on: isPassWordLogin}" @click="isPassWordLogin = true">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <!-- 手机号登录 -->
          <div :class="{on: !isPassWordLogin}">
            <!-- 手机号 -->
            <section class="login_message">
              <input 
                type="tel" 
                maxlength="11" 
                placeholder="请输入手机号"
                name="phone"
                v-validate="'required|phone'"
                v-model="phone"
              >
              <span style="color: red;" v-show="errors.has('phone')">{{errors.first('phone')}}</span>
              <button 
                class="get_verification"
                :class="isRightPhoneNumber?'right_phone_number':''"
                @click.prevent="sendCode"
                :disabled="!isRightPhoneNumber || !!countDown" 
              >{{countDown?`${countDown}s后可以再次获取`:'获取验证码'}}</button>
            </section>
            <!-- 验证码 -->
            <section class="login_verification">
              <input 
                type="tel" 
                maxlength="8" 
                placeholder="验证码"
                name="code"
                v-validate="'required|code'"
                v-model="code"
              >
              <span style="color: red;" v-show="errors.has('code')">{{errors.first('code')}}</span>
            </section>
  
          </div>
          <!-- 密码登录 -->
          <div :class="{on: isPassWordLogin}">
            <section>
              <section class="login_message">
                <input 
                  type="tel" 
                  maxlength="11" 
                  placeholder="手机/邮箱/用户名"
                  name="username"
                  v-validate="'required'"
                  v-model="username"
                >
                <span style="color: red;" v-show="errors.has('username')">{{errors.first('username')}}</span>
              </section>
              <section class="login_verification">
                <input 
                  :type="isShowPassWord?'tel':'password'" 
                  maxlength="8" 
                  placeholder="请输入密码"
                  name="pwd"
                  v-validate="'required'"
                  v-model="pwd"
                >
                <span style="color: red;" v-show="errors.has('pwd')">{{errors.first('pwd')}}</span>
                <div @click="isShowPassWord = !isShowPassWord" class="switch_button" :class="isShowPassWord? 'on':'off'">
                  <div class="switch_circle" :class="{right : isShowPassWord}"></div>
                  <span class="switch_text">{{isShowPassWord?'abc':'...'}}</span>
                </div>
              </section>
            </section>
          </div>
          <button class="login_submit" @click.prevent="login">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <div class="otherLogin">
        <h3>其他登录方式</h3>
        <div class="icons">
          <span class="iconfont icon-weixin"></span>
          <span class="iconfont icon-QQ"></span>
          <span class="iconfont icon-xinlang"></span>
        </div>
        <section class="login_hint">
          温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
          <a href="javascript:;">《用户服务协议》</a>
        </section>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        isPassWordLogin: false, // 标识是否是用户名/密码登录
        isShowPassWord:false,//是否显示密码
        countDown:0,//发送验证码倒计时
        phone:'',
        code:'',
        username:'',
        pwd:''
      }
    },

    methods: {

      // 发送短信验证码
      sendCode(){
        console.log('发送验证码')

        this.countDown = 10
        this.intervalId = setInterval(() => {
          this.countDown--
          this.countDown === 0 && clearInterval(this.intervalId)
        }, 1000)
      },


      // 登录
      login(){
        // 跳转到个人中心页
        this.$router.replace('/profile')
      }

    },

    computed: {
      isRightPhoneNumber(){
        // 验证手机号是否满足要求
        return /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/mixins.styl';
#LoginContainter
  width 100%
  height 100%
  background #fff
  .loginInner
    padding-top 60px
    width 80%
    margin 0 auto
    .login_header
      .login_logo
        font-size 40px
        font-weight bold
        color #f86442
        text-align center
      .login_header_title
        padding-top 40px
        text-align center
        >a
          color #333
          font-size 14px
          padding-bottom 4px
          &:first-child
            margin-right 40px
          &.on
            color #f86442
            font-weight 700
            border-bottom 2px solid #f86442
    .login_content
      bottom-border-1px(#000)
      padding-bottom 10px
      >form
        >div
          display none
          &.on
            display block
          input
            width 100%
            height 100%
            padding-left 10px
            box-sizing border-box
            border 1px solid #ddd
            border-radius 4px
            outline 0
            font 400 14px Arial
            &:focus
              border 1px solid #f86442
          .login_message
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .get_verification
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              border 0
              color #ccc
              font-size 14px
              background transparent
              &.right_phone_number
                color #333
          .login_verification
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .switch_button
              font-size 12px
              border 1px solid #ddd
              border-radius 8px
              transition background-color .3s,border-color .3s
              padding 0 6px
              width 30px
              height 16px
              line-height 16px
              color #fff
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              &.off
                background #fff
                .switch_text
                  float right
                  color #ddd
              &.on
                background #f86442
              >.switch_circle
                //transform translateX(27px)
                position absolute
                top -1px
                left -1px
                width 16px
                height 16px
                border 1px solid #ddd
                border-radius 50%
                background #fff
                box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                transition transform .3s
                &.right
                  transform translateX(27px)
        .login_submit
          display block
          width 100%
          height 42px
          margin-top 30px
          border-radius 4px
          background #f86442
          color #fff
          text-align center
          font-size 16px
          line-height 42px
          border 0
          border-radius 30px 
      .about_us
        display block
        font-size 12px
        margin-top 20px
        text-align center
        color #999
    .otherLogin
      margin-top 5px
      h3
        text-align center
      .icons
        display flex
        justify-content space-around
        margin-top 10px
        .iconfont
          display block
          width 30px
          height 30px
          line-height 30px
          text-align center
          &.icon-weixin
            font-size 26px
            color green
          &.icon-QQ
            border-radius 50%
            font-size 16px
            background blue
            color white
          &.icon-xinlang
            border-radius 50%
            color white
            background #f86442
      .login_hint
        margin-top 8px
        color #999
        font-size 14px
        line-height 20px
        >a
          color #f86442
  

</style>
