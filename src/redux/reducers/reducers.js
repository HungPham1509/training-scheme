import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                error: null
            }
        case actionTypes.AUTH_FAIL: 
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export default reducer;