import React, {Component} from 'react';
import Menu from '../../components/Menu/Menu';
import User from '../../components/User/User';

import classes from './Majors.css';

class Majors extends Component {
    render() {
        return <div className={classes.MajorsContainer}>
                <Menu />   
                <div className={classes.Majors}>
                    <User />
                    <div>
                        Danh sách ngành
                    </div>
                </div>
        </div>
    }
}


export default Majors;