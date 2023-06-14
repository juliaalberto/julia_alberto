import * as React from 'react';
import { Link } from "react-router-dom";
  
import './Footer.css'

import instagram from "./Socials/Instagram.svg";
import linkedin from "./Socials/LinkedIn.svg";
import gmail from "./Socials/Gmail.svg";
import coffee from "./Socials/Coffee.svg";


const Footer = () =>{
  return (
  <div class = "FooterContainer">
    <div class="FooterLeft">
        <h2>LETS CONNECT!</h2>
        <p>I am currently looking for work opportunites</p>
        <div class ="LinkContainer">
          <a href ="https://www.linkedin.com/in/julia-alberto-0804/"> <div class="Link"> <img src={instagram} alt="Instagram" /> </div> </a>
          <a href ="https://www.linkedin.com/in/julia-alberto-0804/"> <div class="Link"> <img src={linkedin} alt="Linkedin" /></div> </a>
          <div class="Link"> <img src={gmail} alt="Gmail" /></div>
          <div class="Link"> <img src={coffee} alt="Coffee Chat" /></div>
        </div>
    </div>
    <div class="FooterRight">
        <p> Made with 💜 and ☕️
        by Julia Elyssa Alberto </p>
    </div>
  </div>
  );
}
export default Footer;