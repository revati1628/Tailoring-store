import React,{useState,useEffect} from 'react'
import MakePayment from './MakePayment'

export default function PayBill() {
    const [request,setRequest]=useState([])
    useEffect(()=>{
        fetch("http://localhost:8080/getBill")
        .then(response=>response.json())
        .then(res=>{setRequest(res)})
        },[])
    return (
        <div>
            {
                request.map((list,ind)=>{
                    return(
                        <tale>
                            <thead>
                                <th>
                                    <td>Order id</td>
                                    <td>Tailor id</td>
                                    <td>Customer id</td>
                                    <td>Email</td>
                                    <td>Delivery Date</td>
                                    <td>Mode Of Delivery</td>
                                    <td>Order id</td>
                                    <td>Net Amount</td>
                                </th>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{list.orderid}</td>
                                    <td>{list.tailorid}</td>
                                    <td>{list.customerid}</td>
                                    <td>{list.dresstype}</td>
                                    <td>{list.email}</td>
                                    <td>{list.deliverydate}</td>
                                    <td>{list.modeofdelivery}</td>
                                    <td>{list.amount}</td>
                                    
                                </tr>
                            </tbody>
                        </tale>
                    )
                })
            }
            <MakePayment />
        </div>
    )
}
