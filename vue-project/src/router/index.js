import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/HelloWorld'], resolve)
    },
    {
      path: '/Secend',
      component: resolve => require(['../components/Secend.vue'], resolve)
    }
  ]
})
