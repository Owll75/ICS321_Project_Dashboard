<template>
  <div>
    <h3 class="text-3xl font-medium text-gray-700">Users</h3>

    <div class="mt-8">

      <div class="mt-6">
        <h2 class="text-xl font-semibold leading-tight text-gray-700"></h2>

        <div class="flex flex-col mt-3 sm:flex-row">
          <div class="flex">
            <div class="relative">
              <select
                  class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border-t border-b border-r border-gray-400 rounded-r appearance-none sm:rounded-r-none sm:border-r-0 focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                >
                  <option>All</option>
                  <option>Admin</option>
                  <option>Customer</option>
                </select>

              <div
                class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>

            <div class="relative">
              

              <div
                class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="relative block mt-2 sm:mt-0">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                viewBox="0 0 24 24"
                class="w-4 h-4 text-gray-500 fill-current"
              >
                <path
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                />
              </svg>
            </span>

            <input
              placeholder="Search"
              class="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            />
          </div>
        </div>
      </div>
      
    </div>
    <form @submit.prevent="goNewUser">
    <div class="mt-8">

<button type="button" class="bg-indigo-600 text-white text-sm leading-5 font-medium py-2 px-3 rounded-lg" @click="goNewUser">Add New User</button>
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
                    class="px-6 py-3 bg-gray-100 border-b border-gray-200"
                  ></th>
                  <th
                    class="px-6 py-3 bg-gray-100 border-b border-gray-200"
                  ></th>
           
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
                  <a @click="deleteCustomer(u.user_id)"  > 
                      <div  class="text-orange-600 cursor-pointer  hover:text-orange-900">
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


const {
  simpleTableData,
  paginatedTableData,
  wideTableData,
} = useTableData();
</script>
