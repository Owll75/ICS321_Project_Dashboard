<template>
    <div class="space-y-10">

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
    
        <div class="flex space-x-7">
            <div class="box-content h-32 w-32 p-4 border-4 max-w-sm rounded overflow-hidden shadow-lg ">
                <button class="box-content h-32 w-32 font-bold text-2xl " @click="editPackage()">
                    Send Package
                </button>
            </div>
            <div class="box-content h-32 w-32 p-4 border-4 max-w-sm rounded overflow-hidden shadow-lg">
                <button class="box-content h-32 w-32 font-bold text-2xl ">
                    Receive Package
                </button>
            </div>
        </div>
    </div>


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
 function editPackage(){
    // console.log(pckObject)
    // packEdit.setPackage.editPackage(pckObject)
    router.push("/customer/sendPackage")
  }
</script>