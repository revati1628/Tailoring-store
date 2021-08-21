import React,{useState} from 'react'
import axios from 'axios'
export default function ImageUpload() {

  
  const [selectedFile, setSelectedFile] = useState({
    "tailorid":"",
    "file":null
  });
  const handleSubmit=(e)=>{
    e.preventDefault();
   
     const fd=new FormData();

     fd.append("file",selectedFile.file)
     fd.append("tailorid",selectedFile.tailorid)
    
     

      fetch(`http://localhost:8080/upload/${selectedFile.tailorid}`,{
        method: 'POST',
        
        body: fd
      })
       
        .then(data =>
          console.log(data)
          
        )
        
   }
  
  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data" id="formele">
        <input
          type="number"  id="tailorid"
          
          onChange={(e)=>{setSelectedFile({...selectedFile,tailorid:e.target.value})}}
        />

        <input
          type="file"  id="image"   accept="image/*" 
          
          
          onChange={(e)=>{setSelectedFile({...selectedFile,file:e.target.files[0]})}}
        /><br/>
       
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  )
}



