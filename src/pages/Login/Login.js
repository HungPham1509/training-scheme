import React, {Component} from 'react';
import Contact from '../../components/contact/contact';
import LoginFrame from './LoginFrame/LoginFrame';
import classes from './Login.css';

class Login extends Component {
    render() {
        return (
            <div className={classes.logInBackground}>
                <LoginFrame />
                <Contact />
            </div>
        )
    }
}

export default Login;