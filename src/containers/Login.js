/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 17/05/2017
 * @Description
 */
import {connect} from "react-redux";
import {changeEmail, changePassword, doLogin} from "../actions/login";
import Login from "../components/Login";

const mapStateToProps = state => {
    return {
        isEmailValid: state.login.isEmailValid,
        isPasswordValid: state.login.isPasswordValid
    };
};
const mapDispatchToProps = dispatch => {
    return {
        handleEmailChange: (email, isEmailValid) => dispatch(changeEmail(email, isEmailValid)),
        handlePasswordChange: (password, isPasswordValid) => dispatch(changePassword(password, isPasswordValid)),
        doLogin: () => dispatch(doLogin())
    };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;