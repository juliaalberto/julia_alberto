import './AboutRight.css';

import * as React from 'react';

// import Flower_Photo from "../AboutImages/Flower_Photo.jpg"

const AboutRight = () =>{
    return(
             <div className="AboutRightContainer">
                <div className= "AboutLeaf"> </div>
                <div className= "AboutCircle"></div>
                <div className= "AboutLeafDesign">
                {/* <img src={Flower_Photo} alt="FrontImage" /> */}
                <div className= "AboutLeafInsideDesign"></div>
            </div>
            </div>
    );
}
 
export default AboutRight;