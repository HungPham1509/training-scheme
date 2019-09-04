import React from 'react';
import userIcon from '../../../theme/images/specialist-user.png';

import classes from './Input.css';


const input = (props) => {
    let inputElement = null;
    switch(props.type) {
        case('input'):
            inputElement = <input 
                                {...props.config}
                                placeholder={props.placeholder} 
                                value={props.value} 
                                onChange={props.changed}/>   
            break;
        
        default:
            inputElement = <input 
                                {...props.config}
                                placeholder={props.placeholder}  
                                value={props.value} 
                                onChange={props.changed}/>
    }

    let iconImage = null;
    switch(props.containIconImage) {
        case('user'):
            iconImage = <div className={classes.Icon}>
                            <i className="user icon" />
                        </div> 
            break;
        case('password'):
            iconImage = <div className={classes.Icon}>
                            <i className="key icon" />
                        </div> 
            break;
        default:
            iconImage = null
    }

    return (
        <div className={props.class}>
            {iconImage}
            {inputElement}
        </div>
    )
}

export default input;