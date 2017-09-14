import {CHANGE_EMAIL_VALUE} from "../action-types/forgotten-password";
import ApiRequest, {MethodOptions} from "../helpers/ApiRequest";
import {hideSpinner, showSpinner} from "./spinner";
import {showError} from "./error";
import {push} from "react-router-redux";

function changeEmail(email, isEmailValid) {
  return {
    type: CHANGE_EMAIL_VALUE,
    payload: {
      email,
      isEmailValid
    }
  };
}

function remindPassword() {
  return async (dispatch, getState) => {
    dispatch(showSpinner());
    try {
      const state = getState();
      await new ApiRequest('/auth/verification', MethodOptions.POST)
          .setBody({
            email: state.forgottenPassword.email
          })
          .call();
      dispatch(push('/forgotten-password/confirm'));
    } catch (err) {
      dispatch(showError(err.message));
    }
    dispatch(hideSpinner());
  }
}

export {changeEmail, remindPassword};