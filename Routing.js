import React from 'react'
import Register from './Register';
import {BrowserRouter,Link,Switch,Route} from "react-router-dom";
//componets importing
import UserPage from "../UserComponents/UserPage";
import UserPortal from './UserPortal';
import UserLogin from './UserLogin';
import AdminPage from '../AdminComponents/AdminPage';
import HelpPage from "../UserComponents/HelpPage";
import AdminLogin from './adminLogin';
import IssuesNotification from './IsuuesNotification';
//import RequestsbyUser from "./AdminComponents/RequestsbyUser";
import PortalPage from "./PortalPage";
import FeedbackForm from "../AdminComponents/FeedbackForm";
import SecurityQuestionForm from "./SecurityQuestionForm";
import ForgotPassword from "../UserComponents/ForgotPassword";
import ForgotId from "../UserComponents/ForgotId";
import PasswordResetPage from '../UserComponents/PasswordResetPage';

export default function Routing() {
    return (
        <div>
            <h1 style={{color:'purple',height:'150px',textAlign:'center',backgroundColor:'grey'}}>Welcome to TailorPlaza<br/><p style={{color:'silver'}}></p> 
    
    </h1>
    
    <BrowserRouter>
    <div >
      <nav className="d-flex">
      <ul className="nav bg-light justify-content-center" style={{marginLeft:'200px'}}>
        <nav className="nav-item" style={{color:'brown'}}>
        Click here to register in the contest  :  <Link className="nav-link" to="/Register">Registration Portal</Link>
        <p style={{color:'skyblue'}}><marquee>***After registration, you can login into your portal and also view the list of teams registered for the contest !***</marquee></p>
        </nav>
        <nav className="nav-item "  style={{color:'brown'}}>
         Already a user :  <Link className="nav-link" to="/UserLogin" >UserLogin</Link>
        </nav>
        <nav className="nav-item "  style={{color:'brown'}}>
         <Link className="nav-link" to="/AdminLogin" >AdminLogin</Link>
        </nav>

        <nav className="nav-item "  style={{color:'brown'}}>
         <Link className="nav-link" to="/PortalPage" >Portal To Contact</Link>
        </nav>
        
        
       
      </ul>
      </nav>
      <IssuesNotification />

      
     
      <Switch>
        <Route path="/Register" component={Register}>
            <Register  />
        </Route>
        <Route path="/UserPortal" component={UserPortal}>
         
        </Route>
        <Route path="/UserLogin" component={UserLogin}>
          <UserLogin />
        </Route>
        <Route path="/AdminPage" component={AdminPage}>
         
        </Route>
        <Route path="/AdminLogin" component={AdminLogin}>
        <AdminLogin />
        </Route>

        <Route path="/PortalPage" component={PortalPage}>
        <PortalPage />
        </Route>

        <Route path="/UserPage" component={UserPage}></Route>

        <Route path="/HelpPage" component={HelpPage}></Route>
        <Route path="/FeedbackForm" component={FeedbackForm}></Route>
        <Route path="/SecurityQuestionForm" component={SecurityQuestionForm}></Route>
        <Route path="/ForgotId" component={ForgotId}></Route>
        <Route path="/ForgotPassword" component={ForgotPassword}></Route>
        <Route path="/PasswordResetPage/:userId" component={PasswordResetPage}></Route>

        

      </Switch>
      </div>
    </BrowserRouter>
        </div>
    )
}
