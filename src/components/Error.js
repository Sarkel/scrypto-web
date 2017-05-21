/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 22/05/2017
 * @Description
 */
import React from "react";
import PropTypes from "prop-types";
import ErrorContent from "../components/ErrorContent";

class Error extends React.Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
        isHidden: PropTypes.bool.isRequired,
        hide: PropTypes.func.isRequired
    };

    componentDidUpdate() {
        setTimeout(this.props.hide, 5000);
    }

    render() {
        return (
            <div>
                {this.props.isHidden ? null : <ErrorContent message={this.props.message}/>}
            </div>
        );
    }
}

export default Error;