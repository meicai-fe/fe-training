import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import PropsEvent from '@/views/PropsEvent'
import Inject from '@/views/Inject'
import SlotDemo from '@/views/SlotDemo'
import Todo from '@/views/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hw',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 父子间通信
    {
      path: '/pe',
      name: 'PropsEvent',
      component: PropsEvent
    },
    // provide, inject
    {
      path: '/inject',
      name: 'Inject',
      component: Inject
    },
    // slot
    {
      path: '/slot',
      name: 'SlotDemo',
      component: SlotDemo
    },
    // store
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    }
  ]
})
