/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 21/05/2017
 * @Description
 */
import {CHANGE_LOGIN_EMAIL_VALUE, CHANGE_LOGIN_PASSWORD_VALUE} from "../action-types/login";
import ApiRequest, {CacheOptions, MethodOptions} from "../helpers/ApiRequest";
import {loginFailure, loginSuccess} from "./user";
import {hideSpinner, showSpinner} from "./spinner";
import {showError} from "./error";

function changeEmail(email, isEmailValid) {
    return {
        type: CHANGE_LOGIN_EMAIL_VALUE,
        payload: {
            email,
            isEmailValid
        }
    };
}

function changePassword(password, isPasswordValid) {
    return {
        type: CHANGE_LOGIN_PASSWORD_VALUE,
        payload: {
            password,
            isPasswordValid
        }
    };
}

function doLogin(props) {
    return async (dispatch, getState) => {
        dispatch(showSpinner());
        try {
            const state = getState();
            const payload = await new ApiRequest('/auth/login', MethodOptions.POST, CacheOptions.NO_STORE)
                .setBody({
                    email: state.login.email,
                    password: state.login.password
                })
                .call();
            dispatch(loginSuccess(payload.user_id, payload.name, payload.token));
            props.history.replace('/');
        } catch (err) {
            dispatch(loginFailure());
            dispatch(showError(err.message));
        }
        dispatch(hideSpinner());
    };
}

export {changeEmail, changePassword, doLogin};