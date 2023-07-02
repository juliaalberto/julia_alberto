import './home.css';

import * as React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import LandingLeft from '../../components/Home/LandingLeft/LandingLeft';
import LandingRight from '../../components/Home/LandingRight/LandingRight';


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
