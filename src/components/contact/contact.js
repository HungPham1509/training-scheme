import React from 'react';

import * as constants from '../../constants/string';
import classes from './contact.css';

const contact = (props) => {
    return (<div className={classes.contact}>
        <p>{constants.UNIVERSITY}</p>
        <p>{constants.ADDRESS}</p>
        <p>{constants.PHONE_FAX_EMAIL}</p>
    </div>)
}

export default contact;