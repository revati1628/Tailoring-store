
import { useEffect, useState } from "react";
import { useForm} from "react-hook-form";
import {useSelector,useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import {bindActionCreators} from "redux";
import LoginCreator from './LoginCreator';
import UserPortal from './UserPortal';
import '../App.css';


const AdminFeedback=(props)=>{
    let setTrigger=props.setTrigger;
    let {register,handleSubmit,formState:{errors}}=useForm();

    const [buttonPopup,setButtonPopup]=useState(false);

    const storeObj=useSelector((store)=>store)
    const [orderid,setOrderid]=useState(storeObj.state.orderid)
    const [tailorid,setTailorid]=useState(storeObj.state.tailorid)
    const [improve,setImprove]=useState(storeObj.state.improve)
    const [likes,setLikes]=useState(storeObj.state.likes)
    const [rate,setRate]=useState(storeObj.state.rate)
    let history=useHistory();
    const dispatch=useDispatch();
    const{postFeedback,getFeedback}=bindActionCreators(LoginCreator,dispatch)

    let obj={orderid:orderid,tailorid:tailorid,improve:improve,likes:likes,rate:rate}
    const post=()=>{
        console.log(obj);
        postFeedback(obj);
    }

    const onFormSubmit=()=>{
        alert("thanks for giving us feedback!!!")
    }

    console.log(setTrigger)

    return(props.trigger)?(
        <div className="popup">
            <div className="popup-inner">
            <button className="close-btn" onClick={()=>setTrigger(false)} style={{color:'white',borderRadius:'100px',backgroundColor:'red'}}>X</button>
                {props.children}
            <form className="w-10 mx-auto " onSubmit={handleSubmit(onFormSubmit)} >
                <label htmlFor="orderid">Enter your order id to give us feedback!</label><input type="number" id="orderid" 
                    onChange={(e)=>setOrderid(e.target.value)}
                    value={orderid} className="form-control"></input>
                 <label htmlFor="tailorid">Enter the tailor id who took your order</label><input type="number" id="tailorid" 
                    onChange={(e)=>setTailorid(e.target.value)}
                    value={tailorid} className="form-control"></input>
                <label htmlFor="likes">Please let us know what you like about our service</label><input type="text" id="likes" className="form-control"
                    onChange={(e)=>setLikes(e.target.value)}
                    value={likes}
                    ></input>
                <label>Please let us know what to improve</label><input type="text" id="improve" className="form-control"
                    onChange={(e)=>setImprove(e.target.value)}
                    value={improve}
                    ></input>
                <label htmlFor="rate">On a scale to 1-5,enter a number to rate us!!!</label><select type="text" id="rate" className="form-control"
                    onChange={(e)=>setRate(e.target.value)}
                    value={rate}
                    >
                        <option>select</option>
                        <hr/>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        
                        </select><br/>
                <button type="submit" className="btn btn-success" onClick={post}   style={{backgroundColor:'green',borderRadius:'30px',paddingLeft:'30px'}} >submit feedback!</button>
    
            </form>
            </div>
        </div>
    ):'';
}

export default AdminFeedback;
