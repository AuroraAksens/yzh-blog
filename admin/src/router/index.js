import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Index from '../views/Index'
import CateCreate from '../views/cateArticle/Create'
import CateList from '../views/cateArticle/List'
import SwiperCreate from '../views/swiper/Create'
import SwiperList from '../views/swiper/List'
import ArticleCreate from '../views/article/Create'
import ArticleList from '../views/article/List'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      //首页
      {
        path:'/',
        name:'Index',
        component: Index, 
      },

      //导航条
      {
        path: '/catearticle/create',
        name: 'cateArticle',
        component: CateCreate,
      },
      {
        path: '/catearticle/updata/:id',
        name: 'cateArticle',
        component: CateCreate,
        props:true
      },
      {
        path: '/catelist/list',
        name: 'cateList',
        component: CateList
      },

      //swiper
      {
        path: '/swiper/create',
        name: 'swiper',
        component: SwiperCreate,
      },
      {
        path: '/swiper/updata/:id',
        name: 'swiper',
        component: SwiperCreate,
        props:true
      },
      {
        path: '/swiper/list',
        name: 'swiperList',
        component: SwiperList
      },

      //article
      {
        path: '/article/create',
        name: 'articleCreate',
        component: ArticleCreate,
      },
      {
        path: '/article/updata/:id',
        name: 'articleCreate',
        component: ArticleCreate,
        props:true
      },
      {
        path: '/article/list',
        name: 'articleList',
        component: ArticleList
      },
    ]
  },
]

const router = new VueRouter({
  routes,
  // mode: 'history',//路由去掉#
  // base: '/admin'
})

export default router
