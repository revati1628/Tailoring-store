import React,{useState} from 'react'
import {useParams,useHistory} from "react-router-dom";
export default function PasswordResetPage() {


    let history=useHistory();
    const param=useParams();
    const user_id=param.userId;
    console.log("id",user_id);
    const [data,setData]=useState({
        "password":"",
        "confirmPassword":""
    })

    const handleReset=(e)=>{

        e.preventDefault();
    fetch(`http://localhost:8080/updatePassword/${user_id}/${data.password}`,{

        method: 'PATCH',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({password:data.password}),

    })
        
    .then((response) => response.json())
        .then((res) =>{ 
          
          console.log("updation",res);
          

         if((data.password === data.confirmPassword))
         {
             alert("password reseted successfully");
             history.push('UserLogin');
            
         }
         else{
             alert("password reset not successfull")
         }
          
         });

        }

    return (
        <div>
            <h1>Password reset page</h1>
            <form onSubmit={handleReset}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control"  
                onChange={(e)=>{setData({...data,password:e.target.value})}}
                required/>

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" className="form-control"  
                onChange={(e)=>{setData({...data,confirmPassword:e.target.value})}}
                required/>

             <button type="submit" >Reset</button>   
            </form>
        </div>
    )
}
