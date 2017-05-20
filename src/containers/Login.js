/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 17/05/2017
 * @Description
 */
import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.doLogin = this.doLogin.bind(this);
    }

    doLogin() {
        sessionStorage.setItem('isLogged', true);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div>Login</div>
                <button onClick={this.doLogin}>Do Login</button>
            </div>
        );
    }
}

export default Login;