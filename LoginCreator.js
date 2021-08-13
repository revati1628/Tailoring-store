const uploadid=(id)=>{
    return(dispatch)=>{
        dispatch({
            type:"id",
            payload:id
        })
    }
}

const uploadfirstname=(firstname)=>{
    return(dispatch)=>{
        dispatch({
            type:"firstname",
            payload:firstname
        })
    }
}

const uploadlastname=(lastname)=>{
    return(dispatch)=>{
        dispatch({
            type:"lastname",
            payload:lastname
        })
    }
}

const uploaddob=(dob)=>{
    return(dispatch)=>{
        dispatch({
            type:"dob",
            payload:dob
        })
    }
}

const uploadgender=(gender)=>{
    return(dispatch)=>{
        dispatch({
            type:"gender",
            payload:gender
        })
    }
}
const uploadusercategory=(usercategory)=>{
    return(dispatch)=>{
        dispatch({
            type:"usercategory",
            payload:usercategory
        })
    }
}


const uploadcontact=(contact)=>{
    return(dispatch)=>{
        dispatch({
            type:"contact",
            payload:contact
        })
    }
}

const uploademail=(email)=>{
    return(dispatch)=>{
        dispatch({
            type:"email",
            payload:email
        })
    }
}

const uploadpassword=(password)=>{
    return(dispatch)=>{
        dispatch({
            type:"passsword",
            payload:password
        })
    }
}

const postuserInfo=(obj)=>{
    return(dispatch)=>{
        fetch("http://localhost:8082/insert",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(obj)
        })
        .then(res=>{
            console.log("New user added in db")
        })
        .then(data=>{
            dispatch({
                type:"post",
                payload:obj
            })
        })
    }
}
const getuserInfo=()=>{
    return(dispatch)=>{
        fetch("http://localhost:8082/get")
        .then(res=>res.json())
        .then(data=>{
            dispatch({
                type:"getusers",
                payload:data

            })
        })
    }
}




export default {uploadid,uploadfirstname,uploadlastname,uploadgender,uploadusercategory,uploaddob,uploadcontact,uploademail,uploadpassword,getuserInfo,postuserInfo};