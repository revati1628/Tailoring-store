const initialState={id:' ',firstname:' ',lastname:'',dob:'',usercategory:'',gender:'',password:' ',contact:' ',email:' ',getusers:[],post:[],validate:[]}
const loginreducer=(state=initialState,action)=>{
    switch(action.type){
        case "id":return{...state,id:action.payload}
        case "firstname":return{...state,firstname:action.payload}
        case "lastname":return{...state,lastname:action.payload}
        case "dob":return{...state,dob:action.payload}
        case "gender":return{...state,gender:action.payload}
        case "usercategory":return{...state,usercategory:action.payload}
        case "password":return{...state,password:action.payload}
        case "contact":return{...state,contact:action.payload}
        case "email":return{...state,email:action.payload}
        case "getusers":return{...state,getusers:action.payload}
        case "post":return{...state,post:action.payload}
        case "validate":return{...state,validate:action.payload}
        default:return state;
    }
}
export default loginreducer;