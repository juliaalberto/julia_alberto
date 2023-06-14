import './WorkLeft.css';

import * as React from 'react';
import { Link } from "react-router-dom";


const WorkLeft = () =>{
    return(
             <div class="WorkLeftContainer">
                <h1> Work </h1>
                <p> As of <b>Summer 2022</b>, </p>
                <p> I am a <b> Website Manager </b> for <a href ="https://aifs.ucdavis.edu/"><b>AIFS - AI Institute for Food Systems</b> </a></p>
                <Link to="/resume"> <button class= "WorkButton"> <b>Download Resume </b></button></Link> 
                

            </div>
    );
}
 
export default WorkLeft;