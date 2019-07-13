import * as actionTypes from './actionTypes';
import * as constants from '../../constants/string';

const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

const authSuccess = () => {
    return {
        type: actionTypes.AUTH_SUCCESS,
    }
}

const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            username: username,
            password: password
        }
        if(authData.username !== constants.USERNAME && authData.password !== constants.PASSWORD) {
            dispatch(authFail(constants.INCORRECT_USERNAME_PASSWORD));
        }
        else {
            dispatch(authSuccess());
        }
    }
}