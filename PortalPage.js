import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import '../index.css';
 function PortalPage() {
    return (
    <div className="faq">
    
   
   <h2 style={{color:'black',marginTop:'20px',textAlign:'center'}}>Frequently Asked Queries</h2>
   
<Card>
  <Card.Body>
    <blockquote className="blockquote mb-0">
     <ul>

      <li><b>What to do if i gave wrong measurements?</b></li>
       <h6>You can update your requests and intimate to tailor.</h6>

        <li><b> What is mode of payment?</b></li>
       <h6>Payment is done through netbanking and COD.</h6>
       
       <li><b>Do you have return policies?</b></li>
       <h6>yes,we have return policy within 2weeks you have to return.</h6>
       <h6>Return policy is accepted only within the given time.</h6>

        <li><b> What time will the goods be shipped? </b></li>
       <h6>Our goods will be shipped on time</h6>

        <li><b> How can i track my shipment?</b></li>
       <h6>You can track your shipment by clicking on status of product.</h6>

      <li><b>At trasaction process i had some  network issues what happens? </b></li>
       <h6>It simply goes to the page where you have stopped.</h6>

       <li><b> At the time of delivery if i was not available what to do?</b></li>
       <h6>You need to inform and tell the reason to the authorized person.</h6>

        <li><b> What happens when application suddenly stops?</b></li>
       <h6>Mostly it wont but if happens please use after some time its because of technical glitches.</h6>
       </ul> 
      
      
    </blockquote>
  </Card.Body>
</Card>
  
</div>
    
     
       )
}
export default PortalPage;