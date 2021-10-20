import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BMap from '../views/BMapTest.vue'
import BMap2 from '../views/ve-bmapTest.vue'
import Liquidfill from '../views/LiQuidFill.vue'
import WordCloud from '../views/WordCloud.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bmap',
    name: 'bmap',
    component: BMap
  },
  {
    path: '/bmap2',
    name: 'bmap2',
    component: BMap2
  },
  {
    path: '/liquidfill',
    name: 'liquidfill',
    component: Liquidfill
  },
  {
    path: '/wordCloud',
    name: 'wordCloud',
    component: WordCloud
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
