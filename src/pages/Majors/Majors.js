import React, {Component} from 'react';
import User from '../../components/User/User';

import classes from './Majors.css';

class Majors extends Component {
    render() {
        return <div className={classes.Majors}>
                    <User />
                    <div>
                        Danh sách ngành
                    </div>
                </div>
                
        
    }
}


export default Majors;