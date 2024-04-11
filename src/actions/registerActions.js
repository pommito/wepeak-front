export const CHANGE_REGISTER_INPUT = 'CHANGE_REGISTER_INPUT';
export const POST_REGISTER_FORM = 'POST_REGISTER_FORM';

export const changeRegisterInput = (value, identifier) => ({
  type: CHANGE_REGISTER_INPUT,
  value,
  identifier,
});

export const postRegisterForm = () => ({
  type: POST_REGISTER_FORM,
});
