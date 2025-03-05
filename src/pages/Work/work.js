import './work.css';

import * as React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import WorkLeft from '../../components/Work/WorkLeft/WorkLeft';
import WorkRight from '../../components/Work/WorkRight/WorkRight';

import WorkExperienceCards from '../../components/Work/WorkCards/WorkCardContainer.js';
import WorkAccordion from '../../components/Work/WorkAccordion/WorkAccordion.js';

import { WorkModalContainer } from '../../components/Work/WorkModals/WorkModalContainer.js';

const WorkPage = () =>{
    return(
             <div className="WorkContainer">
                <NavBar />
                <div className = "WorkLandingContainer">
                    <WorkLeft/>
                    <WorkRight/>
                </div>
                <h1 className='WorkExperiencesTitle'> Experience </h1>
                <div className = "WorkExperienceContainer">
                    <WorkAccordion />
                    {/* <WorkExperienceCards/> */}
                    <WorkModalContainer/>
                </div>
                <Footer />
            </div>
    );
}
 
export default WorkPage;
