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
    isPasswordValid: true
};

function login(state = initialState, action) {
    switch (action.type) {
        case CHANGE_EMAIL_VALUE:
            return Object.assign({}, state, {
                email: action.payload.email,
                isEmailValid: action.payload.isEmailValid
            });
        case CHANGE_PASSWORD_VALUE:
            return Object.assign({}, state, {
                password: action.payload.password,
                isPasswordValid: action.payload.isPasswordValid
            });
        default:
            return state;
    }
}

export default login;