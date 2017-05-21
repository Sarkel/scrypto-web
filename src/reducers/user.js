/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 21/05/2017
 * @Description
 */
import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from "../action-types/user";

const initialState = {
    userId: null,
    name: null,
    token: null
};

function user(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                userId: action.payload.userId,
                name: action.payload.name,
                token: action.payload.token
            });
        case LOGIN_FAILURE:
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default user;
