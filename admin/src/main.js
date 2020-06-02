import Vue from 'vue'
import App from './Index.vue'
import router from './router'
import http from './http'
import './plugins/element.js'
import './style.css'

Vue.config.productionTip = false

Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
