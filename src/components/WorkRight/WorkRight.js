
import './WorkRight.css';

import image from "./../../components/IMG_8003.JPG";

import * as React from 'react';


const WorkRight = () =>{
    return(
             <div class="LandingRightContainer">
                <div class= "LeafDesign"></div>
                {/* <div class= "CircleText"></div> */}

                

                <div class= "CircleImage"><span class="wrap"><div class="typewrite" data-type='[ "🐕", "💜", "🧋", "💻", "🌱" ]'></div></span></div>
                
                {/* <div class= "LeafImage"></div> */}
                <img src={image} alt="Image" class= "LeafImage" />
            </div>
    );
}
 
export default WorkRight;