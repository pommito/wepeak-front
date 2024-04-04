export const GET_USER_POSITION = 'GET_USER_POSITION';
export const HANDLE_USER_POSITION = 'HANDLE_USER_POSITION';

export const getUserPosition = () => ({
  type: GET_USER_POSITION,
});

export const handleUserPosition = (coordinates) => ({
  type: HANDLE_USER_POSITION,
  coordinates,
});
