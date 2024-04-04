import { GET_USER_POSITION, handleUserPosition } from '../actions/userActions';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_POSITION:
      // navigator.geolocation is a global object that provides access to the user's location if the user consents
      if (navigator.geolocation) {
        // .getCurrentPosition method accept 2 callbacks: success and error
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            store.dispatch(
              handleUserPosition({ lat: latitude, lng: longitude })
            );
          },
          (error) => {
            console.log('Error:', error);
          }
        );
      }
      break;
    default:
      next(action);
  }
};
