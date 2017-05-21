/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 22/05/2017
 * @Description
 */
import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import Backdrop from "../Backdrop";

class ErrorContent extends React.Component {
    static propTypes = {
        message: PropTypes.string.isRequired
    };

    render() {
        return (
            <Backdrop>
                <div className="error-container">
                    <span className="error-container_text">{this.props.message}</span>
                </div>
            </Backdrop>
        );
    }
}

export default ErrorContent;