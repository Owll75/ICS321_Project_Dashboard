import {reactive} from 'vue'


const myState = reactive({
    user:null,
})
const methods = {
    setUser(session){
        myState.user = session!=null ? session.user : null
        console.log("Session:" + session)
    }
}


export default{
    myState,
    methods,
};