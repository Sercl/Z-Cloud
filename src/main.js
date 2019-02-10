import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import router from './router'
import api from './api/index'
import './common/css/index.styl'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$api = api

router.beforeEach((to, from, next) =>{
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
