import {connect} from "react-redux";
import {changeCode, changePassword, confirmationPasswordChange, passwordChange} from "../actions/change-password";
import ChangePassword from "../components/ChangePassword";

const mapStateToProps = state => {
  return {
    isCodeValid: state.changePassword.isCodeValid,
    password: state.changePassword.password,
    isPasswordValid: state.changePassword.isPasswordValid,
    isConfirmPasswordValid: state.changePassword.isConfirmPasswordValid,
    isValid: state.changePassword.isValid
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleCodeChange: (code, isCodeValid) => dispatch(changeCode(code, isCodeValid)),
    handleConfirmPasswordChange: (value, isConfirmPasswordValid) => dispatch(confirmationPasswordChange(isConfirmPasswordValid)),
    handlePasswordChange: (password, isPasswordValid) => dispatch(passwordChange(password, isPasswordValid)),
    changePassword: () => dispatch(changePassword())
  };
};

const ChangePasswordContainer = connect(mapStateToProps, mapDispatchToProps)(ChangePassword);

export default ChangePasswordContainer;
