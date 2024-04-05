export const CHANGE_CONTACT_INPUT = 'CHANGE_CONTACT_INPUT';
export const POST_CONTACT_FORM = 'POST_CONTACT_FORM';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

export const changeContactInput = (value, identifier) => ({
  type: CHANGE_CONTACT_INPUT,
  value,
  identifier,
});

export const postContactForm = () => ({
  type: POST_CONTACT_FORM,
});

export const setErrorMessage = (message) => ({
  type: SET_ERROR_MESSAGE,
  message,
});
