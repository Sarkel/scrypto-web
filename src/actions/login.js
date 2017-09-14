/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 21/05/2017
 * @Description
 */
import {CHANGE_EMAIL_VALUE, CHANGE_PASSWORD_VALUE} from "../action-types/login";
import ApiRequest, {MethodOptions} from "../helpers/ApiRequest";
import {loginFailure, loginSuccess} from "./user";
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

function changePassword(password, isPasswordValid) {
    return {
        type: CHANGE_PASSWORD_VALUE,
        payload: {
            password,
            isPasswordValid
        }
    };
}

function doLogin() {
    return async (dispatch, getState) => {
        dispatch(showSpinner());
        try {
            const state = getState();
            const payload = await new ApiRequest('/auth/login', MethodOptions.POST)
                .setBody({
                    email: state.login.email,
                    password: state.login.password
                })
                .call();
            dispatch(loginSuccess(payload.user_id, payload.name, payload.token));
            dispatch(push('/'));
        } catch (err) {
            dispatch(loginFailure());
            dispatch(showError(err.message));
        }
        dispatch(hideSpinner());
    };
}

export {changeEmail, changePassword, doLogin};