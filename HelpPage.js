import React,{useState} from 'react'

import {BrowserRouter as Router,NavLink, Switch, Route,useHistory} from 'react-router-dom'


export default function HelpPage() {

   
    
    const [data,setData]= useState({
        
        "issue": "" ,
        "description": "",
        "date": ""
        })
    
  const handleSubmit=e=>{
        e.preventDefault();
        console.log(data);

        fetch('http://localhost:8080/insertIssues',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{'Content-Type':'application/json'},
        
        })

        .then(res=>res.json())
        .then(json=>setData(json.data))

       
    }

  
           
    return (
        <div style={{backgroundColor:"skyblue"}}>
        <form onSubmit={handleSubmit}>
            

            Issue<input type="text" className="form-control" name="issue" 
            onChange={(e)=> setData({...data,issue:e.target.value})}  />

            Description<input type="text" className="form-control" name="description" 
            onChange={(e)=> setData({...data,description:e.target.value})}  />

            Date<input type="date" className="form-control" name="date" 
            onChange={(e)=> setData({...data,date:e.target.value})}  /> 

            

          

        <button className="btn btn-warning" type="submit"  >Submit Issue</button>
        
        
        </form>
       
         
         
       
        
    </div>

    )
}

