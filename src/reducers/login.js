/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 21/05/2017
 * @Description
 */
import {CHANGE_EMAIL_VALUE, CHANGE_PASSWORD_VALUE} from "../action-types/login";

const initialState = {
    email: '',
    password: '',
    isEmailValid: true,
    isPasswordValid: true,
    isValid: true
};

function isValid(state) {
  return state.isEmailValid && state.isPasswordValid;
}

function login(state = initialState, action) {
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
        default:
            return state;
    }
}

export default login;