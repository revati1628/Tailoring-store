import React,{useEffect, useState} from 'react'

import axios from 'axios'

export default function SortByAdmin() {

    const [categories,setCategories]=useState([])
    const [sorting,setSorting]=useState({
        "sortid":"",
        "category":"",
        "dresstype":""
    });

    const [options,setOptions]=useState([]);

    

    const MensWear=['select','Shirt','Pant','Kurta','Paijama','Coat','Blazer'];
    const BoysWear=['select','Shirt','Pant','Kurta-Paijama','Coat'];
    const WomensWear=['select','Blouse','Pant','Chudidar','Salwar-Suit','Coat','Blazer','Shirt','Lehanga-Choli','Anarkali'];
    const GirlsWear=['select','Frock','Chudidar','Salwar-Suit','Coat','Lehanga-Choli','Anarkali'];

    
        
            useEffect(()=>{

            if(sorting.category === "Men")
            {
                setOptions(MensWear)
                //console.log("sort",sorting.category);
            }
            else if(sorting.category === "Women")
            {
                setOptions(WomensWear)
            }
            else if(sorting.category === "Boys")
            {
                setOptions(BoysWear)
            }
            else{
                setOptions(GirlsWear)
            }
    
    
        },[sorting])

        const addCategory=(e)=>{
    
            e.preventDefault();
            //console.log("category by form",sorting.category);

            
            // fetch(`http://localhost:8080/getByCategories/${sorting.category}`)
            // .then(response =>JSON.stringify(response))
            // .then(res =>{
            //     setCategories(res)
            //     console.log("abc",res);
            //     let i=0;
            //   for(i;i<res.length;i++)
            //   {

               

                    fetch('http://localhost:8080/setSorting',{
                        method:'POST',
                        body:JSON.stringify(sorting),
                        headers:{'Content-Type':'application/json'},
               
                            })
           
                       .then(response=>response.json())
                       .then(res=>{
                           setSorting(res)
                          
                           alert("Added categories");
                      })
                      console.log(sorting);
                      
                }
       
       return (
        <div>
            <h1>Add category Form</h1>
            <form onSubmit={addCategory} >
            
        <div className="mb-3">
          <label htmlFor="sortid" className="form-label">Category ID</label>
          <input type="text" className="form-control" id="sortid" 
          name="sortid"onChange={(e)=>{setSorting({...sorting,sortid:e.target.value})}}/>
          
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select
          id="category" onChange={(e)=>{setSorting({...sorting,category:e.target.value})}}>
             <option>select category</option>
             <option value="Men">Men</option>
             <option value="Women">Women</option>
             <option value="Boys">Boys</option>
             <option value="Girls">Girls</option>
          </select>
          
        </div>
        <div className="mb-3">
          <label htmlFor="dresstype" className="form-label">dresstype</label>
          <select id="dresstype" 
          onChange={(e)=>{setSorting({...sorting,dresstype:e.target.value})}}>
              
              {
                  options.map((op,ind)=>{
                      return(
                          
                          <option value={op} key={ind}>{op}</option>
                      )
                  })
                 
                  
              }
          </select>
          
        </div>

        
      
        <button type="submit" className="btn btn-success"  
         
        >Submit</button>
         
        
      </form>
        </div>
    )
}
