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
import InputText from "../components/InputText";
import ConfirmPasswordInput from "../components/ConfirmPasswordInput";
import NavigationRow from "../components/NavigationRow";
import PropTypes from "prop-types";

class Register extends React.Component {
    static propTypes = {
        password: PropTypes.string.isRequired,
        isNameValid: PropTypes.bool.isRequired,
        isEmailValid: PropTypes.bool.isRequired,
        isPasswordValid: PropTypes.bool.isRequired,
        isConfirmPasswordValid: PropTypes.bool.isRequired,
        doRegister: PropTypes.func.isRequired,
        handleNameChange: PropTypes.func.isRequired,
        handleEmailChange: PropTypes.func.isRequired,
        handlePasswordChange: PropTypes.func.isRequired,
        handleConfirmPasswordChange: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.validate = this.validate.bind(this);
    }

    validate() {
        return !(
            this.props.isNameValid &&
            this.props.isEmailValid &&
            this.props.isPasswordValid &&
            this.props.isConfirmPasswordValid
        );
    }

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
                            disabled={this.validate()}
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
