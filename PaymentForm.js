import React from 'react'
import { Row,Col,Button } from 'react-bootstrap';
//import bg from '../images/bg.jpg'; 
import Form from 'react-bootstrap/Form'  
import {useHistory} from 'react-router-dom'

export default function PaymentForm()
{
    const history=useHistory();
  
    return(
        <div >
           
            <Form  style={{"padding":15,"width":500,fontFamily:'sans-serif',color:'black',marginLeft:'400px',marginTop:'20px'}}>
            <h1 style={{color:'black',textAlign:'center',fontSize:'20px'}} >SELECT YOUR PAYMENT OPTION<br/></h1>
  <Row className="mb-3" style={{marginTop:'20px'}}>
      <hr/>
    <h6>PAY BY USING CARD</h6><br/>
  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Type of Card</Form.Label>
      <Form.Select defaultValue="Choose...">
      <option>Select</option>
  <option value="1">CREDIT CARD</option>
  <option value="2">DEBIT CARD</option>
      </Form.Select>
    </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Name on the Card</Form.Label>
    <Form.Control type="text" placeholder="enter your name" />
  </Form.Group> 

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Card Number</Form.Label>
    <Form.Control  type="number" placeholder="enter your card number" />
  </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Expiry Date</Form.Label>
      <Form.Control type="month"  />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>CVV</Form.Label>
      <Form.Control type="password" placeholder="cvv" />
    </Form.Group>
  </Row>
    <br/><hr/><br/>
  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>CASH ON DELIVERY</Form.Label>
      <Form.Select defaultValue="Choose...">
      <option>Select</option>
  <option value="1">YES</option>
  <option value="2">NO</option>
      </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit"  onClick={()=>{history.push('SuccessPay')}}>
    Pay
  </Button>
</Form>
        </div>
    )
}