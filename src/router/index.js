import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Citylist from '@/components/Citylist'

Vue.use(Router)

export default new Router({
  // 去除地址栏中#
  mode:"history",

  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/citylist',
      name: 'city',
      component: Citylist
    }
  ]
})
