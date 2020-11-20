import { createRouter, createWebHashHistory } from "vue-router";

const Test = () => import(/* webpackChunkName: "Test" */ "@/views/test/index");

const constantRoutes = [
  {
    path: "/v3-demo",
    component: Test
  }
];

// https://www.npmjs.com/package/vue-router
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
});

export default router;
