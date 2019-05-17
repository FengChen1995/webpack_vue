import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import blog from './blog'

var routes = [
  ...blog
]

var router = new VueRouter({
  mode:'history',
  routes
});
export default router