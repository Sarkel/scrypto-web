/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 17/05/2017
 * @Description
 */
import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import InputEmail from "../components/InputEmail";
import PasswordInput from "../components/PasswordInput";
import SubmitButton from "../components/SubmitButton";
import {Link} from "react-router-dom";

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        isEmailValid: true,
        isPasswordValid: true
    };

    constructor(props) {
        super(props);
        this.doLogin = this.doLogin.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange(this);
    }

    doLogin() {
        sessionStorage.setItem('isLogged', true);
        //todo: do login
        this.props.history.push('/');
    }

    handleEmailChange(email, isEmailValid) {
        this.setState({
            email,
            isEmailValid
        });
    }

    handlePasswordChange(password, isPasswordValid) {
        this.setState({
            password,
            isPasswordValid
        });
    }

    render() {
        return (
            <BackgroundImage title="Please sign in">
                <div className="container">
                    <form onSubmit={this.doLogin}>
                        <InputEmail
                            name="Email"
                            placeholder="Email"
                            autoFocu
                            handleChange={this.handleEmailChange}
                        />
                        <PasswordInput
                            name="Password"
                            placeholder="Password"
                            handleChange={this.handlePasswordChange}
                        />
                        <SubmitButton name="Sign in"
                                      disabled={!(this.state.isEmailValid && this.state.isPasswordValid)}/>
                    </form>
                    <div className="row">
                        <div className="col-8">
                            <Link to="/forgotten-password" className="btn btn-link">Did you forgot your password?</Link>
                        </div>
                        <div className="col-4">
                            <Link to="/register" className="btn btn-link">Sign up</Link>
                        </div>
                    </div>
                </div>
            </BackgroundImage>
        );
    }
}

export default Login;