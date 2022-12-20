import  {createClient} from "@supabase/supabase-js"
import {supabase} from '../supabase'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL


 const  userManage = {
        async deleteUser(uid){
        const key = await  userManage.getServiceKey()
        console.log("hey !!")
      
        const superbase = createClient(supabaseUrl,key )
        const { data: user, error } = await superbase.auth.api.deleteUser(uid)   
        if(error){
            console.log(error)
            return  error
        } else{
            console.log("deleted")
            return user
        }         
    },
    async selectCustomer(){
        let { data: customer, error } = await supabase
        .from('customer')
        .select('*')
        return await customer
    },
    async getServiceKey(role){
     
        let { data: service_key, error } = await supabase
          
        .from('service_key')
        .select('key')
      
        return (service_key[0].key)
    
    }

}






export default{
    userManage,
};


