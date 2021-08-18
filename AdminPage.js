import React from 'react'
import IssuesNotification from './IsuuesNotification'
import SortByAdmin from './SortByAdmin'
import {Link,useHistory} from "react-router-dom";
export default function AdminPage() {

    let history=useHistory();
    return (
        <div>
            <h1>Admin page</h1>
            <IssuesNotification />
            <SortByAdmin />
        </div>
    )
   
}
