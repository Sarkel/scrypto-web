/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 20/05/2017
 * @Description
 */
import React from "react";
import PropTypes from "prop-types";
import BaseInput from "./BaseInput";

class InputEmail extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        handleChange: PropTypes.func.isRequired,
        disabled: PropTypes.bool,
        placeholder: PropTypes.string,
        autoFocus: PropTypes.bool
    };

    static defaultProps = {
        disabled: false,
        autoFocus: false
    };

    render() {
        return (
            <BaseInput
                name={this.props.name}
                type="email"
                value={this.props.value}
                isRequired
                placeholder={this.props.placeholder}
                autoComplete
                autoFocu={this.props.autoFocus}
                disabled={this.props.disabled}
                handleChange={this.props.handleChange}
            />
        );
    }
}

export default InputEmail;