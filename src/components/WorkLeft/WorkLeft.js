import './WorkLeft.css';

import * as React from 'react';
import { Link } from "react-router-dom";


const WorkLeft = () =>{
    return(
             <div class="WorkLeftContainer">
                <div className='WorkLeftText'>
                <h1> Work </h1>
                <pre> As of <div className='bold'>Summer 2022</div>,</pre>
                <pre> I am a<b> Website Manager </b>for <a href ="https://aifs.ucdavis.edu/"> AIFS - AI Institute for Food Systems </a></pre>
                </div>
                <Link to="/resume"> <button class= "WorkButton"> <b>Download Resume </b></button></Link> 
                

            </div>
    );
}
 
export default WorkLeft;