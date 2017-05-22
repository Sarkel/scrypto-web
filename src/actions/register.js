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
import {hideSpinner, showSpinner} from "./spinner";
import {showError} from "./error";
import ApiRequest, {CacheOptions, MethodOptions} from "../helpers/ApiRequest";

function changeEmailValue(email, isEmailValid) {
    return {
        type: CHANGE_REGISTER_EMAIL_VALUE,
        payload: {
            email,
            isEmailValid
        }
    };
}

function changeNameValue(name, isNameValid) {
    return {
        type: CHANGE_REGISTER_NAME_VALUE,
        payload: {
            name,
            isNameValid
        }
    };
}

function changePasswordValue(password, isPasswordValid) {
    return {
        type: CHANGE_REGISTER_PASSWORD_VALUE,
        payload: {
            password,
            isPasswordValid
        }
    };
}

function changeConfirmPasswordValue(isConfirmPasswordValid) {
    return {
        type: CHANGE_CONFIRM_PASSWORD_VALUE,
        payload: {
            isConfirmPasswordValid
        }
    };
}

function registrationSuccess() {
    return {
        type: REGISTER_SUCCESS
    };
}

function registrationFailure() {
    return {
        type: REGISTER_FAILURE
    };
}

function doRegister(props) {
    return async (dispatch, getState) => {
        dispatch(showSpinner());
        console.log(props);
        try {
            const state = getState();
            await new ApiRequest('/auth/register', MethodOptions.POST, CacheOptions.NO_STORE)
                .setBody({
                    email: state.register.email,
                    password: state.register.password,
                    name: state.register.name
                })
                .call();
            dispatch(registrationSuccess());
            props.history.push('/register/activate');
        } catch (err) {
            dispatch(registrationFailure());
            dispatch(showError(err.message));
        }
        dispatch(hideSpinner());
    };
}

export {changePasswordValue, changeEmailValue, changeConfirmPasswordValue, changeNameValue, doRegister};