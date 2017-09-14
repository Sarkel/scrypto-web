/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 21/05/2017
 * @Description
 */
import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import login from "./login";
import user from "./user";
import spinner from "./spinner";
import error from "./error";
import register from "./register";
import activateAccount from "./activate-account";

const reducers = combineReducers({
    login,
    user,
    spinner,
    error,
    register,
    activateAccount,
    router: routerReducer
});

export default reducers;