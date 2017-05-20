/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 20/05/2017
 * @Description
 */
import React from "react";
import PropTypes from "prop-types";
import "./index.css";

class SubmitButton extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        autoFocus: PropTypes.bool
    };

    static defaultProps = {
        disabled: false,
        autoFocus: false
    };

    render() {
        return (
            <button
                className="submit-button btn"
                disabled={this.props.disabled}
                autoFocus={this.props.autoFocus}
            >{this.props.name}</button>
        );
    }
}

export default SubmitButton;