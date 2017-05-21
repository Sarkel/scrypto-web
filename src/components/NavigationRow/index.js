/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 21/05/2017
 * @Description
 */
import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class NavigationRow extends React.Component {
    static propTypes = {
        leftLink: PropTypes.string.isRequired,
        leftName: PropTypes.string.isRequired,
        rightLink: PropTypes.string.isRequired,
        rightName: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <Link to={this.props.leftLink} className="btn btn-link align-left">{this.props.leftName}</Link>
                </div>
                <div className="col-6">
                    <Link to={this.props.rightLink} className="btn btn-link align-right">{this.props.rightName}</Link>
                </div>
            </div>
        );
    }
}

export default NavigationRow;