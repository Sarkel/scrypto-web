/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 22/05/2017
 * @Description
 */
import {connect} from "react-redux";
import Spinner from "../components/Spinner";

const mapStateToProps = state => {
    return {
        isHidden: state.spinner.isHidden
    };
};

const SpinnerContainer = connect(mapStateToProps)(Spinner);


export default SpinnerContainer;