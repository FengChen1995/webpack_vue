/* eslint-disable no-new */
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'
import store from './store/index'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-theme-chalk'
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css'
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
Vue.component(CollapseTransition.name, CollapseTransition)

Vue.use(ElementUI)
Vue.use(Vuex)
sync(store, router)
new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
})
