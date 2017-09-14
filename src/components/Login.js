/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 22/05/2017
 * @Description
 */
import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import InputEmail from "../components/InputEmail";
import PasswordInput from "../components/PasswordInput";
import SubmitButton from "../components/SubmitButton";
import NavigationRow from "../components/NavigationRow";
import PropTypes from "prop-types";

class Login extends React.Component {

    static propTypes = {
        handleEmailChange: PropTypes.func.isRequired,
        handlePasswordChange: PropTypes.func.isRequired,
        isEmailValid: PropTypes.bool.isRequired,
        isPasswordValid: PropTypes.bool.isRequired,
        isValid: PropTypes.bool.isRequired,
        doLogin: PropTypes.func.isRequired
    };

    render() {
        return (
            <BackgroundImage title="Please sign in">
                <div className="container">
                    <form onSubmit={this.props.doLogin}>
                        <InputEmail
                            name="Email"
                            placeholder="Email"
                            autoFocu
                            handleChange={this.props.handleEmailChange}
                        />
                        <PasswordInput
                            name="Password"
                            placeholder="Password"
                            handleChange={this.props.handlePasswordChange}
                        />
                        <SubmitButton name="Sign in" disabled={!this.props.isValid}/>
                    </form>
                    <NavigationRow
                        leftLink="/forgotten-password"
                        leftName="Did you forgot your password?"
                        rightLink="/register"
                        rightName="Sign up"
                    />
                </div>
            </BackgroundImage>
        );
    }
}

export default Login;