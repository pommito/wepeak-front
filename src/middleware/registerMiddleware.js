import { POST_REGISTER_FORM } from '../actions/registerActions';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POST_REGISTER_FORM: {
      console.log('coucou');
      fetch('https://melvinleroux-server.eddi.cloud/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: store.getState().register.firstnameInput,
          lastname: store.getState().register.lastnameInput,
          pseudo: store.getState().register.usernameInput,
          email: store.getState().register.emailInput,
          password: store.getState().register.passwordInput,
          city: store.getState().register.cityInput,
          birthdate: store.getState().register.birthdateInput,
          // age: store.getState().register.ageInput,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            return response.json().then((error) => {
              throw new Error(error.errors || 'Network response was not ok');
            });
          }
          return response.json();
        })
        .then((message) => {
          console.log(message);
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

export default registerMiddleware;
