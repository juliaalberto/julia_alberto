import * as React from 'react';
import { Link } from "react-router-dom";
  
import './NavBar.css';

// import { Fade as Hamburger } from 'hamburger-react';

import Burger from "./Hamburger.js";
import logo from "./JA_logo.png";

import { useState } from 'react';

const NavBar= () =>{
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger =() =>{
      setHamburgerOpen(!hamburgerOpen)
  }
  
  // function myFunction() {
  // var x = document.getElementById("myLinks");
  // if (x.style.display === "block") {
  //   x.style.display = "none";
  // } else {
  //   x.style.display = "block";
  // }
  
  return (
  <div className = "NavBarContainer">
    <div className="NavBarLeft">
      <Link to="/"><img src={logo} alt="logo" className="logo"/> JULIA ELYSSA ALBERTO</Link>
    </div>
    <div className="NavBarRight">
      <div className ="linkscontainer">
        <Link to="/about">ABOUT</Link>
        <Link to="/work">WORK</Link>
        <Link to="/resume">RESUME</Link>
      </div>
      <div className="hamburger" onClick={toggleHamburger}>
        <Burger isOpen={hamburgerOpen}/>
      </div>
    </div>
  
    <style jsx>{`

    .NavBarContainer{
        display:flex;
        flex-direction: row;
        width:80vw;
        align-items: center;
        justify-content: space-between;
    
        font-family: 'Montserrat',sans-serif;
    }
    
    .NavBarLeft{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 300px;
    }
    
    .logo{
        height: 50px;
        width: 50px;
    }
    
    .NavBarRight{
        display: flex;
        float: right;
        flex-wrap: wrap;
        margin: 20px 0;
        padding:0 25px;
    }
    
    .linkscontainer a{
        padding: 0 10px;
    }
    
    a{
        display:flex;
        align-items: center; 
        gap: 10px; 
        font-weight: 700;
        text-decoration:none;
        color: #145858;
    }

    a:hover{
      color:#F7B318;
    }
    
    .hamburger{
        display:none;
    }
    
    .linkscontainer{
      display: flex;
      flex-direction: row;
      width: 300px;
      justify-content: space-between;
    }
    @media (max-width: 820px) {
      .NavBarRight{
        justify-content: flex-end;
        margin:0;
        padding:0;
        display:flex;
        flex-wrap:nowrap;

      }  
      
      .hamburger{
        display: block;
        z-index:10;
      }

      .NavBarRight .linkscontainer{
        display: ${hamburgerOpen ? 'flex' : 'none'};
        flex-direction: column;
        background-color: #FCF7F4;
        width: 80%;
      }

      .linkscontainer{
        position:absolute;
        width: 100px;
        margin-top: 50px;
        padding: 10px;
      }

      .linkscontainer a{
        padding: 10px 0;
        display:flex;
        flex-direction: column;
        align-items:flex-end;
        
      }
    }
    
    /* Phone  */
    @media (max-width: 414px) {
    
    }

    `}
    </style>

  </div>
  );
}
export default NavBar;