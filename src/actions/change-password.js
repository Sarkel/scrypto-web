import {CODE_CHANGE, CHANGE_CONFIRM_PASSWORD, CHANGE_PASSWORD} from "../action-types/change-password";
import {hideSpinner, showSpinner} from "./spinner";
import ApiRequest, {MethodOptions} from "../helpers/ApiRequest";
import {showError} from "./error";
import {push} from "react-router-redux";

function changeCode(code, isCodeValid) {
  return {
    type: CODE_CHANGE,
    payload: {
      code,
      isCodeValid
    }
  };
}

function passwordChange(password, isPasswordValid) {
  return {
    type: CHANGE_PASSWORD,
    payload: {
      password,
      isPasswordValid
    }
  };
}

function confirmationPasswordChange(isConfirmPasswordValid) {
  return {
    type: CHANGE_CONFIRM_PASSWORD,
    payload: {
      isConfirmPasswordValid
    }
  };
}

function changePassword() {
  return async (dispatch, getState) => {
    dispatch(showSpinner());
    try {
      const state = getState();
      await new ApiRequest(`/auth/password/${state.changePassword.code}`, MethodOptions.PATCH)
          .setBody({
            password: state.changePassword.password
          }).call();
      dispatch(push('/login'));
    } catch (err) {
      dispatch(showError(err.message));
    }
    dispatch(hideSpinner());
  }
}

export {changeCode, changePassword, passwordChange, confirmationPasswordChange};
