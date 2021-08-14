import React from 'react'
import SolutionsForm from '../AdminComponents/SolutionsForm';
import './Portal.css';
 function PortalPage() {
    return (
    <div className="faq">
   <h1>Frequently asked Queries</h1>
 
<h4>What is mode of payment?</h4>
<select id = "dropdown">
    <option value="Answers">Answers</option>
    <option value="1">Payment is done through netbanking </option>
    <option value="2">Payment is done through COD</option>
    </select>
 
<h4>Do you have return policies?</h4>
<select id = "dropdown">
    <option value="Answers">Answers</option>
    <option value="1"> yes,we have return policy within 2weeks you have to return. </option>
    <option value="2">Return policy is accepted only within the given time.</option>
    </select>
 
<h4>What time will the goods be shipped? </h4>
<select id = "dropdown">
    <option value="Answers">Answers</option>
    <option value="1"> Our goods will be shipped on time</option>
    </select>
 
<h4>How standard are the products you are selling?</h4>
<select id = "dropdown">
    <option value="Answers">Answers</option>
    <option value="1">  Our products are best and we will use best fabrics. </option>
    </select>
 
<h4>Is the site safe?</h4>
<select id = "dropdown">
    <option value="Answers">Answers</option>
    <option value="1"> yes,it is 100percent safe.you can trust us. </option>
    </select>
 
<h4>What are your customer reviews look like?</h4>
<select id = "dropdown">
    <option value="Answers">Answers</option>
    <option value="1"> This is very important before making any payment online. You need to confirm that they have legitimate customer reviews. </option>
    </select>
 
<h4>How can i track my shipment?</h4>
<select id = "dropdown">
    <option value="Answers">Answers</option>
    <option value="1">  You can track your shipment by clicking on status of product. </option>
    </select>
 
<h4>Do you know anyone who has shopped from this site?</h4>
<select id = "dropdown">
    <option value="Answers">Answers</option>
    <option value="1"> You simply need to ask the people you know about how the site operates. Their honest opinion will help you ascertain the site’s quality.  </option>
    </select>
    <br></br>
    <br/>
    <SolutionsForm />
   </div>
 )
}
export default PortalPage;
