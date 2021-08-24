import React from 'react'
import Register from './Register';
import {BrowserRouter,Link,Switch,Route} from "react-router-dom";
//componets importing
import UserPage from "../CustomerComponents/UserPage";
import UserPortal from './UserPortal';
import UserLogin from './UserLogin';
import AdminPage from '../AdminComponents/AdminPage';
import HelpPage from "../UserComponents/HelpPage";
import AdminLogin from './adminLogin';
import IssuesNotification from '../AdminComponents/IsuuesNotification';
//import RequestsbyUser from "./AdminComponents/RequestsbyUser";
import PortalPage from "./PortalPage";
//import FeedbackForm from "../AdminComponents/FeedbackForm";
import SecurityQuestionForm from "./SecurityQuestionForm";
import ForgotPassword from "../UserComponents/ForgotPassword";
import ForgotId from "../UserComponents/ForgotId";
import PasswordResetPage from '../UserComponents/PasswordResetPage';
import SortByAdmin from '../AdminComponents/SortByAdmin';
import TailorPage from '../TailorComponents/TailorPage';
import UpdateDetails from "../TailorComponents/UpdateDetails";
import TailorSorting from '../TailorComponents/TailorSorting';
import UploadPatterns from '../TailorComponents/UploadPatterns';
//import OrderDetails from "../CustomerComponents/OrderDetails";
import Navbar from '../Styling/Navbar';
import Description from "../Styling/Description";
import Footer from "../Styling/Footer";
import SolutionsForm from '../AdminComponents/SolutionsForm'
import TailorSearch from '../CustomerComponents/TailorSearch';
import PlaceOrder from '../CustomerComponents/PlaceOrder';
import ViewOrders from '../AdminComponents/ViewOrders';
import CustomerOrders from '../AdminComponents/CustomerOrders';
import ViewOrder from "../TailorComponents/ViewOrder";
import CheckOrders from '../TailorComponents/CheckOrders';
import OrderBystatus from '../TailorComponents/OrderBystatus';
import PayBill from '../CustomerComponents/PayBill';
import MakePayment from '../CustomerComponents/MakePayment';
import PaymentForm from '../CustomerComponents/PaymentForm';
import AdminFeedback from '../AdminComponents/AdminFeedback';
import ViewByOrder from '../CustomerComponents/ViewByOrder';
import SuccessPay from '../CustomerComponents/SuccessPay';
import PaymentStatus from '../TailorComponents/PaymentStatus';
export default function Routing() {
    return (
       
    
    <BrowserRouter>
    
        <Navbar />
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
        <Route path="/AdminFeedback" component={AdminFeedback}></Route>
        <Route path="/SecurityQuestionForm" component={SecurityQuestionForm}></Route>
        <Route path="/ForgotId" component={ForgotId}></Route>
        <Route path="/ForgotPassword" component={ForgotPassword}></Route>
        <Route path="/PasswordResetPage/:userId" component={PasswordResetPage}></Route>
        <Route path="/SortByAdmin" component={SortByAdmin}></Route>
        <Route path="/TailorPage" component={TailorPage}></Route>
        <Route path="/UpdateDetails" component={UpdateDetails}></Route>
        <Route path="/TailorSorting" component={TailorSorting}></Route>
        <Route path="/UploadPatterns" component={UploadPatterns}></Route>
        <Route path="/CheckOrders" component={CheckOrders}></Route>
        <Route path="/SolutionsForm" component={SolutionsForm}></Route>
        <Route path="/TailorSearch" component={TailorSearch}></Route>
        <Route path="/PlaceOrder/:tailorid" component={PlaceOrder}></Route>
        <Route path="/ViewOrders" component={ViewOrders}></Route>
        <Route path="/ViewOrder" component={ViewOrder}></Route>
        <Route path="/CustomerOrders" component={CustomerOrders}></Route>
        <Route path="/OrderBystatus" component={OrderBystatus}></Route>
        <Route path="/PayBill" component={PayBill}></Route>
        <Route path="/MakePayment" component={MakePayment}></Route>
        <Route path="/PaymentForm" component={PaymentForm}></Route>
        <Route path="/ViewByOrder" component={ViewByOrder}></Route>
        <Route path="/SuccessPay" component={SuccessPay}></Route>
        <Route path="/PaymentStatus" component={PaymentStatus}></Route>
        
     
      
      

      </Switch>
      
      <Description />
      <Footer />
      
      </BrowserRouter>
     
  
       
    )
}

