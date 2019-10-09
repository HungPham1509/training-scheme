import React, {Component} from 'react';
import Menu from '../../components/Menu/Menu';
import User from '../../components/User/User';

import classes from './CourseDocuments.css';

class CourseDocuments extends Component {
    render() {
        return <div className={classes.CourseDocumentsContainer}>
                <Menu />   
                <div className={classes.CourseDocuments}>
                    <User />
                    <div>
                        Danh sách tài liệu học phần
                    </div>
                </div>
        </div>
    }
}


export default CourseDocuments;