/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 17/05/2017
 * @Description
 */
import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import PasswordInput from "../components/PasswordInput";
import SubmitButton from "../components/SubmitButton";
import ConfirmPasswordInput from "../components/ConfirmPasswordInput";

class ChangePassword extends React.Component {
    state = {
        password: '',
        isPasswordValid: true,
        isConfirmPasswordValid: true
    };

    constructor(props) {
        super(props);
        this.changePassword = this.changePassword.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    }

    changePassword() {
        //todo: do change password logic
        this.props.history.replace('/login');
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

    render() {
        return (
            <BackgroundImage title="Changing password">
                <div className="container">
                    <form onSubmit={this.changePassword}>
                        <PasswordInput
                            name="New password"
                            placeholder="New password"
                            handleChange={this.handlePasswordChange}
                        />
                        <ConfirmPasswordInput
                            name="Confirm new password"
                            placeholder="Confirm new password"
                            passwordValue={this.state.password}
                            handleChange={this.handleConfirmPasswordChange}
                        />
                        <SubmitButton
                            name="Change password"
                            disabled={!(this.state.isPasswordValid && this.state.isConfirmPasswordValid)}
                        />
                    </form>
                </div>
            </BackgroundImage>
        );
    }
}

export default ChangePassword;