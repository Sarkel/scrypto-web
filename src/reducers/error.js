/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 22/05/2017
 * @Description
 */
import {HIDE_ERROR, SHOW_ERROR} from "../action-types/error";

const initialState = {
    isHidden: true,
    message: ''
};

function error(state = initialState, action) {
    switch (action.type) {
        case SHOW_ERROR:
            return Object.assign({}, state, {
                isHidden: false,
                message: action.payload.message
            });
        case HIDE_ERROR:
            return initialState;
        default:
            return state;
    }
}

export default error;