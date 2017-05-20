/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 20/05/2017
 * @Description
 */
import React from "react";
import PropTypes from "prop-types";
import BaseInput from "./BaseInput";

class InputText extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        handleChange: PropTypes.func.isRequired,
        disabled: PropTypes.bool,
        placeholder: PropTypes.string,
        autoFocus: PropTypes.bool,
        isRequired: PropTypes.bool
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
                type="text"
                value={this.props.value}
                isRequired={this.props.isRequired}
                placeholder={this.props.placeholder}
                autoComplete
                autoFocus={this.props.autoFocus}
                disabled={this.props.disabled}
                handleChange={this.props.handleChange}
            />
        );
    }
}

export default InputText;