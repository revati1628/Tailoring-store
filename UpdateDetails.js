import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

export default function UpdateDetails() {

  const history=useHistory();
    const[details,setDetails]=useState({
        "tailorid":"",
	    "shopname":"",
	    "address":"",
	    "contact":"",
	    "workinghrs":"",
	    "services":"",
	    "courieroption":""
    })

     const handleSubmit=(e)=>{
        e.preventDefault();
        fetch(`http://localhost:8080/updateDetails/${details.tailorid}/${details.shopname}/${details.address}/${details.contact}/${details.workinghrs}/${details.services}/${details.courieroption}`,{
          method:'PATCH',
          body: JSON.stringify({shopname:details.shopname,address:details.address,contact:details.contact,
          workinghrs:details.workinghrs,services:details.services,courieroption:details.courieroption})
        })
        .then((response) => response.json())
        .then(res=>console.log("updated data",res))
        alert("Details updated")
        history.push('/TailorPage');

       }

    
    return (
        <div>
           
            <button type="button" onClick={()=>{history.push('TailorPage')}}>Back</button>
             <h2 style={{textAlign:'center',marginTop:'20px'}}>UPDATE DETAILS</h2>
            
            <form onSubmit={handleSubmit}
         style={{"padding":3,"width":500,"paddingLeft":30,fontFamily:'sans-serif',color:'black',alignItems:"center",marginLeft:'370px',marginBottom: '20px'}} >

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
       
         
        
      </form>

        </div>
    )
}
