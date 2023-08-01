import './work.css';

import * as React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import WorkLeft from '../../components/Work/WorkLeft/WorkLeft';
import WorkRight from '../../components/Work/WorkRight/WorkRight';

import WorkExperience from '../../components/Work/WorkAccordion/WorkExperiences';

const WorkPage = () =>{
    return(
             <div class="WorkContainer">
                <NavBar />
                <div class = "WorkLandingContainer">
                    <WorkLeft/>
                    <WorkRight/>
                </div>

                <WorkExperience/>
                <Footer />
            </div>
    );
}
 
export default WorkPage;
