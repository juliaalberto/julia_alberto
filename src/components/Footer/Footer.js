import * as React from 'react';
  
import './Footer.css'

import instagram from "./Socials/Instagram.svg";
import linkedin from "./Socials/LinkedIn.svg";
import gmail from "./Socials/Gmail.svg";
import coffee from "./Socials/Coffee.svg";
import github from "./Socials/GitHub.svg";

const Footer = () =>{
  return (
  <div class = "FooterContainer">
    <div class="FooterLeft">
        <h2>LETS CONNECT!</h2>
        <h3>I am currently looking for work opportunites</h3>
        <div class ="BottomLinkContainer">
          <a href ="https://www.linkedin.com/in/julia-alberto-0804/"> <div class="SocialLink"> <img src={instagram} alt="Instagram" /> </div> </a>
          <a href ="https://www.linkedin.com/in/julia-alberto-0804/"> <div class="SocialLink"> <img src={linkedin} alt="Linkedin" /></div> </a>
          <a href ="mailto:julia.elyssa.alberto@gmail.com"><div class="SocialLink"> <img src={gmail} alt="Gmail" /></div> </a>
          <a href ="https://github.com/juliaalberto"> <div class="SocialLink"> <img src={github} alt="Github" /></div> </a>
          <div class="SocialLink"> <img src={coffee} alt="Coffee Chat" /></div>
        </div>
    </div>
    <div class="FooterRight">
        <h3> Made with 💜 and ☕️ </h3>
        <h3> by Julia Elyssa Alberto </h3>
    </div>
  </div>
  );
}
export default Footer;