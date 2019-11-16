<template>
  <div>
    <div class="account-body">
      <h1 class="account-body-title login-label-phone">
        <v-touch @tap="closeLogin()" href="javascript:;" class="cancel icon login-cancel" >x</v-touch>
        <span class="account-body-text">登录豆瓣</span>
        <span class="account-body-tips">
          新手机号将自动注册，请详读
          <a
            target="_blank"
            href="https://accounts.douban.com/passport/agreement"
          >豆瓣使用协议、隐私政策</a>
        </span>
      </h1>
      <div class="account-form" style="display: block;">
        <!-- login start -->
        <form class="aount-form-info">
          <div class="phone">
            <input type="text" placeholder="手机号/邮箱" :value="phone" ref="phone" />
          </div>
          <div class="password">
            <input type="password" placeholder="密码" :value="password" ref="password" />
          </div>
          <div class="login">
            <v-touch @tap="handleGetUser()" class="loginbtn">登录</v-touch>
          </div>
        </form>
        <!-- login end -->
        <!-- 其他登录 start -->
        <div class="account-form-ft">
          <a href class="login-forget">找回密码</a>
          <div class="account-form-switch">
            <a href="javascript:;" class="label-register">点击注册</a>
          </div>
        </div>
        <div class="account-form-3rd">
          <div class="account-form-3rd-hd">第三方登录</div>
          <div class="account-form-3rd-bd">
            <a
              href="https://www.douban.com/accounts/weixin"
              class="link-3rd-wx link-3rd-wx-on"
              title="用微信登录"
            >Wechat</a>
            <a href class="link-3rd-wb link-3rd-wb-on" title="用微博登录">Weibo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookie from "vue-cookies";
export default {
  name: "Login",
  data(){
    return {
      phone: "",
      password: "",
      userInfo: []
    }
  },
  methods: {
  
    handleGetUser() { 
      this.phone = this.$refs.phone.value;
      this.password = this.$refs.password.value;
      
    this.userInfo.push({
        phone: this.phone,
        password: this.password
      });
    Cookie.set("userInfo", JSON.stringify(this.userInfo));
      this.$router.replace('/dbindex');
    },

    closeLogin(){
      this.$router.back()
    }
      
    },


}
</script>

<style>
.account-body {
  box-sizing: border-box;
  width: 100%;
  max-width: 7.5rem;
  margin: auto;
  padding: 0.15rem 0.15rem 0.2rem;
  background: #fff;
}
/* header start */
.account-body-title {
  margin: 0.3rem 0;
  font-size: 0.3rem;
  font-weight: 400;
  text-align: center;
}

.login-cancel {
  height: 0.16rem;
  width: 0.16rem;
  background-size: 0.16rem;
  position: absolute;
  top: 0.15rem;
  left: 0.15rem;
  background-position: top;
  background-repeat: no-repeat;
  color: rgba(0, 0, 0, 0.9);
}
.account-body-title {
  font-size: 0.3rem;
  font-weight: 400;
  text-align: center;
}
.account-body .login-label-phone .account-body-tips {
  display: block;
  margin-top: 0.1rem;
  color: #bababa;
  font-size: 0.13rem;
}
.account-body .login-label-phone .account-body-tips a {
  color: #42bd56;
}
/* header end */

/* form start */
.account-form {
  margin-bottom: 0.1rem;
  margin: 0;
  position: relative;
}
.phone {
  width: 100%;
}
.aount-form-info .phone input {
  border-top: 1px solid;
  border-color: rgba(0, 0, 0, 0.12);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.aount-form-info input {
  border: 1px solid;
  border-radius: 0;
  box-shadow: none;
  padding: 0.1rem 0.4rem 0.1rem 0.1rem;
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.15rem;
  line-height: 0.24rem;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  caret-color: #42bd56;
}
.password input {
  border-color: rgba(0, 0, 0, 0.12);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.login {
  margin: 0.2rem 0;
  width: 100%;
}
.login .loginbtn {
  height: 0.44rem;
  width: 100%;
  border-radius: 3px;
  color: #fff;
  font-size: 0.17rem;
  font-weight: 400;
  line-height: 0.44rem;
  text-align: center;
  outline: 0;
  background-color: rgba(66, 189, 86, 0.5);
}
/* form end */

/* 其他登录 start */
.account-form-ft {
  margin: 0.1rem 0 0.2rem;
  overflow: hidden;
  font-size: 0.15rem;
}
.account-form-ft a.login-forget {
  float: right;
  color: rgba(0, 0, 0, 0.7);
}
.account-form-ft .account-form-switch a {
  color: #42bd56;
}
.account-body .label-register {
  margin-right: 12px;
}
.account-form-3rd {
  float: none;
  font-size: 0;
  text-align: center;
  margin-top: 140px;
}
.account-form-3rd-hd {
  margin-bottom: 15px;
  color: #bababa;
  font-size: 13px;
  line-height: 1;
}
.account-form-3rd-bd a {
  display: inline-block;
  vertical-align: middle;
  width: 66px;
  height: 66px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 100%;
  overflow: hidden;
  line-height: 66px;
  font-size: 0;
  margin: 0 15px;
}
</style>