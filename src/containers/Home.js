/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 17/05/2017
 * @Description
 */
import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        sessionStorage.removeItem('isLogged');
        this.props.history.replace('/login');
    }

    render() {
        return (
            <div>
                <div>Home</div>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default Home;