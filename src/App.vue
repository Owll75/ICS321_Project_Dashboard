
<template>

  <component :is="layout">
   

    <router-view />

  </component>

</template>

<script setup>
import { computed,ref } from "vue";

import { supabase } from './supabase'
import {useRouter } from "vue-router";
import userStore from './store/userStore'

import router from './router'

const defaultLayout = "default";

const { currentRoute } = useRouter();

const trouter = useRouter();
const appInit = ref(null)

const user = supabase.auth.user()






supabase.auth.onAuthStateChange((_,session) =>{
   userStore.methods.setUser(session)
   
   
})




router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    let isLogged = (supabase.auth.user() == null ? false : true)
    let isAdmin = (supabase.auth.user().role =='service_role' ? true : false)
    let routePath = to.fullPath;

    if(routePath =='/logout'){
      //Sign out
      isLogged = false
      supabase.auth.signOut()
    }


    if (!isLogged) {
      next({
        path: '/login',
      })
    } else {
      next()
    }
    
    if(!isAdmin && routePath.startsWith("/admin")){
 
      router.push("/unauthorized")
       
    }

  } else {
    next() 
  }
})
const layout = computed(
  
  () => `${currentRoute.value.meta.layout  || defaultLayout}-layout`
);







</script>