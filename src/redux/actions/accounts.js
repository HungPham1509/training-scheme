import * as actionTypes from './actionTypes';

export const fetchAccountsStart = () => {
    return {
        type: actionTypes.FETCH_ACCOUNTS_START
    }
}

export const fetchAccountsFail = () => {
    return {
        type: actionTypes.FETCH_ACCOUNTS_FAIL
    }
}

export const fetchAccountsSuccess = (accounts) => {
    return {
        type: actionTypes.FETCH_ACCOUNTS_SUCCESS,
        accounts: accounts
    }
}

export const fetchAccounts = () => {
    return {
        type: actionTypes.FETCH_ACCOUNTS
    }
}