import React,{useState} from 'react'
import {useHistory} from "react-router-dom";
import OrderBystatus from './OrderBystatus';
import {useSelector} from "react-redux";
export default function CheckOrders() {
    const storeObj=useSelector((store)=>store);
    const [tailorid,setTailorid]=useState(storeObj.state.tailorid);
    let history=useHistory();
    const handleCheck=()=>{
        history.push('OrderBystatus')
        console.log("id",tailorid);
        
    }
    return (
        <div>
            <form onSubmit={handleCheck}>
                Enter tailor id<input type="number" value={tailorid}
                onChange={(e)=>{setTailorid(e.target.value)}}
                />
                <button type="submit">Check</button>
            </form>
            <OrderBystatus tid={tailorid} />
        </div>
    )
}
