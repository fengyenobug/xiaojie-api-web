import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import("@/views/login/index.vue")
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("@/views/home/index.vue")
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import("@/views/NotFound.vue")
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
