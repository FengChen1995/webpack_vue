import Vue from 'vue'
import VueRouter from 'vue-router'

import blog from './blog'

Vue.use(VueRouter)

var routes = [
  ...blog
]

var router = new VueRouter({
  mode: 'history',
  routes
})
export default router
