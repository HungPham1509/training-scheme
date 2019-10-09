import React, {Component} from 'react';
import UserImage from '../../theme/images/user.png';
import Button from '../UI/Button/Button';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import logoutIcon from '../../theme/svg/logout.svg';
import * as actions from '../../redux/actions/index';
import classes from './User.css'

class User extends Component {
    handleLogoutClicked = () => {
        this.props.onLogout();
    }


    render() {
        let authRedirect = null;
        if(!this.props.isAuthenticated) {
            authRedirect = <Redirect to='/login-page'/>
        }
        return (
            <div className={classes.UserContainer}>
                    {authRedirect}
                    <div className={classes.User}>
                        <img src={UserImage} alt={'user'}/>
                        <p>Admin</p>
                    </div>
                    <Button class={classes.Logout} clicked={this.handleLogoutClicked}>
                            Log Out
                            <img src={logoutIcon} alt='logout'/>
                    </Button>
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.authLogout())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(User);