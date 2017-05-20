/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 17/05/2017
 * @Description
 */
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./containers/Login";
import Home from "./containers/Home";
import NotFound from "./components/NotFound";
import Register from "./containers/Register";
import ForgottenPassword from "./containers/ForgottenPassword";
import Confirm from "./containers/Confirm";
import ChangePassword from "./containers/ChangePassword";
import Settings from "./containers/Settings";
import Search from "./containers/Search";
import CurrencyDetails from "./containers/CurrencyDetails";
import Currencies from "./containers/Currencies";
import PrivateRoute from "./containers/PrivateRoute";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* Unauthenticated routes */}
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/forgotten-password" component={ForgottenPassword}/>
                    <Route exact path="/confirm" component={Confirm}/>
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
            </BrowserRouter>
        );
    }
}

export default App;