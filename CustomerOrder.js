import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import LoginCreator from "./LoginCreator";

const CustomerOrder=()=>{

    const {register,handleSubmit,formState:{errors}}=useForm();

    const storeObj=useSelector((store)=>store);
    const [tailorid,setTailorid]=useState(storeObj.state.tailorid);
    const [dresstype,setDresstype]=useState(storeObj.state.dresstype);
    const [topamount,setTopamount]=useState(storeObj.state.topamount);
    const [bottomamount,setBottomamount]=useState(storeObj.state.bottomamount);
    const [topfabric,setTopfabric]=useState(storeObj.state.topfabric);
    const [bottomfabric,setBottomfabric]=useState(storeObj.state.bottomfabric);
    const [topduration,setTopduration]=useState(storeObj.state.topduration);
    const [bottomduration,setBottomduration]=useState(storeObj.state.bottomduration);
    const [kneelength,setKneelength]=useState(storeObj.state.kneelength);
    const [chest,setChest]=useState(storeObj.state.chest);
    const [hip,setHip]=useState(storeObj.state.hip);
    const [comments,setComments]=useState(storeObj.state.comments);
    const [topwaist,setTopwaist]=useState(storeObj.state.topwaist);
    const [toplength,setToplength]=useState(storeObj.state.toplength);
    const [shoulderlength,setShoulderlength]=useState(storeObj.state.shoulderlength);
    const [neck,setNeck]=useState(storeObj.state.neck);
    let dispatch=useDispatch();

    const {postOrder}=bindActionCreators(LoginCreator,dispatch);
        let obj={topamount:topamount,topduration:topduration,topwaist:topwaist,topfabric:topfabric,dresstype:dresstype,tailorid:tailorid,
                  shoulderlength:shoulderlength,bottomduration:bottomduration,bottomfabric:bottomfabric,bottomamount:bottomamount,
                toplength:toplength,chest:chest,neck:neck,kneelength:kneelength,comments:comments,hip:hip}

    const post=()=>{
        postOrder(obj);
    }

    const onFormSubmit=()=>{
            alert("you have placed an order")
    }

    return(
        <div className="container">
            <div className="row">
                <form className="w-10 mx-auto " onSubmit={handleSubmit(onFormSubmit)} style={{border:'1px solid black'}}>
                    <label htmlFor="tid">Enter the id of tailor you chose!</label><input type="number" id="tid" className="form-control"
                            onChange={(e)=>setTailorid(e.target.value)}
                            value={tailorid}
                            required></input>
                    <label htmlFor="dresstype">Choose the dress type</label><input type="text" id="dt" className="form-control"
                            onChange={(e)=>setDresstype(e.target.value)}
                            value={dresstype}
                            required></input>
                            <hr/>
                            <h3 style={{textAlign:'center'}}>TOP MEASUREMENTS</h3>
                    <label htmlFor="topamount">Click to know the prices for various materials!</label><select type="number" className="form-control"
                                 id="tamnt"
                            onChange={(e)=>setTopamount(e.target.value)}
                            value={topamount}
                            required>
                                <option>Select</option>
                                <hr/>
                                <option value="1500">Silk - Rs 1500</option>
                                <option value="1000">Cotton - Rs 1000</option>
                                <option value="1200">Wollen - Rs 1200</option>
                                <option value="2000">Lenin - Rs 2000</option>
                            </select>
                    <label htmlFor="topfabric">Choose the type of garment for top!</label><input type="text" id="tfab"
                           className="form-control"
                           onChange={(e)=>setTopfabric(e.target.value)}
                            value={topfabric}
                            required></input>
                    <label htmlFor="shoulderlength">Enter your shoulder length!</label><input type="number" id="shl"
                            className="form-control"
                            onChange={(e)=>setShoulderlength(e.target.value)}
                            value={shoulderlength}
                            required></input>
                    <label htmlFor="neck">Mention shape of the neck</label><select type="text" id="neck"
                    className="form-control"
                            onChange={(e)=>setNeck(e.target.value)}
                            value={neck}
                            required>
                                    <option>Select</option>
                                    <hr/>
                                    <option value="V shape">V shape</option>
                                    <option value="round neck">Round neck</option>
                                    <option value="collar neck">collar neck</option>
                            </select>
                    <label htmlFor="topwaist">Mention the top waist length in inches</label><input type="number" id="tw"
                    className="form-control"
                            onChange={(e)=>setTopwaist(e.target.value)}
                            value={topwaist}
                            required></input>
                    <label htmlFor="chest">Mention chest measurements in inches</label><input type="number" id="chest"
                    className="form-control"
                            onChange={(e)=>setChest(e.target.value)}
                            value={chest}
                            required></input>
                    <label htmlFor="toplength">enter the length of top in inches!</label><input type="number" id="tl"
                    className="form-control"
                            onChange={(e)=>setToplength(e.target.value)}
                            value={toplength}
                            required></input>
                    <label htmlFor="topdura">By which day you would like the top to be delivered</label><input type="date" id="tid"
                    className="form-control"
                            onChange={(e)=>setTopduration(e.target.value)}
                            value={topduration}
                            required></input>
                            <hr/>
                            <h3 style={{textAlign:'center'}}>BOTTOM MEASUREMENTS</h3>
                    <label htmlFor="btamount">Click to know the prices for various materials!</label><select type="number" id="bamnt"
                    className="form-control"
                           onChange={(e)=>setBottomamount(e.target.value)}
                           value={bottomamount}
                           required>
                           <option>Select</option>
                                <hr/>
                                <option value="1500">Silk - Rs 1500</option>
                                <option value="1000">Cotton - Rs 1000</option>
                                <option value="1200">Wollen - Rs 1200</option>
                                <option value="2000">Lenin - Rs 2000</option>
                                </select>
                <label htmlFor="btfabric">Choose the type of garment for bottom!</label><input type="text" id="bfab"
                className="form-control"
                        onChange={(e)=>setBottomfabric(e.target.value)}
                        value={bottomfabric}
                        required></input>
                <label htmlFor="knelen">Mention kneelength in inches</label><input type="number" id="klen"
                className="form-control"
                        onChange={(e)=>setKneelength(e.target.value)}
                        value={kneelength}
                        required></input>
                <label htmlFor="hip">Mention hip measurements in inches</label><input type="number" id="hip"
                className="form-control"
                        onChange={(e)=>setHip(e.target.value)}
                        value={hip}
                        required></input>
                 <label htmlFor="btdura">By which day you would like the bottom to be delivered</label><input type="date" id="btd"
                 className="form-control"
                            onChange={(e)=>setBottomduration(e.target.value)}
                            value={bottomduration}
                            required></input>                    
                <label htmlFor="cmnts">Kindly mention any additional comments</label><textarea id="cmnts"
                className="form-control"
                        onChange={(e)=>setComments(e.target.value)}
                        value={comments}
                        required></textarea>
                <button type="submit" className="btn btn-success" onClick={post}   style={{backgroundColor:'green',borderRadius:'30px',paddingLeft:'30px'}} >submit feedback!</button>
                </form>
            </div>
        </div>
    )
}

export default CustomerOrder;