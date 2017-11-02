import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import Myinfo from '@/views/Myinfo'
import Vaccine from '@/views/Vaccine'
import TransferVisit from '@/views/TransferVisit'
import SickLeave from '@/views/SickLeave'
import reimbursement from '@/views/reimbursement'
import History from '@/views/History'
import Blooddonation from '@/views/Blooddonation'
import Doctorvisit from '@/views/Doctorvisit'
import Login from '@/views/Login'
import PhyExam from '@/views/PhyExam'
import Phytest from '@/views/Phytest'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/phytest',
      name: 'Phytest',
      component: Phytest
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
    },
    {
      path: '/phyexam',
      component: PhyExam
    }
  ]
})
