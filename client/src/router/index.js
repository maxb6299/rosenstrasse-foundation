import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/about-this-site",
    name: "about-this-site",
    component: () => import("@/views/AboutThisSiteView.vue"),
  },
  {
    path: "/personal-testimonies",
    name: "personal-testimonies",
    component: () => import("@/views/PersonalTestimoniesView.vue"),
  },
  {
    path: "/the-rosenstrasse-protest",
    name: "the-rosenstrasse-protest",
    component: () => import("@/views/TheRosenstrasseProtestView.vue"),
  },
  {
    path: "/timeline",
    name: "timeline",
    component: () => import("@/views/TimelineView.vue"),
  },
  {
    path: "/meet-the-team",
    name: "meet-the-team",
    component: () => import("@/views/MeetTheTeamView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
