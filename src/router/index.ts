import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Home", component: () => import("@/views/Home.vue") },
  { path: "/about", name: "About", component: () => import("@/views/About.vue") },
  { path: "/work", name: "Work", component: () => import("@/views/Work.vue") },
  { path: "/contact", name: "Contact", component: () => import("@/views/Contact.vue") }
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
