import React from 'react';
import UserImage from '../../theme/images/user.png';
import Button from '../UI/Button/Button';

import classes from './User.css'

const user = (props) => {
    return <div className={classes.UserContainer}>
                <div className={classes.User}>
                    <img src={UserImage} alt={'user'}/>
                    <p>Admin</p>
                </div>
                <Button class={classes.Logout} clicked={props.logout}>
                        Log Out
                        <i className='sign-out alternate icon'/>
                </Button>
    </div> 
    
}

export default user;