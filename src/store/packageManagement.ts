import {reactive} from 'vue'
import { supabase } from '../supabase'

const objectPackage = reactive({
    myPackage:null,
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
    }
}




export default{
    setPackage,
    objectPackage,
};