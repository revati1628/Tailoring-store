import {useSelector,useDispatch} from "react-redux";
import LoginCreator from '../redux/LoginCreator';
import {bindActionCreators} from "redux";
import { useState } from 'react';
//import emp from '../images/emp.png';
//import start from '../images/start.jpg';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {BrowserRouter,Link,Switch,Route} from "react-router-dom";
import {React} from 'react';

function Register() {
  let {register,handleSubmit,formState:{errors}}=useForm();
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
        // let object=JSON.stringyfy(obj);
//   console.log(obj);
  let history=useHistory();
  const post=()=>{
    postuserInfo(obj)
  }
  const onFormSubmit=()=>{
    alert("New user added successfully");
    history.push('/userlogin')
  }
  //style={{backgroundImage:`url(${start})`}} >
  //<img src={emp} alt=" " height=" 100px"/>

  return(
     <div>   
     <h1 style={{color:'green'}} > REGISTER TO ENTER INTO THE TAILOR STORE!<br/></h1> 
    
     <form className="w-10 mx-auto " onSubmit={handleSubmit(onFormSubmit)}  style={{border:'1px solid blue',"padding":3,"width":500,"paddingLeft":30,fontFamily:'sans-serif',color:'darkgreen'}} >
    
    <label htmlFor="ad"> Enter your ID_NO.</label>: <input type="number"  id="ad"  className="form-control mb-3"
                onChange={(e)=>setId(e.target.value)}
                value={id}
                required
                // {...register('ad',{required:true})}
                >
                  </input><br/>
     {errors.ad?.type==='required' && <p className="text-danger" style={{color:'red'}}>*AADHAR_NO is required</p>}                          
     <label htmlFor="fname">  Enter your First Name</label>   : <input type="text"  id="fname"  className="form-control"  
                onChange={(e)=>setFirstname(e.target.value)}
                value={firstname}
                required
                // {...register('name',{required:true})}
                ></input><br/>
        {errors.firstname?.type==='required' && <p className="text-danger" style={{color:'red'}}>*FirstName is required</p>}
    <label htmlFor="lname">  Enter your Last Name</label>   : <input type="text"  id="lname"  className="form-control"  
                onChange={(e)=>setLastname(e.target.value)}
                value={lastname}
                required
                // {...register('name',{required:true})}
                ></input><br/>
            {errors.lastname?.type==='required' && <p className="text-danger" style={{color:'red'}}>*LastName is required</p>}  
    {/* <label htmlFor="usercategory">  Select your category</label>   : <input type="text"  id="usercat"  className="form-control"  
                onChange={(e)=>setUsercategory(e.target.value)}
                value={usercategory}
                required
                // {...register('name',{required:true})}
                ></input><br/> */}
              <label htmlFor="usercategory">  Select your category</label>   : <select value={usercategory} 
              onChange={(e)=>setUsercategory(e.target.value)} required>
            <option value="Customer">Customer</option>
            <option value="Tailor">Tailor</option>
            
          </select><br/><br/>
                {errors.usercategory?.type==='required' && <p className="text-danger" style={{color:'red'}}>*usercategory is required</p>}
    {/* <label htmlFor="gender">  select your gender</label>   : <input type="text"  id=""  className="form-control"  
                onChange={(e)=>setGender(e.target.value)}
                value={gender}
                required
                // {...register('name',{required:true})}
                ></input><br/> */}
                 <label htmlFor="gender"> select your gender<br/><rb/>
            <input
              type="radio"
              value="Male"
              onChange={(e)=>setGender(e.target.value)}
            />Male
          </label>
          <label> 
            <input
              type="radio"
              value="Female"
              onChange={(e)=>setGender(e.target.value)}
            />Female
          </label><br/><br/>
                {errors.firstname?.type==='required' && <p className="text-danger" style={{color:'red'}}>*FirstName is required</p>}
    <label htmlFor="dob">  Enter your DOB</label>   : <input type="date"  id="dob"  className="form-control"  
                onChange={(e)=>setDob(e.target.value)}
                value={dob}
                required
                // {...register('name',{required:true})}
                ></input><br/>
                {errors.dob?.type==='required' && <p className="text-danger" style={{color:'red'}}>*DOB is required</p>}
    <label htmlFor="pw">Enter your Password</label> : <input type="password"  id="pw"  className="form-control" 
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                required
                // {...register('pw',{required:true})}
                ></input><br/>
                {errors.pw?.type==='required' && <p className="text-danger" style={{color:'red'}}>*Password_ is required</p>}  
  
    <label htmlFor="contact">Enter your Contact Number :</label><input type="number"  id="contact"  className="form-control"
                onChange={(e)=>setContact(e.target.value)}
                value={contact}
                required
                // {...register('contact',{required:true})}
                ></input><br/>
                 {errors.contact?.type==='required' && <p className="text-danger" style={{color:'red'}}>*Contact_Number is required</p>}  
    <label htmlFor="email">Enter your Email Address</label>: <input  type="email" id="email" className="form-control"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                required
                // {...register('email',{required:true})}
                ></input><br/> 
                {errors.email?.type==='required' && <p className="text-danger" style={{color:'red'}}>*EmailAddress is required</p>}  
    <button type="submit" className="btn btn-success" style={{backgroundColor:'green',borderRadius:'30px',paddingLeft:'30px'}} onClick={post}>Sign Up</button><br/>
   </form><br/>
    
    <hr/>
    
   <hr/>
    </div>
  )

}
export default Register;
