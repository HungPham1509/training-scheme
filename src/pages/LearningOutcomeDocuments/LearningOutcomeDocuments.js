import React, {Component} from 'react';
import Menu from '../../components/Menu/Menu';
import User from '../../components/User/User';

import classes from './LearningOutcomeDocuments.css';

class LearningOutcomeDocuments extends Component {
    render() {
        return <div className={classes.LearningOutcomeDocumentsContainer}>
                <Menu />   
                <div className={classes.LearningOutcomeDocuments}>
                    <User />
                    <div>
                        Danh sách tài liệu chuẩn đầu ra
                    </div>
                </div>
        </div>
    }
}


export default LearningOutcomeDocuments;