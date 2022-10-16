import { createRouter, createWebHistory } from "vue-router";
import Exercise1View from "../views/Exercise1View.vue";
import Exercise2View from "../views/Exercise2View.vue";
import Exercise3View from "../views/Exercise3View.vue";
import Exercise4View from "../views/Exercise4View.vue";
import Exercise5View from "../views/Exercise5View.vue";
import Exercise6View from "../views/Exercise6View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/exercises/1",
      name: "exercise1",
      component: Exercise1View,
    },
    {
      path: "/exercises/2",
      name: "exercise2",
      component: Exercise2View,
    },
    {
      path: "/exercises/3",
      name: "exercise3",
      component: Exercise3View,
    },
    {
      path: "/exercises/4",
      name: "exercise4",
      component: Exercise4View,
    },
    {
      path: "/exercises/5",
      name: "exercise5",
      component: Exercise5View,
    },
    {
      path: "/exercises/6",
      name: "exercise6",
      component: Exercise6View,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/exercises/1",
    },
  ],
});

export default router;
