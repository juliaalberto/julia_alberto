import './LandingLeft.css';

import * as React from 'react';
import { Link } from "react-router-dom";


const LandingLeft = () =>{
    return(
             <div class="LandingLeftContainer">
                <h1> Julia Here! 
                 Hello There! 👋 </h1>
                <p> I am a <b>Front-End Developer</b> from the Bay Area</p>
                <p> I create <b> meaningful and accessible </b>applications and experiences </p>
                <Link to="/work"> <button class= "LandingButton"> <b>View my work here! </b></button></Link> 
                

            </div>
    );
}
 
export default LandingLeft;