import React, {Component} from 'react';
import User from '../../components/User/User';

import classes from './Texts.css';

class Texts extends Component {
    render() {
        return  <div className={classes.Texts}>
                    <User />
                    <div>
                        Danh sách văn bản
                    </div>
                </div>
    }
}


export default Texts;