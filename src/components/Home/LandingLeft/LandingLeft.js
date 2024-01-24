import './LandingLeft.css';

import * as React from 'react';
import { Link } from "react-router-dom";

import { Fade } from 'react-reveal';

const LandingLeft = () =>{
    return(
        
             <div class="LandingLeftContainer">
                <Fade bottom cascade>
                <h1> Julia Here! </h1>
                 <h1>Hello There! </h1>
                <h2> I am a <b>Front-End Developer</b> from the Bay Area</h2>
                <h2> I create <b> meaningful and accessible </b>applications and experiences </h2>
                </Fade>
                <Link to="/work" class= "LandingButton">  <b>View my work here! </b></Link>
                
                
            </div>
            
    );
}
 
export default LandingLeft;