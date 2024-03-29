import ContactTitle from './ContactTitle/ContactTitle';
import ContactForm from './ContactForm/ContactForm';
import ContactDirect from './ContactDirect/ContactDirect';

import './Contact.scss';

const Contact = () => {
  return (
    <main className="Contact">
      <ContactTitle />
      <ContactForm />
      <ContactDirect />
    </main>
  );
};

export default Contact;
