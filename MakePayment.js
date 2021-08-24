import React from 'react'
import {useHistory} from 'react-router-dom'
//import bg from '../images/bg.jpg';    
import Form from 'react-bootstrap/Form'
export default function MakePayment()
{
   const history=useHistory();
    
    return(
       
        <div >
          
        <Form>
     <Form.Group style={{textAlign:'center',marginTop:'20px'}} className="mb-3" controlId="formBasicPassword">
      
    <button type="button" className="btn btn-success" style={{marginTop:'10px'}} onClick={()=>{history.push('PaymentForm')}} >Make Payment</button>
  </Form.Group>
  

</Form>
        </div>

        
    )
}