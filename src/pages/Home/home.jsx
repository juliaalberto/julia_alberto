import './home.css';

import * as React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import LandingLeft from '../../components/Home/LandingLeft/LandingLeft';
import LandingRight from '../../components/Home/LandingRight/LandingRight';


const HomePage = () =>{
    return(
             <div className="HomeContainer">
                <NavBar />
                <div className = "LandingContainer">
                    <LandingLeft/>
                    <LandingRight/>
                </div>
                <Footer />

            </div>
    );
}
 
export default HomePage;
