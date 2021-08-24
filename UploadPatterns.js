import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
export default function UploadPatterns() {

  
  const [selectedFile, setSelectedFile] = useState({
    "tailorid":"",
    "cost":"",
    "file":null
  });
  let history=useHistory();
  const back=()=>{
    history.push('TailorPage')
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
   
     const fd=new FormData();

     fd.append("file",selectedFile.file)
     fd.append("tailorid",selectedFile.tailorid)
     fd.append("cost",selectedFile.cost)
    
     

      fetch(`http://localhost:8090/upload/${selectedFile.tailorid}`,{
        method: 'POST',
        
        body: fd
      })
       
        .then(data =>{
          console.log(data)
          alert("pattern uploaded successfully")
        })
        
   }
  
  return (
    <div>
       <button type="button" className="btn btn-outline-primary" style={{float:"right",paddingRight:"10px",marginTop:'10px'}}
            onClick={back}>Back</button><br/>
     <form onSubmit={handleSubmit} encType="multipart/form-data" id="formele" style={{marginLeft:'450px',}}>
     <h3  style={{color:'black',marginBottom:'20px'}}>PLEASE FILL THE DETAILS</h3>
        <b>Enter tailor id</b> <br/> <input
          type="number"  id="tailorid"
          
          onChange={(e)=>{setSelectedFile({...selectedFile,tailorid:e.target.value})}} style={{marginTop:'20px'}}
        /><br/>

       <b>Enter cost</b> <br/><input
          type="number"  id="cost"
          
          onChange={(e)=>{setSelectedFile({...selectedFile,cost:e.target.value})}}  style={{marginTop:'20px'}}
        /><br/>

        <b>File</b> <input
          type="file"  id="image"   accept="image/*" 
          
          
          onChange={(e)=>{setSelectedFile({...selectedFile,file:e.target.files[0]})}}  style={{marginTop:'20px'}}
        /><br/>
       
       <button type="submit" className="btn btn-success" style={{marginTop:'20px'}}>Submit</button>
      </form>
    </div>
  )
}


