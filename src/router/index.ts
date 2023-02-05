import { createRouter, createWebHashHistory, createWebHistory, type RouteRecordRaw } from "vue-router";
import { CoffeeCup } from "@element-plus/icons-vue";
import { RouterEnum } from "@/enums/router-enums";
const Home = () => import("../views/Home/index.vue");
const TimeLine = () => import("../views/TimeLine/index.vue");
const Categories = () => import("../views/Categories/index.vue");
const routes:Array<RouteRecordRaw> = [
    {
      path: "/",
      redirect: {
        name: "home",
      },
    },
    {
      path: RouterEnum.Home,
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
      path: "/iblog_index",
      name: "iblog_index",
      meta: {
        title: "索引",
        icon: CoffeeCup,
      },
      children: [
        {
          path: RouterEnum.Categories,
          name: "categories",
          component: Categories,
          meta: {
            title: "分类",
            icon: CoffeeCup,
          },
        },
        {
          path: RouterEnum.TimeLine,
          name: "timeline",
          component: TimeLine,
          meta: {
            title: "时间线",
            icon: CoffeeCup,
          },
        },
        {
          path: RouterEnum.Tags,
          name: "tags",
          component: Home,
          meta: {
            title: "标签",
            icon: CoffeeCup,
          },
        },
      ],
    },
    {
      path: RouterEnum.Message,
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
    }
  ];
const router=createRouter({
  history: import.meta.env.MODE === 'hash' ? createWebHashHistory() : createWebHistory(import.meta.env.BASE_URL as string),
  routes
})

export default router;
