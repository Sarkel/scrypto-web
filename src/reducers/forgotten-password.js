import {CHANGE_EMAIL_VALUE} from "../action-types/forgotten-password";

const initialState = {
  email: '',
  isEmailValid: true
};

function forgottenPassword(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EMAIL_VALUE:
      return Object.assign({}, state, {
        email: action.payload.email,
        isEmailValid: action.payload.isEmailValid,
      });
    default:
      return state;
  }
}

export default forgottenPassword;