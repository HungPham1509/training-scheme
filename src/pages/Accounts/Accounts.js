import React, {Component} from 'react';
import User from '../../components/User/User';

import classes from './Accounts.css';

class Accounts extends Component {
    render() {
        return  <div className={classes.Accounts}>
                    <User />
                    <div>
                        Danh sách tài khoản
                    </div>
                </div>
    }
}


export default Accounts;