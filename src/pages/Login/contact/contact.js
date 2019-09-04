import React from 'react';

import * as constants from '../../../constants/string';
import classes from './contact.css';

const contact = (props) => {
    return (<div className={classes.contact}>
        <div className={classes.text}>{constants.UNIVERSITY}</div>
        <div className={classes.text}>{constants.ADDRESS}</div>
        <div className={classes.text}>{constants.PHONE_FAX_EMAIL}</div>
    </div>)
}

export default contact;