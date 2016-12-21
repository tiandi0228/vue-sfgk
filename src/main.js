import Vue from 'vue'
import router from './router'
import App from './App'
import MuseUI from 'muse-ui'

import 'muse-ui/dist/muse-ui.css'
import './assets/styles/common.css'
import './assets/styles/iconfont.css'


Vue.use(MuseUI)

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  render: h => h(App)
})