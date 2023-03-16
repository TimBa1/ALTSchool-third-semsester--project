import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/components/404.vue";
import SingleRepo from "@/components/SingleRepo.vue";
import HomePage from "@/components/Home.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },

  {
    path: "/repositories/:id",
    name: "SingleRepo",
    component: SingleRepo,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;