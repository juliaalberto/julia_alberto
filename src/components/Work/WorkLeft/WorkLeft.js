import './WorkLeft.css';

import * as React from 'react';
import { Link } from "react-router-dom";


const WorkLeft = () =>{
    return(
             <div class="WorkLeftContainer">
                <div className='WorkLeftText'>
                <h1> Work </h1>
                <h2> As of <b>Summer 2022,</b></h2>
                <h2> I am a<b> Website Manager </b>for <a href ="https://aifs.ucdavis.edu/"> AIFS - AI Institute for Food Systems </a></h2>
                </div>
                <Link to="/resume"> <button class= "WorkButton"> <b>Download Resume </b></button></Link> 
                

            </div>
    );
}
 
export default WorkLeft;