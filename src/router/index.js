import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Myinfo from '@/views/Myinfo'
import Vaccine from '@/views/Vaccine'
import TransferVisit from '@/views/TransferVisit'
import SickLeave from '@/views/SickLeave'
import reimbursement from '@/views/reimbursement'
import History from '@/views/History'
import Blooddonation from '@/views/Blooddonation'
import Doctorvisit from '@/views/Doctorvisit'
import Login from '@/views/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/myinfo',
      component: Myinfo
    },
    {
      path: '/myvaccine',
      component: Vaccine
    },
    {
      path: '/transfervisit',
      component: TransferVisit
    },
    {
      path: '/sickleave',
      component: SickLeave
    },
    {
      path: '/reimbursement',
      component: reimbursement
    },
    {
      path: '/history',
      component: History
    },
    {
      path: '/blooddonation',
      component: Blooddonation
    },
    {
      path: '/dcvisit',
      component: Doctorvisit
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
