import React,{useState} from 'react'
import { useHistory,Link, BrowserRouter, Switch,Route } from "react-router-dom";
import FeedbackForm from "../AdminComponents/FeedbackForm";
import {AiOutlineSearch} from "react-icons/ai"
import '../App.css';
import user from '../Images/user.jpg'

export default function UserPage(props) {

    let trigger=props.setTrigger;
    const [buttonPopup,setButtonPopup]=useState(false);
    let history=useHistory();
    const styling={
        display:"none",
        backgroundColor:"red"
    }
    
    const logout=()=>{
        
        history.replace('/');
    }

    return (
        <div style={{backgroundImage:`url(${user})`,height:'600px'}}>
            <button className="btn btn-primary" onClick={logout} style={{float:"right"}}>LogOut</button>
            <div style={{paddingRight:"100px",paddingLeft:"500px"}}><button type="button" className="btn btn-outline-info"  onClick={()=>setButtonPopup(true)}>would you like to give us Feedback ?</button>       

            <FeedbackForm trigger={buttonPopup} setTrigger={setButtonPopup}/>
            </div>
        <div>
        <nav className="nav-item "  style={{color:"white",fontSize:"35px"}}>
         <Link className="nav-link" to="/TailorSearch" style={{color:"white"}}><AiOutlineSearch />Search for Tailor</Link>
        </nav>
        </div>
            
            
            
        
           
        </div>
    )
}