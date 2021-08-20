
import { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { useHistory } from "react-router";
import { bindActionCreators } from "redux";
import LoginCreator from "../redux/LoginCreator";



export default function TailorSelect() 
{
    
    let {register,handleSubmit,formState:{errors}}=useForm();
    const storeObj=useSelector((store)=>store)
    const [sortid,setSortid]=useState(storeObj.state.sortid)
    const [category,setCategory]=useState(storeObj.state.category)
    const [dresstype,setDresstype]=useState(storeObj.state.dresstype)
    const [occassion,setOccassion]=useState(storeObj.state.occassion)
    let dispatch=useDispatch();
    const {postTailorSelect,getTailorSelect}=bindActionCreators(LoginCreator,dispatch) 

    let  obj={sortid:sortid,category:category,dresstype:dresstype,occassion:occassion}
    const history=useHistory();
    
    const [dressTypes,setDressTypes]=useState([])
    
    
        useEffect(() => {
            fetch("http://localhost:8080/getDressType")
           .then(response =>response.json())
            .then(res =>{
                setDressTypes(res)
                //console.log("dresstype",res);
                
            })
        }, [])

        console.log("from state",dressTypes);
    
    const post=()=>{
        console.log(obj)
        postTailorSelect(obj);
    }

    const onFormSubmit=()=>{
        alert("Your chosen categories has been recorded! ");
    }
        
    return(
        <div className="container">
            <button type="button" onClick={()=>{history.push('TailorPage')}} style={{float:"right"}}>Back</button>
            <div className="row">
            
                <div className="col-3" style={{border:'2px solid black'}}>
        <h6>Fill The Form To Chose What You Wish To Stich !</h6>
                <form className="w-10 mx-auto " onSubmit={handleSubmit(onFormSubmit)}>
                
                    <label htmlFor="tid">Enter your registered Tailor Id</label><input type="text" className="form-control"  id="tid"
                        onChange={(e)=>setSortid(e.target.value)}
                        value={sortid}
                        //{...register('sortid',{required:true})}

                        required
                        ></input><br/>
                    <label htmlFor="cat">Click to Select category</label><select type="text" id="cat" className="form-control" 
                        onChange={(e)=>setCategory(e.target.value)}
                        value={category}
                        required

                        //{...register('category',{required:true})}
                        >
                            <option>Select</option>
                            <hr></hr>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Girls">Girls</option>
                            <option value="Boys">Boys</option>
                        </select><br/>
                    <label htmlFor="dt">Click to Select Dress Type</label><select type="text" className="form-control" id="dt" 
                        onChange={(e)=>setDresstype(e.target.value)}
                        value={dresstype}
                        required >
                        {/* {...register('dresstype',{required:true})} */}

                        
                           {
                               dressTypes.map((dress,ind)=>{
                                   return (<option key={ind}>{dress}</option>)
                               })
                           }                     
                        </select><br/>
                    <label htmlFor="oc">Click to Select Occassion</label><select type="text" className="form-control" id="oc" 
                        onChange={(e)=>setOccassion(e.target.value)}
                        value={occassion}
                        required
                        //{...register('occassion',{required:true})}
                        >
                            <option>Select</option>
                            <hr/>
                            <option value="Business">Business</option>
                            <option value="Formal">Formal</option>
                            <option value="Casual">Casual</option>
                            <option value="Ethnic">Ethnic</option>
                            <option value="Bridal">Bridal</option>
                            <option value="Kurthi">Kurthi</option>
                        </select>
                        
                    <button type="submit" className="btn btn-success" style={{backgroundColor:'green',borderRadius:'30px',paddingLeft:'30px'}} onClick={post} >Submit</button><br/>

                </form>
                </div>
            </div>
        </div>
 
    )
}


