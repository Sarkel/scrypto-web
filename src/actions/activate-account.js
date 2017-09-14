import {ACTIVATION_CODE_CHANGE} from "../action-types/activate-account";
import {hideSpinner, showSpinner} from "./spinner";
import ApiRequest, {MethodOptions} from "../helpers/ApiRequest";
import {showError} from "./error";
import {push} from "react-router-redux";

function changeActivationCode(code, isCodeValid) {
  return {
    type: ACTIVATION_CODE_CHANGE,
    payload: {
      code,
      isCodeValid
    }
  };
}

function activateAccount() {
  return async (dispatch, getState) => {
    dispatch(showSpinner());
    try {
      const state = getState();
      await new ApiRequest(`/auth/activate/${state.activateAccount.code}`, MethodOptions.PATCH).call();
      dispatch(push('/login'));
    } catch (err) {
      dispatch(showError(err.message));
    }
    dispatch(hideSpinner());
  }
}

export {changeActivationCode, activateAccount};