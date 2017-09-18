import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Departments from '@/components/Departments'
import Employees from '@/components/Employees'
import Id1 from '@/components/1'

Vue.use(Router)

import '../fonst_config.css'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/departments',
      name: 'Departments',
      component: Departments
    },
    {
      path: '/departments/:id/employees',
      name: 'Employees',
      component: Employees
    },
    {
      path: '/employees/:person',
      name: 'Id1',
      component: Id1
    }
  ]
})
