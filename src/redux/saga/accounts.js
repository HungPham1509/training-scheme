import {put} from 'redux-saga/effects';

import * as actions from '../actions/index';
import * as items from '../../constants/Items';

export function* fetchAccountsSaga (action) {
    try {
        yield put(actions.fetchAccountsStart());
        const temp = [];
        for(let i=0;i<items.test.length;i++) {
            yield temp.push(items.test[i]);
        }
        yield put(actions.fetchAccountsSuccess(temp));
    } catch(error) {
        yield put(actions.fetchAccountsFail(error));
    }   
}

export function* searchAccountsSaga (action) {
    if(action.searchValue.trim() === '') {
        yield put(actions.fetchAccountsSuccess(action.accounts));
    }
    else {
        const tempAccounts = [];
        for(var i=0;i<action.accounts.length;i++) {
            let tempString = action.accounts[i].fullName;
            let n = yield tempString.toUpperCase().search(action.searchValue.toUpperCase());
            if(n>=0) {
                yield tempAccounts.push(action.accounts[i]);
            }
        }
        yield put(actions.searchAccountsSuccess(tempAccounts));
    }
}

export function* filterAccountsSaga (action) {
    if(action.role === 'All') {
        yield put(actions.fetchAccountsSuccess(action.accounts));
    }
    else {
        const tempAccounts = [];
        for(var i=0;i<action.accounts.length;i++) {
            let tempRole = action.accounts[i].role;
            if(tempRole === action.role) {
                yield tempAccounts.push(action.accounts[i]);
            }
        }
        yield put(actions.filterAccountsSuccess(tempAccounts));
    }
}


export function* addAccountSaga (action) {
    yield put(actions.addAccountStart());
    try {
        yield items.test.push(action.dataForm);
        yield put(actions.addAccountSuccess());
    } catch (error) {
        yield put(actions.addAccountFail(error));
    }
    
}