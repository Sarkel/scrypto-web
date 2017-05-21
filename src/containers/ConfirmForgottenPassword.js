/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 17/05/2017
 * @Description
 */
import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import InputNumber from "../components/InputNumber";
import SubmitButton from "../components/SubmitButton";

class ConfirmForgottenPassword extends React.Component {
    state = {
        code: '',
        isCodeValid: true
    };

    constructor(props) {
        super(props);
        this.validateCode = this.validateCode.bind(this);
        this.handleCodeChange = this.handleCodeChange.bind(this);
    }

    validateCode() {
        // todo: add activation logic
        this.props.history.push('/change-password');
    }

    handleCodeChange(code, isCodeValid) {
        this.setState({
            code,
            isCodeValid
        });
    }

    render() {
        return (
            <BackgroundImage title="Email verification">
                <div className="container">
                    <div>
                        Email with verification code has been send to your email.
                        Please use it to validate your email address.
                    </div>
                    <form onSubmit={this.validateCode}>
                        <InputNumber
                            name="Code"
                            placeholder="Code"
                            autoFocus
                            isRequired
                            handleChange={this.handleCodeChange}
                            maxLength={4}
                        />
                        <SubmitButton name="Validate code" disabled={!this.state.isCodeValid}/>
                    </form>
                </div>
            </BackgroundImage>
        );
    }
}

export default ConfirmForgottenPassword;