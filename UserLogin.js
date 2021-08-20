import { useState,useEffect } from "react"
import { useHistory,Link, BrowserRouter, Switch,Route } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { useForm } from "react-hook-form";
import LoginCreator from '../redux/LoginCreator';
import {bindActionCreators} from "redux";



function UserLogin()
{
    let {register,handleSubmit,formState:{errors}}=useForm();
    const dispatch=useDispatch();
  const{uploadaadhar,uploadname,uploadpassword,uploadcontact,uploademail,validateInfo,getuserInfo,postuserInfo}=bindActionCreators(LoginCreator,dispatch)
    const storeObj=useSelector((store)=>store)
    const [id,setId]=useState(storeObj.state.id);
    const [pw,setPw]=useState(storeObj.state.pw);
    const [category,setCategory]=useState(" ");

    let history=useHistory();
    let obj={id:id,pw:pw}
    

    function OnFormSubmit(){

        
            let url1=`http://localhost:8080/getcategoryById/${id}`;
            fetch(`http://localhost:8080/getcategoryById/${id}`)
            .then(res=>res.text())
            .then(response=>{
            setCategory(response)
            console.log("category",url1);
            console.log("data",response);
            if(response === "Customer")
            {
                let url=`http://localhost:8080/insert/${id}/${pw}`;
        //console.log(url)
                fetch("http://localhost:8080/insert/"+id+"/"+pw,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(obj)
                })
        
                .then(res=>{
                    console.log("response",res)
                    if(res.status==200){
                        
                        alert("Login successful")
                        history.push("/UserPage")
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
           else{

            let url=`http://localhost:8080/insert/${id}/${pw}`;
        //console.log(url)
                fetch("http://localhost:8080/insert/"+id+"/"+pw,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(obj)
                })
        
                .then(res=>{
                    console.log("response",res)
                    if(res.status==200){
                        
                        alert("Login successful")
                        history.push("/TailorPage")
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
        })
            
        
     }
            
            
        
return(
    <div  >
         
         <form onSubmit={handleSubmit(OnFormSubmit)}  style={{border:'1px solid blue',paddingLeft:"30px",width:"500px"}}>
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


                <nav className="nav-item "  style={{color:'brown'}}>
         <Link className="nav-link" to="/ForgotPassword" >Forgot Password</Link>
        </nav><br/><p>Or</p>

        <nav className="nav-item "  style={{color:'brown'}}>
         <Link className="nav-link" to="/ForgotId" >Forgot Id</Link>
        </nav>
    
        
               
            </form> 
            
    </div>
    
    
)


}

export default UserLogin;
