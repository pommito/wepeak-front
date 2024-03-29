import { HiOutlineMail } from 'react-icons/hi';

import './ContactDirect.scss';

const ContactDirect = () => {
  return (
    <div className="ContactDirect">
      <h3>Vous souhaitez nous contacter directement ?</h3>
      <p>Vous pouvez également nous contacter directement par e-mail :</p>
      <div>
        <HiOutlineMail />

        <p>
          E-mail <br /> contact@wepeak.com
        </p>
      </div>
    </div>
  );
};

export default ContactDirect;
