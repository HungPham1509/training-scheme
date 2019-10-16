import React, {Component} from 'react';
import User from '../../components/User/User';

import classes from './AddInstitutions.css';

class AddInstitutions extends Component {
    render() {
        return  <div className={classes.AddInstitutions}>
                    <User />
                    <div>
                        Tạo mới đơn vị chuyên môn
                    </div>
                </div>
    }
}


export default AddInstitutions;