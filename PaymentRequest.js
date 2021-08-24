import React,{useState,useEffect} from 'react'
import {useHistory} from "react-router-dom";
export default function PaymentRequest() {

    let history=useHistory();
    const [request,setRequest]=useState([])
    useEffect(()=>{
        fetch("http://localhost:8080/getBill")
        .then(response=>response.json())
        .then(res=>{setRequest(res)})
        },[])

        const Pay=()=>{
            history.push('PayBill')
        }
    return (
        <div>
            <button onClick={Pay}>
                <span>{request.length}</span>
            payment Request</button>
        </div>
    )
}
