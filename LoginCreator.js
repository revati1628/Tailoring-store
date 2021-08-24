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

// const uploadexpectedDateT=(expectedDateT)=>{
//     return(dispatch)=>{
//         dispatch({
//             type:"expectedDateT",
//             payload:expectedDateT
//         })
//     }
// }

const uploadexpectedDate=(expectedDate)=>{
    return(dispatch)=>{
        dispatch({
            type:"expectedDate",
            payload:expectedDate
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

const uploadApprovalstatus=(approvalstatus)=>{
    return(dispatch)=>{
        dispatch({
            type:"approvalstatus",
            payload:approvalstatus
        })
    }
}
const uploadCustomerid=(customerid)=>{
    return(dispatch)=>{
        dispatch({
            type:"customerid",
            payload:customerid
        })
    }
}
const uploadmodelid=(modelid)=>{
    return(dispatch)=>{
        dispatch({
            type:"modelid",
            payload:modelid
        })
    }
}

const postOrder=(obj)=>{
    return(dispatch)=>{
        fetch("http://localhost:8080/giveorder",{
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
        fetch("http://localhost:8080/addimage",{
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
        fetch("http://localhost:8080/tailorselect",{
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
        fetch("http://localhost:8080/tsget")
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
        fetch("http://localhost:8080/review",{
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
        fetch("http://localhost:8080/feedback")
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
        fetch("http://localhost:8080/insert",{
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
        fetch("http://localhost:8080/get")
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
                uploademail,uploadpassword,getuserInfo,postuserInfo,uploadCustomerid,
                uploadImprove,uploadOrderId,uploadRate,uploadLikes,postFeedback,getFeedback,
                uploadImageFile,postImage,uploadApprovalstatus,uploadmodelid,
                 uploadTopamount,uploadBottomamount,uploadTopfabric,uploadBottomfabric,uploadexpectedDate,uploadTopwaist,
                uploadToplength,uploadShoulderlength,uploadNeck,uploadChest,uploadHip,uploadKneelength,uploadComments, postOrder,
                uploadSortId,uploadDressType,uploadCategory,uploadOccasion,postTailorSelect,getTailorSelect
                };
