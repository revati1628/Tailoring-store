import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';

export default function SecurityQuestionForm() {


    let history=useHistory();
    const[security,setSecurity]=useState({
        "userId":"",
	    "securityquestion1":"",
        "securityanswer1":"",
        "securityquestion2":"",
        "securityanswer2":"",
        "securityquestion3":"",
        "securityanswer3":"",
        "contact":""
	
    })

    const handleSubmit=(e)=>{
        e.preventDefault();

        fetch('http://localhost:8080/insertSecurityQuestions',{
            method:'POST',
            body:JSON.stringify(security),
            headers:{'Content-Type':'application/json'},
        
        })

        .then(res=>res.json())
        .then(json=>setSecurity(json.security))

        alert("Answers submitted Successfully");
        history.push('Register');

       
    }

    
    return (
        <form onSubmit={handleSubmit}
         style={{border:'1px solid blue',"padding":3,"width":500,"paddingLeft":30,fontFamily:'sans-serif',color:'darkgreen',alignItems:"center"}} >

            
         <div className="mb-3">
          <label htmlFor="userId" className="form-label">user Id</label>
          <input type="number" className="form-control"  id="userId" 
          aria-describedby="userId" name="userId" 
          onChange={(e)=>{setSecurity({...security,userId:e.target.value})}} required />
          
        </div>

        {/* question 1     */}
        <div className="mb-3">
          <label htmlFor="question1" className="form-label">Security Question 1</label>
          <select onChange={(e)=>{setSecurity({...security,securityquestion1:e.target.value})}}
           name="question1" required>
          <option value="select question">select question</option>
            <option value="Who is your favourite hero">Who is your favourite hero</option>
            <option value="What is your favourite pet">What is your favourite pet</option>
            <option value="What is your favourite book">What is your favourite book</option>
          </select>
         </div> 


         <div className="mb-3">
          <label htmlFor="answer1" className="form-label">Answer</label>
          <input type="text" className="form-control"  id="answer1" 
          aria-describedby="answer1" name="answer1" 
          onChange={(e)=>{setSecurity({...security,securityanswer1:e.target.value})}} required />
          <div id="answer1" className="form-text">We'll never share your answer with anyone else.</div>
        </div>


         {/* question 2     */}
         <div className="mb-3">
          <label htmlFor="question2" className="form-label">Security Question 2</label>
          <select onChange={(e)=>{setSecurity({...security,securityquestion2:e.target.value})}} 
          name="question2" required>
          <option value="select question">select question</option>
          <option value="Who is your favourite hero">Who is your favourite hero</option>
            <option value="What is your favourite pet">What is your favourite pet</option>
            <option value="What is your favourite book">What is your favourite book</option>
          </select>
         </div> 

         <div className="mb-3">
          <label htmlFor="answer2" className="form-label">Answer</label>
          <input type="text" className="form-control"  id="answer2" 
          aria-describedby="answer2" name="answer2" 
          onChange={(e)=>{setSecurity({...security,securityanswer2:e.target.value})}} required />
          <div id="answer2" className="form-text">We'll never share your answer with anyone else.</div>
        </div>

         {/* question 3     */}
         <div className="mb-3">
          <label htmlFor="question3" className="form-label">Security Question 3</label>
          <select onChange={(e)=>{setSecurity({...security,securityquestion3:e.target.value})}}
           name="question3" required>
          <option value="select question">select question</option>
          <option value="Who is your favourite hero">Who is your favourite hero</option>
            <option value="What is your favourite pet">What is your favourite pet</option>
            <option value="What is your favourite book">What is your favourite book</option>
         </select>
         </div> 
          
        <div className="mb-3">
          <label htmlFor="answer3" className="form-label">Answer</label>
          <input type="text" className="form-control"  id="answer3" 
          aria-describedby="answer3" name="answer3" 
          onChange={(e)=>{setSecurity({...security,securityanswer3:e.target.value})}} required />
          <div id="answer3" className="form-text">We'll never share your answer with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="contact" className="form-label">contact</label>
          <input type="number" className="form-control"  id="contact" 
          aria-describedby="contact" name="contact" 
          onChange={(e)=>{setSecurity({...security,contact:e.target.value})}} required />
          
        </div>

        
      
        <button type="submit" className="btn btn-success"  
         
        >Submit</button>
         
        
      </form>
    )
}