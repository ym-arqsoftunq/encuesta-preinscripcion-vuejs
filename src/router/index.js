import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import MateriasACursar from '@/components/MateriasACursar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: MateriasACursar
    }
  ]
})
