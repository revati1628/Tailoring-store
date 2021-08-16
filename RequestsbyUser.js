import React,{useEffect,useState} from 'react'
import axios from 'axios';
export default function RequestsbyUser() {

    const [issueList,setIssueList]= useState([])
    useEffect(() => {
        getIssuesList();
        
   }, [])

   const getIssuesList= async() =>{
       const result=await axios.get("http://localhost:8080/getIssues");
       setIssueList(result.data);
      
   }
   //const list=issueList;
   //console.log("first",list[0]);
   console.log("issue list",issueList);
   
    return (
        <div style={{paddingTop:"20px"}}>
       
              <h1 >Request IDs</h1> 
                
                {
                    issueList.map((list,ind)=>{
                       const response=()=>{
                            document.write(`<p>${list.issue}<br/>
                            ${list.description}<br/>
                           ${list.date}</p>`);
                       }
                        return(
                            <div key={ind}>
                                
                                <button type="button" style={{color:"green"}} onClick={response}  >{list.requestId}
                                
                               

                                </button>
                                
                                
                               
                            </div>
                        )
                    })
                }
           
            
                
                
       
         

         </div>
    
    )
}
