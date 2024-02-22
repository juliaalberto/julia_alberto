import * as React from 'react';

import './resume.css';

import NavBar from '../../components/NavBar/NavBar';
import Julia_Elyssa_Alberto_Resume from "./../../components/Julia_Elyssa_Alberto_Resume.pdf"
import Footer from '../../components/Footer/Footer';

const ResumePage = () =>{

    return(
             <div class="ResumeContainer" id="main">
                <NavBar />
                <a href={Julia_Elyssa_Alberto_Resume} class= "ResumeButton" download="Julia_Elyssa_Alberto_Resume">  <b>Download Resume</b></a>
                <iframe src={Julia_Elyssa_Alberto_Resume} class="pdf"></iframe>
                <Footer />
            </div>
    );
}
 
export default ResumePage;
