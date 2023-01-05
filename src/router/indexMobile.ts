import { createRouter, createWebHistory } from "vue-router";
import { CoffeeCup } from "@element-plus/icons-vue";
const Home = () => import("../views/Home/index.vue");
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: {
        name: "home",
      },
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        title: "首页",
        icon: CoffeeCup,
      },
    },
    {
      path: "/articles",
      name: "articles",
      component: Home,
      meta: {
        title: "文章",
        icon: CoffeeCup,
      },
    },
    {
      path: "/categories",
      name: "categories",
      component: Home,
      meta: {
        title: "分类",
        icon: CoffeeCup,
      },
    },
    {
      path: "/timeline",
      name: "timeline",
      component: Home,
      meta: {
        title: "时间线",
        icon: CoffeeCup,
      },
    },
    {
      path: "/tags",
      name: "tags",
      component: Home,
      meta: {
        title: "标签",
        icon: CoffeeCup,
      },
    },

    {
      path: "/message",
      name: "message",
      component: Home,
      meta: {
        title: "留言",
        icon: CoffeeCup,
      },
    },
    {
      path: "/about",
      name: "about",
      component: Home,
      meta: {
        title: "关于",
        icon: CoffeeCup,
      },
    },
  ],
});

export default router;
