<template>
 
  <component :is="layout">
    <router-view />
  </component>
  
</template>

<script setup lang="ts">
import { computed,ref } from "vue";
import { supabase } from './supabase'
import {useRouter } from "vue-router";
import userStore from './store/userStore'
import router from './router'

const defaultLayout = "default";

const { currentRoute } = useRouter();
const trouter = useRouter();
const appInit = ref(null)
const user = supabase.auth.user


if(!user){
  appInit.value = true 
  console.log(user)
}else{appInit.value = false}

//console.log(router.getRoutes())
if(appInit.value == true){

console.log("Logged In")

}else{
  trouter.isReady().then(() => {
    if(currentRoute.value.name != "Register"){

      router.push('/login')
}
})
  console.log(appInit.value)
  console.log("Logged out")
}





supabase.auth.onAuthStateChange((_,session) =>{
   userStore.methods.setUser(session)
   appInit.value = true
  console.log(session)
})


const layout = computed(
  
  () => `${currentRoute.value.meta.layout  || defaultLayout}-layout`
);







</script>