import React, {Component} from 'react';
import Menu from '../../components/Menu/Menu';
import User from '../../components/User/User';

import classes from './AddTrainingProgram.css';

class AddTrainingProgram extends Component {
    render() {
        return <div className={classes.AddTrainingProgramContainer}>
                <Menu />   
                <div className={classes.AddTrainingProgram}>
                    <User />
                    <div>
                        Tạo mới chương trình đào tạo
                    </div>
                </div>
        </div>
    }
}


export default AddTrainingProgram;