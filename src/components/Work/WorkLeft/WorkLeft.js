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
                <h2> As of <b>Summer 2022</b>,</h2>
                <h2> I am a<b> Website Developer </b>for <a target="_blank" rel="noopener noreferrer" href ="https://aifs.ucdavis.edu/">AIFS - AI Institute for Next Generation Food Systems</a></h2>
                </Fade>
                </div>
                <Link to="/resume" class= "WorkButton"> <b>Download Resume </b></Link>
                

            </div>
    );
}
 
export default WorkLeft;