import React from 'react';
import classes from './AddingInput.css';


const input = (props) => {
    let style = (props.touched && !props.valid) ? {borderColor: 'red'} : null;

    let inputElement = null;
    switch(props.type) {
        case('input'):
            inputElement = <input 
                                {...props.config}
                                placeholder={props.placeholder} 
                                value={props.value} 
                                onChange={props.changed}
                                style={style}/>   
            break;
            
        default:
            inputElement = <input 
                                {...props.config}
                                value={props.value} 
                                onChange={props.changed}/>
    }
    

    return (
            <span className={classes.InputContainer}>
                <label>{props.label}</label>
                {inputElement}
            </span>
    )
}

export default input;