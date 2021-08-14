
import './App.css';
import Register from './components/Register';
import {BrowserRouter,Link,Switch,Route} from "react-router-dom";

import UserPortal from './components/UserPortal';
import UserLogin from './components/UserLogin';
import AdminPage from './components/AdminPage';
import AdminLogin from './components/adminLogin';
function App() {
  return(
    <div>
    <h1 style={{color:'purple',height:'150px',textAlign:'center',backgroundColor:'grey'}}> Welcome To The Great Minds!<br/><p style={{color:'silver'}}>(Share your Startup idea and the best idea will be funded upto $1,00,000)</p> </h1>
    
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
        
       
      </ul>
      </nav>
     
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
      </Switch>
      </div>
    </BrowserRouter>
    </div>
  )
}
export default App;
