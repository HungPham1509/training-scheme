import React, {Component} from 'react';
import Input from '../../../components/UI/Input/Input';
import Checkbox from '../../../components/UI/Checkbox/Checkbox';
import Button from '../../../components/UI/Button/Button';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as actions from '../../../redux/actions/index';

import * as constants from '../../../constants/string';
import classes from './LoginFrame.css';
import logo from '../../../theme/images/Logo_UET.jpg';


class LoginFrame extends Component {
    state = {
        elements: {
            username: {
                elementType: 'input',
                config: {
                    type: 'text'
                },
                value: '',
                label: constants.USERNAME_LABEL
            },
            password: {
                elementType: 'input',
                config: {
                    type: 'password'
                },
                value: '',
                label: constants.PASSWORD_LABEL
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

    submitFormHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.elements.username.value, this.state.elements.password.value)
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
                        label={element.properties.label}
                        changed={(event) => this.inputChangedHandler(event, element.id)}/>
        })

        let authRedirect = null;
        if(this.props.isLoggedIn) {
            authRedirect = <Redirect to='update-information'/>
        }

        let errorMessage = null;
        if(this.props.error) {
            errorMessage = (<div className={classes.Error}>
                                {this.props.error} 
                                <i className='warning icon'/>
                            </div>)
        }

        return (
            <div className={classes.Frame}>
                {authRedirect}
                <div className={classes.Header}>
                    <img src={logo} alt='UET Logo'></img>
                    <h4>{constants.TITLE}</h4>
                </div>
                <form onSubmit={this.submitFormHandler}>
                    <div className={classes.InputField}>
                        {form}
                    </div>
                    {errorMessage}
                    <Checkbox label={constants.REMEMBER_ME_LABEL}/>
                    <Button buttonClasses='btn btn-primary mx-auto'>{constants.LOGIN_LABEL}</Button>
                </form>
                <div className='text-right pr-4'>
                    {constants.FORGOT_PASSWORD}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.auth(username, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFrame);