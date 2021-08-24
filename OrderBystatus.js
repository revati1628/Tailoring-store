import React,{useState,useEffect} from 'react'
import axios from 'axios';
import ApproveOrder from './ApproveOrder';
export default function OrderBystatus(props) {

    //const [id,setId]=useState(props.tid);
    let tailorid=props.tailorid;
    //console.log(`id,${props.tid}`);
    console.log("idd",tailorid);
    const [orders,setOrders]=useState([]);
    const [activeorders,setActiveorders]=useState([])
    
    const ActiveOrders=()=>{
    fetch(`http://localhost:8080/getByStatus/${tailorid}/onHold`)
    .then(response=>response.json())
    .then(res=>{setOrders(res)
    
        console.log("onHold",res)
    }
    )
}
    const Completed=()=>{
    
        
        
        fetch(`http://localhost:8080/getByStatus/${tailorid}/completed`)
        .then(response=>response.json())
        .then(res=>{setOrders(res)
        
            console.log("completed",res)
        }
        )
        
       
    
    }
    
const Approved=()=>{

            fetch(`http://localhost:8080/getByStatus/${tailorid}/approved`)
            .then(response=>response.json())
            .then(res=>{setOrders(res)
            
                console.log("approved",res)
            }
            )
            
     }
    return (
        <div>
            <button type="submit" className="btn btn-outline-success" onClick={Completed}>Completed Orders</button><br/>
            <button type="submit" className="btn btn-outline-info" onClick={Approved}>Approved Orders </button>
            <button type="submit" className="btn btn-outline-warning" onClick={ActiveOrders}>Active Orders</button>

            <table>
            {/* <h1>Orders by customer</h1> */}
            <thead style={{backgroundColor:"ThreeDLightShadow"}}>
                <tr>
                    
                    <th>Order Id</th>
                </tr>
                
            </thead>
            
            <tbody>
                {
                    orders.map((list,ind)=>{
                        const details=()=>{
                            document.write(`<div>
                                <table>
             <h1>Orders by customer</h1> 
            <thead style={{backgroundColor:"ThreeDLightShadow"}}>
                <tr>
                   
                    
                    <th>Dress Type</th>
                    <th>Chest measurments</th>
                    <th>Neck</th>
                    <th>Shoulder measurments</th>
                    <th>Top Amount</th>
                    <th>Top fabric</th>
                    <th>Top length</th>
                    <th>Waist measurments</th>
                   
                   
                    
                    

                </tr>
                
            </thead>
            
            <tbody>
                
                   
                            <tr key={ind}>
                                
                                <td>${list.dresstype}</td>
                                <td>${list.chest}</td>
                                <td>${list.neck}</td>
                                <td>${list.shoulderlength}</td>
                                <td>${list.topamount}</td>
                                <td>${list.topfabric}</td>
                                <td>${list.toplength}</td>
                                <td>${list.topwaist}</td>
                                
                                
                            </tr>
                       

            </tbody>
        </table><hr/><br/>
        <h1>Bottom Details</h1>
        <table >
                <thead style={{backgroundColor:"WindowFrame"}}>
                    <tr>
                    <th>Bottom Amount</th>
                    <th>Bottom Fabric </th>
                    <th>Hip measurments</th>
                    <th>Knee Length</th>
                    <th>Expected Date</th>
                    <th>Model number</th>
                    <th>Addition requirements</th>
                    <th>Status</th> 

                    </tr>
                </thead>
                <tbody>
                
                            <tr key={ind}>
                                <td>${list.bottomamount}</td>
                                <td>${list.bottomfabric}</td>
                                <td>${list.hip}</td>
                                <td>${list.kneelength}</td>
                                <td>${list.expectedDate}</td>
                                <td>${list.modelid}</td>
                                <td>${list.comments}</td>
                                <td>${list.approvalstatus}</td>
                            </tr>
                       

                </tbody>
        </table>
        </div>
                            `)
                            
                        }
                        return(
                            <tr key={ind}>
                                
                                <button type="submit" onClick={details}>{list.orderid}</button>
                                
                            </tr>
                        )
                    })
                }

            </tbody>
        </table><hr/><br/>
        
                    <h1>Change Status</h1>

                    <ApproveOrder />
        </div>
    )
}
