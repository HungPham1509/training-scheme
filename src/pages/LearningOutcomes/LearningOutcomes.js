import React, {Component} from 'react';
import Menu from '../../components/Menu/Menu';
import User from '../../components/User/User';

import classes from './LearningOutcomes.css';

class LearningOutcomes extends Component {
    render() {
        return <div className={classes.LearningOutcomesContainer}>
                <Menu />   
                <div className={classes.LearningOutcomes}>
                    <User />
                    <div>
                        Danh sách chuẩn đầu ra
                    </div>
                </div>
        </div>
    }
}


export default LearningOutcomes;