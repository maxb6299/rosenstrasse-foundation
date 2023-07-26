import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/meet-the-team",
    name: "meet-the-team",
    component: () => import("@/views/MeetTheTeamView.vue"),
  },
  {
    path: "/personal-testimonies",
    name: "personal-testimonies",
    component: () => import("@/views/PersonalTestimoniesView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
