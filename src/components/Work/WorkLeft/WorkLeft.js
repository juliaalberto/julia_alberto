import './WorkLeft.css';

import * as React from 'react';
import { Link } from "react-router-dom";

import { Fade } from 'react-awesome-reveal';

const WorkLeft = () =>{
    return(
             <div class="WorkLeftContainer" id="main">
                <div className='WorkLeftText'>
                <Fade cascade>
                <h1> Work </h1>
                <h2> As of <b>Winter 2025</b>,</h2>
                <h2> I <b> graduated from UC Davis </b> and taking a break, but I am <b> open to new opportunites </b> </h2>
                </Fade>
                </div>
                <Link to="/resume" class= "WorkButton"> <b>Download Resume </b></Link>
                

            </div>
    );
}
 
export default WorkLeft;