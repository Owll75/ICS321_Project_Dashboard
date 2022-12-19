<template>
    <Suspense>
      <div>
        <h3 class="text-3xl font-medium text-gray-700">My Packages</h3>
    
        <div class="mt-8">

  
  </div>
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
                        Package Number
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                      >
                      Category
                      </th>
                    
                      <th
                        class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                      >
                        Status
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                      >
                      Deliverd To
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                      >
                      Delivery Date
                      </th>
                      <th
                        class="px-6 py-3 bg-gray-100 border-b font-medium tracking-wider text-right border-gray-200"
                      >Visit</th>
                    </tr>
                  </thead>
                  <div class="m-10 flex items-center justify-center" role="status" v-if="!packages">
      <svg aria-hidden="false" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="sr-only">Loading...</span>
  </div> 
                  <tbody class="bg-white" v-bind:id="packages">
                    
                    <tr v-for="(u, index) in  packages" :key="index">
                      <td
                        class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                      >
                        <div class="flex items-center">
                          <div >
                            <div
                              class="text-sm font-medium leading-5 text-gray-900"
                            >
                            {{packages[index].package_number}}
                            </div>
                          </div>
                        </div>
                      </td>
    
                      <td
                        class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                      >
                        <div class="text-sm leading-5 text-gray-900">
                          {{packages[index].id}}
                        </div>
                        
                      </td>
    
                      <td
                        class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                      >
                        <span
                          class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                          > In transit</span
                        >
                      </td>
    
                      <td
                        class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                      >
                      {{packages[index].customerData.fullname}}
                      </td>
                      <td
                        class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                      >
                      {{packages[index].final_delivery_date}}
                      </td>
  
                      <td
                        class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                      >
                      <a  @click="visitPackage(packages[index].id)"> 
                        <div  class="text-indigo-600 cursor-pointer hover:text-indigo-900">
                      <p >Visit</p>
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
  
      
    </Suspense>
   
    </template>
    
    <script setup lang="ts">
    import { useTableData } from "../hooks/useTableData";
    import  ts  from "../hooks/useTableData";
    import  mtdata  from "../hooks/useTableData";
    
    import {ref,reactive} from 'vue'
    import {supabase} from '../supabase'
    import userManagement from '../store/userManagement'
    import packEdit from '../store/packageManagement'
  import { Suspense } from "vue";
  import router from "../router";
    
  
  const packages = ref("")
  const packageObj = ref("")
  const isDeleted = ref(false)
  
  getPackages()
  async function getPackages(){
      let pckgs = await ts.packages.showPackages()
      console.log(await ts.packages.showPackages())
   
    packages.value =pckgs
  }
   
    
    async function editPackage(pckObject){
      console.log(pckObject)
      packEdit.setPackage.editPackage(pckObject)
      router.push("/admin/edit")
    }
    
      //-> delete user(user_id,role) //console.log(await userManagement.userManage.deleteUser(user_id,supabase.auth.user().role))
     // wideTableData  = await useTableData(ts.ts.func());
     // useTableData(ts.ts.func())
      //(mtdata.mdata.fun(await ts.ts.func()))
  
      async function deletePackage(id){
      console.log(id)
      packEdit.setPackage.deletePackage(id)
      isDeleted.value = true
      router.go(0)
    }
  
    async function visitPackage(id){
        localStorage.removeItem("visitID")
        localStorage.setItem("visitID",id)
        
        router.push("/admin/visit")
        
    }
  
    
  
  
   
     const {
      wideTableData,
    } = reactive(useTableData());
      
      
      </script>
    