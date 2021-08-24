import React,{useState,useEffect} from 'react'
import { Table } from 'react-bootstrap';
function ReviewFeedback()
{
    
    const [list,setList]=useState([])
    const [data,setData]= useState({
        "orderid":"",
        "tailorid": "" ,
        "improve": "",
        "likes": "",
        "rate": ""
        
    })
    
    
    useEffect(()=> {
        fetch("http://localhost:8090/feedback")
      .then(res => res.json())
      .then(res=> {console.log(res);setList(res);});
    },[]);
                            return(
                                <Table style={{marginTop:'20px',border:'solid black'}}>
                                    
                                <thead>
                                
                                    <tr>
                                    
                                    <th>order id</th>
                                    
                                    <th>tailor id</th>
                                    
                                    <th>improve</th>
                                   
                                    <th>likes</th>

                                    <th>rate</th>
                                    </tr>
                                    
                                </thead>
                               
                                <tbody>
                                {
                                    list.map((val,ind)=>{
                                        return(
                                            <tr key={ind}>
                                                <td>{val.orderid}</td>
                                                <td>{val.tailorid}</td>
                                                <td>{val.improve}</td>
                                                <td>{val.likes}</td>
                                                <td>{val.rate}</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                                </Table> 
                                )
            
}

export default ReviewFeedback;