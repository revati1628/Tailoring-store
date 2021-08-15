import React from 'react'
import { useHistory,Link, BrowserRouter, Switch,Route } from "react-router-dom";
import FeedbackForm from "../AdminComponents/FeedbackForm";
import './alert.css'

export default function UserPage() {

    let history=useHistory();
    const styling={
        display:"none",
        backgroundColor:"red"
    }
    const helpPage=()=>{
        history.push('HelpPage');
    }

    const logout=()=>{
        
        history.replace('/');
    }

    return (
        <div>
            <div className="alert">
            <span className="closebtn" onClick={styling}>&times;
            
             </span> 
            {/* <strong>Danger!</strong> Indicates a dangerous or potentially negative action. */}
            <BrowserRouter>
            <nav className="nav-item "  style={{color:'brown'}}>
                 <Link className="nav-link" to="/FeedbackForm" >FeedbackForm</Link>
            </nav>   
            <Switch>
            <Route path="/FeedbackForm" component={FeedbackForm}>
            <FeedbackForm />
             </Route>
            </Switch>
            </BrowserRouter> 

        </div>
            <h1>User page</h1>
            <button className="btn btn-success" onClick={helpPage}>Help</button><br/>
            <button className="btn btn-primary" onClick={logout} style={{paddingLeft:"10px",paddingRight:"10px"}}>LogOut</button>
        
           
        </div>
    )
}

