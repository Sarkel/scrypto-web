import {ACTIVATION_CODE_CHANGE} from "../action-types/activate-account";

const initialState = {
  code: '',
  isCodeValid: true
};

function activateAccount(state = initialState, action) {
  switch (action.type) {
    case ACTIVATION_CODE_CHANGE:
      return Object.assign({}, state, {
        code: action.payload.code,
        isCodeValid: action.payload.isCodeValid
      });
    default:
      return state;
  }
}

export default activateAccount;