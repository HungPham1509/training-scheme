import React, {Component} from 'react';
import User from '../../components/User/User';

import classes from './AddCourse.css';

class AddCourse extends Component {
    render() {
        return  <div className={classes.AddCourse}>
                    <User />
                    <div>
                        Tạo mới học phần
                    </div>
                </div>
    }
}


export default AddCourse;