<template>
  <div>
    <p>登录</p>
    <div>
      <label>账号</label>
      <input v-model="account" type="text" name="">
    </div>
    <div>
      <label>密码</label>
      <input v-model="password" type="password" name="">
    </div>
    <div>
      <a href="javascript:;" @click="login">登录</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      console.log(this.account, this.password)
    }
  }
}
</script>
