/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 22/05/2017
 * @Description
 */
import React from "react";
import PropTypes from "prop-types";
import "./index.css";

class Backdrop extends React.Component {
    static propTypes = {
        children: PropTypes.element.isRequired
    };

    render() {
        return (
            <div className="backdrop-container">
                {this.props.children}
            </div>
        );
    }
}

export default Backdrop;
