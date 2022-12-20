<template>
  <Suspense>
    <div>
<<<<<<< HEAD
      <h3 class="text-3xl font-medium text-gray-700">packages</h3>
  
      <div class="mt-8">

<div >
  <form class="mt-5 inline-grid grid-cols-3 gap-10" @submit.prevent="doFilter">
  <div class="">
    <label for="categorySelect">Category</label>
    <select id="categorySelect" v-model="selectedCategory" class="form-select appearance-none
      block
      w-half   
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected value="-1">Choose a category</option>
        <option value="0">regular</option>
        <option value="1">fragile</option>
        <option value="2">liquid</option>
        <option value="3">chemical</option>
        
    </select>
  </div>

  <div class="">
    <label for="categorySelect">Status</label>
    <select id="categorySelect" v-model="selectedStatus" class="form-select appearance-none
      block
      w-half   
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected value="-1">Choose a status</option>
        <option value="0">transit</option>
        <option value="1">delivered</option>
        <option value="2">lost</option>
        <option value="3">damaged</option>
        
    </select>
  </div>



  <div class="">
    
      <label for="default-search" >Search</label>
    <div class="relative">
    

        <input type="search" id="default-search" class="rounded  bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded"  placeholder="package number" v-model="packageNumberTxt" >
        <button type="submit" class="text-white ml-4 right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
  
   
  </div>
  <div>

  </div>
</form>
</div>

</div>
<div class="mt-8">

<button type="button" class="bg-indigo-600 text-white text-sm leading-5 font-medium py-2 px-3 rounded-lg" @click="createPackage()">Add New Package</button>
=======
      <h3 class="text-3xl font-medium text-gray-700">Packages</h3>
      <br>
      <div>
            <form class="w-full max-w-sm">
      <div class="flex items-center border-b border-teal-500 py-2">
        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter Package Number" aria-label="Full name">
        <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
          Search for Package
        </button>
      </div>
    </form>
        </div>
<div class="mt-8">

<button type="button" class="bg-teal-500 text-white text-sm leading-5 font-medium py-2 px-3 rounded-lg">Add New Package</button>
>>>>>>> cf1cfab518c0a0f10e8ee7dbd02b375098f38537
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
                    <th v-if="categoryTxt"
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
  
                    <td v-if="categoryTxt"
                      class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                    >
                      <div class="text-sm leading-5 text-gray-900">
                        {{categoryTxt}}
                      </div>
                      
                    </td>
  
                    <td
                      class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                    >
                      <span
                        class="inline-flex px-2 text-xs font-semibold leading-5 text-black-800 bg-black-100 rounded-full"
                        > {{packages[index].status}}</span
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
                    <td
                      class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                    >
                    <a  @click="editPackage(packages[index])"> 
                      <div  class="text-indigo-600 cursor-pointer hover:text-indigo-900">
                     <p>Edit</p>
                    </div> </a>
                    </td>
                    <td
                      class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                    >
                   
                    <a @click="deletePackage(packages[index].id)"  > 
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
const selectedStatus = ref("-1")
const selectedCategory = ref("-1")
const categoryTxt = ref("")
const packageNumberTxt = ref("")

getPackages()
async function getPackages(){
    let pckgs = await ts.packages.selectAllPackages()
    console.log(await ts.packages.selectAllPackages())
 
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

  
  function createPackage(){
    router.push("/admin/create")

  }


  async function selectStatus(){
    console.log("OK:"+selectedStatus.value)
  //(await packEdit.setPackage.selectByCategory(selectedCategory.value))
  
  packages.value = await ts.packages.showPackages(await packEdit.setPackage.selectByStatus(selectedStatus.value))

  console.log(packages.value)
  }

async function selectCategory(){
  console.log(selectedCategory.value)
  //(await packEdit.setPackage.selectByCategory(selectedCategory.value))
  await setCategoryTxt(selectedCategory.value)
  packages.value = await ts.packages.showPackages(await packEdit.setPackage.selectByCategory(selectedCategory.value))

  console.log(packages.value)
  }



  async function setCategoryTxt(cate){
    console.log("Case"+cate)
    switch(cate) { 
        case '0': { // regular
          categoryTxt.value = 'Regular'
           break; 
        } 
        case '1': {//fragile 
          categoryTxt.value = 'Fragile'
            
           break; 
        } 
        case '2': {//liquid
          categoryTxt.value = 'Liquid'
            break; 
         } 
         case '3': {//chemical 
          categoryTxt.value = 'Chemical'
            break; 
         } 
        default: { 
           //statements; 
           break; 
        } 
     } 
  }
  


  async function doFilter(){
    if(selectedCategory.value == '-1'){
     await selectStatus()
      await getPackages()
    }else if(selectedCategory.value == '-1'){
      await selectStatus()
      categoryTxt.value = ""
    
    }else if(selectedStatus.value == '-1'){
      await selectCategory()
    }
  
    if(packageNumberTxt.value.length>0){
      //do search by package number
      console.log("found it")
    //  console.log(await ts.packages.selectPackageByPck(packageNumberTxt.value))
      packages.value = await ts.packages.selectPackageByPck(packageNumberTxt.value)
      categoryTxt.value = ""
    
    }
  }
 
   const {
    wideTableData,
  } = reactive(useTableData());
    
    
    </script>
  