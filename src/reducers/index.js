/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 21/05/2017
 * @Description
 */
import {combineReducers} from "redux";
import login from "./login";
import user from "./user";
import spinner from "./spinner";
import error from "./error";
import register from "./register";

const reducers = combineReducers({
    login,
    user,
    spinner,
    error,
    register
});

export default reducers;