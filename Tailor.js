import React,{useState,useEffect} from 'react'
import {BrowserRouter, Switch, useHistory,Link,Route} from "react-router-dom";
//import UpdateDetails from "./UpdateDetails";
export default function Tailor() {

    let history=useHistory();
    const[details,setDetails]=useState({
        "tailorid":"",
	    "shopname":"",
	    "address":"",
	    "contact":"",
	    "workinghrs":"",
	    "services":"",
	    "courieroption":"",
        "category":"",
        "dresstype":""
    })
   

    const [dressTypes,setDressTypes]=useState([])
    
    
        useEffect(() => {
            fetch("http://localhost:8080/getDressType")
           .then(response =>response.json())
            .then(res =>{
                setDressTypes(res)
                //console.log("dresstype",res);
                
            })
        }, [])
   


    const addDetails=(e)=>{

        e.preventDefault();
    
        console.log("from form",details);

        fetch('http://localhost:8080/storetailorDetails',{
            method:'POST',
            body:JSON.stringify(details),
            headers:{'Content-Type':'application/json'},
   
                })

           .then(response=>response.json())
           .then(res=>{
            setDetails(res)
              
               alert("Added");
               
          })
    }
    return (
        <div>
            <h1>Tailor page</h1>
           
            <form onSubmit={addDetails}
         style={{border:'1px solid blue',"padding":3,"width":500,"paddingLeft":30,fontFamily:'sans-serif',color:'darkgreen',alignItems:"center"}} >

        <div className="mb-3">
          <label htmlFor="tailorid" className="form-label">Tailor Id</label>
          <input type="number" className="form-control"  id="tailorid" 
          aria-describedby="tailorid" name="userId" 
          onChange={(e)=>{setDetails({...details,tailorid:e.target.value})}} required />
         </div>
            
        <div className="mb-3">
          <label htmlFor="shopname" className="form-label">Shop Name</label>
          <input type="text" className="form-control"  id="shopname" 
          aria-describedby="shopname" name="shopname" 
          onChange={(e)=>{setDetails({...details,shopname:e.target.value})}} required />
         </div>

         <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea type="text" className="form-control"  id="address" 
          aria-describedby="address" name="address" 
          onChange={(e)=>{setDetails({...details,address:e.target.value})}} required />
         </div>

         <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact</label>
          <input type="number" className="form-control"  id="contact" 
          aria-describedby="contact" name="contact" 
          onChange={(e)=>{setDetails({...details,contact:e.target.value})}} required />
         </div>

         <div className="mb-3">
          <label htmlFor="workinghrs" className="form-label">working hrs</label>
          <input type="text" className="form-control"  id="workinghrs" 
          aria-describedby="workinghrs" name="workinghrs" 
          onChange={(e)=>{setDetails({...details,workinghrs:e.target.value})}} required />
         </div>

         <div className="mb-3">
          <label htmlFor="services" className="form-label">services</label>
          <textarea type="textarea" className="form-control"  id="services" 
          aria-describedby="services" name="services" 
          onChange={(e)=>{setDetails({...details,services:e.target.value})}} required />
         </div>

         <label htmlFor="cat">Click to Select category</label><select type="text" id="cat" className="form-control" 
                        onChange={(e)=>{setDetails({...details,category:e.target.value})}}
                        
                        required

                        //{...register('category',{required:true})}
                        >
                            <option>Select</option>
                            <hr></hr>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Girls">Girls</option>
                            <option value="Boys">Boys</option>
                        </select><br/>
                    <label htmlFor="dt">Click to Select Dress Type</label><select type="text" className="form-control" id="dt" 
                        onChange={(e)=>{setDetails({...details,dresstype:e.target.value})}}
                        
                        required >
                        {/* {...register('dresstype',{required:true})} */}

                        
                           {
                               dressTypes.map((dress,ind)=>{
                                   return (<option key={ind}>{dress}</option>)
                               })
                           }                     
                        </select><br/>

        

         <div className="mb-3">
          <label htmlFor="courieroption" className="form-label">courier option</label>
          <select className="form-control"  id="courieroption" 
          aria-describedby="courieroption" name="courieroption" 
          onChange={(e)=>{setDetails({...details,courieroption:e.target.value})}} required>
              <option value="select">select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
          </select>

         </div>

        
        
      
        <button type="submit" className="btn btn-success"  
         
        >Submit</button>
       
         
        
      </form><br/>
     

     
        </div>
    )
}
