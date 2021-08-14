import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

export default function AdminLogin() {

    let history=useHistory();
    

    const [user,setUser]=useState({})
    const [val,setVal]=useState({
        "email":"",
        "password":""
    })
    
    const handleSubmit=(e)=>{
          e.preventDefault();
          
         console.log("data for validation",val);

         fetch("http://localhost:8080/get/926378")
        .then((response) => response.json())
        .then((res) => {
          
          console.log(res);
          setUser(res);

         
          if((val.email === res.email) && (val.password === res.password))
                {
                
                alert("successful");
                history.push('AdminPage')
               }

              else{
                 alert("not successfull");
                }

            
  
          });
        }


       
    //}
    return (
         <form onSubmit={handleSubmit} >
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                name="email"onChange={(e)=>{setVal({...val,email:e.target.value})}}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control"  id="exampleInputPassword1" 
                aria-describedby="password1" name="password" 
                onChange={(e)=>{setVal({...val,password:e.target.value})}} />
                <div id="password1" className="form-text">We'll never share your password with anyone else.</div>
              </div>

              
            
              <button type="submit" className="btn btn-primary"  
               
              >Submit</button>
               
              
            </form>

    )
}
