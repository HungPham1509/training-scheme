import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    switch(props.type) {
        case('input'):
            inputElement = <input 
                                {...props.config} 
                                value={props.value} 
                                onChange={props.changed}/>   
            break;
        
        default:
            inputElement = <input 
                                {...props.config} 
                                value={props.value} 
                                onChange={props.changed}/>
    }


    return (
        <div className={classes.InputElement}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;