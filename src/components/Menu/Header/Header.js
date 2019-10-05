import React from 'react';

import * as constants from '../../../constants/string';
import Logo from '../../../theme/images/book.png';
import classes from './Header.css';

const header = (props) => {
    return <div className={classes.MenuHeader}>
        <div className={classes.Logo}>
            <img src={Logo} alt='logo'/>
            <div>{constants.MENU_HEADER}</div>
        </div>
        <div className={classes.ToggleButton}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
}

export default header;