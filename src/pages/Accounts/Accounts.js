import React, {Component} from 'react';
import Menu from '../../components/Menu/Menu';
import User from '../../components/User/User';

import classes from './Accounts.css';

class Accounts extends Component {
    render() {
        return <div className={classes.AccountsContainer}>
                <Menu />   
                <div className={classes.Accounts}>
                    <User />
                    <div>
                        Danh sách tài khoản
                    </div>
                </div>
        </div>
    }
}


export default Accounts;