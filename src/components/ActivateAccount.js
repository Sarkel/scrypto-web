/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 20/05/2017
 * @Description
 */
import React from "react";
import BackgroundImage from "./BackgroundImage/index";
import InputNumber from "./InputNumber";
import SubmitButton from "./SubmitButton/index";
import PropTypes from "prop-types";

class ActivateAccount extends React.Component {

    static propTypes = {
      isCodeValid: PropTypes.bool.isRequired,
      activateAccount: PropTypes.func.isRequired,
      handleCodeChange: PropTypes.func.isRequired
    };

    render() {
        return (
            <BackgroundImage title="Email verification">
                <div className="container">
                    <div>
                        Email with verification code has been send to your email.
                        Please use it to validate your email address.
                    </div>
                    <form onSubmit={this.props.activateAccount}>
                        <InputNumber
                            name="Code"
                            placeholder="Code"
                            autoFocus
                            isRequired
                            handleChange={this.props.handleCodeChange}
                            maxLength={4}
                        />
                        <SubmitButton name="Activate account" disabled={!this.props.isCodeValid}/>
                    </form>
                </div>
            </BackgroundImage>
        );
    }
}

export default ActivateAccount;