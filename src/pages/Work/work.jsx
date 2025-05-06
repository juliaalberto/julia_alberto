import './work.css';

import * as React from 'react';
import NavBar from '../../components/NavBar/NavBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import WorkLeft from '../../components/Work/WorkLeft/WorkLeft.jsx';
import WorkRight from '../../components/Work/WorkRight/WorkRight.jsx';

import WorkExperienceCards from '../../components/Work/WorkCards/WorkCardContainer.jsx';
import WorkAccordion from '../../components/Work/WorkAccordion/WorkAccordion.jsx';

import { WorkModalContainer } from '../../components/Work/WorkModals/WorkModalContainer.jsx';

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
