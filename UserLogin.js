import { useState } from "react"
import { useHistory } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { useForm } from "react-hook-form";
import LoginCreator from './LoginCreator';
import {bindActionCreators} from "redux";
import start from '../images/start.jpg';

function UserLogin()
{
    let {register,handleSubmit,formState:{errors}}=useForm();
    const dispatch=useDispatch();
  const{uploadaadhar,uploadname,uploadpassword,uploadcontact,uploademail,validateInfo,getuserInfo,postuserInfo}=bindActionCreators(LoginCreator,dispatch)
    const storeObj=useSelector((store)=>store)
    const [id,setId]=useState(storeObj.state.id);
    const [pw,setPw]=useState(storeObj.state.pw);

    let history=useHistory();
    let obj={id:id,pw:pw}
    

    const onFormSubmit=()=>{
        let url=`http://localhost:8082/insert/${id}/${pw}`;
        console.log(url)
        fetch("http://localhost:8082/insert/"+id+"/"+pw,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(obj)
        })
        
        .then(res=>{
            console.log("response",res)
            if(res.status==200){
                
                alert("Login successful")
                history.push("/userportal")
            }
            else {
                alert("invalid Credentials")
            }
        })
        .then(data=>{
            dispatch({
                type:"validate",
                payload:url
            })
        })
}

return(
    <div style={{backgroundImage:`url(${start})`}} >
         <form onSubmit={handleSubmit(onFormSubmit)}  style={{border:'1px solid blue',paddingLeft:"30px",width:"500px"}}>
        Enter your ID:<input type="number" id="id"  className="form-control"  
                onChange={(e)=>setId(e.target.value)}
                value={id}
                required /><br/>
                {errors.ad?.type==='required' && <p className="text-danger" style={{color:'red'}}>*AADHAR_NO is required</p>}                          
        Enter your password:<input type="password" id="pw" className="form-control"  
                onChange={(e)=>setPw(e.target.value)}
                value={pw}
                required/><br/>
                {errors.ad?.type==='required' && <p className="text-danger" style={{color:'red'}}>*password is required</p>}    
                <button className="btn btn-warning" type="submit" >Login</button>    
               
                
    </form> 
    </div>
    
    
)


}

export default UserLogin;