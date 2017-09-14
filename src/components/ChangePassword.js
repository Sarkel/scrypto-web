/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 17/05/2017
 * @Description
 */
import React from "react";
import BackgroundImage from "./BackgroundImage/index";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton/index";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import InputNumber from "./InputNumber";
import PropTypes from "prop-types";

class ChangePassword extends React.Component {

    static propTypes = {
        password: PropTypes.string.isRequired,
        isPasswordValid: PropTypes.bool.isRequired,
        isConfirmPasswordValid: PropTypes.bool.isRequired,
        isCodeValid: PropTypes.bool.isRequired,
        isValid: PropTypes.bool.isRequired,
        handleCodeChange: PropTypes.func.isRequired,
        handleConfirmPasswordChange: PropTypes.func.isRequired,
        handlePasswordChange: PropTypes.func.isRequired,
        changePassword: PropTypes.func.isRequired,
    };

    render() {
        return (
            <BackgroundImage title="Changing password">
                <div className="container">
                    <form onSubmit={this.props.changePassword}>
                        <InputNumber
                            name="Code"
                            placeholder="Code"
                            autoFocus
                            isRequired
                            handleChange={this.props.handleCodeChange}
                            maxLength={4}
                        />
                        <PasswordInput
                            name="New password"
                            placeholder="New password"
                            handleChange={this.props.handlePasswordChange}
                        />
                        <ConfirmPasswordInput
                            name="Confirm new password"
                            placeholder="Confirm new password"
                            passwordValue={this.props.password}
                            handleChange={this.props.handleConfirmPasswordChange}
                        />
                        <SubmitButton
                            name="Change password"
                            disabled={!this.props.isValid}
                        />
                    </form>
                </div>
            </BackgroundImage>
        );
    }
}

export default ChangePassword;