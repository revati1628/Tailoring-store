import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'

export default function ForgotId() {

    let history=useHistory();
    const[responses,setResponses]=useState({})
    const [data,setData]=useState({
        "contact":"",
        "securityanswer1":"",
        "securityanswer2":"",
        "securityanswer3":""
    })

    const handleValidation=(e)=>{

        e.preventDefault();
        console.log("from form",data);

        fetch(`http://localhost:8080/getQuestionsByContact/${data.contact}`)
        .then((response) => response.json())
        .then((res) =>{ 
          
          console.log("From db",res);
          setResponses(res);
         

          if(((data.securityanswer1 === res.securityanswer1) && (data.securityanswer2 === res.securityanswer2) &&
           (data.securityanswer3 === res.securityanswer3)) && (data.contact === res.contact) )
         {
          
              alert(`Your USER ID is : ${res.userId}`)
              
               return(
                history.push('UserLogin')
                )
            
              
            
             
         }
         else{
             alert("not done")
             
         }
          
         });

    }

    return (
        <div>
            <h1>ForgotId</h1>
            <form onSubmit={handleValidation}
         style={{border:'1px solid blue',"padding":3,"width":500,"paddingLeft":30,fontFamily:'sans-serif',color:'darkgreen',alignItems:"center"}} >

            
         <div className="mb-3">
          <label htmlFor="contact" className="form-label">contact</label>
          <input type="number" className="form-control"  id="contact" 
          aria-describedby="contact" name="contact" 
          onChange={(e)=>{setData({...data,contact:e.target.value})}} required />
          
        </div>

        {/* question 1     */}
        <div className="mb-3">
          <label htmlFor="question1" className="form-label">Security Question 1</label>
           <p id="question1">Who is your favourite hero ?</p>
          
         </div> 


         <div className="mb-3">
          <label htmlFor="answer1" className="form-label">Answer</label>
          <input type="text" className="form-control"  id="answer1" 
          aria-describedby="answer1" name="answer1" 
          onChange={(e)=>{setData({...data,securityanswer1:e.target.value})}} required />
          <div id="answer1" className="form-text">We'll never share your answer with anyone else.</div>
        </div>


         {/* question 2     */}
         <div className="mb-3">
          <label htmlFor="question2" className="form-label">Security Question 2</label>
          <p id="question2">What is your favourite pet ?</p>
           
         </div> 

         <div className="mb-3">
          <label htmlFor="answer2" className="form-label">Answer</label>
          <input type="text" className="form-control"  id="answer2" 
          aria-describedby="answer2" name="answer2" 
          onChange={(e)=>{setData({...data,securityanswer2:e.target.value})}} required />
          <div id="answer2" className="form-text">We'll never share your answer with anyone else.</div>
        </div>

         {/* question 3     */}
         <div className="mb-3">
          <label htmlFor="question3" className="form-label">Security Question 3</label>
          
            <p id="question3">What is your favourite book ?</p>
        
         </div> 
          
        <div className="mb-3">
          <label htmlFor="answer3" className="form-label">Answer</label>
          <input type="text" className="form-control"  id="answer3" 
          aria-describedby="answer3" name="answer3" 
          onChange={(e)=>{setData({...data,securityanswer3:e.target.value})}} required />
          <div id="answer3" className="form-text">We'll never share your answer with anyone else.</div>
        </div>

        

        
      
        <button type="submit" className="btn btn-success"  
         
        >Submit</button>
         
        
      </form>
        </div>
    )
}

