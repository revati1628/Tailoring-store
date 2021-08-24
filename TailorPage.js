import React from 'react'
import { Link, useHistory} from "react-router-dom";
import tailor from "../Images/tailor.jpg";
import TailorSorting from "./TailorSorting";
import UpdateDetails from './UpdateDetails';

export default function TailorPage() {

    let history=useHistory();
    const helpPage=()=>{
        history.push('HelpPage');
    }

    const logout=()=>{
        
        history.replace('/');
    }
    
    return (
        <div className="container-fluid" style={{backgroundImage:`url(${tailor})`,height:'600px'}}>
            <h2 style={{textAlign:'center',color:"black"}}>WELCOME TAILOR</h2>
           
            <button className="btn btn-primary" onClick={logout} style={{paddingLeft:"10px",paddingRight:"10px",marginTop:'10px',marginLeft:'1000px',marginRight:'40px'}}>LogOut</button>
           
           
            <nav className="nav-item "  style={{textAlign:'center',marginTop:'20px',fontSize:"35px"}}>
         <Link className="nav-link" to="/TailorSorting" style={{color:"yellowgreen"}} >TAILOR SORTING</Link>
        </nav>

        <nav className="nav-item "  style={{color:'brown',textAlign:'center',marginTop:'20px',fontSize:"35px"}}>
         <Link className="nav-link" to="/UpdateDetails" style={{color:"Highlight"}} >UPDATE DETAILS</Link>
        </nav>

        <nav className="nav-item "  style={{color:"yellowgreen",textAlign:'center',marginTop:'20px',fontSize:"35px"}}>
         <Link className="nav-link" to="/UploadPatterns" style={{color:"violet"}} >UPLOAD PATTERNS</Link>
        </nav>

        <nav className="nav-item "  style={{color:"yellowgreen",textAlign:'center',marginTop:'20px',fontSize:"35px"}}>
         <Link className="nav-link" to="/CheckOrders" style={{color:"violet"}} >Check Orders</Link>
        </nav>
        <nav className="nav-item "  style={{color:"yellowgreen",textAlign:'center',marginTop:'20px',fontSize:"35px"}}>
         <Link className="nav-link" to="/PaymentStatus" style={{color:"violet"}} >Payment Status</Link>
        </nav>
        
        </div>
    )
}
