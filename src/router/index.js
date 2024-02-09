import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "@/views/HomePage.vue"
import WhatView from "@/views/WhatPage.vue"
import WhyView from "@/views/WhyPage.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/what', 
    name:'what', 
    component: WhatView
  },
  {
    path:'/why', 
    name:'why', 
    component: WhyView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
