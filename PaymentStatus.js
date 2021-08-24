import React,{useState,useEffect} from 'react'
import { get } from 'react-hook-form'

export default function PaymentStatus() {
    const [request,setRequest]=useState([])
    
    // const gett=()=>{
    //     useEffect(()=>{
    //         fetch("http://localhost:8080/getbypaymentstatus/paid")
    //         .then(response=>response.json())
    //         .then(res=>{setRequest(res)
    //         console.log("data",res.orderid,res.customerid);})
    //         },[])
    //     }
    // const Get=()=>{
        useEffect(()=>{
            fetch("http://localhost:8080/getbypaymentstatus/paid")
            .then(response=>response.json())
            .then(res=>{
            setRequest(res)
            console.log("data",res)
            })
            },[])
    //}
    const g=(e)=>{

        
    }
        
    return (
        <div>
           
            <h1>Payment Deatils</h1>
            {
              request.map((e)=>{
                
                return(
                    <div>
                        
            <h1>{e.orderid}</h1>
            <h1>{e.customerid}</h1>
                        </div>
                )
            })
            
            }
           

        </div>
    )
}
