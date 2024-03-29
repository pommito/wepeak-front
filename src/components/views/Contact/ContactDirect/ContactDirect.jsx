import { HiOutlineMail } from 'react-icons/hi';

import './ContactDirect.scss';

const ContactDirect = () => {
  return (
    <div className="ContactDirect">
      <h3 className="ContactDirect-title">
        Vous souhaitez nous contacter directement ?
      </h3>
      <p className="ContactDirect-text">
        Vous pouvez également nous contacter directement par e-mail :
      </p>
      <div className="ContactDirect-card">
        <HiOutlineMail className="ContactDirect-card-icon" />

        <p className="ContactDirect-card-email">
          E-mail <br /> <span>contact@wepeak.com</span>
        </p>
      </div>
    </div>
  );
};

export default ContactDirect;
