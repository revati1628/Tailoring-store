import React , { useState }  from 'react';
import Pictures from '../components/Pictures';
import IssuesNotification from '../components/IssuesNotification';
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Dropdown} from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {AiFillDatabase } from "react-icons/ai";
import '../Nav.css';
//import SideNav from '../components/SideNav';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from '../Navbar/NavbarElements';


const Navbar = () => {
return (
    <>
   
    <Nav>
      <Bars />
        <NavMenu>
        
         <img src="https://tailorjunction.com/wp-content/uploads/2018/03/logo.png" height="80px"></img>   
        <h1 style={{color:'white',fontStyle:'initial'}}>TAILOR JUNCTION</h1>
        
        
        <NavLink to='/UserLogin' activeStyle>UserLogin</NavLink> 
         <NavLink to='/AdminLogin' activeStyle>AdminLogin</NavLink>
        <NavLink to='/HelpPage' activeStyle>Help</NavLink>
        </NavMenu>

        {/* <NavBtn>
        <NavBtnLink to='/UserLogin'>UserLogin</NavBtnLink>
        </NavBtn>
        <NavBtn>
        <NavBtnLink to='/AdminLogin'>AdminLogin</NavBtnLink>
        </NavBtn>
        <NavBtn>
        <NavBtnLink to='/HelpPage'>Help</NavBtnLink>
        </NavBtn> */}

        <Dropdown style={{marginTop:'20px',background: '#808080',color: '#000000',marginBottom:'20px'}}>
        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
          Click
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1"><NavLink to='/Register' activeStyle>Register</NavLink></Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

          </Nav>
          {Pictures}
          
          </>
      );
      }

export default Navbar;


