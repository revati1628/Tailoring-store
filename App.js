
import './App.css';
import Register from './Store/Register';
import {BrowserRouter,Link,Switch,Route} from "react-router-dom";
import car from './images/car.jpeg';
// import Login from './Store/Login';
// import View from './Store/View';
import UserPortal from './Store/UserPortal';
import UserLogin from './Store/UserLogin';
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
        {/* <nav className="nav-item nav-aria-disabled" style={{color:'brown'}}>
        View The Registered Candidates List:  <Link className="disabled-link" to="/View">View</Link>
        </nav>
        <nav className="nav-item nav-aria-disabled" style={{color:'brown'}}>
        Welcome To Your Portal:  <Link className="disabled-link" to="/UserPortal">User Portal</Link>
        </nav> */}
      </ul>
      </nav>
      {/* switch */}
      <Switch>
        <Route path="/Register" component={Register}>
            <Register  />
        </Route>
        <Route path="/UserPortal" component={UserPortal}>
          {/* <UserPortal  /> */}
        </Route>
        <Route path="/UserLogin" component={UserLogin}>
          <UserLogin />
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
    </div>
  )
}
export default App;

