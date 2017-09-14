import {connect} from "react-redux";
import {changeConfirmPassword, changeEmail, changeName, changePassword, doRegister} from "../actions/register";
import Register from "../components/Register";

const mapStateToProps = state => {
  return {
    isNameValid: state.register.isNameValid,
    isEmailValid: state.register.isEmailValid,
    isPasswordValid: state.register.isPasswordValid,
    isConfirmPasswordValid: state.register.isConfirmPasswordValid,
    password: state.register.password,
    isValid: state.register.isValid
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleEmailChange: (email, isEmailValid) => dispatch(changeEmail(email, isEmailValid)),
    handlePasswordChange: (password, isPasswordValid) => dispatch(changePassword(password, isPasswordValid)),
    handleNameChange: (name, isNameValid) => dispatch(changeName(name, isNameValid)),
    handleConfirmPasswordChange: (value, isConfirmPasswordValid) => dispatch(changeConfirmPassword(isConfirmPasswordValid)),
    doRegister: () => dispatch(doRegister())
  };
};

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);

export default RegisterContainer;