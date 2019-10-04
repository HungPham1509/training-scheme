import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from '../src/pages/Login/Login';
import {connect} from 'react-redux';
import * as actions from './redux/actions/index';
import Statistics from '../src/pages/Statistics/Statistics';


class App extends Component {
    componentDidMount() {
        this.props.onTryAutoSignUp();
    }
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

const mapStateToProps = state => {
    return {
      isAuthenticated: state.token !== null
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onTryAutoSignUp: () => dispatch(actions.authCheckState())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);