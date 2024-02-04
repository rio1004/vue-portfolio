import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "@/views/HomePage.vue"
import WhatView from "@/views/WhatPage.vue"
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
