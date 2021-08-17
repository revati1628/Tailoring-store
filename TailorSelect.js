
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector,useDispatch } from "react-redux";
// import { useHistory } from "react-router";
import { bindActionCreators } from "redux";
import LoginCreator from "./LoginCreator";


const TailorSelect=()=>{
    let {register,handleSubmit,formState:{errors}}=useForm();

    const storeObj=useSelector((store)=>store)
    const [sortid,setSortid]=useState(storeObj.state.sortid)
    const [category,setCategory]=useState(storeObj.state.category)
    const [dresstype,setDresstype]=useState(storeObj.state.dresstype)
    let dispatch=useDispatch();
    const {postTailorSelect,getTailorSelect}=bindActionCreators(LoginCreator,dispatch)
    // let history=useHistory();

    let  obj={sortid:sortid,category:category,dresstype:dresstype}
    const post=()=>{
        console.log(obj)
        postTailorSelect(obj);
    }

    const onFormSubmit=()=>{
        alert("Your chosen categories has been recorded! ");
    }

    return(
        <div className="container">
            <div>
                <form className="w-10 mx-auto " onSubmit={handleSubmit(onFormSubmit)}>
                    <label htmlFor="tid">Enter your registered Tailor Id</label><input type="text" className="form-control"  id="tid"
                        onChange={(e)=>setSortid(e.target.value)}
                        value={sortid}
                        required
                        ></input><br/>
                    <label htmlFor="cat">Select category</label><select type="text" id="cat" className="form-control" 
                        onChange={(e)=>setCategory(e.target.value)}
                        value={category}
                        required>
                            <option>Select</option>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Girls">Girls</option>
                            <option value="Boys">Boys</option>
                        </select><br/>
                    <label htmlFor="dt">Select Dress Type</label><select type="text" className="form-control" id="dt" 
                        onChange={(e)=>setDresstype(e.target.value)}
                        value={dresstype}
                        required
                        >
                            <option>Select</option>
                            <option value="Business">Business</option>
                            <option value="Formal">Formal</option>
                            <option value="Casual">Casual</option>
                            <option value="Ethnic">Ethnic</option>
                            <option value="Bridal">Bridal</option>
                            <option value="Kurthi">Kurthi</option>
                            
                        </select><br/>
                    <button type="submit" className="btn btn-success" style={{backgroundColor:'green',borderRadius:'30px',paddingLeft:'30px'}} onClick={post}>Submit</button><br/>

                </form>
            </div>
        </div>
 
    )
}

export default TailorSelect;