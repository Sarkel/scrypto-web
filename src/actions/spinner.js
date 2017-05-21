/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 22/05/2017
 * @Description
 */
import {HIDE_SPINNER, SHOW_SPINNER} from "../action-types/spinner";

function showSpinner() {
    return {
        type: SHOW_SPINNER
    };
}

function hideSpinner() {
    return {
        type: HIDE_SPINNER
    };
}

export {showSpinner, hideSpinner};