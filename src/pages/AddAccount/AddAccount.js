import React, {Component} from 'react';
import User from '../../components/User/User';

import classes from './AddAccount.css';

class AddAccount extends Component {
    render() {
        return  <div className={classes.AddAccount}>
                    <User />
                    <div>
                        Tạo mới tài khoản cán bộ
                    </div>
                </div>
    }
}


export default AddAccount;