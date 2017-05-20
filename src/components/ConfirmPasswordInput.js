/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 20/05/2017
 * @Description
 */
import React from "react";
import PropTypes from "prop-types";
import BaseInput from "./BaseInput";

class ConfirmPasswordInput extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        value: PropTypes.string,
        handleChange: PropTypes.func,
        disabled: PropTypes.bool,
        placeholder: PropTypes.string,
        autoFocus: PropTypes.bool,
        passwordValue: PropTypes.string.isRequired
    };

    static defaultProps = {
        disabled: false,
        autoFocus: false
    };

    render() {
        return (
            <BaseInput
                name={this.props.name}
                type="password"
                value={this.props.value}
                isRequired
                placeholder={this.props.placeholder}
                autoFocu={this.props.autoFocus}
                disabled={this.props.disabled}
                handleChange={this.props.handleChange}
                pattern={this.props.passwordValue}
            />
        );
    }
}

export default ConfirmPasswordInput;