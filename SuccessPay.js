import React,{ useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import { Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom'
export default function SuccessPay() {
    const history=useHistory();
    
  
    return (
      <>
        <Alert  variant="success" style={{"padding":15,"width":500,fontFamily:'sans-serif',color:'black',marginLeft:'400px',marginTop:'20px'}}>
          <Alert.Heading> PAYMENT SUCCESSFUL!!</Alert.Heading>
          <p>
            Your Payment is successfully completed ,
            Thanks for Shopping with TailorJuntion
          </p>
          <hr />
          <div className="d-flex justify-content-end">
        
  <button type="button" variant="primary" className="btn btn-success" style={{marginTop:'10px'}} onClick={()=>{history.push('UserPage')}} >ContinueShopping</button>
          </div>
        
          </Alert>


</>
);
        
    
  }
  
