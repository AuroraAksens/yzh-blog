import Vue from 'vue'
import App from './index.vue'
import router from './router'
import axios from 'axios'
import './assets/animate.css'
import './assets/scss/style.scss'
import './assets/font_7xm68dhd6f9/iconfont.css';
import './assets/font_ks5jt8lt92m/iconfont.css';

Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api'
  // baseURL: 'http://localhost:4000/web/api'
})


import Card from './components/Card'
Vue.component('card', Card)

import bigCard from './components/bigCard'
Vue.component('bigcard', bigCard)

import XsCard from './components/XsCard'
Vue.component('XsCard', XsCard)


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
