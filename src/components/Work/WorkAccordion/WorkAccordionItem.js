
import React, { useState } from 'react';

import "./WorkAccordionItem.css"

const WorkAccordionItem = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div className="accordiontitletext">{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    );
  };
export default WorkAccordionItem;