import * as React from 'react';
import { Link } from "react-router-dom";
  
import './NavBar.css'

const NavBar= () =>{
  return (
  <div class = "NavBarContainer">
    <div class="NavBarLeft">
      <div class="logo"></div>
      <Link to="/">JULIA ELYSSA ALBERTO</Link>
    </div>
    <div class="NavBarRight">
      <Link to="/about">ABOUT</Link>
      <Link to="/work">WORK</Link>
      <Link to="/resume">RESUME</Link>
    </div>
  </div>
  );
}
export default NavBar;