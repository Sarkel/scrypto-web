/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 21/05/2017
 * @Description
 */
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk"
import {createLogger} from "redux-logger"
import reducers from "../reducers";
import {routerMiddleware} from "react-router-redux";

const loggerMiddleware = createLogger();

export default function configureStore(config) {
    const historyRouterMiddleware = routerMiddleware(config.history);

    return createStore(
        reducers,
        applyMiddleware(
            thunkMiddleware,
            historyRouterMiddleware,
            loggerMiddleware
        )
    );
}