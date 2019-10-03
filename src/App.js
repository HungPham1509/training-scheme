import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from '../src/pages/Login/Login';
import Statistics from '../src/pages/Statistics/Statistics';


class App extends Component {
    render() {
        return (
            <Switch>
                <Route path='/statistics' component={Statistics} />
                <Route path='/login-page' component={Login} /> 
                <Redirect to='/login-page' />
            </Switch>
        )
    }
}

export default App