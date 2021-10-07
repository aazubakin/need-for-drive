import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Location from '../views/Location.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/location',
    name: 'Location',
    component: Location,
  },
  {
    path: '/model',
    name: 'Model',
    component: () => import('../views/Model.vue'),
  },
  {
    path: '/additional',
    name: 'Additional',
    component: () => import('../views/Additional.vue'),
  },
  {
    path: '/summary',
    name: 'Summary',
    component: () => import('../views/Summary.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
