
import { useState } from "react";
import { useHistory } from "react-router-dom";
import start from "../images/start.jpg";

function UserPortal(){
    console.log("user portal");
    let history=useHistory();
    const [ability,setAbility]=useState();
   const done=()=>{

        alert("thanks for submitting");
        setAbility(false);
        // history.push('/view');
   }
    return(
    
    <div style={{backgroundImage:`url(${start})`,textAlign:'center'}} >
    <h1 style={{color:'goldenrod',fontFamily:'sans-serif'}}>Welcome To Your Portal</h1><br/>
   <h2>Submit your idea in detailed description in the below box</h2><br/>
   <textarea style={{height:'200px',width:'500px'}} /><br/>
   <button type="submit" className="btn btn-super" style={{backgroundColor:'greenyellow',borderRadius:'30px'}} onClick={done}>Submit</button>
   </div>
    )

}
export default UserPortal;