/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 22/05/2017
 * @Description
 */
import React from "react";
import PropTypes from "prop-types";
import SpinnerContent from "../components/SpinnerContent";

class Spinner extends React.Component {
    static propTypes = {
        isHidden: PropTypes.bool.isRequired,
    };

    render() {
        return (
            <div>
                {this.props.isHidden ? null : <SpinnerContent/>}
            </div>
        );
    }
}

export default Spinner;