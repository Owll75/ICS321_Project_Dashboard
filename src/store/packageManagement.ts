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




export default{
    setPackage,
    objectPackage,
    objectCustomer,
};