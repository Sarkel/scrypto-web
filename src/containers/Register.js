/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 17/05/2017
 * @Description
 */
import {connect} from "react-redux";
import {
    changePasswordValue,
    changeEmailValue,
    changeConfirmPasswordValue,
    changeNameValue,
    doRegister} from "../actions/register";
import Register from "../components/Register";

const mapStateToProps = state => {
    return {
        password: state.register.password,
        isNameValid: state.register.isNameValid,
        isEmailValid: state.register.isEmailValid,
        isPasswordValid: state.register.isPasswordValid,
        isConfirmPasswordValid: state.register.isConfirmPasswordValid
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        doRegister: () => dispatch(doRegister(ownProps)),
        handleNameChange: (name, isNameValid) =>  dispatch(changeNameValue(name, isNameValid)),
        handleEmailChange: (email, isEmailValid) => dispatch(changeEmailValue(email, isEmailValid)),
        handlePasswordChange: (password, isPasswordValid) => dispatch(changePasswordValue(password, isPasswordValid)),
        handleConfirmPasswordChange:
            (value, isConfirmPasswordValid) => dispatch(changeConfirmPasswordValue(isConfirmPasswordValid))
    };
};

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);

export default RegisterContainer;