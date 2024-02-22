import * as React from 'react';
import { Link } from "react-router-dom";
  
import './NavBar.css';

import Burger from "./Hamburger.js";
import logo from "./JA_logo.png";

import { useState } from 'react';

const NavBar= () =>{
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger =() =>{
      setHamburgerOpen(!hamburgerOpen)
  }
  
  
  return (
  <div className = "NavBarContainer">

    <div class="skip-to-content-links"> 
      Skip to <a href="#main">Content</a> or <a href="#footer"> Footer</a> 
    </div>

    <div className="NavBarLeft" >
      <Link to="/"><img src={logo} alt="logo" className="logo" /> 
      <h1 className= "NavBarTitle" >JULIA ELYSSA ALBERTO</h1>
      </Link>
    </div>
    <div className="NavBarRight">
      <div className ="toplinkscontainer">
        <Link to="/about">ABOUT</Link>
        <Link to="/work">WORK</Link>
        <Link to="/resume">RESUME</Link>
      </div>
      <div className="hamburger" onClick={toggleHamburger}>
        <Burger isOpen={hamburgerOpen}/>
      </div>
    </div>
  
    <style jsx>{`

    @media (max-width: 820px) {

      .NavBarRight .toplinkscontainer{
        display: ${hamburgerOpen ? 'flex' : 'none'};
        flex-direction: column;
        background-color: #FCF7F4;
        width: 80%;
      }
    `}
    </style>

    
  </div>
  );
}
export default NavBar;