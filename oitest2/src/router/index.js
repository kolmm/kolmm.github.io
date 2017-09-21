import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Departments from '@/components/Departments'
import Employees from '@/components/Employees'
import Employer from '@/components/Employer'

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
      component: Employees,
      props: true
    },
    {
      path: '/employers/:id',
      name: 'Employer',
      component: Employer,
      props: true
    }
  ]
})
