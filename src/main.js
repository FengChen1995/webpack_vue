/* eslint-disable no-new */
import Vue from 'vue'
import App from './App.vue'

import router from './router/router'

new Vue({
  el: '#root',
  router,
  render: h => h(App)
})
