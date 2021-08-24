import React,{useState,useEffect} from 'react'
import OrderDetails from './OrderDetails'
import TailorDetails from './TailorDetails'
import {useHistory} from "react-router-dom";

export default function TailorSearch() {

    let history=useHistory();
    const[search,setSearch]=useState({
        "address":"",
	    "courieroption":"",
        "category":"",
        "dresstype":""
    })

    const [dressTypes,setDressTypes]=useState([])
    const [result,setResult]=useState([])
    const [reviews,setReviws]=useState("")
    useEffect(() => {
        fetch("http://localhost:8080/getDressType")
       .then(response =>response.json())
        .then(res =>{
            setDressTypes(res)
            
            
        })
    }, [])

    const back=()=>{
        history.push('TailorPage')
    }

    
   

    const HandleSearch=(e)=>{

        e.preventDefault();

       
            fetch(`http://localhost:8080/searchtailor/${search.address}/${search.category}/${search.dresstype}/${search.courieroption}`)
            .then(response =>response.json())
            .then(res =>{
                //setSearch(res)
                setResult(res)
                alert("searched")
                console.log("search",res);
            })
             
}
    return (
        <div style={{alignItems:"center",paddingLeft:"400px",paddingRight:"40px"}}>
              <button type="button" className="btn btn-outline-primary" style={{float:"right",paddingRight:"10px",marginTop:'10px'}}
            
            onClick={back}>Back</button>
            


            <form onSubmit={HandleSearch}
         style={{"width":500,fontFamily:'sans-serif',color:'black'}} >
              <h3  style={{color:'black',textAlign:'center',marginBottom:'20px',marginTop:'20px'}}>SEARCH FOR TAILOR</h3>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea type="text" className="form-control"  id="address" 
          aria-describedby="address" name="address" 
          onChange={(e)=>{setSearch({...search,address:e.target.value})}} required />
         </div>

        

         

         

         <label htmlFor="cat">Click to Select category</label><select type="text" id="cat" className="form-control" 
                        onChange={(e)=>{setSearch({...search,category:e.target.value})}}
                        
                        required

                        
                        >
                            <option>Select</option>
                            
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Girls">Girls</option>
                            <option value="Boys">Boys</option>
                        </select><br/>
                    <label htmlFor="dt">Click to Select Dress Type</label><select type="text" className="form-control" id="dt" 
                        onChange={(e)=>{setSearch({...search,dresstype:e.target.value})}}
                        
                        required >
                       

                        
                           {
                               dressTypes.map((dress,ind)=>{
                                   return (<option key={ind}>{dress}</option>)
                               })
                           }                      
                        </select><br/>

        

         <div className="mb-3">
          <label htmlFor="courieroption" className="form-label">courier option</label>
          <select className="form-control"  id="courieroption" 
          aria-describedby="courieroption" name="courieroption" 
          onChange={(e)=>{setSearch({...search,courieroption:e.target.value})}} required>
              <option value="select">select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
          </select>

         </div>

        
        
      
        <button type="submit" className="btn btn-info"  
         
        >Search</button>

       </form><br/>
       <h1 >Search Results</h1>
       
           {
               
           result.map((data,ind)=>{
            
            const order=()=>{
                history.push(`PlaceOrder/${data.tailorid}`)
            }

               return(
                   <button type="button" key={ind} className="btn btn-outline-warning" onClick={order}  >
                       {data.tailorid}
                       
                   </button>
                   
               )
           })
        }
        <TailorDetails result={result} />
       
       </div>
    )
}
