import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import UserHomePage from "./views/UserHomePage.vue";
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
import Navbar from "./components/navbar.vue";
const userRoutes: RouteRecordRaw[] = [
 
 
  {
    path: "/customer",
    name: "UserHomePage",
    meta: { requiresAuth: true,layout:"user" },
    component: UserHomePage,
  },
 

  {
    path: "/customer/cards",
    name: "Cards",
    meta: { requiresAuth: true ,layout:"user"},
    component: Card,
  },
  {
    path: "/customer/packages",
    name: "Packages",
    meta: { requiresAuth: true ,layout:"user"},
    component: Packages,
  },
  
  {
    path: "/customer/Users",
    name: "Users",
    component: Users,
    meta: { requiresAuth: true ,layout:"user"},
  },
  {
    path: "/customer/forms",
    name: "Forms",
    component: Forms,
    meta: { requiresAuth: true ,layout:"user"},
  },
  // {
  //   path: "/modal",
  //   name: "Modal",
  //   component: Modal,
  // },
  // {
  //   path: "/blank",
  //   name: "Blank",
  //   component: Blank,
  // },


  
];



export default userRoutes;
