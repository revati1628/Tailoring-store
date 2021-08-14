import React,{useEffect, useState} from 'react'
import axios from 'axios'
import RequestsbyUser from "../AdminComponents/RequestsbyUser";
import { BrowserRouter, Switch, useHistory,Link,Route } from 'react-router-dom'

export default function IssuesNotification() {

    //let history=useHistory();
    // const RequestsbyUser=()=>{

    //     history.push('/RequestsbyUser')
    // }
    const [issues,setIssues]=useState({})

    useEffect(() => {
         getIssues();
    }, [])

    const getIssues= async() =>{
        const result=await axios.get("http://localhost:8080/getIssues");
        setIssues(result.data);
    }

    //console.log(issues)
    
    return (
        <div>
           
            <BrowserRouter>
            <button type="button" className="nav-item "  style={{backgroundColor:"royalblue",float:"left"}}>
                <Link className="nav-link" to="/RequestsbyUser" style={{color:"black"}}  >
                    Help Request
                    <span style={{height:"10px",width:"10px",paddingLeft:"20px",color:"black",fontSize:"30px"}}>{issues.length}</span>
                    
                </Link>
                
            </button>
                <Switch>

                <Route path="/RequestsbyUser" component={RequestsbyUser}>
                    <RequestsbyUser/>
                </Route>
                </Switch>
            </BrowserRouter>
        </div>
            
       
    )
}
