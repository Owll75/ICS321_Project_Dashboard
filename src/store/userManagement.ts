import  {createClient} from "@supabase/supabase-js"
import {supabase} from '../supabase'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL


 const  userManage = {
        async deleteUser(uid,role){
        const key = await  userManage.getServiceKey(role)
        
      
        const superbase = createClient(supabaseUrl,key )
        const { data: user, error } = await superbase.auth.api.deleteUser(uid)   
        if(error){
            return  error
        } else{
            return user
        }
        
         
    },
  
    async getServiceKey(role){
        if(role=='service_role'){
        let { data: service_key, error } = await supabase
          
        .from('service_key')
        .select('key')
      
        return (service_key[0].key)
    
    }else{
        return ""
    }
    }

}






export default{
    userManage,
};


