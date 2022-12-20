import {reactive} from 'vue'
import { supabase } from '../supabase'

const objectPackage = reactive({
    myPackage:null,
    locationHistory:null,
    reatilCenter:null,
})

const objectCustomer = reactive({
    customer:null,
})


const setPackage = {
    async editPackage(pckg){
        objectPackage.myPackage = await pckg
        console.log(await pckg)
    },

    async confirm(){
        const { data, error } = await supabase
         .from('package')
        .update({ package_number: objectPackage.myPackage.package_number,insurance_amount: objectPackage.myPackage.insurance,destination:objectPackage.myPackage.destination,weight:objectPackage.myPackage.weight,final_delivery_date:objectPackage.myPackage.final_delivery_date })
         .eq('id', objectPackage.myPackage.id)
        
            if(error)
            return false
         console.log(data)
    },


    async deletePackage(id){
        const { data, error } = await supabase
        .from('package')
        .delete()
        .eq('id', id)
        if(error){
        return false
        }else{return true}
    },


    async visitPackage(id){
        
        await setPackageDetails(id) // set packageDetails
       await setCustomerDetails(await objectPackage.myPackage[0].customer_id)//set Customer details object
        await setLocationHistory(id)//set Locations object
    },


    async createPackage(pckg){
        console.log(pckg)

        const { data, error } = await supabase
         .from('package')
         .insert(
          { weight: pckg.weight, destination: pckg.destination,insurance_amount:pckg.insurance,Reatil_center_id:pckg.Retail_center_id,dimensions :pckg.Dimensions,
          final_delivery_date:pckg.final_delivery_date,package_number:pckg.package_number },
  )
  setCategory(pckg.category,data[0].id)
  
  
    },
async selectByCategory(s){
    return await selectCategory(s)
},
async selectByStatus(s){
    return await selectStatus(s)
}

}
async function setCustomerDetails(customerId){
    const {data,error} = await supabase
    .from('customer')
    .select('*')
    .eq('id',customerId)
    if(error) {
    return false
    }else{ 
    console.log("Customer: ")
    console.log(data)
    objectCustomer.customer = data 
    }
}
async function setPackageDetails(id){
    const {data,error} = await supabase
    .from('package')
    .select('*')
    .eq('id',id) //select a package with (id:visited) and show related information
    objectPackage.myPackage = data //get package details

}
async function setLocationHistory(id){
    const {data,error} = await supabase
    .from('location')
    .select('*')
    .eq('package_id',id) //select a package with (id:visited) and show related information
    console.log("locations: ")
    console.log(data)
    objectPackage.locationHistory = data
}




async function setCategory(category,id){
    
    switch(category) { 
        case '0': { // regular
            const { data, error } = await supabase
            .from('regularCategory')
            .insert([
              { 'package_id': id},
            ])
           break; 
        } 
        case '1': {//fragile 
            const { data, error } = await supabase
            .from('fragileCategory')
            .insert([
              { 'package_id': id},
            ])
            
           break; 
        } 
        case '2': {//liquid
            const { data, error } = await supabase
             .from('liquidCategory')
             .insert([
            { 'package_id':id, 'volume': category.volume}, ])
            
            break; 
         } 
         case '3': {//chemical 
            const { data, error } = await supabase
            .from('chemicalCategory')
            .insert([
              { 'package_id': id},
            ])
            break; 
         } 
        default: { 
           //statements; 
           break; 
        } 
     } 

}

async function selectStatus(s){
  
    switch(s) { 
        case '-1': { // regular
            const { data, error } = await supabase
            .from('package')
            .select('*')
            console.log(data)
            return data
           break; 
        }


        case '0': { // regular
            const { data, error } = await supabase
            .from('package')
            .select('*')
            .eq('status',s)
            console.log(data)
            return data
           break; 
        } 
        case '1': {//fragile 
            const { data, error } = await supabase
            .from('package')
            .select('*')
            .eq('status',s)
            console.log(data)
            return data
           break; 
        } 
        case '2': {//liquid
            const { data, error } = await supabase
            .from('package')
            .select('*')
            .eq('status',s)
            console.log(data)
            return data
           break; 
         } 
         case '3': {//chemical 
            const { data, error } = await supabase
            .from('package')
            .select('*')
            .eq('status',s)
            console.log(data)
            return data
           break; 
         } 
        default: { 
           //statements; 
           break; 
        } 
     } 

}

async function selectCategory(s){
    switch(s) { 
        case '0': { // regular
            const { data, error } = await supabase
            .from('regularCategory')
            .select('package_id')
            for(var i in data){
                let { data: t, error } = await supabase
                .from('package')
                .select('*')
                .eq('id',data[i].package_id)
              return await t
            }
            
           break; 
        } 
        case '1': {//fragile 
            const { data, error } = await supabase
            .from('fragileCategory')
            .select('package_id')
            for(var i in data){
                let { data: t, error } = await supabase
                .from('package')
                .select('*')
                .eq('id',data[i].package_id)
              return await t
            }
            
           break; 
        } 
        case '2': {//liquid
            const { data, error } = await supabase
            .from('liquidCategory')
            .select('package_id')
            for(var i in data){
                let { data: t, error } = await supabase
                .from('package')
                .select('*')
                .eq('id',data[i].package_id)
               console.log("DRC")
              return await t
            }
            console.log(error)
            
            break; 
         } 
         case '3': {//chemical 
            const { data, error } = await supabase
            .from('chemicalCategory')
            .select('package_id')
            for(var i in data){
                let { data: t, error } = await supabase
                .from('package')
                .select('*')
                .eq('id',data[i].package_id)
              return await t
            }
            
            break; 
         } 
        default: { 
           //statements; 
           break; 
        } 
     } 

}





const retailCenter = {async  getRetailCenters(){
    let { data: retail_center, error } = await supabase
    .from('retail_center')
     .select('*')
     return retail_center
}}



export default{
    setPackage,
    objectPackage,
    objectCustomer,
    retailCenter,
};