import React, {Component} from 'react';
import Menu from '../../components/Menu/Menu';
import User from '../../components/User/User';

import classes from './AddAccount.css';

class AddAccount extends Component {
    render() {
        return <div className={classes.AddAccountContainer}>
                <Menu />   
                <div className={classes.AddAccount}>
                    <User />
                    <div>
                        Tạo mới tài khoản cán bộ
                    </div>
                </div>
        </div>
    }
}


export default AddAccount;