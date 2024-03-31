import './ContactForm.scss';

const ContactForm = () => {
  return (
    <form className="ContactForm">
      <div className="Contact-form-name">
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" placeholder="Nom" required />
      </div>

      <div className="ContactForm-email">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
          required
        />
      </div>

      <div className="ContactForm-phone">
        <label htmlFor="phone">Téléphone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="+33 1 23 45 67 89"
        />
      </div>

      <div className="ContactForm-company">
        <label htmlFor="company">Entreprise</label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Entreprise"
        />
      </div>

      <div className="ContactForm-message">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Votre message ..."
          required
        />
      </div>

      <button className="ContactForm-send" type="button">
        Envoyer ->
      </button>
    </form>
  );
};

export default ContactForm;
