import React from 'react'
//import OrderDetails from "./OrderDetails";
import {useHistory} from "react-router-dom";

export default function TailorDetails(props) {

    let history=useHistory();
    const result=props.result;

    return (
        <div>
           
            

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
                                   <tr key={ind}>
                                   
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
