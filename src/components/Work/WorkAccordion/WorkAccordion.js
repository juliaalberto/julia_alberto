
import React, { useState } from 'react';


const WorkAccordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    );
  };
export default WorkAccordion;