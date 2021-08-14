import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

export default function AdminLogin() {

    let history=useHistory();
    

    const [user,setUser]=useState({})
    const [val,setVal]=useState({
        "id":"",
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

         
          if((val.id != res.id) )
                {
                  alert("User ID not present");
               
                
               }

          else if( (val.password !== res.password)){
                 alert("Password not matching");
                }
          else if((val.id == res.id) && (val.password === res.password) )
          {
            alert("Login successfull");
            history.push('AdminPage')
          }
          else{
            alert("Login not successfull");
          }

            
  
          });
        }


       
    //}
    return (
         <form onSubmit={handleSubmit} >
              <div className="mb-3">
                <label htmlFor="id" className="form-label">User ID</label>
                <input type="number" className="form-control" id="id" 
                name="id"onChange={(e)=>{setVal({...val,id:e.target.value})}}/>
                <div id="id" className="form-text">We'll never share your id with anyone else.</div>
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
