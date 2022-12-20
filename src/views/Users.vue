<template>
  <div>
    <h3 class="text-3xl font-medium text-gray-700">Users</h3>

    <br>
      <div>
            <form class="w-full max-w-sm">
      <div class="flex items-center border-b border-teal-500 py-2">
        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter User Email" aria-label="Full name">
        <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
          Search for User
        </button>
      </div>
<<<<<<< HEAD
      
    </div>
    <form @submit.prevent="goNewUser">
    <div class="mt-8">

<button type="button" class="bg-indigo-600 text-white text-sm leading-5 font-medium py-2 px-3 rounded-lg" @click="goNewUser">Add New User</button>
=======
    </form>
        </div>
<div class="mt-8">

<button type="button" class="bg-teal-500 text-white text-sm leading-5 font-medium py-2 px-3 rounded-lg">Add New Package</button>
>>>>>>> cf1cfab518c0a0f10e8ee7dbd02b375098f38537
</div>
</form>
    <div class="mt-8">

      <div class="flex flex-col mt-6">
        <div
          class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          <div
            class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
          >
            <table class="min-w-full">
              <thead>
                <tr>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                  >
                    Full Name
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                  >
                    Email
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                  >
                    Phone
                  </th>
            
                  <th
<<<<<<< HEAD
                    class="px-6 py-3 bg-gray-100 border-b border-gray-200"
                  ></th>
                  <th
                    class="px-6 py-3 bg-gray-100 border-b border-gray-200"
                  ></th>
           
=======
                      class="px-6 py-3 bg-gray-100 border-b font-medium   tracking-wider text-right border-gray-200"
                    >
                  Edit
                  </th>
                    <th
                      class="px-6 py-3 bg-gray-100 border-b font-medium tracking-wider text-right border-gray-200"
                    >Visit</th>
                    <th
                      class="px-6 py-3 bg-gray-100 border-b font-medium tracking-wider text-right border-gray-200"
                    >Delete</th>
>>>>>>> cf1cfab518c0a0f10e8ee7dbd02b375098f38537
                </tr>
              </thead>

              <tbody class="bg-white">
                <tr v-for="(u, index) in allCustomers" :key="index">
                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">

                      <div >
                        <div
                          class="text-sm font-medium leading-5 text-gray-900"
                        >
                          {{ u.firstname + " " + u.lastname }}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="text-sm leading-5 text-gray-900">
                      {{ u.email }}
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <span
                      class="inline-flex px-2 text-xs font-semibold leading-5   rounded-full"
                      >{{ u.phone }}</span
                    >
                  </td>

                  

                  <td
                    class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                  >
                  <a @click="editCustomer(u.user_id)"  > 
                      <div  class="text-grey-600 cursor-pointer  hover:text-grey-900">
                     Edit
                    </div> </a>
                  </td>
                  <td
                    class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                  >
<<<<<<< HEAD
                  <a @click="deleteCustomer(u.user_id)"  > 
                      <div  class="text-orange-600 cursor-pointer  hover:text-orange-900">
                     Delete
                    </div> </a>
=======
                    <a href="#" class=" text-indigo-600 hover:text-indigo-900"
                      >Show</a
                    >
>>>>>>> cf1cfab518c0a0f10e8ee7dbd02b375098f38537
                  </td>
                  <td>
                    <a href="#"> 
                      <div  class="text-orange-600 px-6 py-4 text-sm font-medium leading-5 text-right border-b   hover:text-orange-900">
                     Delete
                    </div> </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTableData } from "../hooks/useTableData";
<<<<<<< HEAD
import router from "../router";
import userManagement from '../store/userManagement'
import {ref} from 'vue'

const allCustomers = ref("")

initCustomers()

async function initCustomers(){
  allCustomers.value = await userManagement.userManage.selectCustomer()
  console.log( allCustomers.value)
}


async function deleteCustomer(uid){
  console.log("OK")
  userManagement.userManage.deleteUser(uid)
  
 
}

async function editCustomer(uid){
  localStorage.removeItem("savedID")
  localStorage.setItem("savedID",uid)
  router.push("/admin/v1/customeredit")
}

async function goNewUser(){
  router.push("/admin/v1/create")

}
=======
import { computed, ref } from "vue";

let input = ref("");
const userSerch = [useTableData];
>>>>>>> cf1cfab518c0a0f10e8ee7dbd02b375098f38537


const {
  simpleTableData,
  paginatedTableData,
  wideTableData,
} = useTableData();
</script>
