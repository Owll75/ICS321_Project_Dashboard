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
import Navbar from "./components/navbar.vue";
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
    component: Report,
  },
  {
    path: "/forms",
    name: "Forms",
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
    component: Users,
  },
  {
    path: "/packages",
    name: "Packages",
    component: Packages,
  },
  // {
  //   path: "/modal",
  //   name: "Modal",
  //   component: Modal,
  // },
   {
     path: "/blank",
     name: "Blank",
     component: Blank,
   },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
