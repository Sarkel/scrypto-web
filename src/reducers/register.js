import {CHANGE_EMAIL_VALUE, CHANGE_PASSWORD_VALUE, CHANGE_CONFIRM_PASSWORD_VALUE, CHANGE_NAME_VALUE} from "../action-types/register";

const initialState = {
  name: '',
  email: '',
  password: '',
  isNameValid: true,
  isEmailValid: true,
  isPasswordValid: true,
  isConfirmPasswordValid: true,
  isValid: true
};

function isValid(state) {
  return state.isNameValid && state.isNameValid && state.isPasswordValid && state.isConfirmPasswordValid;
}

function register(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EMAIL_VALUE:
      return Object.assign({}, state, {
        email: action.payload.email,
        isEmailValid: action.payload.isEmailValid,
        isValid: isValid(Object.assign({isEmailValid: action.payload.isEmailValid}, state))
      });
    case CHANGE_PASSWORD_VALUE:
      return Object.assign({}, state, {
        password: action.payload.password,
        isPasswordValid: action.payload.isPasswordValid,
        isValid: isValid(Object.assign({isPasswordValid: action.payload.isPasswordValid}, state))
      });
    case CHANGE_NAME_VALUE:
      return Object.assign({}, state, {
        name: action.payload.name,
        isNameValid: action.payload.isNameValid,
        isValid: isValid(Object.assign({isNameValid: action.payload.isNameValid}, state))
      });
    case CHANGE_CONFIRM_PASSWORD_VALUE:
      return Object.assign({}, state, {
        isConfirmPasswordValid: action.payload.isConfirmPasswordValid,
        isValid: isValid(Object.assign({isConfirmPasswordValid: action.payload.isConfirmPasswordValid}, state))
      });
    default:
      return state;
  }
}

export default register;