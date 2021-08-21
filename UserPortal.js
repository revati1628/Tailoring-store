
import { useState } from "react";
import { useHistory } from "react-router-dom";
import start from "../images/start.jpg";
import AdminFeedback from "./AdminFeedback";
import ImageUpload from "./ImageUpload";
import TailorSelect from "./TailorSelect";

function UserPortal(props){
    let trigger=props.setTrigger;
    const [buttonPopup,setButtonPopup]=useState(false);
    console.log("user portal");

    return(
    
    <div style={{backgroundImage:`url(${start})`,textAlign:'center'}} ><button type="button"  onClick={()=>setButtonPopup(true)}>Click to give us Feedback!</button>       

   <AdminFeedback trigger={buttonPopup} setTrigger={setButtonPopup}/>
   <TailorSelect />
   <ImageUpload />
   </div>
   
    )
    
}
export default UserPortal;
