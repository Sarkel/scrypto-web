/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 17/05/2017
 * @Description
 */
import React from "react";
import BackgroundImage from "./BackgroundImage";
import InputEmail from "./InputEmail";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import InputText from "./InputText";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import NavigationRow from "./NavigationRow/index";
import PropTypes from "prop-types";

class Register extends React.Component {

    static propTypes = {
      password: PropTypes.string.isRequired,
      isNameValid: PropTypes.bool.isRequired,
      isEmailValid: PropTypes.bool.isRequired,
      isPasswordValid: PropTypes.bool.isRequired,
      isValid: PropTypes.bool.isRequired,
      isConfirmPasswordValid: PropTypes.bool.isRequired,
      handleEmailChange: PropTypes.func.isRequired,
      handlePasswordChange: PropTypes.func.isRequired,
      handleNameChange: PropTypes.func.isRequired,
      handleConfirmPasswordChange: PropTypes.func.isRequired,
      doRegister: PropTypes.func.isRequired
    };

    render() {
        return (
            <BackgroundImage title="Please sign in">
                <div className="container">
                    <form onSubmit={this.props.doRegister}>
                        <InputText
                            name="Full name"
                            placeholder="Full name"
                            autoFocus
                            isRequired
                            handleChange={this.props.handleNameChange}
                        />
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
                        <ConfirmPasswordInput
                            name="Confirm password"
                            placeholder="Confirm password"
                            passwordValue={this.props.password}
                            handleChange={this.props.handleConfirmPasswordChange}
                        />
                        <SubmitButton
                            name="Sign up"
                            disabled={!this.props.isValid}
                        />
                    </form>
                    <NavigationRow
                        leftLink="/forgotten-password"
                        leftName="Did you forgot your password?"
                        rightLink="/login"
                        rightName="Sign in"
                    />
                </div>
            </BackgroundImage>
        );
    }
}

export default Register;