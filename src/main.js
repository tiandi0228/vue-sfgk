import Vue from 'vue'
import router from './router'
import App from './App'
import MuseUI from 'muse-ui'
import components from './components/' //加载公共组件

import 'muse-ui/dist/muse-ui.css'
import './assets/styles/common.css'
import './assets/styles/iconfont.css'
import './assets/less/common.less'

Vue.use(MuseUI)

Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
  Vue.component(`v${name}`, components[key])
})

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  render: h => h(App)
})
