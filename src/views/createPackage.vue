<template>
    <!--min-h-screen-->
            <form class="mt-20 p-6 bg-gray-100  flex items-center justify-center" @submit.prevent="confirmCreate">
      <div class="container max-w-screen-lg mx-auto">
        <div>
          <h2 class="font-semibold text-xl text-gray-600 mb-3">Create Package</h2>
          <div class="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 mb-3" role="alert" v-if="isSuccess">
            Package Information has been updated Successfully!
    </div>
    
          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div class="text-gray-600">
                <p class="font-medium text-lg">Package Details</p>
                <p>Please fill out all the fields.</p>
              </div>
    
              <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div class="md:col-span-5">
                    <label for="PackageNumber">Package Number</label>
                    <input type="text" name="PackageNumber" v-model="package_number" id="PackageNumber" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="PackageNumber" />
                  </div>
                  <div class="md:col-span-5">
                    <label for="Dimensions">Dimensions</label>
                    <input type="text" name="Dimensions" id="Dimensions" v-model="Dimensions" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Dmensions" />
                  </div>
                
                  <div class="md:col-span-5" v-if="retailCenters">
                    <label for="countries">Select retail center</label>
                    <select id="countries" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="selectedRetail">
                      
                        <option  v-for="(u, index) in  retailCenters" :key="index"  :value="u.id">{{ u.address }}</option>
                     
                    </select>
                  </div>
                  <div class="md:col-span-5">
                    <label for="countries">Select category</label>
                    <select id="countries" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="selectedCategory">
                        <option value="0">Regular</option>
                        <option value="1">Fragile</option>
                        <option value="2">Liquid</option>
                        <option value="3">Chemical</option>
                        
                    </select>
                  </div>
                  <div class="md:col-span-5">
                    <label for="weight">Weight (kg)</label>
                    <input type="text" name="weight" id="weight" @keypress="onlyNumber" v-model="weight" @input="calculateInsurance" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="weight" />
                  </div>
                  <div class="md:col-span-5">
                    <label for="insurance">Insurance amount</label>
                    <input type="text" name="insurance" id="insurance" v-model="Insurance" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  disabled placeholder="" />
                  </div>
                  
    
                  <div class="md:col-span-3">
                    <label for="address">Destination</label>
                    <input type="text" name="address" id="address" v-model="Destination" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
                  </div>
    
                  <div class="md:col-span-2">
                    <label for="finalDate">Final Delivery Date</label>
                    <input type="date" name="finalDate" id="finalDate" v-model="finalDate"  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
                  </div>
                  <div class="md:col-span-5 text-right mt-5">
                    <div class="inline-flex items-end">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded">confirm</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
     
      </div>
    </form>
    
      </template>
      
      <script setup lang="ts">
      import {ref} from "vue";
      import packageObj from "../store/packageManagement";
      import router from "../router";
    
        const package_number = ref("")
        const Destination = ref("")
        const weight = ref("")
        const finalDate = ref("")
        const Dimensions = ref("")
        const Insurance = ref(5)
        const isSuccess = ref(false)
        const retailCenters = ref(null)
        const selectedRetail = ref("")
        const selectedCategory = ref("")
        initRetailCenter()
      
    
        async function calculateInsurance(){//assume that insurance = 5SR + (0.15*weight(kg))
            Insurance.value = weight.value*0.15 + 5
        }
    
    
       async function onlyNumber ($event) {//validate weight field [Should be only numbers]
    
       let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
       if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
          $event.preventDefault();
       }
    }
    
    
    async function confirmCreate(){
         //Init new values
        let packageO = {}
        packageO.weight=weight.value
        packageO.package_number=package_number.value
        packageO.insurance = Insurance.value
        packageO.destination = Destination.value
        packageO.final_delivery_date = finalDate.value
        packageO.package_number = package_number.value
        packageO.Dimensions = Dimensions.value
        packageO.Retail_center_id = selectedRetail.value
        packageO.category = selectedCategory.value
        console.log(packageO.category)
        await packageObj.setPackage.createPackage(packageO)
        
        console.log(packageO)
        
        console.log("package created.")
        isSuccess.value =true
        
    }

    
    async function initRetailCenter(){
        retailCenters.value = await packageObj.retailCenter.getRetailCenters()
        console.log(retailCenters.value)
    }


      </script>
      