import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
export default function ApproveOrder() {

    let history=useHistory();
    const back=()=>{
      history.push('TailorPage')
    }
      const[details,setDetails]=useState({
          "orderid":"",
          "approvalstatus":""
      })
  
       const handleSubmit=(e)=>{
          e.preventDefault();
          fetch(`http://localhost:8080/updateStatus/${details.orderid}/${details.approvalstatus}`,{
            method:'PATCH',
            body: JSON.stringify({approvalstatus:details.approvalstatus})
          })
          .then((response) => response.json())
          .then(res=>{console.log("Status updated",res)
          alert(`Status updated to ${res.approvalstatus}`)
          //history.push('/TailorPage');
        })
  
         }
    return (
        <div>
        
    
    
     <form onSubmit={handleSubmit}
 style={{"padding":3,"width":500,"paddingLeft":30,fontFamily:'sans-serif',color:'black',alignItems:"center",marginBottom: '20px'}} >
     <h3  style={{color:'black',textAlign:'center',marginBottom:'20px',marginTop:'10px'}}>UPDATE STATUS</h3>

        <div className="mb-3">
          <label htmlFor="orderid" className="form-label">Order Id</label>
          <input type="number" className="form-control"  id="orderid" 
          aria-describedby="orderid" name="orderid" 
          onChange={(e)=>{setDetails({...details,orderid:e.target.value})}} required />
         </div>
            
        <div className="mb-3">
          <label htmlFor="approvalstatus" className="form-label">Select Status</label>
          <select className="form-control"  id="approvalstatus" 
          aria-describedby="approvalstatus" name="approvalstatus" 
          onChange={(e)=>{setDetails({...details,approvalstatus:e.target.value})}} required>
              <option value="select">select</option>
              <option value="approved">Approved</option>
              <option value="completed">Completed</option>
              <option value="onHold">On Hold</option>
          </select>

         </div>

        
        
      
         <button type="submit" className="btn btn-success" >Submit</button><br/>
        
       
         
        
      </form>
        </div>
    )
}
