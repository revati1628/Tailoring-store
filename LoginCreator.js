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

const uploadOrderId=(orderid)=>{
    return(dispatch)=>{
        dispatch({
            type:"orderid",
            payload:orderid
        })
    }
}

const uploadImprove=(improve)=>{
    return(dispatch)=>{
        dispatch({
            type:"improve",
            payload:improve
        })
    }
}

const uploadLikes=(likes)=>{
    return(dispatch)=>{
        dispatch({
            type:"likes",
            payload:likes
        })
    }
}


const uploadRate=(rate)=>{
    return(dispatch)=>{
        dispatch({
            type:"rate",
            payload:rate
        })
    }
}

const uploadSortId=(sortid)=>{
    return(dispatch)=>{
        dispatch({
            type:"sortid",
            payload:sortid
        })
    }
}

const uploadCategory=(category)=>{
    return(dispatch)=>{
        dispatch({
            type:"category",
            payload:category
        })
    }
}

const uploadDressType=(dresstype)=>{
    return(dispatch)=>{
        dispatch({
            type:"dresstype",
            payload:dresstype
        })
    }
}

const uploadOccasion=(occassion)=>{
    return(dispatch)=>{
        dispatch({
            type:"occassion",
            payload:occassion
        })
    }
}

const uploadTopamount=(topamount)=>{
    return(dispatch)=>{
        dispatch({
            type:"topamount",
            payload:topamount
        })
    }
}

const uploadBottomamount=(bottomamount)=>{
    return(dispatch)=>{
        dispatch({
            type:"bottomamount",
            payload:bottomamount
        })
    }
}

const uploadChest=(chest)=>{
    return(dispatch)=>{
        dispatch({
            type:"chest",
            payload:chest
        })
    }
}

const uploadNeck=(neck)=>{
    return(dispatch)=>{
        dispatch({
            type:"neck",
            payload:neck
        })
    }
}

const uploadKneelength=(kneelength)=>{
    return(dispatch)=>{
        dispatch({
            type:"kneelength",
            payload:kneelength
        })
    }
}

const uploadTopfabric=(topfabric)=>{
    return(dispatch)=>{
        dispatch({
            type:"topfabric",
            payload:topfabric
        })
    }
}

const uploadBottomfabric=(bottomfabric)=>{
    return(dispatch)=>{
        dispatch({
            type:"bottomfabric",
            payload:bottomfabric
        })
    }
}

const uploadTopduration=(topduration)=>{
    return(dispatch)=>{
        dispatch({
            type:"topduration",
            payload:topduration
        })
    }
}

const uploadBottomduration=(bottomduration)=>{
    return(dispatch)=>{
        dispatch({
            type:"bottomduration",
            payload:bottomduration
        })
    }
}

const uploadHip=(hip)=>{
    return(dispatch)=>{
        dispatch({
            type:"hip",
            payload:hip
        })
    }
}

const uploadComments=(comments)=>{
    return(dispatch)=>{
        dispatch({
            type:"comments",
            payload:comments
        })
    }
}

const uploadShoulderlength=(shoulderlength)=>{
    return(dispatch)=>{
        dispatch({
            type:"shoulderlength",
            payload:shoulderlength
        })
    }
}

const uploadToplength=(toplength)=>{
    return(dispatch)=>{
        dispatch({
            type:"toplength",
            payload:toplength
        })
    }
}

const uploadTopwaist=(topwaist)=>{
    return(dispatch)=>{
        dispatch({
            type:"topwaist",
            payload:topwaist
        })
    }
}

const postOrder=(obj)=>{
    return(dispatch)=>{
        fetch("http://localhost:8087/giveorder",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(obj)
        })
        .then(res=>{
            console.log(res)
            console.log("customer has placed the order ")
        })
        .then(data=>{
            dispatch({
                type:"post",
                payload:obj
            })
        })
    }
}


const uploadImageFile=(data)=>{
    return(dispatch)=>{
        dispatch({
            type:"data",
            payload:data
        })
    }
}

const postImage=(obj)=>{
    return(dispatch)=>{
        fetch("http://localhost:8087/addimage",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(obj)
        })
        .then(res=>{
            console.log(res)
            console.log("pattern is uploaded by tailor ")
        })
        .then(data=>{
            dispatch({
                type:"post",
                payload:obj
            })
        })
    }
}

const postTailorSelect=(obj)=>{
    return(dispatch)=>{
        fetch("http://localhost:8087/tailorselect",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(obj)
        })
        .then(res=>{
            console.log(res)
            console.log("Tailor chosen data has been recorded! ")
        })
        .then(data=>{
            dispatch({
                type:"post",
                payload:obj
            })
        })
    }
}

const getTailorSelect=()=>{
    return(dispatch)=>{
        fetch("http://localhost:8087/tsget")
        .then(res=>res.json())
        .then(data=>{
            dispatch({
                type:"getusers",
                payload:data

            })
        })
    }
}

const postFeedback=(obj)=>{
    return(dispatch)=>{
        fetch("http://localhost:8087/review",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(obj)
        })
        .then(res=>{
            console.log(res)
            console.log("feedback submitted")
        })
        .then(data=>{
            dispatch({
                type:"post",
                payload:obj
            })
        })
    }

}

const getFeedback=()=>{
    return(dispatch)=>{
        fetch("http://localhost:8087/feedback")
        .then(res=>res.json())
        .then(data=>{
            dispatch({
                type:"getusers",
                payload:data

            })
        })
    }   
}

const postuserInfo=(obj)=>{
    return(dispatch)=>{
        fetch("http://localhost:8087/insert",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(obj)
        })
        .then(res=>{
            console.log(res)
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
        fetch("http://localhost:8087/get")
        .then(res=>res.json())
        .then(data=>{
            dispatch({
                type:"getusers",
                payload:data

            })
        })
    }
}




export default {uploadid,uploadfirstname,uploadlastname,uploadgender,uploadusercategory,uploaddob,uploadcontact,
                uploademail,uploadpassword,getuserInfo,postuserInfo,
                uploadImprove,uploadOrderId,uploadRate,uploadLikes,postFeedback,getFeedback,
                uploadImageFile,postImage,
                uploadSortId,uploadDressType,uploadCategory,uploadOccasion,postTailorSelect,getTailorSelect
                };
