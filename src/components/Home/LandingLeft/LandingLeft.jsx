import './LandingLeft.css';

import * as React from 'react';
import { Link } from "react-router-dom";

import { Fade } from 'react-awesome-reveal';

const LandingLeft = () =>{
    return(
        
             <div className="LandingLeftContainer" id="main">
                <Fade cascade>
                <h1> Julia Here! </h1>
                 <h1>Hello There! </h1>
                <h2> I am from the <b>Bay Area</b> </h2>
                <h2> I create <b> meaningful and accessible </b>applications and experiences </h2>
                </Fade>
                <Link to="/work" className= "LandingButton">  <b>View my work here! </b></Link>
            </div>
            
    );
}
 
export default LandingLeft;