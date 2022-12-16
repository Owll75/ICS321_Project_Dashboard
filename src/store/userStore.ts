import {reactive} from 'vue'


const myState = reactive({
    user:null,
})
const methods = {
    setUser(session){
        myState.user= session ? session.user : null
       
    }
}


export default{
    myState,
    methods,
};