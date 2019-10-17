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