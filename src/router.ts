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
const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/report",
    name: "Report",
    meta: { requiresAuth: true },
    component: Report,
  },
  {
    path: "/forms",
    name: "Forms",
    meta: { requiresAuth: true },
    component: Forms,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
    meta: {layout: "empty"},
    
  },
  
  // {
  //   path: "/cards",
  //   name: "Cards",
  //   component: Card,
  // },
  {
    path: "/Users",
    name: "Users",
    meta: { requiresAuth: true },
    component: Users,
  },
  {
    path: "/packages",
    name: "Packages",
    meta: { requiresAuth: true },
    component: Packages,
  },
   {
     path: "/admin/modal",
     name: "Modal",
     component: Modal,
     meta: {layout:'empty', requiresAuth: true },

   },
   {
    path: '/logout',
    name: 'Signout',
    
    component: null,
   
    meta: {requiresAuth: true},
    
   },

   

   {
    path: '/unauthorized',
    name: 'UnAuthorized',
    
    component: UnAuthorized,
   
    meta: {layout: 'empty',requiresAuth: true},
    
   }



   
   
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
