import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/components/Demo.vue') },
  { path: '/hello', component: () => import('@/components/HelloWorld.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
