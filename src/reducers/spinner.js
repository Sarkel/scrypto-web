/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 22/05/2017
 * @Description
 */
import {HIDE_SPINNER, SHOW_SPINNER} from "../action-types/spinner";

const initialState = {
    isHidden: true
};

function spinner(state = initialState, action) {
    switch (action.type) {
        case SHOW_SPINNER:
            return Object.assign({}, state, {isHidden: false});
        case HIDE_SPINNER:
            return Object.assign({}, state, {isHidden: true});
        default:
            return state;
    }
}

export default spinner;