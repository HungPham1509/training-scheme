import * as actionTypes from '../actions/actionTypes';

const initialState = {
    accounts: [],
    updatedAccounts: [],
    filteredAccounts: [],
    isSearch: false,
    isFilter: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_ACCOUNTS_START:
            return {
                ...state,
                error: null
            }
        case actionTypes.FETCH_ACCOUNTS_SUCCESS:
            return {
                ...state,
                error: null,
                isSearch: false,
                isFilter: false,
                accounts: action.accounts
            }
        case actionTypes.FETCH_ACCOUNTS_FAIL: 
            return {
                ...state,
                error: action.error
            }
        case actionTypes.ADD_ACCOUNT_START: 
            return {
                ...state,
                error: null
            }
        case actionTypes.ADD_ACCOUNT_SUCCESS:
            return {
                ...state,
                error: null
            }
        case actionTypes.ADD_ACCOUNT_FAIL: 
            return {
                ...state,
                error: action.error
            }
        case actionTypes.SEARCH_ACCOUNTS_SUCCESS:
            return {
                ...state,
                error: null,
                isSearch: true,
                isFilter: false,
                updatedAccounts: action.updatedAccounts
            }
        case actionTypes.FILTER_ACCOUNTS_SUCCESS:
            return {
                ...state,
                error: null,
                isSearch: false,
                isFilter: true,
                filteredAccounts: action.filteredAccounts
            }
        default:
            return state;
    }
}

export default reducer;