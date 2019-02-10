import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = [
  {
    path: '/',
    component: () => import('../pages/index'),
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/overview',
        component: ()=> import('../pages/overview/overview')
      }
    ]
  }
]

export default new Router({
  routes: [
    ...router
  ]
})
