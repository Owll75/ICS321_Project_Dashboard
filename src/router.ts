import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Report from "./views/Report.vue";
import Forms from "./views/Forms.vue";
import Users from "./views/Users.vue";
// import UIElements from "./views/UIElements.vue";
import Login from "./views/Login.vue";
import Packages from "./views/Package.vue";
import NotFound from "./views/NotFound.vue";
import Register from "./views/Register.vue";
import UnAuthorized from "./views/unauthorized.vue";
import Customer from "./components/UserLayout.vue"
import userRouter from "./userRouter";
import editPackage from './views/editPackage.vue'
import visitPackage from './views/visitPackage.vue'
const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },

  {
    path: "/",
    name: "homeblank",
    redirect:'/admin/report',
    meta: { layout: "empty" },
  },


  {
    path: "/admin/",
    name: "homeblank",
    redirect:'/admin/report',
    meta: { layout: "empty" },
  },
  {
    path: "/admin/report",
    name: "ReportAdmin",
    meta: { requiresAuth: true },
    component: Report,
  },

  {
    path: "/admin/edit",
    name: "editPackage",
    meta: { requiresAuth: true },
    component: editPackage,
  },
  {
    path: "/admin/forms",
    name: "FormsAdmin",
    meta: { requiresAuth: true },
    component: Forms,
  },
  
  {
    path: "/Register",
    name: "Register",
    component: Register,
    meta: {layout: "empty"},
    
  },
  
  {
    path: '/unauthorized',
    name: 'UnAuthorized',
    
    component: UnAuthorized,
   
    meta: {layout: 'empty',requiresAuth: true},
    
   },
  {
    path: "/admin/Users",
    name: "UsersAdmin",
    meta: { requiresAuth: true },
    component: Users,
  },
  {
    path: "/admin/packages",
    name: "PackagesAdmin",
    meta: { requiresAuth: true },
    component: Packages,
  },
  {
    path: "/admin/visit",
    name: "visitPackage",
    meta: { requiresAuth: true },
    component: visitPackage,
  },
   {
    path: '/logout',
    name: 'Signout',
    redirect:"/login",
     meta: {requiresAuth: true},
    
   }
];
var multiRoutes = []
multiRoutes = multiRoutes.concat(routes,userRouter)
const router = createRouter({
  history: createWebHistory(),
  routes: multiRoutes,
});

export default router;
