/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 17/05/2017
 * @Description
 */
import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import InputEmail from "../components/InputEmail";
import SubmitButton from "../components/SubmitButton";
import NavigationRow from "../components/NavigationRow";

class ForgottenPassword extends React.Component {
    state = {
        email: '',
        isEmailValid: true
    };

    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.remindPassword = this.remindPassword.bind(this);
    }

    remindPassword() {
        // todo: logic to remind password
        this.props.history.push('/forgotten-password/confirm');
    }

    handleEmailChange(email, isEmailValid) {
        this.setState({
            email,
            isEmailValid
        });
    }

    render() {
        return (
            <BackgroundImage title="Forgotten Password">
                <div className="container">
                    <form onSubmit={this.remindPassword}>
                        <InputEmail
                            name="Email"
                            placeholder="Email"
                            autoFocu
                            handleChange={this.handleEmailChange}
                        />
                        <SubmitButton name="Sign in" disabled={!this.state.isEmailValid}/>
                    </form>
                    <NavigationRow
                        leftLink="/register"
                        leftName="Sign up"
                        rightLink="/login"
                        rightName="Sign in"
                    />
                </div>
            </BackgroundImage>
        );
    }
}

export default ForgottenPassword;