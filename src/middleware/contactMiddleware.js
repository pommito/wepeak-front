import { POST_CONTACT_FORM } from '../actions/contactActions';

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POST_CONTACT_FORM: {
      fetch('http://melvinleroux-server.eddi.cloud/api/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: store.getState().contact.nameInput,
          email: store.getState().contact.emailInput,
          phone: store.getState().contact.phoneInput,
          company: store.getState().contact.companyInput,
          message: store.getState().contact.messageInput,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(() => {
          // Handle here the success case with message to user and redirection
          // action.navigate('/');
        })
        .catch((error) => {
          console.error('There was an error with your fetch operation:', error);
        })
        .finally(() => {});
      break;
    }
    default:
  }
  return next(action);
};

export default contactMiddleware;
