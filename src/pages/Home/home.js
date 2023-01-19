import './home.css';

import * as React from 'react';
import NavBar from '../../components/NavBar';

import LandingLeft from '../../components/LandingLeft/LandingLeft';
import LandingRight from '../../components/LandingRight/LandingRight';
import Footer from '../../components/Footer';

const HomePage = () =>{
    return(
             <div class="HomeContainer">
                <NavBar />
                <div class = "LandingContainer">
                    <LandingLeft/>
                    <LandingRight/>
                </div>
                <Footer />

            </div>
    );
}
 
export default HomePage;
