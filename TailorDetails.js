import React from 'react'
import OrderDetails from "./OrderDetails";
import {useHistory} from "react-router-dom";

export default function TailorDetails(props) {

    let history=useHistory();
    const result=props.result;

    return (
        <div>
           
            {/* {
               
           result.map((data,ind)=>{
            const moveToOrder=()=>{
                document.write(`<h1>shopname: ${data.shopname}</h1><br/><br/>
                <h1> working hours: ${data.workinghrs}</h1><br/>
                <h1>Contach no: ${data.contact}</h1>`)
               
                
            }
               return(
                   <button key={ind} className="btn btn-outline-warning" onClick={moveToOrder} >
                       {data.tailorid}
                   </button>
               )
           })
        } */}

         {
                   
                   result.map((list,ind)=>{
                     
                               return(
                               <table striped bordered hover variant="dark">
                                    
                               <thead>
                               
                                   <tr>
                                   
                                   <th>shop name</th>
                                   
                                   <th>working hrs</th>
                                   
                                   <th>contact</th>
                                  
                                   </tr>
                                   
                               </thead>
                              
                               <tbody>
                                   <tr>
                                   
                                   <td>{list.shopname}</td>
                                   <td>{list.workinghrs}</td>
                                   <td>{list.contact}</td>
                                   </tr>
                               </tbody>
                               </table> )
                   })
                              
                     
        }
        </div>
                              
                     
       
        
    )
}
