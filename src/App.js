import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import classes from './App.css';
import Login from '../src/pages/Login/Login';
import UpdateInformation from '../src/pages/UpdateInformation/UpdateInformation';


class App extends Component {
    render() {
        return (
            <Switch>
                <Route path='/update-information' component={UpdateInformation} />
                <Route path='/login-page' component={Login} /> 
                <Redirect to='/login-page' />
            </Switch>
        )
    }
}

export default App