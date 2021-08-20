import React from 'react'
import { Link, useHistory} from "react-router-dom";
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
        <div>
            <h1>Tailor page</h1>
           
            <div style={{float:"right"}}>
            <button className="btn btn-success" onClick={helpPage}>Help</button><br/><br/>
            <button className="btn btn-primary" onClick={logout} style={{paddingLeft:"10px",paddingRight:"10px"}}>LogOut</button>
            </div>
            <nav className="nav-item "  style={{color:'brown'}}>
         <Link className="nav-link" to="/TailorSorting" >Tailor Sorting</Link>
        </nav>

        <nav className="nav-item "  style={{color:'brown'}}>
         <Link className="nav-link" to="/UpdateDetails" >Update Details</Link>
        </nav>
        
        </div>
    )
}
