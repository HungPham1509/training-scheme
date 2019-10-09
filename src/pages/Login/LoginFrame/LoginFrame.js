import React, {Component} from 'react';
import Input from '../../../components/UI/Input/Input';
import Checkbox from '../../../components/UI/Checkbox/Checkbox';
import Button from '../../../components/UI/Button/Button';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import logInIcon from '../../../theme/svg/login-square-arrow-button-outline.svg';
import * as actions from '../../../redux/actions/index';
import * as constants from '../../../constants/string';
import classes from './LoginFrame.css';



class LoginFrame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: {
                username: {
                    elementType: 'input',
                    config: {
                        type: 'text'
                    },
                    value: '',
                    placeholder: constants.USERNAME_LABEL,
                    icon: 'user',
                    validation: {
                        required: true,
                        noWhiteSpace: true
                    },
                    valid: false
                },
                password: {
                    elementType: 'input',
                    config: {
                        type: 'password'
                    },
                    value: '',
                    placeholder: constants.PASSWORD_LABEL,
                    icon: 'password',
                    validation: {
                        required: true,
                        noWhiteSpace: true 
                    },
                    valid: false 
                }
            },
            rememberPassword: false
        }
    }

    handleCheckBoxClicked = () => {
        this.setState(prevState => {
            return {rememberPassword: !prevState.rememberPassword}
        })
    }

    checkInputValidation = (value, rules) => {
        let isValid = true;
        if(rules.required) {
            isValid = (value.trim() !== '' && isValid)
        }
        if(rules.noWhiteSpace) {
            isValid = (!value.includes(' ') && isValid)
        }
        return isValid;
    }

    submitFormHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.elements["username"].value, this.state.elements["password"].value, this.state.rememberPassword );
    }

    inputChangedHandler = (event, element) => {
        const updatedElements = {
            ...this.state.elements,
            [element]: {
                ...this.state.elements[element],
                value: event.target.value,
                valid: this.checkInputValidation(event.target.value, this.state.elements[element].validation)
            }
        }
        this.setState({
            elements: updatedElements
        })
    }

    // resetPasswordIfFail = () => {
    //     const updatedElements = {
    //         ...this.state.elements,
    //         password: {
    //             ...this.state.elements["password"],
    //             value: ''
    //         }
    //     }
    //     if(this.props.error) {
    //         this.setState({
    //             elements: updatedElements
    //         })
    //     }
    // }


    render() {
        let authRedirect = null;
        if(this.props.isAuthenticated) {
            authRedirect = <Redirect to='/statistics'/>
        }
        let message = null;
        if(this.props.error) {
            message = <div className={classes.mess}>
                             <i className="warning circle icon" style={{color: 'white'}}/>
                             <h4>{this.props.error}</h4>
                      </div>
        }
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
                {authRedirect}
                <form onSubmit={this.submitFormHandler}>
                    {message}
                    {form}
                    <Button class={classes.ButtonElement}>
                        <label>{constants.LOGIN_LABEL}</label>
                        <img src={logInIcon} alt='icon'/>
                    </Button>
                    <Checkbox label={constants.REMEMBER_ME_LABEL} clicked={this.handleCheckBoxClicked}/>
                    <div className={classes.fw}>{constants.FORGOT_PASSWORD}</div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password, rememberPassword) => dispatch(actions.auth(username, password, rememberPassword))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFrame);
