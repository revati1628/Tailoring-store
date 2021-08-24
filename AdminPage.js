import React from 'react'
import IssuesNotification from './IsuuesNotification'
import SortByAdmin from './SortByAdmin'
import {Link,useHistory} from "react-router-dom";
import admin from '../Images/admin.jpg'
import CustomerOrders from './CustomerOrders';
import ViewOrders from './ViewOrders';

export default function AdminPage() {

    let history=useHistory();
    const logout=()=>{
        
        history.replace('/');
    }
    return (
        <div style={{backgroundImage:`url(${admin})`,height:'600px'}}>   
            <h3 style={{textAlign:'center',color:'black'}}>WELCOME ADMIN</h3>
            <button className="btn btn-primary" onClick={logout} style={{paddingLeft:"10px",paddingRight:"10px",marginTop:'10px',marginLeft:'1100px',marginRight:'50px'}}>LogOut</button>
            <IssuesNotification />
        <nav className="nav-item "  style={{marginTop:'20px',textAlign:'center'}}>
         <Link className="nav-link" to="/SolutionsForm" style={{fontSize:"35px",color:"burlywood"}}> <b>SOLUTIONS FORM</b></Link>
        </nav>
        <nav className="nav-item "  style={{marginTop:'5px',textAlign:'center'}}>
         <Link className="nav-link" to="/SortByAdmin" style={{fontSize:"35px",color:"black"}} ><b>ADD CATEGORY FORM </b></Link>
        </nav>
        <nav className="nav-item "  style={{marginTop:'5px',textAlign:'center'}}>
         <Link className="nav-link" to="/ViewOrders" style={{fontSize:"35px",color:"black"}} ><b>Customer orders </b></Link>
        </nav>
        {/* <ViewOrders /> */}
        </div>
    )
   
}

