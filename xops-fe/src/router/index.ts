import { 
  createRouter, 
  createWebHashHistory, 
} from 'vue-router';

import Admin from "@/components/HelloWorld.vue"
import Login from "@/views/login/index.vue"
import NotFound from "@/views/error-page/404.vue"


const routes = [
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
  routes,
  
});


export default router;
