import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/typicalCaseList/:tab',
    name: 'typicalCaseList',
    meta: {
      auth: false
    },
    component: resolve => require(['../views/TypicalCaseList.vue'], resolve)
  }, {
    path: '/detail/:id/:tab',
    name: 'detail',
    meta: {
      auth: false
    },
    component: resolve => require(['../views/Detail.vue'], resolve)
  }, {
    path: '/List/:tab',
    name: 'List',
    meta: {
      auth: false
    },
    component: resolve => require(['../views/List.vue'], resolve)
  }, {
    path: '/mapList',
    name: 'mapList',
    meta: {
      auth: false
    },
    component: resolve => require(['../views/MapList.vue'], resolve)
  }, {
    path: '/judgmentBookList',
    name: 'judgmentBookList',
    meta: {
      auth: false
    },
    component: resolve => require(['../views/JudgmentBookList.vue'], resolve)
  }]
})
