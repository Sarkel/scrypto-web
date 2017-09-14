import {connect} from "react-redux";
import {remindPassword, changeEmail} from "../actions/forgotten-password";
import ForgottenPassword from "../components/ForgottenPassword";

const mapStateToProps = state => {
  return {
    isEmailValid: state.forgottenPassword.isEmailValid
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleEmailChange: (email, isEmailValid) => dispatch(changeEmail(email, isEmailValid)),
    remindPassword: () => dispatch(remindPassword())
  };
};

const ForgottenPasswordContainer = connect(mapStateToProps, mapDispatchToProps)(ForgottenPassword);

export default ForgottenPasswordContainer;