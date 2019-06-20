import React from 'react';
import { connect } from 'react-redux';
import { login } from '../state/actionCreators';

export class Login extends React.Component {
    userRef = React.createRef();
    passRef = React.createRef();

    onLogin = () => {
        const username = this.userRef.current.value;
        const password = this.passRef.current.value;

        this.props.login(username, password);
    }

    render() {
        return (
            <div>
                <h3>Log In Here</h3>
                <div>Username <input type="text" ref={this.userRef} /></div>
                <div>Password <input type="text" ref={this.passRef} /></div>
            </div>
        )
    }
}

export default connect(
    state => state,
    { login }
)(Login);