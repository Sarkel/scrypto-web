/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 21/05/2017
 * @Description
 */
import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT} from "../action-types/user";

function loginSuccess(userId, name, token) {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            userId,
            name,
            token
        }
    }
}

function loginFailure() {
    return {
        type: LOGIN_FAILURE
    };
}

function logout() {
    return {
        type: LOGOUT
    }
}

export {loginSuccess, loginFailure, logout};