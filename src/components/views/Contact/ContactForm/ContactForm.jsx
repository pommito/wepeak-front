import './ContactForm.scss';

const ContactForm = () => {
  return (
    <form className="Contact-form">
      <div>
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div>
        <label htmlFor="phone">Téléphone</label>
        <input type="tel" id="phone" name="phone" required />
      </div>

      <div>
        <label htmlFor="company">Entreprise</label>
        <input type="text" id="company" name="company" required />
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
      </div>

      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default ContactForm;
