import React, {Component} from 'react';
import User from '../../components/User/User';

import classes from './Courses.css';

class Courses extends Component {
    render() {
        return  <div className={classes.Courses}>
                    <User />
                    <div>
                        Danh sách học phần
                    </div>
                </div>
    }
}


export default Courses;