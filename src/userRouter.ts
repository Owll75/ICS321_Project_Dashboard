import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import UserHomePage from "./views/UserHomePage.vue";
import Login from "./views/Login.vue";
import UserPackages from "./views/UserPackages.vue";
import NotFound from "./views/NotFound.vue";
import Register from "./views/Register.vue";
import Navbar from "./components/navbar.vue";
import SendPackage from "./views/SendPackage.vue"
const userRoutes: RouteRecordRaw[] = [
 
 
  {
    path: "/customer",
    name: "UserHomePage",
    meta: { requiresAuth: true,layout:"user" },
    component: UserHomePage,
  },
  {
    path: "/customer/userpackages",
    name: "UserPackages",
    meta: { requiresAuth: true ,layout:"user"},
    component: UserPackages,
  },
  {
    path: "/customer/sendPackage",
    name: "SendPackage",
    meta: { requiresAuth: true ,layout:"user"},
    component: SendPackage,
  }
];
// var multiRoutes = []
// multiRoutes = multiRoutes.concat(routes,userRouter)
// const router = createRouter({
//   history: createWebHistory(),
//   routes: multiRoutes,
// });



export default userRoutes;
