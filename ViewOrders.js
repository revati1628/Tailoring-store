import React from 'react'
import {Link} from "react-router-dom";
import {GrFormView} from "react-icons/ai";

export default function ViewOrders() {
    return (
        <div>
            <Link className="nav-link" to="/CustomerOrders" style={{color:"black",textAlign:'left',marginBottom:'10px'}}  >
          
          <button style={{height:"8px",width:"8px",color:"darkmagenta",fontSize:"20px"}}>
              
         
              <h2>View</h2> </button>
              
          </Link>
        </div>
    )
}
