import React from 'react';

import roleIcon from '../../../theme/svg/role.svg'
import briefCase from '../../../theme/svg/briefcase.svg';
import cap from '../../../theme/svg/cap.svg';
import phone from '../../../theme/svg/phone.svg';
import mail from '../../../theme/svg/mail.svg';
import classes from './Account.css';

const account = (props) => {
    return <div className={classes.Account}>
        <img src={props.avatar} alt='icon'></img>
        <div className={classes.Info}>
            <p>{props.fullname}</p>
            <table>
                <tr>
                    <td>
                        <img src={roleIcon} alt='icon' />
                        {props.role}
                    </td>
                    <td>
                        <img src={briefCase} alt='icon' />
                        {props.institution}
                    </td>
                    <td>
                        <img src={phone} alt='icon' />
                        {props.phoneNumber}
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <img src={cap} alt='icon' />
                        {props.major}
                    </td>
                    <td>
                        <img src={mail} alt='icon' />
                        {props.vnuMail}
                    </td>
                </tr>
            </table> 
        </div>
    </div>
}

export default account;