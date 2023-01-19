import * as React from 'react';
import { Link } from "react-router-dom";
  
import './Footer.css'

const Footer = () =>{
  return (
  <div class = "FooterContainer">
    <div class="FooterLeft">
        <h2>LETS CONNECT!</h2>
        <p>I am currently looking for work opportunites</p>
        <div class ="LinkContainer">
            <div class="Link"></div>
            <div class="Link"></div>
            <div class="Link"></div>
            <div class="Link"></div>
        </div>
    </div>
    <div class="FooterRight">
        <p> Made with Love and Caffeine <br></br>
        @ Julia Alberto </p>
    </div>
  </div>
  );
}
export default Footer;