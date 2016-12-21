import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/typicalCaseList',
    name: 'typicalCaseList',
    component: resolve => require(['../views/TypicalCaseList.vue'], resolve)
  }, {
    path: '/detail/:id',
    name: 'detail',
    component: resolve => require(['../views/Detail.vue'], resolve)
  }]
})
