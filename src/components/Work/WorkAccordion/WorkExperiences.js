import "./WorkAccordion.css"
import React from 'react';
import WorkAccordion from './WorkAccordion';
import { accordionData } from './WorkAccordionInfo';

import"./WorkExperiences.css"



const WorkExperience = () => {
  return (
    <div>
      <h1 className="WorkExperienceTitle">Experiences</h1>
      {/* https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/ */}
      
      <div className="work-experience-container">
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <WorkAccordion title={title} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;