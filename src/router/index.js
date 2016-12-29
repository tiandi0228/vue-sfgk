import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    name: '/',
    meta: {
      auth: false
    },
    component: resolve => require(['../views/Index.vue'], resolve)
  }, {
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
  }, {
    path: '/menu/:id',
    name: 'menu',
    meta: {
      auth: false
    },
    component: resolve => require(['../views/Menu.vue'], resolve)
  }, {
    path: '/noticeSDList',
    name: 'noticeSDList',
    meta: {
      auth: false
    },
    component: resolve => require(['../views/NoticeSDList.vue'], resolve)
  }, {
    path: '/noticeKTList',
    name: 'noticeKTList',
    meta: {
      auth: false
    },
    component: resolve => require(['../views/NoticeKTList.vue'], resolve)
  }, {
    path: '/newsList/:id',
    name: 'newsList',
    meta: {
      auth: false
    },
    component: resolve => require(['../views/NewsList.vue'], resolve)
  }, {
    path: '/courtNewsList',
    name: 'courtNewsList',
    meta: {
      auth: false
    },
    component: resolve => require(['../views/CourtNewsList.vue'], resolve)
  }, {
    path: '/creditList',
    name: 'creditList',
    meta: {
      auth: false
    },
    component: resolve => require(['../views/CreditList.vue'], resolve)
  }, {
    path: '/limitList',
    name: 'limitList',
    meta: {
      auth: false
    },
    component: resolve => require(['../views/LimitList.vue'], resolve)
  }, {
    path: '/sfwj',
    name: 'sfwj',
    meta: {
      auth: false
    },
    component: resolve => require(['../views/SFWJList.vue'], resolve)
  }, {
    path: '/jxjs',
    name: 'jxjs',
    meta: {
      auth: false
    },
    component: resolve => require(['../views/JXJSList.vue'], resolve)
  }, {
    path: '/caseQueryList/:tab',
    name: 'caseQueryList',
    meta: {
      auth: false
    },
    component: resolve => require(['../views/CaseQueryList.vue'], resolve)
  }, {
    path: '/12368',
    name: '12368',
    meta: {
      auth: false
    },
    component: resolve => require(['../views/12368.vue'], resolve)
  }]
})
