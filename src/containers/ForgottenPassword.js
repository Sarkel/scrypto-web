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
import {Link} from "react-router-dom";

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
                    <div className="row">
                        <div className="col-6">
                            <Link to="/register" className="btn btn-link">Sign up</Link>
                        </div>
                        <div className="col-6">
                            <Link to="/login" className="btn btn-link">Sign in</Link>
                        </div>
                    </div>
                </div>
            </BackgroundImage>
        );
    }
}

export default ForgottenPassword;