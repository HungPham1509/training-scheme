import React, {Component} from 'react';
import User from '../../components/User/User';

import classes from './Statistics.css';

class Statistics extends Component {
    render() {
        return  <div className={classes.Statistics}>
                    <User />
                    <div>
                        Thống kê
                    </div>
                </div>
                

    }
}


export default Statistics;