import React,{useState,useEffect} from 'react'
import axios from "axios";
import {useHistory} from 'react-router-dom'
export default function CustomerOrders() {

    const [orders,setOrders]=useState([]);
    let history=useHistory();
    const back=()=>{
        history.push('AdminPage')
    }
    useEffect(() => {
       viewOrders();
    }, [])
    const viewOrders= async() =>{
        const result=await axios.get("http://localhost:8080/vieworder");
        setOrders(result.data);
       
    }
    return (
        <>
        <button type="button" className="btn btn-outline-primary" style={{float:"right",paddingRight:"10px"}}
            onClick={back}>Back</button>
        <h1>Top Details</h1>
        <table>
            {/* <h1>Orders by customer</h1> */}
            <thead style={{backgroundColor:"ThreeDLightShadow"}}>
                <tr>
                    <th>Tailor Id</th>
                    <th>Dress Type</th>
                    <th>Chest measurments</th>
                    <th>Neck</th>
                    <th>Shoulder measurments</th>
                    <th>Top Amount</th>
                    <th>Top fabric</th>
                    <th>Top length</th>
                    <th>Waist measurments</th>
                    <th>Expected date(Top)</th>
                   
                    
                    

                </tr>
                
            </thead>
            
            <tbody>
                {
                    orders.map((list,ind)=>{
                        return(
                            <tr key={ind}>
                                <td>{list.tailorid}</td>
                                <td>{list.dresstype}</td>
                                <td>{list.chest}</td>
                                <td>{list.neck}</td>
                                <td>{list.shoulderlength}</td>
                                <td>{list.topamount}</td>
                                <td>{list.topfabric}</td>
                                <td>{list.toplength}</td>
                                <td>{list.topwaist}</td>
                                <td>{list.expectedDateT}</td>
                                <td>{list.comments}</td>
                            </tr>
                        )
                    })
                }

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
                    <th>Expected Date(Bottom)</th>
                    <th>Addition requirements</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orders.map((list,ind)=>{
                        return(
                            <tr key={ind}>
                                <td>{list.bottomamount}</td>
                                <td>{list.bottomfabric}</td>
                                <td>{list.hip}</td>
                                <td>{list.kneelength}</td>
                                <td>{list.expectedDateB}</td>
                                <td>{list.comments}</td>
                            </tr>
                        )
                    })
                }

                </tbody>
        </table>
        </>
    )
}
