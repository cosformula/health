import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/views/Index')
const Myinfo = () => import('@/views/Myinfo')
const Vaccine = () => import('@/views/Vaccine')
const TransferVisit = () => import('@/views/TransferVisit')
const SickLeave = () => import('@/views/SickLeave')
const reimbursement = () => import('@/views/reimbursement')
const History = () => import('@/views/History')
const Blooddonation = () => import('@/views/Blooddonation')
const Doctorvisit = () => import('@/views/Doctorvisit')
const Login = () => import('@/views/Login')
const PhyExam = () => import('@/views/PhyExam')
const Phytest = () => import('@/views/Phytest')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
