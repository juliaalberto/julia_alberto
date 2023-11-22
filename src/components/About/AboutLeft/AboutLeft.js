import './AboutLeft.css';

import * as React from 'react';

import { Fade } from 'react-reveal';

const AboutLeft = () =>{
    return(
             <div class="AboutLeftContainer">
                <div className='AboutLeftText'>
                <Fade bottom cascade>
                <h1> About </h1>
                <h2> I am an <b>Cognitive Science</b> student with a minor in <b>Computer Science</b> at <b>UC Davis</b> </h2>

                <h2>I aspire to be a <b> full-stack developer</b> designing accessible, interactive, and efficient web and mobile applications for all abilities and ages</h2>
                </Fade>
                </div> 
                

            </div>
    );
}
 
export default AboutLeft;