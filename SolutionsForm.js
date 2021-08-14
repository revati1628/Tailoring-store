import React,{useState} from 'react'


export default function SolutionsForm() {
    const[qAnda,setqAnda]=useState({
        "questionId":"",
        "question":"",
        "answer":""
    })

    const handleSubmit=e=>{
        e.preventDefault();
        console.log(qAnda);

        fetch('http://localhost:8080/insertQA',{
            method:'POST',
            body:JSON.stringify(qAnda),
            headers:{'Content-Type':'application/json'},
        
        })

        .then(res=>res.json())
        .then(json=>setqAnda(json.qAnda))

       
    }

    return (
        <form onSubmit={handleSubmit} >
            
        <div className="mb-3">
          <label htmlFor="question id" className="form-label">Question ID</label>
          <input type="number" className="form-control" id="question id" 
          name="question id"onChange={(e)=>{setqAnda({...qAnda,questionId:e.target.value})}}/>
          
        </div>
        <div className="mb-3">
          <label htmlFor="question" className="form-label">Question</label>
          <input type="text" className="form-control" id="question" 
          name="question"onChange={(e)=>{setqAnda({...qAnda,question:e.target.value})}}/>
          
        </div>
        <div className="mb-3">
          <label htmlFor="answer" className="form-label">Answer</label>
          <input type="text" className="form-control"  id="answer" 
          aria-describedby="answer" name="answer" 
          onChange={(e)=>{setqAnda({...qAnda,answer:e.target.value})}} />
          
        </div>

        
      
        <button type="submit" className="btn btn-success"  
         
        >Submit</button>
         
        
      </form>

        
    )
}
