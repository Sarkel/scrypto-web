/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 17/05/2017
 * @Description
 */
import React from "react";
import {Route, Switch} from "react-router-dom";
import {ConnectedRouter} from "react-router-redux";
import Login from "./containers/Login";
import Home from "./containers/Home";
import NotFound from "./components/NotFound";
import Register from "./containers/Register";
import ForgottenPassword from "./containers/ForgottenPassword";
import ConfirmForgottenPassword from "./containers/ConfirmForgottenPassword";
import ChangePassword from "./containers/ChangePassword";
import Settings from "./containers/Settings";
import Search from "./containers/Search";
import CurrencyDetails from "./containers/CurrencyDetails";
import Currencies from "./containers/Currencies";
import ActivateAccount from "./containers/ActivateAccount";
import PrivateRoute from "./containers/PrivateRoute";
import configureStore from "./store";
import {Provider} from "react-redux";
import Spinner from "./containers/Spinner";
import Error from "./containers/Error";
import createHistory from "history/createHashHistory";

const history = createHistory();

const store = configureStore({history});

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <Switch>
                            {/* Unauthenticated routes */}
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/register/activate" component={ActivateAccount}/>
                            <Route exact path="/forgotten-password" component={ForgottenPassword}/>
                            <Route exact path="/forgotten-password/confirm" component={ConfirmForgottenPassword}/>
                            <Route exact path="/change-password" component={ChangePassword}/>

                            {/*Authenticated routes*/}
                            <PrivateRoute exact path="/" component={Home}/>
                            <PrivateRoute exact path="/currencies/:name" component={Currencies}/>
                            <PrivateRoute exact path="/currency/:name" component={CurrencyDetails}/>
                            <PrivateRoute exact path="/settings" component={Settings}/>
                            <PrivateRoute exact path="/search" component={Search}/>
                            {/*Route not found*/}
                            <Route component={NotFound}/>
                        </Switch>
                        <Spinner/>
                        <Error/>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;