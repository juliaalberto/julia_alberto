import './AboutLeft.css';

import * as React from 'react';
import { Link } from "react-router-dom";


const AboutLeft = () =>{
    return(
             <div class="AboutLeftContainer">
                <div className='AboutLeftText'>
                <h1> About </h1>
                <pre> I am an <b>Cognitive Science</b> student with a minor in <b>Computer Science</b> at <b>UC Davis</b>! </pre>

                <p>I aspire to be a <b> full-stack developer</b> designing accessible, interactive, and efficient web and mobile applications for all abilities and ages.</p>
                </div>
                <Link to="/resume"> <button class= "AboutButton"> <b>Download Resume </b></button></Link> 
                

            </div>
    );
}
 
export default AboutLeft;