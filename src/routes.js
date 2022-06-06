import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/home'
import AboutPage from '@/pages/about'
import NotFoundPage from '@/pages/notFound'

const routerHistory = createWebHistory(process.env.BASE_URL)

const routes = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: "/:pathMatch(.*)",
      name: 'NotFoundPage',
      component: NotFoundPage
    }
  ]
})

export default routes
