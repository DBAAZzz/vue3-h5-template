import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import AdvertMobile from "@/views/advertMobile/index.vue";
import AdvertPC from "@/views/advertPC/index.vue";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "root",
  //   component: Layout,
  //   redirect: { name: "Demo" },
  //   children: [
  //     {
  //       path: "demo",
  //       name: "Demo",
  //       component: Demo,
  //       meta: {
  //         title: "主页"
  //       }
  //     },
  //     {
  //       path: "tools",
  //       name: "Tools",
  //       component: () => import("@/views/tools/index.vue"),
  //       meta: {
  //         title: "工具"
  //       }
  //     },
  //     {
  //       path: "about",
  //       name: "About",
  //       component: () => import("@/views/about/index.vue"),
  //       meta: {
  //         title: "关于",
  //         noCache: true
  //       }
  //     }
  //   ]
  // },
  {
    path: "/",
    name: "promotion",
    component: () => import("@/views/promotion/index.vue"),
    meta: {
      title: "亲人的回声"
    }
  },
  {
    path: "/m/advert",
    name: "AdvertMobile",
    component: AdvertMobile,
    meta: {
      title: "元谟人工智能《逝者纪录片》"
    }
  },
  {
    path: "/advert",
    name: "AdvertPC",
    component: AdvertPC,
    meta: {
      title: "元谟人工智能《逝者纪录片》"
    }
  }
];

export default routes;
