import React, {Component} from 'react';
import Input from '../../../components/UI/Input/Input';
import Checkbox from '../../../components/UI/Checkbox/Checkbox';
import Button from '../../../components/UI/Button/Button';

import * as constants from '../../../constants/string';
import classes from './LoginFrame.css';



class LoginFrame extends Component {
    state = {
        elements: {
            username: {
                elementType: 'input',
                config: {
                    type: 'text'
                },
                value: '',
                placeholder: constants.USERNAME_LABEL,
                icon: 'user'
            },
            password: {
                elementType: 'input',
                config: {
                    type: 'password'
                },
                value: '',
                placeholder: constants.PASSWORD_LABEL,
                icon: 'password'
            }
        }
    }

    inputChangedHandler = (event, element) => {
        const updatedElements = {
            ...this.state.elements,
            [element]: {
                ...this.state.elements[element],
                value: event.target.value
            }
        }
        console.log(updatedElements);
        this.setState({
            elements: updatedElements
        })
    }

    render() {
        const loginFormElement = [];
        for(let element in this.state.elements) {
            loginFormElement.push({
                id: element,
                properties: this.state.elements[element]
            });
        }

        let form = loginFormElement.map(element => {
            return <Input 
                        key={element.id}
                        type={element.properties.elementType}
                        config={element.properties.config}
                        value={element.properties.value}
                        placeholder={element.properties.placeholder}
                        containIconImage={element.properties.icon}
                        class={classes.InputElement}
                        changed={(event) => this.inputChangedHandler(event, element.id)}/>
        })
    
        return (
            <div className={classes.Frame}>
                <form>
                    {form}
                    <Button class={classes.ButtonElement}>
                        <label>{constants.LOGIN_LABEL}</label>
                        <i className='sign in icon'/>
                    </Button>
                    <Checkbox label={constants.REMEMBER_ME_LABEL}/>
                    <div className={classes.fw}>{constants.FORGOT_PASSWORD}</div>
                </form>
            </div>
        )
    }
}

export default LoginFrame;