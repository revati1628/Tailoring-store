const initialState={id:' ',firstname:' ',lastname:'',dob:'',usercategory:'',gender:'',password:' ',contact:' ',email:' ',
                    orderid:' ',rate:'',improve:'',likes:'',
                    sortid:' ',category:' ',dresstype:' ',occassion:'',
                    data:'',
                    getusers:[],post:[],validate:[]}
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

        case "orderid":return{...state,orderid:action.payload}
        case "improve":return{...state,improve:action.payload}
        case "likes":return{...state,likes:action.payload}
        case "rate":return{...state,rate:action.payload}

        case "data":return{...state,data:action.payload}

        case "sortid":return{...state,sortid:action.payload}
        case "category":return{...state,category:action.payload}
        case "dresstype":return{...state,dresstype:action.payload}
        case "occassion":return{...state,occassion:action.payload}

        case "getusers":return{...state,getusers:action.payload}
        case "post":return{...state,post:action.payload}
        case "validate":return{...state,validate:action.payload}
        default:return state;
    }
}
export default loginreducer;
