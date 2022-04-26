import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import HomePage from '@/pages/home'
import AboutPage from '@/pages/about'
import NotFoundPage from '@/pages/notFound'

const routerHistory = createWebHashHistory()

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
