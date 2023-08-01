import React from 'react';
import WorkAccordion from './WorkAccordion';
import { accordionData } from './WorkAccordionInfo';

const WorkExperience = () => {
  return (
    <div>
      <h1>React Accordion Demo</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <WorkAccordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;