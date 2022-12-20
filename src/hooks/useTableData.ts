import { ref,reactive  } from 'vue';
import { supabase } from '../supabase';

export interface ISimpleTableData {
  city: string;
  totalOrders: string;
}

export interface IPaginatedTableData {
  picture: string;
  name: string;
  role: string;
  email: string;
  status: string;
  statusColor: string;
}

export  interface  IWideTableData {
  packageNumber: string;
  category: string;
  status: string;
  deleverdTo: string;
  edit:string;
  delete:string;
  visit:string;
  
}

export    function useTableData() {

  
  const simpleTableData = ref<ISimpleTableData[]>([
    { city: 'New York', totalOrders: '200,120' },
    { city: 'Manchester', totalOrders: '632,310' },
    { city: 'London', totalOrders: '451,110' },
    { city: 'Madrid', totalOrders: '132,524' },
  ]);

  const paginatedTableData = ref<IPaginatedTableData[]>([
    {
      picture:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      name: 'Vera Carpenter',
      role: 'Admin',
      email: 'test2@email.com',
      status: 'Active',
      statusColor: 'green',
    },
    {
      picture:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      name: 'Blake Bowman',
      role: 'customer',
      email: 'test1@email.com',
      status: 'Active',
      statusColor: 'green',
    },
    {
      picture:
        'https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      name: 'Dana Moore',
      role: 'customer',
      email: 'test3@email.com',
      status: 'Active',
      statusColor: 'orange',
    },
    {
      picture:
        'https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80',
      name: 'Alonzo Cox',
      role: 'Admin',
      email: 'test4@email.com',
      status: 'Inactive',
      statusColor: 'red',
    },
  ]);
  
  
  const wideTableData =  ref <IWideTableData[]>(
       
    [...Array(10).keys()].map((t) => ({
      packageNumber: "ID:",
      category: 'Regular',
      status: 'Deliverd',
      deleverdTo: 'mohammed ahmed',
      edit:"test",
      delete:"ttt",
      visit:"visit",
    }))
    
    
  );
    

 
  return  {
    simpleTableData,
    paginatedTableData,
    wideTableData,
    
  };
}
const mdata = {
  async fun(p){
    return("LEN:"+await p.length)
  }    
}

const mydata = {
  packageNumber: "ID:",
    category: 'Regular',
    status: 'Deliverd',
    deleverdTo: 'mohammed ahmed',
    edit:"test",
    delete:"ttt",
    visit:"visit",
  
}


const packages = {async  showPackages(packages){
  if(packages==null){return packages = {}}
  for(var i=0;i<packages.length;i++){
    console.log(packages[i].customer_id)
      packages[i].customerData = await{fullname:await this.customerFullname(await packages[i].customer_id)}
   await this.initStatus(packages[i].status,await packages[i]) 
  }
  
  return await packages
},
async selectAllPackages(){
  let { data: packages} = await supabase
  .from('package')
  .select('*')
  return await this.showPackages(packages)
},

async selectPackageByPck(n){
  let { data: packages,error} = await supabase
  .from('package')
  .select('*')
  .eq('package_number',n)
  console.log(packages)
  
  return await this.showPackages(packages)
},
async customerFullname(id){
  console.log("ID:" +id)
  let { data: packageq, error } = await supabase
  .from('customer')
  .select(`firstname,lastname
  `)
  .eq("id",id)
  const fullname = await packageq[0].firstname +" "+ packageq[0].lastname; 
 
  return await fullname 
},

async initStatus(s,pckg){
  
    console.log("Status: "+s)
    switch(s) { 
        case 0: { // transit
           pckg.status = 'transit'
          console.log(await pckg)
           break; 
        } 
        case 1: {// 
          pckg.status= 'delivered'
          await pckg
           break; 
        } 
        case 2: {//
          pckg.status = 'lost'
          await pckg
            break; 
         } 
         case 3: {// 
          pckg.status = 'damaged'
          await pckg
            break; 
         } 
        default: { 
           //statements; 
           break; 
        } 
     } 
  },


}




export default {
  packages
}