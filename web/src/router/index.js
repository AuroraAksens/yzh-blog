import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Index from '../views/Index'
import Xiangqing from '../views/Xiangqing'
import Article from '../views/Article'
import Study from '../views/Study'
import Chenxu from '../views/Chenxu'
import Tool from '../views/Tool'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {path: '/', name: 'Index' , component:Index },
      {path: '/article', name: 'Article' , component:Article },
      {path: '/study', name: 'Study' , component:Study },
      {path: '/chenxu', name: 'Chenxu' , component:Chenxu },
      {path: '/tool', name: 'Tool' , component:Tool },

      //详情
      {path: '/xiangqing/:id', name: 'Xiangqing' , component:Xiangqing ,props:true}
    ]
  },
]

const router = new VueRouter({
  routes,
  // mode: 'history',//路由去掉#
})


export default router
