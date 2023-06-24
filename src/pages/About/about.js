import './about.css';

import * as React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import AboutLeft from '../../components/AboutLeft/AboutLeft';
import AboutRight from '../../components/AboutRight/AboutRight';

const AboutPage = () =>{
    return(
             <div class="WorkContainer">
                <NavBar />
                <div class = "WorkLandingContainer">
                    <AboutLeft/>
                    <AboutRight/>
                </div>
                <Footer />
            </div>
    );
}
 
export default AboutPage;
