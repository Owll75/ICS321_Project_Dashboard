<template>
    <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
        <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
          <div class="flex items-center justify-center">
            <svg
              class="w-10 h-10"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
                fill="#4C51BF"
                stroke="#4C51BF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
                fill="white"
              />
            </svg>
            <span class="text-2xl font-semibold text-gray-700">New Customer</span>
          </div>
          <div>
          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" v-if="errorMsg" role="alert">
      <strong class="font-bold">Unable to Add:</strong>
      <span class="block sm:inline">{{errorMsg}}</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
      </span>
    </div>
    </div>
          <form class="mt-4" @submit.prevent="register"><!---->
            <label class="block">
              <span class="text-sm text-gray-700">Firstname</span>
              <input
                type="text"
                class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                v-model="firstname"
                placeholder="first name"
              />
            </label>
            
            <label class="block">
              <span class="text-sm text-gray-700">Lastname</span>
              <input
                type="text"
                class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                v-model="lastname"
                placeholder="Last name"
              />
            </label>
    
            <label class="block">
              <span class="text-sm text-gray-700">Phone</span>
              <input
                type="text"
                placeholder="phone number"
                class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                v-model="phone"
              />
            </label>
    
            <label class="block">
              <span class="text-sm text-gray-700">Email</span>
              <input
                type="email"
                class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                v-model="email"
                placeholder="email"
              />
            </label>
    
            <label class="block mt-3">
              <span class="text-sm text-gray-700">Password</span>
              <input
                type="password"
                class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                v-model="password"
                placeholder="password"
              />
            </label>
        
            <div class="mt-6">
              <button
                type="submit"
                class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500"
              >
                Confirm
              </button>
            </div>
     
          </form>
        </div>
      </div>
    </template>
    
    
    <script  setup lang="ts">
    
    import { onMounted, ref, toRefs } from 'vue'

    import { useRouter } from "vue-router";
import router from '../router';
    import { supabase } from '../supabase'
    import { supabaseq } from '../supabase'
    const firstname = ref("")
    const lastname = ref("")
    const email = ref("")
    const password = ref("")
    const phone = ref("")
    const errorMsg = ref("")
    
    async function register(){
    if(true){
    try{
        let sbefore = localStorage.getItem("supabase.auth.token")
        let tb = await supabase.auth
    let {error} = await supabaseq.auth.signUp({
  email: email.value,
  password: password.value
})
localStorage.setItem("supabase.auth.token",sbefore)
    supabase.auth = await tb
    if(error) throw error //Check if Registered Successfully
      console.log()
     
   await InsertCustomerDetails(await supabase.auth.session().user.id) //Register new customer with user_id (included in data argument.)
    router.push("/admin/users")
    }catch(error){ //Show error message 
      
      errorMsg.value = error.message
      
    }
}else{

  errorMsg.value = "Passwords should be identical"

}
}
    
    
    async function InsertCustomerDetails(userId){
        const { data, error } = await supabase
      .from('customer')
      .insert([
        { firstname: firstname.value,lastname: lastname.value, email:email.value, phone:phone.value,user_id:userId},
      ])
    
        console.log(userId)
        console.log(data)
     
    }
    
    
    </script>