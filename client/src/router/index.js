import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/add-content',
    name: 'AddContentView',
    component: () => import('../views/AddContentView.vue')
  },
  {
    path: '/content/:id',
    name: 'ContentView',
    component: () => import('../views/ContentView.vue')
  },
  {
    path: '/edit-content/:id',
    name: 'EditContentView',
    component: () => import('../views/EditContentView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
