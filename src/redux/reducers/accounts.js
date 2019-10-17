import * as actionTypes from '../actions/actionTypes';

const initialState = {
    accounts: [],
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
                accounts: action.accounts
            }
        case actionTypes.FETCH_ACCOUNTS_FAIL: 
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export default reducer;