import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Report from "./views/Report.vue";
import Forms from "./views/Forms.vue";
import Users from "./views/Users.vue";
// import UIElements from "./views/UIElements.vue";
import Login from "./views/Login.vue";
import Modal from "./views/Modal.vue";
import Card from "./views/Card.vue";
import Blank from "./views/Blank.vue";
import Packages from "./views/Package.vue";
import NotFound from "./views/NotFound.vue";
import Register from "./views/Register.vue";
import UnAuthorized from "./views/unauthorized.vue";
import Customer from "./components/UserLayout.vue"
import userRouter from "./userRouter";
const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
/*
  {
    path: "/customer",
    name: "customer",
    component: Customer,
    meta:{requiresAuth: true,layout:'empty'},
  },
  */
  {
    path: "/admin/report",
    name: "ReportAdmin",
    meta: { requiresAuth: true },
    component: Report,
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


  // {
  //   path: "/cards",
  //   name: "Cards",
  //   component: Card,
  // },
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
  // {
  //   path: "/modal",
  //   name: "Modal",
  //   component: Modal,
  // },
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
