import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
export default function ImageUpload() {

  
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
    
     

      fetch(`http://localhost:8080/upload/${selectedFile.tailorid}`,{
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
       <button type="button" className="btn btn-outline-primary" style={{float:"right",paddingRight:"10px"}}
            onClick={back}>Back</button>
     <form onSubmit={handleSubmit} encType="multipart/form-data" id="formele" style={{marginTop:'20px',marginLeft:'450px'}}>
        Enter tailor id : <input
          type="number"  id="tailorid"
          
          onChange={(e)=>{setSelectedFile({...selectedFile,tailorid:e.target.value})}}
        /><br/>

       Enter cost : <input
          type="number"  id="cost"
          
          onChange={(e)=>{setSelectedFile({...selectedFile,cost:e.target.value})}}
        /><br/>

        File : <input
          type="file"  id="image"   accept="image/*" 
          
          
          onChange={(e)=>{setSelectedFile({...selectedFile,file:e.target.files[0]})}}
        /><br/>
       
       <button type="submit" className="btn btn-success" style={{marginTop:'20px'}}>Submit</button>
      </form>
    </div>
  )
}



