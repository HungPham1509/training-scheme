import React, {Component} from 'react';
import Menu from '../../components/Menu/Menu';
import User from '../../components/User/User';

import classes from './Institutions.css';

class Institutions extends Component {
    render() {
        return <div className={classes.InstitutionsContainer}>
                <Menu />   
                <div className={classes.Institutions}>
                    <User />
                    <div>
                        Danh sách đơn vị chuyên môn
                    </div>
                </div>
        </div>
    }
}


export default Institutions;