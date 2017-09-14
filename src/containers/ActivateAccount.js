import {connect} from "react-redux";
import {activateAccount, changeActivationCode} from "../actions/activate-account";
import ActivateAccount from "../components/ActivateAccount";

const mapStateToProps = state => {
  return {
    isCodeValid: state.activateAccount.isCodeValid
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleCodeChange: (code, isCodeValid) => dispatch(changeActivationCode(code, isCodeValid)),
    activateAccount: () => dispatch(activateAccount())
  };
};

const ActivateAccountContainer = connect(mapStateToProps, mapDispatchToProps)(ActivateAccount);

export default ActivateAccountContainer;