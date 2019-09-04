import React, {Component} from 'react';
import Contact from './contact/contact';
import LoginFrame from './LoginFrame/LoginFrame';
import Logo from './Logo/Logo';
import classes from './Login.css';

class Login extends Component {
    render() {
        return (
            <div className={classes.LoginContainer}>
                <Logo />
                <LoginFrame />
                <Contact />
            </div>
        )
    }
}


export default Login;