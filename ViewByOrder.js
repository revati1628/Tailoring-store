import React,{useState,useEffect} from 'react'

export default function ViewByOrder() {

    const [data,setData]=useState([])
    useEffect(()=>{
    fetch("http://localhost:8080/viewbyOrder/completed")
    .then(response=>response.json())
    .then(res=>{setData(res)})
    },[])

    return (
        <div>
            
            <table>
            {/* <h1>Orders by customer</h1> */}
            <thead style={{backgroundColor:"ThreeDLightShadow"}}>
                <tr>
                    <th>Tailor Id</th>
                    <th>Order Id</th>
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
                {
                    data.map((list,ind)=>{
                        return(
                            <tr key={ind}>
                                <td>{list.tailorid}</td>
                                <td>{list.orderid}</td>
                                <td>{list.dresstype}</td>
                                <td>{list.chest}</td>
                                <td>{list.neck}</td>
                                <td>{list.shoulderlength}</td>
                                <td>{list.topamount}</td>
                                <td>{list.topfabric}</td>
                                <td>{list.toplength}</td>
                                <td>{list.topwaist}</td>
                                
                                
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
                    <th>Expected Date</th>
                    <th>Model number</th>
                    <th>Addition requirements</th>
                    <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                {
                    data.map((list,ind)=>{
                        return(
                            <tr key={ind}>
                                <td>{list.bottomamount}</td>
                                <td>{list.bottomfabric}</td>
                                <td>{list.hip}</td>
                                <td>{list.kneelength}</td>
                                <td>{list.expectedDate}</td>
                                <td>{list.modelid}</td>
                                <td>{list.comments}</td>
                                <td>{list.approvalstatus}</td>
                            </tr>
                        )
                    })
                }

                </tbody>
        </table>
        </div>
    )
}
