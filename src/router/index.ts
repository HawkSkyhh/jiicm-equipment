import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/homePage'
  },
  {
    path: "/man",
    component: () => import("@/views/EquipmentManager.vue"),
    meta: {
      title: "控制台",
    }
  },
  {
    path: "/homePage",
    component: () => import("@/views/HomePage.vue"),
    meta: {
      title: "首页",
      welcomeWord: "欢迎使用联创院设备查询小程序"
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
    path: "/detailequipment",
    component: () => import("@/views/DetailEquipment.vue"),
    // 加meta.title将会覆盖当前以设备名的标题
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

router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title = to.meta.title as string
  }else[
    document.title = to.query.title as string
  ]
  next()
})

export default router