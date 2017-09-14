import {CHANGE_CONFIRM_PASSWORD_VALUE, CHANGE_EMAIL_VALUE, CHANGE_NAME_VALUE, CHANGE_PASSWORD_VALUE} from "../action-types/register";
import {hideSpinner, showSpinner} from "./spinner";
import {showError} from "./error";
import ApiRequest, {MethodOptions} from "../helpers/ApiRequest";
import {push} from "react-router-redux";

function changeName(name, isNameValid) {
  return {
    type: CHANGE_NAME_VALUE,
    payload: {
      name,
      isNameValid
    }
  };
}

function changeEmail(email, isEmailValid) {
  return {
    type: CHANGE_EMAIL_VALUE,
    payload: {
      email,
      isEmailValid
    }
  };
}

function changePassword(password, isPasswordValid) {
  return {
    type: CHANGE_PASSWORD_VALUE,
    payload: {
      password,
      isPasswordValid
    }
  };
}

function changeConfirmPassword(isConfirmPasswordValid) {
  return {
    type: CHANGE_CONFIRM_PASSWORD_VALUE,
    payload: {
      isConfirmPasswordValid
    }
  }
}

function doRegister() {
  return async (dispatch, getState) => {
    dispatch(showSpinner());
    try {
      const state = getState();
      await new ApiRequest('/auth/register', MethodOptions.POST)
          .setBody({
            name: state.register.name,
            email: state.register.email,
            password: state.register.password
          })
          .call();
      dispatch(push('/register/activate'));
    } catch (err) {
      dispatch(showError(err.message));
    }
    dispatch(hideSpinner());
  }
}

export {changeEmail, changePassword, changeName, changeConfirmPassword, doRegister};