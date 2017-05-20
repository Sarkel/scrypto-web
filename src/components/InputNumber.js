/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 20/05/2017
 * @Description
 */
import React from "react";
import PropTypes from "prop-types";
import BaseInput from "./BaseInput";

class InputNumber extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        handleChange: PropTypes.func.isRequired,
        disabled: PropTypes.bool,
        placeholder: PropTypes.string,
        autoFocus: PropTypes.bool,
        isRequired: PropTypes.bool,
        maxLength: PropTypes.number
    };

    static defaultProps = {
        disabled: false,
        autoFocus: false,
        isRequired: false
    };

    render() {
        return (
            <BaseInput
                name={this.props.name}
                type="number"
                value={this.props.value}
                isRequired={this.props.isRequired}
                placeholder={this.props.placeholder}
                autoFocus={this.props.autoFocus}
                disabled={this.props.disabled}
                maxLength={this.props.maxLength}
                handleChange={this.props.handleChange}
            />
        );
    }
}

export default InputNumber;