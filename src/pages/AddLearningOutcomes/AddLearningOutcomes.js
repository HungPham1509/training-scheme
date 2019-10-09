import React, {Component} from 'react';
import Menu from '../../components/Menu/Menu';
import User from '../../components/User/User';

import classes from './AddLearningOutcomes.css';

class AddLearningOutcomes extends Component {
    render() {
        return <div className={classes.AddLearningOutcomesContainer}>
                <Menu />   
                <div className={classes.AddLearningOutcomes}>
                    <User />
                    <div>
                        Tạo mới chuẩn đầu ra
                    </div>
                </div>
        </div>
    }
}


export default AddLearningOutcomes;