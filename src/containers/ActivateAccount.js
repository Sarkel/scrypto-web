/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 20/05/2017
 * @Description
 */
import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import InputNumber from "../components/InputNumber";
import SubmitButton from "../components/SubmitButton";

class ActivateAccount extends React.Component {
    state = {
        code: '',
        isCodeValid: true
    };

    constructor(props) {
        super(props);
        this.activateAccount = this.activateAccount.bind(this);
        this.handleCodeChange = this.handleCodeChange.bind(this);
    }

    activateAccount() {
        // todo: add activation logic
        this.props.history.replace('/login');
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
                    <form onSubmit={this.activateAccount}>
                        <InputNumber
                            name="Code"
                            placeholder="Code"
                            autoFocus
                            isRequired
                            handleChange={this.handleCodeChange}
                            maxLength={4}
                        />
                        <SubmitButton name="Activate account" disabled={!this.state.isCodeValid}/>
                    </form>
                </div>
            </BackgroundImage>
        );
    }
}

export default ActivateAccount;