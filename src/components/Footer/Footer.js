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
        <h2>Lets Connect!</h2>
        <h3>I am currently looking for work opportunites</h3>
        <div class ="BottomLinkContainer">
          <a target="_blank" href ="https://www.instagram.com/juliaxalberto/?igshid=YTQwZjQ0NmI0OA%3D%3D"> <div class="SocialLink"> <img src={instagram} alt="Instagram" /> </div> </a>
          <a target="_blank" href ="https://www.linkedin.com/in/julia-alberto-0804/"> <div class="SocialLink"> <img src={linkedin} alt="Linkedin" /></div> </a>
          <a target="_blank" href ="mailto:julia.elyssa.alberto@gmail.com"><div class="SocialLink"> <img src={gmail} alt="Gmail" /></div> </a>
          <a target="_blank" href ="https://github.com/juliaalberto"> <div class="SocialLink"> <img src={github} alt="Github" /></div> </a>
          <a target="_blank" href ="https://calendly.com/juliaalberto/coffee-chat"><div class="SocialLink"> <img src={coffee} alt="Coffee Chat" /></div></a>
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