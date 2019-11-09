import React, {Component} from 'react';
import User from '../../components/User/User';
import AddingInput from '../../components/UI/AddingInput/AddingInputs';
import Button from '../../components/UI/Button/Button';
import cancelIcon from '../../theme/svg/cancel.svg';
import saveIcon from '../../theme/svg/save.svg';
import Avatar from '../../theme/svg/avatar.svg';
import * as constants from '../../constants/string';
import * as items from '../../constants/Items';

import classes from './AddAccount.css';

class AddAccount extends Component {
    state = {
        elements: {
            name: {
                elementType: 'input',
                config: {
                    type: 'text'
                },
                value: '',
                label: constants.LECTURER_NAME,
                validation: {
                    required: true,
                    noWhiteSpace: true
                },
                touched: false,
                valid: false
            },
            
            institution: {
                elementType: 'input',
                config: {
                    type: 'text'
                },
                value: '',
                label: constants.INSTITUTION,
                validation: {
                    required: true,
                    noWhiteSpace: true
                },
                touched: false,
                valid: false
            },
            major: {
                elementType: 'input',
                config: {
                    type: 'text'
                },
                value: '',
                label: constants.MAJOR,
                validation: {
                    required: true,
                    noWhiteSpace: true
                },
                touched: false,
                valid: false
            },
            phoneNumber: {
                elementType: 'input',
                config: {
                    type: 'text'
                },
                value: '',
                label: constants.PHONE_NUMBER,
                validation: {
                    required: true,
                    noWhiteSpace: true
                },
                valid: false,
                touched: false
            },
            vnuMail: {
                elementType: 'input',
                config: {
                    type: 'text'
                },
                value: '',
                label: constants.VNU_MAIL,
                validation: {
                    required: true,
                    noWhiteSpace: true
                },
                touched: false,
                valid: false
            },
            password: {
                elementType: 'input',
                config: {
                    type: 'password'
                },
                value: '',
                label: constants.PASSWORD_LABEL,
                icon: 'password',
                validation: {
                    required: true,
                    noWhiteSpace: true 
                },
                valid: false,
                touched: false
            },
            reEnterPassword: {
                elementType: 'input',
                config: {
                    type: 'password'
                },
                value: '',
                label: constants.REENTER_PASSWORD,
                icon: 'password',
                validation: {
                    required: true,
                    noWhiteSpace: true,
                    sameAsPassword: true
                },
                valid: false,
                touched: false
            }
        }
    }

    inputChangedHandler = (event, element) => {
        const updatedElements = {
            ...this.state.elements,
            [element]: {
                ...this.state.elements[element],
                value: event.target.value,
                valid: this.checkInputValidation(event.target.value, this.state.elements[element].validation),
                touched: true
            }
        }
        this.setState({
            elements: updatedElements
        })
    }

    checkInputValidation = (value, rules) => {
        let isValid = true;
        if(rules.required) {
            isValid = (value.trim() !== '' && isValid)
        }
        if(rules.noWhiteSpace) {
            isValid = (value.indexOf(' ') !== 0 && value.lastIndexOf(' ') !== value.length-1 && isValid)
        }
        if(rules.sameAsPassword) {
            isValid = (value === this.state.elements['password'].value && isValid)
        }
        return isValid;
    }

    cancelClickedHandler = () => {
        const temp = {
            ...this.state.elements
        }
        for(let element in temp) {
            temp[element].value = '';
            temp[element].touched = false;
        }
        this.setState({
            elements: temp
        })
    }

    saveClickedHandler = () => {
        const dataForm = {
            id: 'dasdsad',
            avatar: Avatar,
            fullName: this.state.elements['name'].value,
            role: 'Giảng viên',
            institution: this.state.elements['institution'].value,
            major: this.state.elements['major'].value,
            phoneNumber: this.state.elements['phoneNumber'].value,
            vnuMail: this.state.elements['vnuMail'].value
        }
        let tempValid = true;
        const temp = {
            ...this.state.elements
        }
        for(let element in temp) {
            if(temp[element].valid === false) {
                tempValid = false;
                break;
            }
        }
        if(tempValid) {
            items.test.push(dataForm);
            this.props.history.push('/accounts');
        }
    }

    render() {
        console.log(this.props)
        const addingForm = [];
        for(let element in this.state.elements) {
            addingForm.push({
                id: element,
                properties: this.state.elements[element]
            });
        }

        let form = addingForm.map(element => {
            return <AddingInput 
                        key={element.id}
                        type={element.properties.elementType}
                        config={element.properties.config}
                        label={element.properties.label}
                        value={element.properties.value}
                        valid={element.properties.valid}
                        touched={element.properties.touched}
                        changed={(event) => this.inputChangedHandler(event, element.id)}/>
        })

        return  <div className={classes.AddAccount}>
                    <User />
                    <div className={classes.AddAccountContainer}>
                        <p>{constants.ADD_ACCOUNT}</p>
                        <form className={classes.addAccountForm}>
                            {form}
                        </form>
                        <div className={classes.Button}>
                                <Button buttonType='Cancel' clicked={this.cancelClickedHandler}>
                                    <img src={cancelIcon} alt='icon' />
                                    {constants.CANCEL}
                                </Button>
                                <Button buttonType='Save' clicked={this.saveClickedHandler}>
                                    {constants.SAVE}
                                    <img src={saveIcon} alt='icon' />
                                </Button>
                        </div>
                    </div>
                </div>
    }
}


export default AddAccount;