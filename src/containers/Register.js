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
import InputText from "../components/InputText";
import ConfirmPasswordInput from "../components/ConfirmPasswordInput";
import NavigationRow from "../components/NavigationRow";

class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        isNameValid: true,
        isEmailValid: true,
        isPasswordValid: true,
        isConfirmPasswordValid: true
    };

    constructor(props) {
        super(props);
        this.doRegister = this.doRegister.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.validate = this.validate.bind(this);
    }

    doRegister() {
        //todo: do register logic
        this.props.history.push('/register/activate');
    }

    handleNameChange(name, isNameValid) {
        this.setState({
            name,
            isNameValid
        });
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

    handleConfirmPasswordChange(value, isConfirmPasswordValid) {
        this.setState({
            isConfirmPasswordValid
        })
    }

    validate() {
        return !(
            this.state.isNameValid &&
            this.state.isEmailValid &&
            this.state.isPasswordValid &&
            this.state.isConfirmPasswordValid
        );
    }

    render() {
        return (
            <BackgroundImage title="Please sign in">
                <div className="container">
                    <form onSubmit={this.doRegister}>
                        <InputText
                            name="Full name"
                            placeholder="Full name"
                            autoFocus
                            isRequired
                            handleChange={this.handleNameChange}
                        />
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
                        <ConfirmPasswordInput
                            name="Confirm password"
                            placeholder="Confirm password"
                            passwordValue={this.state.password}
                            handleChange={this.handleConfirmPasswordChange}
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