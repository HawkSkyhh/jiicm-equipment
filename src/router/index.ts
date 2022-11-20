import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/homePage'
  },
  {
    path: "/homePage",
    component: () => import("@/views/HomePage.vue"),
    meta: {
      title: "首页",
      welcomeWord:"欢迎使用联创院设备查询小程序"
    }
  },
  {
    path: "/equipmentlist",
    component: () => import("@/views/EquipmentList.vue"),
    meta: {
      title: "设备查询"
    }
  },
  {
    path: "/deailequipment",
    component: () => import("@/views/DetailEquipment.vue"),
    meta: {
      title: "设备详情"
    }
  },
  {
    path: "/404",
    component: () => import("@/views/NotFound.vue"),
    meta: {
      title: "找不到页面"
    }
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router