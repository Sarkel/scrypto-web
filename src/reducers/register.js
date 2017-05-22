/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 22/05/2017
 * @Description
 */
import {
    CHANGE_CONFIRM_PASSWORD_VALUE,
    CHANGE_REGISTER_EMAIL_VALUE,
    CHANGE_REGISTER_NAME_VALUE,
    CHANGE_REGISTER_PASSWORD_VALUE,
    REGISTER_FAILURE,
    REGISTER_SUCCESS
} from "../action-types/register";

const initialState = {
    name: '',
    email: '',
    password: '',
    isNameValid: true,
    isEmailValid: true,
    isPasswordValid: true,
    isConfirmPasswordValid: true
};

function register(state = initialState, action) {
    switch (action.type) {
        case CHANGE_REGISTER_EMAIL_VALUE:
            return Object.assign({}, state, {
                email: action.payload.email,
                isEmailValid: action.payload.isEmailValid
            });
        case CHANGE_CONFIRM_PASSWORD_VALUE:
            return Object.assign({}, state, {
                isConfirmPasswordValid: action.payload.isConfirmPasswordValid
            });
        case CHANGE_REGISTER_NAME_VALUE:
            return Object.assign({}, state, {
                name: action.payload.name,
                isNameValid: action.payload.isNameValid
            });
        case CHANGE_REGISTER_PASSWORD_VALUE:
            return Object.assign({}, state, {
                password: action.payload.password,
                isPasswordValid: action.payload.isPasswordValid
            });
        case REGISTER_SUCCESS:
            return initialState;
        case REGISTER_FAILURE:
        default:
            return state;
    }
}

export default register;