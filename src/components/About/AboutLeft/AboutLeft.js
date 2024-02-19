import './AboutLeft.css';

import * as React from 'react';

import { Fade } from 'react-reveal';

const AboutLeft = () =>{
    return(
             <div class="AboutLeftContainer">
                <div className='AboutLeftText'>
                <Fade bottom cascade>
                <h1> About </h1>
                <h2> I am an student at <b>UC Davis</b> majoring in <b>Cognitive Science</b> with a <b>Computational Emphasis</b> and minoring in <b>Computer Science</b> and <b>Education</b></h2>

                <h2>
                    I continuously orient myself to promote <b>social and educational</b> change, awareness, and acceptance through different <b>accessible and interactive</b> experiences and applications for all abilities and ages
                </h2>    

                <h2>
                    I aspire to <b>educate children</b> in reaching their full potential and to be a freelance <b> full-stack developer</b></h2>
                </Fade>
                </div> 
                

            </div>
    );
}
 
export default AboutLeft;