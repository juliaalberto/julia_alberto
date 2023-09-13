import './about.css';

import * as React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import AboutLeft from '../../components/About/AboutLeft/AboutLeft';
import AboutRight from '../../components/About/AboutRight/AboutRight';

import AboutExperienceContainer from '../../components/About/AboutExperienceContainer/AboutExperienceContainer';
const AboutPage = () =>{
    return(
             <div class="AboutContainer">
                <NavBar />
                <div class = "AboutLandingContainer">
                    <AboutLeft/>
                    <AboutRight/>
                    
                </div>
                <AboutExperienceContainer/>
                <Footer />
            </div>
    );
}
 
export default AboutPage;
