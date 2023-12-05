import { 
  createRouter, 
  createWebHashHistory, 
  RouteRecordRaw} from 'vue-router';

import Test from "@/components/HelloWorld.vue"
import Login from "@/views/login/index.vue"
import NotFound from "@/views/error-page/404.vue"
import Layouts from "@/layout/index.vue"


export const constantRoutes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "test",
        component: Test,
    },
    {
        path: '/login',
        component: Login,
        meta: { 
          title: "登录页" ,
          hidden: true
        }
    },
    {
      path: '/layout',
      component: Layouts,
      meta: { title: "布局" }
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
  },
  {
    path: "/cluster",
    name: "K8s",
    component: Layouts,
    meta: {
      title: "k8s资源",
      svgIcon: "menu",
      },
    children: [
        {
            path: "node",
            name: "Node",
            meta: {title: "Node",},
            component: () => import("@/views/node/Node.vue")
        },
        {
            path: "namespace",
            name: "Namespace",
            meta: {title: "Namespace",},
            component: () => import("@/views/namespace/Namespace.vue")
        },
        {
            path: "persistentvolume",
            name: "PersistentVolume",
            meta: {title: "PersistemtVolume"},
            component: () => import("@/views/persistentvolume/PersistentVolume.vue")
        }
    ]
  },
  

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
