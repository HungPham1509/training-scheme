import React from 'react'
import classes from './Checkbox.css'


const checkbox = (props) => {
    return  <div className={classes.RememberMe}>
                <input type='checkbox' className={classes.cb}/>
                <label>{props.label}</label>
            </div>
}

export default checkbox;