import React,{useEffect, useState} from 'react'
import axios from 'axios'
export default function IssuesNotification() {

    const [issues,setIssues]=useState({})

    useEffect(() => {
         getIssues();
    }, [])

    const getIssues= async() =>{
        const result=await axios.get("http://localhost:8080/getIssues");
        setIssues(result.data);
    }

    console.log(issues)
    
    return (
        <div>
            <button style={{backgroundColor:"royalblue"}} >
            <span style={{height:"10px",width:"10px",paddingLeft:"20px"}}>{issues.length}</span><br/>Help Request
            </button>
            
        </div>
            
       
    )
}