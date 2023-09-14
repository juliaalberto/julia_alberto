import "./WorkAccordion.css"
import React from 'react';
import WorkAccordionItem from './WorkAccordionItem';
import { accordionData } from './WorkAccordionInfo';

const WorkAccordion = () => {
  return (
    <div>
      {/* https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/ */}
      
      <div className="work-accordion-container">
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <WorkAccordionItem title={title} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkAccordion;