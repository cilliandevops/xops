import { 
  createRouter, 
  createWebHashHistory, 
  RouteRecordRaw} from 'vue-router';

import Admin from "@/components/HelloWorld.vue"
import Login from "@/views/login/index.vue"
import NotFound from "@/views/error-page/404.vue"


export const constantRoutes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "admin",
        component: Admin,
    },
    {
        path: '/login',
        component: Login,
        meta: { title: "登录页" }
    },
    {
      path: "/404",
      name: "NotFound",
      component: () => import("@/views/error-page/404.vue"),
      
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
  
});

export function resetRouter() {
  router.replace({ path: "/login" });
}

export default router;
