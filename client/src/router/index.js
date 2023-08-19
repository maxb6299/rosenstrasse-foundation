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
    path: "/meet-the-team",
    name: "meet-the-team",
    component: () => import("@/views/MeetTheTeamView.vue"),
  },
  {
    path: "/meet-the-team/:id",
    name: "team-member",
    component: () => import("@/views/TeamMemberView.vue"),
  },

  {
    path: "/personal-testimonies",
    name: "personal-testimonies",
    component: () => import("@/views/PersonalTestimoniesView.vue"),
  },
  {
    path: "/personal-testimonies/:id",
    name: "individual-testimonies",
    component: () => import("@/views/IndividualTestimoniesView.vue"),
    props: true,
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
    path: "/contact-us",
    name: "contact-us",
    component: () => import("@/views/ContactUsView.vue"),
  },
  {
    path: "/donate",
    name: "donate",
    component: () => import("@/views/DonateView.vue"),
  },
  {
    path: "/monthly-newsletters",
    name: "monthly-newsletters",
    component: () => import("@/views/MonthlyNewslettersView.vue"),
  },

  {
    path: "/documents",
    name: "documents",
    component: () => import("@/views/DocumentsView.vue"),
  },
  {
    path: "/forum",
    name: "forum",
    component: () => import("@/views/ForumView.vue"),
  },
  {
    path: "/media-resources",
    name: "media-resources",
    component: () => import("@/views/MediaResourcesView.vue"),
  },
  {
    path: "/sources-cited",
    name: "sources-cited",
    component: () => import("@/views/SourcesCitedView.vue"),
  },
  {
    path: "/scholarly-debate",
    name: "scholarly-debate",
    component: () => import("@/views/ScholarlyDebateView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
