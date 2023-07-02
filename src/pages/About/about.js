import './about.css';

import * as React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import AboutLeft from '../../components/About/AboutLeft/AboutLeft';
import AboutRight from '../../components/About/AboutRight/AboutRight';
import AboutExperiences from '../../components/About/AboutExperiences/AboutExperiences';

const AboutPage = () =>{
    return(
             <div class="AboutContainer">
                <NavBar />
                <div class = "AboutLandingContainer">
                    <AboutLeft/>
                    <AboutRight/>
                    
                </div>
                <AboutExperiences/>
                <Footer />
            </div>
    );
}
 
export default AboutPage;
