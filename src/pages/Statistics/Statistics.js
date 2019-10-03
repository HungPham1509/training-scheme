import React, {Component} from 'react';
import Menu from '../../components/Menu/Menu';
import User from '../../components/User/User';


import classes from './Statistics.css';

class UpdateInformation extends Component {
    handleLogoutClicked = () => {
            
    }

    render() {
        return <div className={classes.StatisticsContainer}>
                <Menu />   
                <div className={classes.Statistics}>
                    <User />
                    <div>
                        Thống kê
                    </div>
                </div>
        </div>
    }
}

export default UpdateInformation;