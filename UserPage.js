import React from 'react'
import { useHistory } from 'react-router-dom'

export default function UserPage() {

    let history=useHistory();
    const helpPage=()=>{
        history.push('HelpPage');
    }
    return (
        <div>
            <h1>User page</h1>
            <button className="btn btn-success" onClick={helpPage}>Help</button>
        </div>
    )
}
