 
import {useSelector,useDispatch} from "react-redux";
import LoginCreator from './LoginCreator';
import {bindActionCreators} from "redux";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {BrowserRouter,Link,Switch,Route} from "react-router-dom";
import {React} from 'react';
import SecurityQuestionForm from "./SecurityQuestionForm";
import FeedbackForm from "../AdminComponents/FeedbackForm";
import SecurityQuestionForm from "./SecurityQuestionForm";

function Register(props) {
  let {register,handleSubmit,formState:{errors}}=useForm();
  let trigger=props.setTrigger;
  const [buttonPopup,setButtonPopup]=useState(false);
  const storeObj=useSelector((store)=>store)
  const [id,setId]=useState(storeObj.state.id)
  const [firstname,setFirstname]=useState(storeObj.state.firstname)
  const [lastname,setLastname]=useState(storeObj.state.lastname)
  const [gender,setGender]=useState(storeObj.state.gender)
  const [usercategory,setUsercategory]=useState(storeObj.state.usercategory)
  const [dob,setDob]=useState(storeObj.state.dob)
  const [password,setPassword]=useState(storeObj.state.password)
  const [contact,setContact]=useState(storeObj.state.contact)
  const [email,setEmail]=useState(storeObj.state.email)
  const dispatch=useDispatch();
  const{uploadid,uploadfirstname,uploadlastname,uploaddob,uploadgender,uploadcontact,uploademail,uploadpassword,getuserInfo,postuserInfo}=bindActionCreators(LoginCreator,dispatch)
    let dobs=''+dob,ids=''+id,firstnames=''+firstname,lastnames=''+lastname,genders=''+gender,emails=''+email,passwords=''+password,
    usercategorys=''+usercategory, contacts=''+contact;
  let obj={id:ids,firstname:firstnames,lastname:lastnames,dob:dobs,usercategory:usercategorys,gender:genders
        ,password:passwords,contact:contacts,email:emails}
       
  let history=useHistory();
  //const post=(userObj)=>{
    
  //}
  const onFormSubmit=(userObj)=>{

    alert("New user added successfully");
    postuserInfo(userObj)
    console.log(userObj);
   
    
    history.push('/userlogin')
  }
  //console.log("errors",errors);
  

  return(
     <div>   
     <h1 style={{color:'green'}} > REGISTER TO ENTER INTO THE TAILOR STORE!<br/></h1> 
    
     <form className="w-10 mx-auto " onSubmit={handleSubmit(onFormSubmit)}  style={{border:'1px solid blue',"padding":3,"width":500,"paddingLeft":30,fontFamily:'sans-serif',color:'darkgreen'}} >
    
    <label > Enter your ID_NO.</label>: <input type="number" name="id" 
              className="form-control mb-3"
                //onChange={(e)=>setId(e.target.value)}
                //value={id}
                //required
                {...register('id',{required:true})}
                >
                  </input><br/>
     {errors.id?.type === 'required'  && <p style={{color:"red"}}>*User Id is required</p>}   

     <label htmlFor="fname">  Enter your First Name</label>   : <input type="text"  id="fname"  className="form-control"  
                // onChange={(e)=>setFirstname(e.target.value)}
                // value={firstname}
                // required
                {...register('firstname',{required:true})}
                
                ></input><br/>
        {errors.firstname?.type==='required' && <p className="text-danger" style={{color:'red'}}>*FirstName is required</p>}
    <label htmlFor="lname">  Enter your Last Name</label>   : <input type="text"  id="lname"  className="form-control"  
                // onChange={(e)=>setLastname(e.target.value)}
                // value={lastname}
                // required
                {...register('lastname',{required:true})}
                
                ></input><br/>
            {errors.lastname?.type === "required" && <p className="text-danger" style={{color:'red'}}>*LastName is required</p>}  
   
              <label htmlFor="usercategory">  Select your category</label>   : <select 
              {...register('usercategory',{required:true})}
               >
                  
            <option value="Customer">Customer</option>
            <option value="Tailor">Tailor</option>

            
            
          </select><br/><br/>
                {errors.usercategory?.type==='required' && <p className="text-danger" style={{color:'red'}}>*usercategory is required</p>}
    
                 <label htmlFor="gender"> select your gender</label><br/><rb/>
                 <div > 
                 <input
              type="radio"
              value="Male"
              {...register('gender',{required:true})}
             
            />Male
          
          
            <input
              type="radio"
              value="Female"
              {...register('gender',{required:true})}
              
            />Female
          
                 </div>
                 
            <br/><br/>
                {errors.gender?.type==='required' && <p className="text-danger" style={{color:'red'}}>*Gender is required</p>}
    <label htmlFor="dob">  Enter your DOB</label>   : <input type="date"  id="dob"  className="form-control"  
               
               {...register('dob',{required:true})}
                
                ></input><br/>
                {errors.dob?.type==='required' && <p className="text-danger" style={{color:'red'}}>*DOB is required</p>}
    <label htmlFor="pw">Enter your Password</label> : <input type="password"  id="pw"  className="form-control" 
               
               {...register('password',{required:true})}
                ></input><br/>
                {errors.password?.type==='required' && <p className="text-danger" style={{color:'red'}}>*Password_ is required</p>}  
  
    <label htmlFor="contact">Enter your Contact Number :</label><input type="number"  id="contact"  className="form-control"
                {...register('contact',{required:true})}
                ></input><br/>
                 {errors.contact?.type==='required' && <p className="text-danger" style={{color:'red'}}>*Contact_Number is required</p>}  
    <label htmlFor="email">Enter your Email Address</label>: <input  type="email" id="email" className="form-control"
               
               {...register('email',{required:true})}
                ></input><br/> 
                {errors.email?.type==='required' && <p className="text-danger" style={{color:'red'}}>*EmailAddress is required</p>}   
    
        {/* <SecurityQuestionForm /> */}

        <div style={{textAlign:'center'}} >
          <button type="button"  onClick={()=>setButtonPopup(true)} required >Security Questions</button>       
          <SecurityQuestionForm trigger={buttonPopup} setTrigger={setButtonPopup}/>
        </div>

        {/* <nav className="nav-item "  style={{color:'brown'}}>
         <Link className="nav-link" to="/SecurityQuestionForm" required >SecurityQuestionForm</Link>
        </nav> */}
    <button type="submit" className="btn btn-success" style={{backgroundColor:'green',borderRadius:'30px',paddingLeft:'30px'}} >Sign Up</button><br/>
    
    
    

   </form><br/>

  

   
  
    
    <hr/>
    
   <hr/>
  
    </div>
  )

}
export default Register;
