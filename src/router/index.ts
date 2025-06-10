import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/control',
      name: 'controlreproductivo',
      component: () => import('../views/ControlReproductivoView.vue'),
    },
    {
      path: '/registro',
      name: 'registroanimal',
      component: () => import('../views/RegistroAnimalView.vue'),
    },
    {
      path: '/inseminacion',
      name: '/inseminacion',
      component: () => import('../views/InseminacionView.vue'),
    },
  ],
})

export default router
