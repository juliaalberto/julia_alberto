import * as React from 'react';

import './resume.css';

import NavBar from '../../components/NavBar/NavBar';
import pdf from "./../../components/Julia_Elyssa_Alberto_Resume.pdf"
import Footer from '../../components/Footer/Footer';


const ResumePage = () =>{
    return(
             <div class="ResumeContainer">
                <NavBar />
                <iframe src={pdf} class="pdf"></iframe>
                <Footer />
            </div>
    );
}
 
export default ResumePage;
