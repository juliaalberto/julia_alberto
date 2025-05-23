import * as React from 'react';
  
import './Footer.css'

import instagram from "./Socials/Instagram.svg";
import linkedin from "./Socials/LinkedIn.svg";
import gmail from "./Socials/Gmail.svg";
import chat from "./Socials/Chat.svg";
import github from "./Socials/GitHub.svg";

import { Fade } from 'react-awesome-reveal';

const Footer = () =>{
  return (
  <div className = "FooterContainer" id="footer">
    
    <div className="FooterLeft">
    <Fade bottom casscade>
        <h2>Let's Connect!</h2>
        <h3>I am currently looking for work opportunites</h3>
        </Fade>
        <div className ="BottomLinkContainer">
        <Fade bottom casscade>
          <a target="_blank" rel="noopener noreferrer" href ="https://www.instagram.com/juliaxalberto/?igshid=YTQwZjQ0NmI0OA%3D%3D"> <div className ="SocialLink"> <img src={instagram} alt="Instagram" /> </div> </a>
          <a target="_blank" rel="noopener noreferrer" href ="https://www.linkedin.com/in/julia-alberto-0804/"> <div className="SocialLink"> <img src={linkedin} alt="Linkedin" /></div> </a>
          <a target="_blank" rel="noopener noreferrer" href ="mailto:julia.elyssa.alberto@gmail.com"><div className="SocialLink"> <img src={gmail} alt="Gmail" /></div> </a>
          <a target="_blank" rel="noopener noreferrer" href ="https://github.com/juliaalberto"> <div className="SocialLink"> <img src={github} alt="Github" /></div> </a>
          <a target="_blank" rel="noopener noreferrer" href ="https://calendly.com/juliaalberto/"><div className="SocialLink"> <img src={chat} alt="Chat" /></div></a>
          </Fade>
        </div>
        
    </div>
    
    <div className="FooterRight">
      <Fade bottom casscade>
        <h3> Made with 💜 and ☕️ </h3>
        <h3> by Julia Elyssa Alberto </h3>
        </Fade>
    </div>
    
  </div>
  );
}
export default Footer;