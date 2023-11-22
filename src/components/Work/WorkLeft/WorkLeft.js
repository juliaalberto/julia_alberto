import './WorkLeft.css';

import * as React from 'react';
import { Link } from "react-router-dom";

import { Fade } from 'react-reveal';

const WorkLeft = () =>{
    return(
             <div class="WorkLeftContainer">
                <div className='WorkLeftText'>
                <Fade bottom cascade>
                <h1> Work </h1>
                <h2> As of <b>Summer 2022,</b></h2>
                <h2> I am a<b> Website Manager </b>for <a target="_blank" href ="https://aifs.ucdavis.edu/"> AIFS - AI Institute for Food Systems </a></h2>
                </Fade>
                </div>
                <Link to="/resume"> <button class= "WorkButton"> <b>Download Resume </b></button></Link> 
                

            </div>
    );
}
 
export default WorkLeft;