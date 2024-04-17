import {
  HANDLE_CLICK_ON_SIGNIN_BUTTON,
  HANDLE_CLICK_ON_SIGNOFF_BUTTON,
} from '../actions/participationsActions';

import {
  writePopUpMessage,
  removePopUpMessage,
} from '../actions/globalActions';

const participationsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_CLICK_ON_SIGNIN_BUTTON: {
      fetch('https://melvinleroux-server.eddi.cloud/api/v1/participations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            id: store.getState().user.loggedData.user.id,
          },
          activity: {
            id: store.getState().activity.activity.id,
          },
          status: 1,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            // If the response is not ok, we parse the response body as JSON.
            return response.json().then((error) => {
              // throw is used to stop the promise chain and trigger the catch block.
              // if error.errors (which normaly contains specific messages) is not defined, we throw a generic error message.
              throw new Error(error.errors || 'Network response was not ok');
            });
          }
          return response.json();
        })
        .then(() => {
          // Handle here the success case with message to user and redirection
          store.dispatch(
            writePopUpMessage('Votre inscription a bien été prise en compte !')
          );
          setTimeout(() => {
            store.dispatch(removePopUpMessage());
          }, 5000);
          action.navigate('/');
        })
        .catch((error) => {
          console.error('There was an error with your fetch operation:', error);
          // store.dispatch(setErrorMessage(error.message));
        })
        .finally(() => {});
      break;
    }
    case HANDLE_CLICK_ON_SIGNOFF_BUTTON: {
      fetch(
        `https://melvinleroux-server.eddi.cloud/api/v1/participations/${action.id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${store.getState().user.loggedData.token}`,
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            // If the response is not ok, we parse the response body as JSON.
            return response.json().then((error) => {
              // throw is used to stop the promise chain and trigger the catch block.
              // if error.errors (which normaly contains specific messages) is not defined, we throw a generic error message.
              throw new Error(error.errors || 'Network response was not ok');
            });
          }
          return response.json();
        })
        .then(() => {
          // Handle here the success case with message to user and redirection
          store.dispatch(
            writePopUpMessage('Vous êtes désinscrit de cette activité')
          );
          setTimeout(() => {
            store.dispatch(removePopUpMessage());
          }, 5000);
          action.navigate('/');
        })
        .catch((error) => {
          console.error('There was an error with your fetch operation:', error);
          // store.dispatch(setErrorMessage(error.message));
        })
        .finally(() => {});
      break;
    }
    default:
  }
  return next(action);
};

export default participationsMiddleware;
