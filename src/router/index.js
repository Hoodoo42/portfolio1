import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutMe from "@/views/AboutMe.vue";
import PortfolioPage from "@/views/PortfolioPage.vue";
import ServicePage from "@/views/ServicePage.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  { path: "/about", 
    component: AboutMe 
  },
  {
    path: "/portfolio",
    component: PortfolioPage,
  },
  {
    path: "/service",
    component: ServicePage
  }
];

const router = new VueRouter({
  routes,
});

export default router;
