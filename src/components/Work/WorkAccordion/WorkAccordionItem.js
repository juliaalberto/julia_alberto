
import React, { useState } from 'react';

import "./WorkAccordionItem.css"

import { Fade } from 'react-awesome-reveal';

const WorkAccordionItem = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
      <Fade bottom cascade>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div className="accordiontitletext">{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
      </Fade>
    );
  };
export default WorkAccordionItem;