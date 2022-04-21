import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import NotFoundPage from "@/pages/notFound";

const routerHistory = createWebHistory();

const routes = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/:CatchAll(.*)",
      name: "404",
      component: NotFoundPage,
    },
  ],
});

export default routes;
