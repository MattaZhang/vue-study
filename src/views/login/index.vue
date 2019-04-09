<template>
  <div class="login-container">
      <div class="logo" style="padding:10px 8px 9px 0px;">
        <a href="#" class="logo-content">
            <span><img src="./../../assets/img/logo.svg" type="image/svg+xml" width="36" height="36" /></span>
            <span><img src="./../../assets/img/logo-slogan.png" width="88" height="28"></span>
        </a>
      </div>
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <h3 class="title">Login</h3>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="loginForm.username" name="username" type="text" auto-complete="on" placeholder="username" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :type="pwdType"
          v-model="loginForm.password"
          name="password"
          auto-complete="on"
          placeholder="password"
          @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="pwdType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
          Sign in
        </el-button>
      </el-form-item>
      <!-- <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: admin</span>
      </div> -->
    </el-form>
    <div class="login-footer">All rights reserved © Alpha Energy Storage Solution Co., Ltd.</div>
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      // color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

// @media (min-width:0) and (max-width:640px) {
//     .login-footer {
//         color: #313131;
//         text-align: center;
//     }
//     .logo {
//         background: -ms-linear-gradient(top, #454545, #333333);
//         background: -moz-linear-gradient(top, #454545, #333333);
//         background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#454545), to(#333333));
//         background: -webkit-linear-gradient(top, #454545, #333333);
//         background: -o-linear-gradient(top, #454545, #333333);
//         background: linear-gradient(to bottom, #454545 0%, #333 100%);
//         text-align: center;
//     }
// }

@media (min-width:0) and (max-width:640px) {
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  padding: 0px 20px;
  height: 100vh;
  background-image: url("./../../assets/img/login-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
  position: relative;
    .logo-content{
      position: absolute;
      padding: 10px 60px 50px;
      right: 0;
      left: 20%;
    }.login-form {
      background-color: $bg;
      position: absolute;
      background: rgba(255, 255, 255, 0.8);
      padding: 10px 60px 50px;
      top: 35%;
      -webkit-transform: translateX(0%) translateY(-50%);
      -moz-transform: translateX(0%) translateY(-50%);
      -ms-transform: translateX(0%) translateY(-50%);
      -o-transform: translateX(0%) translateY(-50%);
      transform: translateX(0%) translateY(-50%);
      left: 0;
      right: 0;
      height: 460px;
      width: 380px;
      max-width: 100%;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
  }
    .title {
    font-size: 26px;
    font-weight: 400;
    
    // color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .login-footer {
    position: absolute;
    bottom: 150px;
    color: #fff;
     text-align: center;
  }
    .svg-container {
    padding: 6px 5px 6px 15px;
    // color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
    .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    // color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
@media (min-width:640px) {
.login-footer {
    position: absolute;
    bottom: 50px;
    color: #fff;
    width: 100%;
     text-align: center;
}

.login-container {
  position: fixed;
  // height: 100%;
  width: 100%;
  padding: 0px ;
  height: 100vh;
  background-image: url("./../../assets/img/login-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
  position: relative;
    .logo-content{
      position: absolute;
      padding: 10px 60px 50px;
      right: 0;
      left: 20%;
    }
  .login-form {
    background-color: $bg;
    position: absolute;
    background: rgba(255, 255, 255, 0.96);
    padding: 10px 60px 50px;
    top: 35%;
    -webkit-transform: translateX(0%) translateY(-50%);
    -moz-transform: translateX(0%) translateY(-50%);
    -ms-transform: translateX(0%) translateY(-50%);
    -o-transform: translateX(0%) translateY(-50%);
    transform: translateX(0%) translateY(-50%);
    left: 35%;
    right: 0;
    width: 380px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .h3{
    font-family: 'geomanistLight', 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei', sans-serif;
    margin: 0px;
    padding: 17px 0px;
    font-weight: bold;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    
    // color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    // color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}}
</style>
