import React from 'react'
import {useHistory} from 'react-router-dom'
import bg from '../images/bg.jpg';    
import Form from 'react-bootstrap/Form'
export default function Delivery()
{
   const history=useHistory();
    
    return(
       
        <div style={{backgroundImage:`url(${bg})`}}>
          
        <Form>
     <Form.Group style={{textAlign:'center',marginTop:'20px'}} className="mb-3" controlId="formBasicPassword">
      <h2>PLEASE SELECT YOUR OPTION</h2>
    <b><Form.Label>CourierOption:</Form.Label></b>
    
    <select id = "dropdown">
    <option value="select">select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
    </select><br/>
    <button type="button" className="btn btn-success" style={{marginTop:'10px'}} onClick={()=>{history.push('Payment')}} >Submit</button>
  </Form.Group>
  

</Form>
        </div>

        
    )
}
