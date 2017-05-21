/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 22/05/2017
 * @Description
 */
import {connect} from "react-redux";
import Error from "../components/Error";
import {hideError} from "../actions/error";

const mapStateToProps = state => {
    return {
        isHidden: state.error.isHidden,
        message: state.error.message
    };
};

const mapDispatchToProps = dispatch => {
    return {
        hide: () => dispatch(hideError())
    };
};

const ErrorContainer = connect(mapStateToProps, mapDispatchToProps)(Error);

export default ErrorContainer;