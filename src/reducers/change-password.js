import {CHANGE_PASSWORD, CHANGE_CONFIRM_PASSWORD, CODE_CHANGE} from "../action-types/change-password";

const initialState = {
  code: '',
  isCodeValid: true,
  password: '',
  isPasswordValid: true,
  isConfirmPasswordValid: true,
  isValid: true
};

function isValid(state) {
  return state.isPasswordValid && state.isConfirmPasswordValid && state.isCodeValid
}

function confirmForgottenPassword(state = initialState, action) {
  switch (action.type) {
    case CODE_CHANGE:
      return Object.assign({}, state, {
        code: action.payload.code,
        isCodeValid: action.payload.isCodeValid,
        isValid: isValid(Object.assign({isCodeValid: action.payload.isCodeValid}, state))
      });
    case CHANGE_PASSWORD:
      return Object.assign({}, state, {
        password: action.payload.password,
        isPasswordValid: action.payload.isPasswordValid,
        isValid: isValid(Object.assign({isPasswordValid: action.payload.isPasswordValid}, state))
      });
    case CHANGE_CONFIRM_PASSWORD:
      return Object.assign({}, state, {
        isConfirmPasswordValid: action.payload.isConfirmPasswordValid,
        isValid: isValid(Object.assign({isConfirmPasswordValid: action.payload.isConfirmPasswordValid}, state))
      });
    default:
      return state;
  }
}

export default confirmForgottenPassword;