import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Register from './Register';
function Pictures()
{
    return(
        <div>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://tailorjunction.com/wp-content/uploads/2018/01/banner-2.jpg" height="500px" width="200px"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Custom Tailoring at your doorstep</h3>
      <p style={{color:'white',fontSize:'20px'}}>Our highly trained tailors and on time delivery ensure that you get your garment stitched exactly the way you want it.</p>
    </Carousel.Caption>
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://thebrandboy.com/wp-content/uploads/2019/09/how-to-start-online-tailoring-store.jpg" height="500px" width="200px"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Completely Reliabe and Trusted</h3>
      <p style={{color:'black',fontSize:'20px'}}>We have incredible tailoring services to thousands of customers.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.yourtailor.in/wp-content/uploads/2019/04/Slider-3.jpg" height="500px" width="200px"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Premium servies with professional tailors</h3>
      <p style={{color:'black',fontSize:'20px'}}>Be it an attire for wedding ,office meeting we are there for all your tailoring services.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
       
    )
}
export default Pictures();