import Vue from 'vue'
import Router from 'vue-router'
import Go from '@/components/Go'
import Ky from '@/components/Ky'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Go',
      component: Go
    },
    {
      path: '/privet',
      name: 'Ky',
      component: Ky
    }
  ]
})
