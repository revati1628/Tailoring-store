import React,{useState} from 'react'
import {useHistory} from "react-router-dom";
import OrderBystatus from './OrderBystatus';
import {useSelector} from "react-redux";
import { useForm } from 'react-hook-form';
export default function CheckOrders() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const storeObj=useSelector((store)=>store);
    const [tailorid,setTailorid]=useState(storeObj.state.tailorid);
    let history=useHistory();
    const handleCheck=()=>{
        
        //history.push('OrderBystatus')
        
        console.log("id",tailorid);
        
    }
    return (
        <div>
           <form onSubmit={handleCheck} style={{"padding":15,"width":500,fontFamily:'sans-serif',color:'black',marginLeft:'400px',marginTop:'20px'}} >
            <h3  style={{color:'black',textAlign:'center',marginBottom:'20px'}}>CHECK YOUR ORDER</h3>
                Enter tailor id<input type="number" value={tailorid}
                onChange={(e)=>{setTailorid(e.target.value)}}
                />
                <button type="submit">Check</button>
            </form>
            <OrderBystatus tailorid={tailorid} />
            
        </div>
    )
}
