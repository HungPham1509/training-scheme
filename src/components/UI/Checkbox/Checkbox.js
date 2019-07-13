import React from 'react'
import classes from './Checkbox.css'


const checkbox = (props) => {
    return  <div className={classes.RememberMe}>
                <input className={classes.checkmark} type='checkbox'/>
                <label>{props.label}</label>
            </div>
}

export default checkbox;