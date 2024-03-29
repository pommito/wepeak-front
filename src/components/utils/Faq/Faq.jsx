import Accordion from './Accordion/Accordion';
import './Faq.scss';

const Faq = () => {
  return (
    <div className="Faq">
      <h2 className="Faq-title">Questions fréquentes</h2>
      <p className="Faq-text">
        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
        phasellus mollis sit aliquam sit nullam.
      </p>
      <Accordion />
      <Accordion />
    </div>
  );
};

export default Faq;
