/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 22/05/2017
 * @Description
 */
import {HIDE_ERROR, SHOW_ERROR} from "../action-types/error";

function showError(message) {
    return {
        type: SHOW_ERROR,
        payload: {
            message
        }
    };
}

function hideError() {
    return {
        type: HIDE_ERROR
    };
}

export {showError, hideError};