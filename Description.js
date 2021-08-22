import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bg from '../images/bg.jpg';
function Description()
{
    return(
            <div style={{backgroundImage:`url(${bg})`}} >
            <h1 style={{color:'black',marginTop:'30px',marginRight:'50px',textAlign:'center'}}>How Does Tailor Junction Work?</h1>
            <p style={{fontSize:'30px',marginRight:'200px',marginLeft:'380px'}}>Its simple, affordable and risk free.</p>
    <Container>
  <Row lg={3}>
  
    <Col style={{textAlign:'center',fontSize:'20px'}}><img src="https://tailorjunction.com/wp-content/uploads/2018/02/measure-up.png" /><br></br><h3>Order</h3></Col>
    <Col style={{textAlign:'center',fontSize:'20px'}}><img src="https://tailorjunction.com/wp-content/uploads/2018/02/design.png"></img><br></br><h3>Stitch</h3></Col>
    
    <Col style={{textAlign:'center',fontSize:'20px'}}><img src="https://tailorjunction.com/wp-content/uploads/2018/02/get-product-on-your-doorstep.png"></img><br></br><h3>Deliver</h3></Col>
    

  </Row>
</Container>
<Container>
  <Row lg={3}>
    <Col style={{fontSize:'15px'}}>
    Once you done with your order, 
    our tailor will check all the requirements that are mentioned 
    and start the work.</Col>
    
    <Col style={{fontSize:'15px'}}>Outfit will be stitched under experts guidance.</Col>
    
    <Col style={{fontSize:'15px'}}>
    After stitching the outfit will be delivered at your place, 
    and if there will be any alteration required, 
    the tailor will redo again and redeliver it at your place.</Col>
    
  </Row>
</Container>
            </div>
        
    )
}
export default Description();