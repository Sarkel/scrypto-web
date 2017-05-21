/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 20/05/2017
 * @Description
 */
import React from "react";
import "./index.css";
import IdGenerator from "../../helpers/IdGenerator";
import PropTypes from "prop-types";

class BaseInput extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        isRequired: PropTypes.bool,
        className: PropTypes.string,
        placeholder: PropTypes.string,
        autoComplete: PropTypes.bool,
        autoFocus: PropTypes.bool,
        disabled: PropTypes.bool,
        readonly: PropTypes.bool,
        pattern: PropTypes.string,
        maxLength: PropTypes.number,
        handleChange: PropTypes.func.isRequired
    };

    static defaultProps = {
        isRequired: false,
        className: '',
        value: '',
        autoComplete: true,
        autoFocus: false,
        disabled: false,
        readonly: false
    };

    constructor(props) {
        super(props);
        this.state = {
            id: IdGenerator.getValue(),
            value: props.value,
            isTouched: false,
            isValid: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.addUiValidation = this.addUiValidation.bind(this);
    }

    handleChange(event) {
        this.processChange(event);
    }

    processChange(event) {
        const isValid = this.validateAndUpdate(event.target);
        if(this.props.handleChange) {
            this.props.handleChange(isValid ? event.target.value : '', isValid);
        }
    }

    handleBlur(event) {
        this.processChange(event);
    }

    validateAndUpdate(el) {
        const isValid = el.checkValidity();
        this.setState({
            isTouched: true,
            isValid,
            value: el.value
        });
        return isValid;
    }

    addUiValidation() {
        if(this.state.isTouched && this.state.isValid) {
            return 'has-success';
        } else if(this.state.isTouched) {
            return 'has-danger';
        } else {
            return '';
        }
    }

    render() {
        return (
            <div className={`form-group ${this.addUiValidation()}`}>
                {/*<label htmlFor={this.state.id} className="form-control-label base-input-label">{this.props.name}</label>*/}
                <input
                    id={this.state.id}
                    type={this.props.type}
                    className={`form-control base-input ${this.props.className}`}
                    value={this.state.value}
                    required={this.props.isRequired}
                    placeholder={this.props.placeholder}
                    autoComplete={this.props.autoComplete}
                    autoFocus={this.props.autoFocus}
                    disabled={this.props.disabled}
                    readOnly={this.props.readonly}
                    pattern={this.props.pattern}
                    maxLength={this.props.maxLength}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                />
            </div>
        );
    }
}

export default BaseInput;