/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 17/05/2017
 * @Description
 */
import React from "react";
import BackgroundImage from "./BackgroundImage/index";
import InputEmail from "./InputEmail";
import SubmitButton from "./SubmitButton/index";
import NavigationRow from "./NavigationRow/index";
import PropTypes from "prop-types";

class ForgottenPassword extends React.Component {

    static propTypes = {
      isEmailValid: PropTypes.bool.isRequired,
      remindPassword: PropTypes.func.isRequired,
      handleEmailChange: PropTypes.func.isRequired
    };

    render() {
        return (
            <BackgroundImage title="Forgotten Password">
                <div className="container">
                    <form onSubmit={this.props.remindPassword}>
                        <InputEmail
                            name="Email"
                            placeholder="Email"
                            autoFocu
                            handleChange={this.props.handleEmailChange}
                        />
                        <SubmitButton name="Sign in" disabled={!this.props.isEmailValid}/>
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