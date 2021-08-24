import React,{useState,useEffect} from 'react'

import axios from 'axios'
export default function GetImage() {

  const [image,setImage]=useState([])
  const [img,setImg]=useState([])
  
  useEffect(()=>{
        axios.get(`http://localhost:8080/files`)
          .then(res => {
            //const products = res.data;
            setImg(res.data);
            //console.log("image",res.data);
          })
      },[]);
  
  return (
    <div>
      {/* <Routing /> */}
      <div className="row">
       { img.map((pro,ind) =>
            <div className="col-md-4" key={ind}>
              <div className="block-img">
             <div className="flip-card">
                 <div className="flip-card-inner">
                  <div className="flip-card-front">
                     <img src={pro.url} alt={pro.name} 
                    style={{width: 200, height: 200}}  /> 
                    <h1 style={{fontSize:"20px"}}>{pro.name}</h1>
                    
          
                    </div>
                  </div>
                  </div>
                 </div>
                 </div>
  )}; 
   </div>


     
    </div>
  )
}

