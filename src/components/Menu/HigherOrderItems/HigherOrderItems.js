import React from 'react'

import classes from './HigherOrderItems.css';

const higherOrderItems = (props) => {
    let activeStyle = null;
    if(props.link) {
        activeStyle = {
            backgroundColor: '#2B303A',
            color: '#fff',
        }
    }
    return <a href='#' className={classes.container} style={activeStyle}>
        <i className={props.icon} style={activeStyle}/>
        <div>{props.label}</div>
    </a>
}

export default higherOrderItems;