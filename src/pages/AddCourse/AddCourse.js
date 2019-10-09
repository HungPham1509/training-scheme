import React, {Component} from 'react';
import Menu from '../../components/Menu/Menu';
import User from '../../components/User/User';

import classes from './AddCourse.css';

class AddCourse extends Component {
    render() {
        return <div className={classes.AddCourseContainer}>
                <Menu />   
                <div className={classes.AddCourse}>
                    <User />
                    <div>
                        Tạo mới học phần
                    </div>
                </div>
        </div>
    }
}


export default AddCourse;