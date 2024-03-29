import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import './Accordion.scss';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Accordion">
      <div
        className="Accordion-question"
        onClick={() => {
          toggle();
        }}
      >
        <h3 className="Accordion-question-title">Question n°1</h3>
        <FiPlus className="Accordion-question-icon" />
      </div>

      <div className={isOpen ? `Accordion-answer show` : `Accordion-answer`}>
        <p className="Accordion-answer-text">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam. Lorem ipsum dolor sit amet
          consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit
          nullam.
        </p>
      </div>
    </div>
  );
};

export default Accordion;
