import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Myinfo from '@/views/Myinfo'
import History from '@/views/History'
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
      path: '/my',
      component: Myinfo
    },
    {
      path: '/history',
      component: History
    }
  ]
})
