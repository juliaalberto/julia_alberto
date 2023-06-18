import './about.css';

import * as React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import { Fade as Hamburger } from 'hamburger-react'

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

const AboutPage = () =>{
    return(
             <div class="AboutContainer">
                <NavBar />
                <h1> ABOUT </h1>
                <p> testadshjlasfjhakla</p>
  
                <div class="topnav">

  <div id="myLinks">
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>

  <Hamburger onclick="myFunction()"/>
</div>
                <Footer />



            </div>

            
    );
}
 
export default AboutPage;
