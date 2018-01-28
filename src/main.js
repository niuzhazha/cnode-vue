// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import moment from 'moment'

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.filter('format_date', function (value) {
  // 返回处理后的值
  return moment(value).format('YYYY-MM-DD HH:mm')
})
Vue.filter('str_cut', function (value, limit) {
  // 返回处理后的值
  if (value.length > limit) {
    return value.slice(0, limit) + '...'
  } else {
    return value
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
